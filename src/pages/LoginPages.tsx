import { Box } from "@mui/joy";
import { LoginComponent } from "../components/loginComponents";
export default function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <LoginComponent />
    </Box>
  );
}
