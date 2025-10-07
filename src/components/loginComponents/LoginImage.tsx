import Box from "@mui/joy/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import logo from "../../assets/images/cyberllantas_logo.jpeg";

export const LoginImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <AspectRatio
        ratio="1"
        sx={{
          width: 120,
          borderRadius: "50%",
          border: "2px solid",
          borderColor: "neutral.300",
          bgcolor: "neutral.100",
          overflow: "hidden",
        }}
      >
        <img src={logo} alt="Logo" loading="lazy" />
      </AspectRatio>
    </Box>
  );
};
