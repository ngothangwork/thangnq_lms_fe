import axios from 'axios';

const API_BASE = 'http://localhost:9999/thangnq65-lms/books';

export const fetchAllBooks = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
}

export const fetchBookById = async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
}

export const deleteBookById = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
}

export const updateBookById = async (id, book) => {
    const response = await axios.put(`${API_BASE}/${id}`, book);
    return response.data;
}

export const createBook = async (book) => {
    const response = await axios.post(`${API_BASE}`, book);
    return response.data;
}