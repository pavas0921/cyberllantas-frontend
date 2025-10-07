import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { loginUser } from "@/features/login/loginSlice";
import type { LoginFormData } from "@/types/auth/login";
import type { RootState, AppDispatch } from "@/store"; // ✅ Import correcto con 'type'

export const useLogin = () => {
  // 🔹 useDispatch tipado con AppDispatch para tener autocompletado y tipado en el dispatch
  const dispatch = useDispatch<AppDispatch>();

  // 🔹 Extraemos del store el estado actual del slice de login
  const { user, loading, error } = useSelector(
    (state: RootState) => state.login
  );

  // 🔹 useCallback evita que la función se recree en cada render (optimización)
  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        const resultAction = await dispatch(loginUser(data));

        // 🔹 match() permite saber si la acción fue fulfilled o rejected
        if (loginUser.fulfilled.match(resultAction)) {
          console.log("✅ Login exitoso:", resultAction.payload);
        } else if (loginUser.rejected.match(resultAction)) {
          console.error("❌ Error al iniciar sesión:", resultAction.payload);
        }
      } catch (error) {
        console.error("❌ Error inesperado al iniciar sesión:", error);
      }
    },
    [dispatch] // 👈 Solo se vuelve a crear si cambia 'dispatch'
  );

  // 🔹 Retornamos lo necesario para usar el hook desde un componente
  return {
    user,
    loading,
    error,
    handleLogin,
  };
};
