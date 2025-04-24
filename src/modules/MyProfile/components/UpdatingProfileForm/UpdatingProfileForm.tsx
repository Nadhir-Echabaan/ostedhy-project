import FirstNameInput from "../Inputs/FirstNameInput";
import LastNameInput from "../Inputs/LastNameInput";
import EmailInput from "../Inputs/EmailInput";
import PhoneNumber from "../Inputs/PhoneNumberInput";
import StudentIdInput from "../Inputs/StudentIdInput";
import DatePickerInput from "../Inputs/DatePickerInput";
import StateSelectorInput from "../Inputs/StateSelectorInput";
import CodePostalInput from "../Inputs/CodePostalInput";
import ClassSelectInput from "../Inputs/ClassSelectInput";
import FormRow from "../FormRow/FormRow";

import { useUpdateUserMutation } from "../../../auth/data/auth";

import { useFormik } from "formik";
import * as Yup from "yup";

function UpdatingProfileForm({ userData }: any) {
  const [updateUser] = useUpdateUserMutation();

  const formik = useFormik({
    initialValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      birthDate: userData?.birthDate || "",
      state: userData?.state || "",
      postalCode: userData?.postalCode || null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
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
      birthDate: Yup.date()
        .max(new Date(2015, 11, 31), "Birth date must be before 2016")
        .required("Birth date is required"),
      state: Yup.string().required("State is required"),
      postalCode: Yup.number()
        .typeError("Postal code must be a number")
        .integer("Postal code must be an integer")
        .min(1000, "Postal code should be at least 4 digits")
        .max(9999, "Postal code should be at most 4 digits")
        .required("Postal code is required"),
    }),
    onSubmit: async () => {
      const response = await updateUser(formik.values);
      if (response.error) {
        console.error("Error updating user:", response.error);
      } else {
        console.log("User updated successfully:", response.data);
      }
    },
  });

  return (
    <div className="updating-personal-infos">
      <div className="form">
        <FormRow>
          <FirstNameInput
            onChange={formik.handleChange}
            value={formik.values.firstName}
            name="firstName"
            error={formik?.errors?.firstName}
          />
          <LastNameInput
            onChange={formik.handleChange}
            value={formik.values.lastName}
            name="lastName"
            error={formik?.errors?.lastName}
          />
        </FormRow>
        <FormRow>
          <EmailInput email={userData?.email} />
          <PhoneNumber phoneNumber={userData?.phoneNumber} />
        </FormRow>
        <FormRow>
          <StudentIdInput />
          <DatePickerInput
            onChange={formik.handleChange}
            value={formik.values.birthDate}
            name="birthDate"
            error={formik?.errors?.birthDate}
          />
        </FormRow>
        <FormRow>
          <StateSelectorInput
            onChange={formik.handleChange}
            value={formik.values.state}
            name="state"
            error={formik?.errors?.state}
          />
          <ClassSelectInput division={userData?.division} />
        </FormRow>
        <CodePostalInput
          onChange={formik.handleChange}
          value={formik.values.postalCode}
          name="postalCode"
          error={formik?.errors?.postalCode}
        />
        <button
          type="submit"
          className="save-changes-btn"
          onClick={() => formik.handleSubmit()}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
export default UpdatingProfileForm;
