import axios from "axios";

const API_URL = "http://localhost:3001";

export const orderData = async (lastOrderId) => {
  try {
    return await axios.get(`${API_URL}/api/orders/${lastOrderId}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPizzas = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/pizza`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/api/orders`, orderData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
