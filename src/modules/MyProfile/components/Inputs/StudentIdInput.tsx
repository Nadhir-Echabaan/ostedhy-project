import Input from "@mui/joy/Input";
function StudentIdInput() {
  return (
    <div className="input-container">
      <label htmlFor="email" className="profile-section-label disabled-label">
        Student Id
      </label>
      <Input
        disabled
        className="profile-section-input underlined-id"
        value="1425"
      />
    </div>
  );
}

export default StudentIdInput;
