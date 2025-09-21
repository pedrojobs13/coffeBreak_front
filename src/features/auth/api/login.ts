import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

type LoginPayload = {
  email: string;
  password: string;
};


export async function login(payload: LoginPayload): Promise<void> {
  if (!apiUrl) {
    throw new Error("Missing API key!");
  }
  const apiRegister = `${apiUrl}/auth`
  const {data} = await axios.post(
    apiRegister,
    payload
  );
  return data;
}
