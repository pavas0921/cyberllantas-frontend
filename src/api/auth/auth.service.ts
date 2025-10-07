import type { LoginFormData, LoginResponseData } from "../../types/auth/login";
const API_URL = import.meta.env.VITE_API_URL;

export async function login(data: LoginFormData): Promise<LoginResponseData> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = (await response.json()) as LoginResponseData;
  return result;
}
