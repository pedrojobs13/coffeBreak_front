import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

type LoginPayload = {
  email: string;
  password: string;
};

interface LoginResponse {
  email: string;
  token: string;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  if (!apiUrl) {
    throw new Error("Missing API key!");
  }
  const apiLogin = `${apiUrl}/auth`
  const {data} = await axios.post(
    apiLogin,
    payload
  );
  return data;
}
