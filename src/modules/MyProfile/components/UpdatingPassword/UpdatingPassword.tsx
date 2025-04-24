import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import {
  useUpdatePasswordMutation,
  useVerifyCurrentPasswordMutation,
} from "../../../auth/data/auth";

function UpdatingPassword({ email }: any) {
  const [updatePassword] = useUpdatePasswordMutation();
  const [verifyCurrentPassword] = useVerifyCurrentPasswordMutation();
  const [isOpenChange, setIsOpenChange] = useState(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required("Old password is required")
        .min(8, "At least use 8 characters"),
      newPassword: Yup.string()
        .required("New password is required")
        .min(8, "At least use 8 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Must contain at least one letter, one number, and one special character"
        ),

      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      try {
        await verifyCurrentPassword({
          email,
          values,
        }).unwrap();
        await updatePassword(values).unwrap();
        formik.resetForm();
        setIsOpenChange(false);
      } catch (error) {
        formik.resetForm();
        setIsOpenChange(false);
      }
    },
  });
  function handleClickChange() {
    setIsOpenChange((isOpenChange) => !isOpenChange);
  }
  function handleClickCancel() {
    setIsOpenChange(false);
  }

  return (
    <div className="update-password-container">
      {!isOpenChange && (
        <>
          <p className="password-title">Password</p>
          <div className="password-flex-container">
            <input
              type="password"
              className="input-password"
              value="********"
              disabled
            />
            <button className="change-btn" onClick={handleClickChange}>
              change
            </button>
          </div>
        </>
      )}
      {isOpenChange && (
        <div className="password-updating-container">
          <div className="password-container ">
            <label htmlFor="oldPassword">Old Password</label>
            <div className="input__container">
              <input
                className="input"
                name="oldPassword"
                type="password"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          {formik.errors.oldPassword && (
            <div className="error password-error">
              {formik.errors.oldPassword}
            </div>
          )}
          <div className="password-container">
            <label htmlFor="NewPassword">New Password</label>
            <div className="input__container">
              <input
                className="input"
                name="newPassword"
                type="password"
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.newPassword && (
              <div className="error password-error">
                {formik.errors.newPassword}
              </div>
            )}
          </div>
          <div className="password-container">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <div className="input__container">
              <input
                className="input"
                required
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </div>
            {formik.errors.confirmPassword && (
              <div className="error password-error">
                {formik.errors.confirmPassword}
              </div>
            )}
          </div>
          <div className="buttons-container">
            <button className="cancel-button" onClick={handleClickCancel}>
              Cancel
            </button>
            <button
              className="save-button"
              onClick={() => formik.handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default UpdatingPassword;
