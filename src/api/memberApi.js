import axios from 'axios';

const API_BASE = 'http://localhost:9999/thangnq65-lms/members';

export const fetchAllMembers = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
}

export const fetchMemberById = async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
}

export const deleteMemberById = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
}

export const updateMemberById = async (id, member) => {
    const response = await axios.put(`${API_BASE}/${id}`, member);
    return response.data;
}

export const createMember = async (member) => {
    const response = await axios.post(API_BASE, member);
    return response.data;
}
