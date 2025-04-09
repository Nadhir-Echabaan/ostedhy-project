import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 7,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(226, 244, 254, 1)",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "rgba(48, 193, 217, 1)",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(226, 244, 254, 1)",
    }),
  },
}));

export default function ProgressBar() {
  return (
    <div className="progressbar">
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={90} />
      </Stack>
      <span>70%</span>
    </div>
  );
}
