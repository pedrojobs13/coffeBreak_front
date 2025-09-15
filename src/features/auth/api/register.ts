import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  city: string;
  phone: string;
  street: string;

};

type RegisterResponse = {
  id: string;
  name: string;
  email: string;
};

export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  if (!apiUrl) {
    throw new Error("Missing API key!");
  }
  const apiRegister = `${apiUrl}/users`
  console.log("chegou")
  const {data} = await axios.post<RegisterResponse>(
    apiRegister,
    payload
  );
  return data;
}
