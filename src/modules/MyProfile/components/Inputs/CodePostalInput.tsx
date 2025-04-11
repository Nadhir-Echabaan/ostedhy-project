function CodePostalInput() {
  return (
    <div className="code-postal">
      <div className="input-container">
        <label htmlFor="postal code" className="profile-section-label">
          Postal code
        </label>
        <input type="number" className="postal-code" />
      </div>
    </div>
  )
}

export default CodePostalInput; 