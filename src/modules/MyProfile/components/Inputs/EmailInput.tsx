import Input from "@mui/joy/Input";
function EmailInput({email}:any) {
  return (
    <div className="input-container">
      <label htmlFor="email" className="profile-section-label disabled-label">
        Email
      </label>
      <Input
        disabled
        className="profile-section-input"
        value={email}
      />
    </div>
  );
}

export default EmailInput;
