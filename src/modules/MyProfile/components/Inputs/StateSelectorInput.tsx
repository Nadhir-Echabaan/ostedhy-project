import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
function StateSelectorInput() {
  const tunisianGovernorates = [
    "Tunis",
    "Ariana",
    "Ben Arous",
    "Manouba",
    "Nabeul",
    "Zaghouan",
    "Bizerte",
    "Béja",
    "Jendouba",
    "Kef",
    "Siliana",
    "Sousse",
    "Monastir",
    "Mahdia",
    "Kairouan",
    "Kasserine",
    "Sidi Bouzid",
    "Sfax",
    "Gabès",
    "Medenine",
    "Tataouine",
    "Gafsa",
    "Tozeur",
    "Kebili",
  ];
  return (
    <div className="input-container">
      <label htmlFor="phone-number" className="profile-section-label">
        State
      </label>
      <div className="select">



      <Select
        className="select-state"
        placeholder="Select your state"
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
      >
        {tunisianGovernorates.map((governorate) => (
          <Option key={governorate} value={governorate}>
            {governorate}
          </Option>
        ))}
      </Select>
      </div>
    </div>
  );
}

export default StateSelectorInput;
