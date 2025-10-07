import { useForm } from "react-hook-form";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import type { LoginFormData } from "../../types/auth/login";
import { useLogin } from "@/hooks/login/useLogin";

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { handleLogin, loading, error, user } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    handleLogin(data);
  };

  return (
    <>
      <Typography
        level="h3"
        component="h1"
        sx={{ marginBottom: 1, textAlign: "center" }}
      >
        Iniciar Sesión
      </Typography>

      <Typography
        level="body-sm"
        sx={{ marginBottom: 3, textAlign: "center", color: "neutral.600" }}
      >
        Ingresa tus credenciales para acceder
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input
            type="email"
            placeholder="tu@email.com"
            {...register("email", { required: "El email es obligatorio" })}
          />
          {errors.email && (
            <Typography level="body-xs" sx={{ color: "danger.500" }}>
              {errors.email.message}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ mb: 3 }}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
          />
          {errors.password && (
            <Typography level="body-xs" sx={{ color: "danger.500" }}>
              {errors.password.message}
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          fullWidth
          size="lg"
          disabled={loading}
          sx={{ marginBottom: 2 }}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm" /> Iniciando
              sesión...
            </>
          ) : (
            "Iniciar Sesión"
          )}
        </Button>

        {error && (
          <Typography level="body-sm" sx={{ color: "danger.500", mb: 2 }}>
            {error}
          </Typography>
        )}

        {user && (
          <Typography level="body-sm" sx={{ color: "success.600", mb: 2 }}>
            ¡Bienvenido!
          </Typography>
        )}

        <Typography
          level="body-sm"
          sx={{ textAlign: "center", color: "neutral.600" }}
        >
          ¿Olvidaste tu contraseña?{" "}
          <Typography
            component="a"
            href="#"
            sx={{
              color: "primary.500",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Recuperar
          </Typography>
        </Typography>
      </form>
    </>
  );
};
