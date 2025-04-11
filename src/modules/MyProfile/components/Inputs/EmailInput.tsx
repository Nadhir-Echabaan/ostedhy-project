import Input from "@mui/joy/Input";
function EmailInput() {
  return (
    <div className="input-container">
      <label htmlFor="email" className="profile-section-label disabled-label">
        Email
      </label>
      <Input
        disabled
        className="profile-section-input"
        value="nadhirchabane17@gmail.com"
      />
    </div>
  );
}

export default EmailInput;
