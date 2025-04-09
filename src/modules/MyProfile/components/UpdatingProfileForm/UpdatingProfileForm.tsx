import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function UpdatingProfileForm() {
  return (
    <>
      <div className="update-fields-left">
        <Box sx={{ width: 500, maxWidth: "100%" }} className="text-input-field">
          <TextField
            fullWidth
            label=""
            id="fullWidth"
            placeholder="Enter your first name"
          />
        </Box>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="" id="fullWidth" disabled value="NadhirChabane17@gmail.com" placeholder="Enter your email" />
        </Box>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="" id="fullWidth" />
        </Box>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="" id="fullWidth" />
        </Box>
      </div>
    </>
  );
}

export default UpdatingProfileForm;
