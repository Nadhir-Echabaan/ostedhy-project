type DatePickerInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: string;
};

function DatePickerInput({
  onChange,
  value,
  name,
  error,
}: DatePickerInputProps) {
  return (
    <div className="input-and-error-container">
      <div className="input-container date-input">
        <label htmlFor={name} className="profile-section-label">
          Birth date
        </label>
        <input
          type="date"
          id={name}
          name={name}
          className="profile-section-input date-picker-input"
          onChange={onChange}
          value={value}
          placeholder="Date of birth"
        />
      </div>
      {error && <div className="profile-updating-error">{error}</div>}
    </div>
  );
}

export default DatePickerInput;
