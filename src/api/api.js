import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchSimulations = () => API.get("/simulacoes");
export const fetchIndexing = () => API.get("/indicadores");
