import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchInvestments = () => API.get("/simulacoes");
