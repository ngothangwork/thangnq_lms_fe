import axios from 'axios';

const API_BASE = 'http://localhost:9999/thangnq65-lms/borrowings';

export const fetchAllBorrowings = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
}

export const fetchBorrowingById = async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
}

export const deleteBorrowingById = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
}

export const updateBorrowingById = async (id, borrowing) => {
    const response = await axios.put(`${API_BASE}/${id}`, borrowing);
    return response.data;
}

export const createBorrowing = async (borrowing) => {
    const response = await axios.post(`${API_BASE}`, borrowing);
    return response.data;
}
