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

function UpdatingProfileForm() {
  return (
    <div className="updating-personal-infos">
      <div className="form">
        <FormRow>
          <FirstNameInput />
          <LastNameInput />
        </FormRow>
        <FormRow>
          <EmailInput />
          <PhoneNumber />
        </FormRow>
        <FormRow>
          <StudentIdInput />
          <DatePickerInput />
        </FormRow>
        <FormRow>
          <StateSelectorInput />
          <ClassSelectInput />
        </FormRow>
        <CodePostalInput />
        <button className="save-changes-btn">Save Changes</button>
      </div>
    </div>
  );
}
export default UpdatingProfileForm;
