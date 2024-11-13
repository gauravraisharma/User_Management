import api from '../utils/axiosConfig';
import { User, UserDto } from '../types/user';

export const userService = {
  getUsers: () => api.get<User[]>('/user/getUsers'),
  addUser: (userData: UserDto) => api.post<User>('/user/addUser', userData),
  updateUser: (id: number, userData: UserDto) => 
    api.put(`/user/updateUser/${id}`, userData),
  deleteUser: (id: number) => api.delete(`/user/deleteUser/${id}`),
};