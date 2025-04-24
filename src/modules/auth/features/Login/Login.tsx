// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useUserLoginMutation } from "../../data/auth";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../../shared/components/Input";
import { useNavigate } from "react-router-dom";
import OstedhyLogo from "../../assets/Group 33862.svg";
import { useAppDispatch } from "../../../shared/store";
import { initialise } from "../../data/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userLogin] = useUserLoginMutation();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short!"),
    }),
    onSubmit: async (values) => {
      const response = await userLogin({
        email: values.email,
        password: values.password,
      });

      dispatch(
        initialise({ isAuthenticated: true, user: response?.data?.user })
      );

      navigate("/dashboard");
    },
  });

  return (
    <div className="login_feature">
      <form className="login_feature_container" onSubmit={formik.handleSubmit}>
        <div className="logo-and-title">
          <img src={OstedhyLogo} />
          <p>Login</p>
        </div>
        <div className="login_feature_container_inputs">
          <Input
            name="email"
            formik={formik}
            variant="secondary"
            placeholder="Enter your email or phone number"
            label="Email"
            required={true}
          />

          <Input
            name="password"
            formik={formik}
            variant="secondary"
            placeholder="Enter your password"
            label="Password"
            type="password"
            required={true}
          />
          <span
            className="forget-password"
            onClick={() => navigate("/forget_password")}
          >
            Forget password?
          </span>
        </div>

        <button
          type="submit"
          className="login_feature_container_btn"
          disabled={submitting}
        >
          Login
        </button>
        <p className="navigate-sign-up">
          Don't have an account ?{" "}
          <span onClick={() => navigate("/sign_up")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
