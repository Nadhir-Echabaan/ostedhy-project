function Filter() {
  return (
    <div className="filter-section">
      <p className="filter-title">Filter</p>
      <div className="selectors">
        <select className="Reviews">
          <option>Reviews</option>
          <option>---</option>
          <option>---</option>
        </select>
        <select className="Duration">
          <option>Duration</option>
          <option>---</option>
          <option>---</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
