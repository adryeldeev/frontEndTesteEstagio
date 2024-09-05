export function getLocalStorage() {
  try {
    const data = localStorage.getItem("user");
    return data
      ? JSON.parse(data)
      : { user: null, accessToken: null, refreshToken: null };
  } catch (error) {
    console.error("Erro ao obter do localStorage", error);
    return { user: null, accessToken: null, refreshToken: null };
  }
}

export function setLocalStorage(data) {
  try {
    localStorage.setItem("user", JSON.stringify(data));
    console.log("Dados armazenados com sucesso:", data);
  } catch (error) {
    console.error("Erro ao salvar no localStorage", error);
  }
}
