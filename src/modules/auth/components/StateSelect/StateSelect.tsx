import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type StateSelectorInputProps = {
  onChange: (e: any) => void;
  value: string | null;
  name: string;
  error: string;
};

function StateSelect({
  onChange,
  value,
  name,
  error,
}: StateSelectorInputProps) {
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

  const handleSelectChange = (event: any, newValue: string | null) => {
    const syntheticEvent = {
      target: {
        name,
        value: newValue,
      },
    };
    onChange(syntheticEvent);
  };

  return (
    <div className="input-and-error-container">
      <div className="input-container">
        <label htmlFor="state">
          State<span className="red-star"> *</span>
        </label>
        <div className="select">
          <Select
            id="state-select"
            name="state-select"
            placeholder="Select your division"
            indicator={<KeyboardArrowDown />}
            onChange={handleSelectChange}
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
    </div>
  );
}

export default StateSelect;
