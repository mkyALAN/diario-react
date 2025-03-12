import axios from 'axios';

const API_URL = 'http://10.40.1.203:8000/';

export const getObras = async () => {
  try {
    const response = await axios.get(`${API_URL}obras/listar/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar obras:", error);
    return [];
  }
};

export const adicionarObra = async (novaObra) => {
  try {
    const response = await axios.put(`${API_URL}obras/adicionar/`, novaObra);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar obra:", error);
  }
};

export const atualizarObra = async (id, dadosAtualizados) => {
  try {
    const response = await axios.post(`${API_URL}obras/atualizar/${id}/`, dadosAtualizados);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar obra:", error);
  }
};

export const removerObra = async (id) => {
  try {
    await axios.delete(`${API_URL}obras/remover/${id}/`);
    return true;
  } catch (error) {
    console.error("Erro ao remover obra:", error);
    return false;
  }
};