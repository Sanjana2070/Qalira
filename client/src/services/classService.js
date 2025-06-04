import api from './api';

export const getAllClasses = async () => {
  const response = await api.get('/classes');
  return response.data;
};

export const getClassById = async (id) => {
  const response = await api.get(`/classes/${id}`);
  return response.data;
};
