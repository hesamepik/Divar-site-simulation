import { getCookie } from "../utils/cookie"
import api from "configs/api" // اگه نیاز باشه

const getnewtoken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return { error: "No refresh token" };

  try {
    const response = await api.post("/auth/check-refresh-token", { refreshToken });
    return { response };

  } catch (error) {
    return { error };
  }
};

export { getnewtoken };
