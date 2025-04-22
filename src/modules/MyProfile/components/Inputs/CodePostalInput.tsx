type PostalCodeInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  name: string;
  error: string;
};

function CodePostalInput({
  onChange,
  value,
  name,
  error,
}: PostalCodeInputProps) {
  return (
    <div className="input-and-error-container">
      <div className="code-postal">
        <div className="input-container">
          <label htmlFor="postalCode" className="profile-section-label">
            Postal code
          </label>
          <input
            type="number"
            id="postalCode"
            className="postal-code"
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      </div>
      {error && <div className="profile-updating-error postal-code-error">{error}</div>}
    </div>
  );
}

export default CodePostalInput;
