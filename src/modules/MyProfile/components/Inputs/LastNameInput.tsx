import Input from "@mui/joy/Input";
type LastNameInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: string;
};
function LastNameInput({ onChange, value, name, error }: LastNameInputProps) {
  return (
    <div className="input-and-error-container">
      <div className="input-container">
        <label htmlFor="lastName" className="profile-section-label">
          Last Name
        </label>
        <Input
          id="lastName"
          name={name}
          placeholder="Enter your last name"
          className="profile-section-input"
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <div className="profile-updating-error">{error}</div>}
    </div>
  );
}

export default LastNameInput;
