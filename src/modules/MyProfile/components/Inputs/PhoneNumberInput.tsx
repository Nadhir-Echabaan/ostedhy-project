import Input from "@mui/joy/Input";
function PhoneNumber({ phoneNumber }: any) {
  return (
    <div className="input-container">
      <label
        htmlFor="phone-number"
        className="profile-section-label disabled-label"
      >
        Phone Number
      </label>
      <Input disabled value={phoneNumber} className="profile-section-input" />
    </div>
  );
}
export default PhoneNumber;
