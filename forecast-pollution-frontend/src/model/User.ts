export interface User {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string; 
    city: string;
    postalCode: string;
}

export interface SignUp {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string; 
    city: string;
    postalCode: string;
}

export type CreateUser = Omit<SignUp, 'id'>;

export interface Login {
    username: string;
    password: string;
}
