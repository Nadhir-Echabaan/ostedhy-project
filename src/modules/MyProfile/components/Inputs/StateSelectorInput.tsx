import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type StateSelectorInputProps = {
  onChange: (e: any) => void;
  value: string | null;
  name: string;
  error: string;
};

function StateSelectorInput({
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
        <label htmlFor={name} className="profile-section-label">
          State
        </label>
        <div className="select">
          <Select
            id={name}
            name={name}
            placeholder="Select your state"
            value={value || ""}
            onChange={handleSelectChange}
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
      {error && (
        <div className="profile-updating-error state-error">{error}</div>
      )}
    </div>
  );
}

export default StateSelectorInput;
