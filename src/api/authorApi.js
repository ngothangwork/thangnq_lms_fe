import axios from 'axios';

const API_BASE = 'http://localhost:9999/thangnq65-lms/authors';


export const fetchAllAuthors = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
}

export const fetchAuthorById = async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
}

export const deleteAuthorById = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
}

export const updateAuthorById = async (id, author) => {
    const response = await axios.put(`${API_BASE}/${id}`, author);
    return response.data;
}

export const createAuthor = async (author) => {
    const response = await axios.post(`${API_BASE}`, author);
    return response.data;
}

export const fetchAuthorsByName = async (name) => {
    const response = await axios.get(`${API_BASE}/search`, {
        params: { name }
    });
    return response.data;
};




