export interface User {
  id: number;
  email: string;
  name: string;
  age: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  email: string;
  name: string;
  age?: number;
}

export interface UpdateUserDto {
  email?: string;
  name?: string;
  age?: number;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  error?: string;
}
