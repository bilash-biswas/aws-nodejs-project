import { CreateUserDto, UpdateUserDto, User } from "../types/user";
import api from "./api";

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await api.get("/users");
    return response.data;
  },

  async getUser(id: number): Promise<User> {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async createUser(userData: CreateUserDto): Promise<User> {
    const response = await api.post("/users", userData);
    return response.data;
  },

  async updateUser(id: number, userData: UpdateUserDto): Promise<User> {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  async deleteUser(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
