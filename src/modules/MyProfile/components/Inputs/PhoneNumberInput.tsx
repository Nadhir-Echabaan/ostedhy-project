import Input from "@mui/joy/Input";
function PhoneNumber() {
  return (
    <div className="input-container">
      <label
        htmlFor="phone-number"
        className="profile-section-label disabled-label"
      >
        Phone Number
      </label>
      <Input
        disabled
        value="+234 803 123 4567"
        className="profile-section-input"
      />
    </div>
  );
}

export default PhoneNumber;
