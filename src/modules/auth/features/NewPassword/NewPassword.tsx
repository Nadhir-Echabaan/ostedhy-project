import Input from "../../../shared/components/Input";

import OstedhyLogo from "../../assets/Group 33862.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpdatePasswordMutation } from "../../data/auth";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const navigate = useNavigate();
  const [updatePassword] = useUpdatePasswordMutation();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required("New password is required")
        .min(8, "At least use 8 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Must contain at least one letter, one number, and one special character"
        ),
      confirmNewPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      try {
        await updatePassword(values).unwrap();
        formik.resetForm();
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="new-password-feature">
      <form
        className="new-password-feature-container"
        onSubmit={formik.handleSubmit}
      >
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
