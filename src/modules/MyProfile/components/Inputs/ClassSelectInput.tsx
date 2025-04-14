import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
function ClassSelectInput() {
  return (
    <div className="input-container">
      <label
        htmlFor="phone-number"
        className="profile-section-label disabled-label"
      >
        Class
      </label>
      <div className="select">
        <Select
          disabled
          placeholder="Bac sciences expérimentales"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        ></Select>
      </div>
    </div>
  );
}

export default ClassSelectInput;
