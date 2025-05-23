// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseButton from "../../assets/fi_x-circle.svg";
import { useTransferPointsMutation } from "../../data/wallet";
import { useGetUserPointsQuery } from "../../../Sessions/data/sessions";

function PointTransfer({ setIsOpenTransferPointModal }) {
  const { data: amount, isLoading } = useGetUserPointsQuery({});
  if (isLoading || !amount) {
    return <p>Loading...</p>;
  }

  let userPoints = amount.points;
  const [transferPoints] = useTransferPointsMutation();
  const formik = useFormik({
    initialValues: {
      recipient_id: null,
      amount_in_dinar: null,
    },
    validationSchema: Yup.object({
      recipient_id: Yup.number()
        .typeError("Recipient Id must be a number")
        .required("Recipient Id is required"),
      amount_in_dinar: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be greater than 0")
        .required("Amount is required"),
    }),
    onSubmit: async (values) => {
      if (userPoints - values.amount_in_dinar >= 0) {
        console.log(userPoints - values.amount_in_dinar);

        try {
          await transferPoints({
            values,
            substractedPoints: userPoints - values.amount_in_dinar,
          }).unwrap();
          formik.resetForm();
          setIsOpenTransferPointModal(false);
        } catch (error) {
          console.error("Failed to transfer points:", error);
        }
      } else {
        setIsOpenTransferPointModal(false);
      }
    },
  });

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="position-relative-for-modal">
        <div className="point-transfer-modal">
          <div className="recharge-top">
            <p>Transfer Point</p>
          </div>
          <div className="title">
            <p>Add your beneficiary ID and amount</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="field-container">
              <label htmlFor="recipient_id">Recipient</label>
              <input
                placeholder="Add Your Recipient"
                type="number"
                name="recipient_id"
                id="recipient_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.recipient_id}
              />
              {formik.touched.recipient_id && formik.errors.recipient_id ? (
                <div className="error">{formik.errors.recipient_id}</div>
              ) : null}
            </div>
            <div className="field-container">
              <label htmlFor="amount_in_dinar">Amount</label>
              <input
                placeholder="Add Your Amount"
                type="number"
                name="amount_in_dinar"
                id="amount_in_dinar"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount_in_dinar}
              />
              {formik.touched.amount_in_dinar &&
              formik.errors.amount_in_dinar ? (
                <div className="error">{formik.errors.amount_in_dinar}</div>
              ) : null}
            </div>
            <button type="submit">Transfer Points</button>
          </form>
        </div>
        <img
          className="close-button"
          src={CloseButton}
          alt="Close transfer modal"
          onClick={() => setIsOpenTransferPointModal(false)}
        />
      </div>
    </>
  );
}

export default PointTransfer;