import DurationSelector from "../DurationSelector/DurationSelector";
import ReviewsSelector from "../ReviewsSelector/ReviewsSelector";

function Filter() {
  return (
    <div className="filter-section">
      <p className="filter-title">Filter</p>
      <div className="selectors">
       <ReviewsSelector />
       <DurationSelector />
      </div>
    </div>
  );
}

export default Filter;
