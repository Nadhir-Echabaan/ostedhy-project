// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseButton from "../../assets/fi_x-circle.svg"; 

function BankTransfer() {
  const formik = useFormik({
    initialValues: {
      code: "",
      amount: "",
      description: "",
    },
    validationSchema: Yup.object({
      code: Yup.number()
        .typeError("Code must be a number")
        .required("Code is required"),
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      description: Yup.string()
        .min(5, "Description must be at least 5 characters")
        .required("Description is required"),
    }),
    onSubmit: (values) => console.log(values),
  });
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
              {formik.touched.code && formik.errors.code ? (
                <div className="error">{formik.errors.code}</div>
              ) : null}
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
              {formik.touched.amount && formik.errors.amount ? (
                <div className="error">{formik.errors.amount}</div>
              ) : null}
            </div>

            <div className="field-container">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Add Your Description"
                type="text"
                name="description"
                id="amount"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="error">{formik.errors.description}</div>
              ) : null}
            </div>
            <button>Add Points</button>
          </form>
        </div>
        <img className="close-button" src={CloseButton} />
      </div>
    </>
  );
}

export default BankTransfer;
