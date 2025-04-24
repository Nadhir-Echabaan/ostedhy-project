import { useFormik } from "formik";
import * as Yup from "yup";

import OstedhyLogo from "../../assets/Group 33862.svg";

import Input from "../../../shared/components/Input";
import { useForgetPasswordMutation } from "../../data/auth";
import toast from "react-hot-toast";
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
      await forgetPassword(values);
      toast.success("Please check your email");
      resetForm();
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
        <button className="recover-button">recover</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
