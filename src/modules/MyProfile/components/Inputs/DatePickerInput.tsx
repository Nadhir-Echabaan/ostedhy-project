function DatePickerInput() {
  return (
    <div className="input-container date-input">
      <label htmlFor="birth-date" className="profile-section-label">
              Birth date 
              </label> 
      <input
        type="date"
        className="profile-section-input date-picker-input"
        placeholder="Date of birth" />
    </div>
  )
}

export default DatePickerInput
