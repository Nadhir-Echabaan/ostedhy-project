import Input from "@mui/joy/Input";
function FirstNameInput() {
  return (
    <div className="input-container">
      <label htmlFor="first-name" className="profile-section-label">
        First Name
      </label>
      <Input
        placeholder="Enter your first name"
        className="profile-section-input"
      />
    </div>
  );
}

export default FirstNameInput;
