import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { useAuth } from "../Context/AuthProvider";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("Refresh token:", refreshToken);

    try {
      const response = await Api.post(
        "/refresh",
        { refreshToken },
        { withCredentials: true }
      );
      const { accessToken } = response.data;
      console.log("New access token:", accessToken);
      setAuth((prev) => ({ ...prev, accessToken }));
      return accessToken;
    } catch (error) {
      console.error("Erro ao atualizar o token:", error);

      toast.error("Falha ao atualizar o token. Faça login novamente.");
    }
  };
  return refresh;
};

export default useRefreshToken;
