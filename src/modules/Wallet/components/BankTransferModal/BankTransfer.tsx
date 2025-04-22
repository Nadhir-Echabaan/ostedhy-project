import { useFormik } from "formik";
import * as Yup from "yup";
import CloseButton from "../../assets/fi_x-circle.svg";
import { useAddPointsMutation } from "../../data/wallet";
import { useGetUserPointsQuery } from "../../../Sessions/data/sessions";

function BankTransfer({
  setIsOpenBankTransferModal,
}: {
  setIsOpenBankTransferModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [addPoints] = useAddPointsMutation();
  const { data: amount, isLoading } = useGetUserPointsQuery({});
  

  let userPoints = amount.points;

  const formik = useFormik({
    initialValues: {
      code: null,
      amount: null,
      description: "",
    },
    validationSchema: Yup.object({
      code: Yup.number()
        .typeError("Code must be a number")
        .required("Code is required"),
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be at least 1")
        .required("Amount is required"),
      description: Yup.string()
        .min(5, "Description must be at least 5 characters")
        .required("Description is required"),
    }),
    onSubmit: async (values) => {
      try {
        await addPoints({
          values,
          addedPoints: values.amount + userPoints,
        }).unwrap();
        formik.resetForm();
        setIsOpenBankTransferModal(false);
      } catch (error) {
        console.error("Failed to add points:", error);
      }
    },
  });
  if (isLoading) return;
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="position-relative-for-modal">
        <div className="bank-transfer-modal">
          <div className="recharge-top">
            <p>Bank Transfer</p>
          </div>
          <div className="title">
            <p>Add your beneficiary ID and amount</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="field-container">
              <label htmlFor="code">Code</label>
              <input
                placeholder="Add Your Reference"
                type="number"
                name="code"
                id="code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
              />
              {formik.touched.code && formik.errors.code && (
                <div className="error">{formik.errors.code}</div>
              )}
            </div>

            <div className="field-container">
              <label htmlFor="amount">Amount</label>
              <input
                placeholder="Add Your Amount"
                type="number"
                name="amount"
                id="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
              {formik.touched.amount && formik.errors.amount && (
                <div className="error">{formik.errors.amount}</div>
              )}
            </div>

            <div className="field-container">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Add Your Description"
                type="text"
                name="description"
                id="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description && (
                <div className="error">{formik.errors.description}</div>
              )}
            </div>

            <button type="submit">Add Points</button>
          </form>
        </div>
        <img
          className="close-button"
          src={CloseButton}
          alt="Close"
          onClick={() => setIsOpenBankTransferModal(false)}
        />
      </div>
    </>
  );
}

export default BankTransfer;
