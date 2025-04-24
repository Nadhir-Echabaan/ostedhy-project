import { Select } from "antd";
function DurationSelector() {
  return (
    <div>
      <Select
        className="Reviews"
        placeholder="Reviews"
        style={{ width: 180, height: 40 }}
        options={[
          {
            value: "",
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

export default DurationSelector;
