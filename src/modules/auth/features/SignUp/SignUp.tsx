// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../shared/components/Input";
import OstedhyLogo from "../../assets/Group 33862.svg";
import DivisionSelect from "../../components/DivisionSelect/DivisionSelect";
import StateSelect from "../../components/StateSelect/StateSelect";
import { useUserSignUpMutation } from "../../data/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [userSignUp] = useUserSignUpMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      division: "",
      state: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .matches(
          /^[A-Z][a-zA-Z]*(\s[a-zA-Z]+)*$/,
          "First name must start with an uppercase letter and contain only letters and spaces"
        )
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .matches(
          /^[A-Z][a-zA-Z]*(\s[a-zA-Z]+)*$/,
          "Last name must start with an uppercase letter and contain only letters and spaces"
        )
        .required("Last name is required"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "At least use 8 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Must contain at least one letter, one number, and one special character"
        ),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{8}$/, "Phone number must be exactly 8 digits"),
    }),
    onSubmit: async (values) => {
      try {
        await userSignUp(values).unwrap();
        formik.resetForm();
      } catch (error) {
        console.error("Failed to sign up");
      }
    },
  });

  return (
    <div className="sign-up-feature">
      <form onSubmit={formik.handleSubmit}>
        <div className="logo-and-title">
          <img src={OstedhyLogo} className="ostedhy-logo" />
          <p>Sign Up</p>
        </div>
        <div className="inputs-container">
          <div className="inputs-flex-container">
            <Input
              className="sign-up-input"
              formik={formik}
              name="firstName"
              variant="secondary"
              placeholder="enter your first name"
              label="First name"
              required={true}
            />
            <Input
              formik={formik}
              name="lastName"
              variant="secondary"
              placeholder="enter your last name"
              label="Last name"
              required={true}
            />
          </div>
          <div className="inputs-flex-container">
            <Input
              formik={formik}
              name="email"
              variant="secondary"
              placeholder="enter your email"
              label="Email"
              required={true}
            />
            <Input
              formik={formik}
              type="password"
              name="password"
              variant="secondary"
              placeholder="enter your password"
              label="Password"
              required={true}
              className="password"
            />
          </div>

          <div className="phone-number">
            <Input
              formik={formik}
              type="number"
              name="phoneNumber"
              variant="secondary"
              placeholder="Enter your phone number"
              label="Phone number"
              required={true}
            />
          </div>
          <div className="inputs-flex-container">
            <DivisionSelect
              onChange={formik.handleChange}
              value={formik.values.division}
              name="division"
              error={formik.errors.division}
            />
            <StateSelect
              onChange={formik.handleChange}
              value={formik.values.state}
              name="state"
              error={formik.errors.state}
            />
          </div>

          <button className="sign-up-button">Sign Up</button>
        </div>
        <p className="navigate-to-login">
          Already have an account?
          <span onClick={() => navigate("/login")}>Log in</span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
