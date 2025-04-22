import { useFormik } from "formik";
import * as Yup from "yup";

import OstedhyLogo from "../../assets/Group 33862.svg";

import Input from "../../../shared/components/Input";
import { useForgetPasswordMutation } from "../../data/auth";
function ForgetPassword() {
  const [forgetPassword] = useForgetPasswordMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required").email("Invalid email"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const result = await forgetPassword(values);
      if (result.error) {
        console.error("Error:", result.error);
      } else {
        console.log("Reset email sent!");
        resetForm();
      }
    },
  });

  return (
    <div className="forget-password-feature">
      <form
        className="forget-password-container"
        onSubmit={formik.handleSubmit}
      >
        <div className="logo-and-title">
          <img src={OstedhyLogo} />
          <p>Forget Password</p>
        </div>
        <p className="account-recovery">
          Enter your email address so you can recover your account
        </p>
        <div className="forget-password-feature-container-inputs">
          <Input
            name="email"
            formik={formik}
            variant="secondary"
            placeholder="Enter your email"
            label="Email"
            type="email"
            required={true}
          />
        </div>
        <button
          className="recover-button"
          onClick={() => formik.handleSubmit()}
        >
          recover
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
