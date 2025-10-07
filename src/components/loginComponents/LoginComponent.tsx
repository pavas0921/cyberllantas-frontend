import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import { LoginImage } from "./LoginImage";
import { LoginForm } from "./LoginForm";

export const LoginComponent = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #081031 0%, #764ba2 100%)",
          padding: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            maxWidth: 400,
            width: "100%",
            padding: 4,
            boxShadow: "lg",
          }}
        >
          {/* Espacio para el logo */}
          <LoginImage  />

          {/* Formulario de inicio de sesión */}
          <LoginForm />
        </Card>
      </Box>
    </CssVarsProvider>
  );
};
