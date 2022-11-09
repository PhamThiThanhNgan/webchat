import axiosService from '../config/axiosService';

export const getAllUser = (param) => axiosService.get(
    `${process.env.REACT_APP_API_ENDPOINT}/user?search=${param}`
);

export const selectChat = (userId) => axiosService.post(
    `${process.env.REACT_APP_API_ENDPOINT}/chat`, { userId }
);

export const getAllChat = () => axiosService.get(
    `${process.env.REACT_APP_API_ENDPOINT}/chat`
);

export const sendMessage = (formData) => axiosService.post(
    `${process.env.REACT_APP_API_ENDPOINT}/message`, formData, {
        headers: {
            'content-type': 'multipart/form-data'
        }
});

export const getAllMessage = (id) => axiosService.get(
    `${process.env.REACT_APP_API_ENDPOINT}/message/${id}`
);