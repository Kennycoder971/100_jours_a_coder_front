import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function updateUserById(id, data) {
  return await axios.put(`${API_URL}/users/${id}`, data, {
    headers: getAuthorization(),
  });
}
