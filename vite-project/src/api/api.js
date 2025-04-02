import axios from "axios";

const API_URL = "https://example.com/register";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Помилка надсилання форми:", error);
    throw error;
  }
};
