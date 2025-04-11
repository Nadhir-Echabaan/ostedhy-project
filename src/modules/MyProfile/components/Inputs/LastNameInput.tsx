import Input from "@mui/joy/Input";
function LastNameInput() {
  return (
    <div className="input-container">
      <label htmlFor="last-name" className="profile-section-label">
        Last Name
      </label>
      <Input
        color="neutral"
        variant="outlined"
        placeholder="Enter your last name"
        className="profile-section-input"
      />
    </div>
  );
}

export default LastNameInput;
