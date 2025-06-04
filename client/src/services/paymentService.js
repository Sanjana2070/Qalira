import api from './api';

export const createCheckoutSession = async (classId, amount) => {
  const response = await api.post('/payments/checkout', { classId, amount });
  return response.data;
};

export const confirmPayment = async (paymentInfo) => {
  const response = await api.post('/payments/verify', paymentInfo);
  return response.data;
};
