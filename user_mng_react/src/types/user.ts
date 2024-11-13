export interface User {
    id: number;
    username: string;
    email: string;
}

export interface UserDto {
    username: string;
    email: string;
    password: string;
}

export interface LoginDto {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}