import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type StateSelectorInputProps = {
  onChange: (e: any) => void;
  value: string | null;
  name: string;
  error: string;
};

function DivisionSelect({
  onChange,
  value,
  name,
  error,
}: StateSelectorInputProps) {
  const schoolClasses = [
    "1ère année secondaire",

    "2ème année sciences",
    "2ème année éco",
    "2ème année lettres",
    "2ème année informatique",

    "3ème année sc expérimentales",
    "3ème année techniques",
    "3ème année éco",
    "3ème année lettres",
    "3ème année informatique",
    "3ème année mathématiques",

    "Bac sc expérimentales",
    "Bac techniques",
    "Bac éco",
    "Bac lettres",
    "Bac informatique",
    "Bac mathématiques",
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
        <label htmlFor="division">
          Division <span className="red-star">*</span>
        </label>
        <div className="select">
          <Select
            id="division"
            name="division"
            placeholder="Select division"
            indicator={<KeyboardArrowDown />}
            onChange={handleSelectChange}
            value={value}
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
            {schoolClasses.map((schoolClass) => (
              <Option key={schoolClass} value={schoolClass}>
                {schoolClass}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default DivisionSelect;
