import Input from "../../../shared/components/Input";

import OstedhyLogo from "../../assets/Group 33862.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
function NewPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required").email("Invalid email"),
    }),
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="new-password-feature">
      <form className="new-password-feature-container">
        <div className="logo-and-title">
          <img src={OstedhyLogo} />
          <p>New Password</p>
        </div>
        <div className="new-password-feature-container-inputs">
          <Input
            name="newPassword"
            formik={formik}
            variant="secondary"
            placeholder="Enter your new password"
            type="password"
            label="New password"
          />
          <Input
            name="confirmNewPassword"
            formik={formik}
            variant="secondary"
            placeholder="Confirm new password"
            type="password"
            label="Confirm new password"
          />
        </div>
        <button className="confirm-button">Confirm</button>
      </form>
    </div>
  );
}

export default NewPassword;
