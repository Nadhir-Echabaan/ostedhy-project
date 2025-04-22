import Input from "@mui/joy/Input";

type FirstNameInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: string;
};

function FirstNameInput({ onChange, value, name, error }: FirstNameInputProps) {
  return (
    <div className="input-and-error-container">
      <div className="input-container">
        <label htmlFor="firstName" className="profile-section-label">
          First Name
        </label>
        <Input
          id="firstName"
          name={name}
          placeholder="Enter your first name"
          className="profile-section-input"
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <div className="profile-updating-error">{error}</div>}
    </div>
  );
}

export default FirstNameInput;
