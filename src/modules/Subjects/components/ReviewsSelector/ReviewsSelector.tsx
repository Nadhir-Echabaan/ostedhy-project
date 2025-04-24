import { Select } from "antd";
function ReviewsSelector() {
  return (
    <div>
      <Select
        className="Reviews"
        placeholder="Reviews"
        style={{ width: 180, height: 40 }}
        options={[
          {
            value: "Ascending order",
            label: "Ascending order",
          },
          {
            value: "Descending order",
            label: "Descending order",
          },
        ]}
      />
    </div>
  );
}

export default ReviewsSelector;
