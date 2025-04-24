export interface UserCredentials {
    id: string,
    email: string,
    name: string,
    password: string
}

export interface LoginCredentials {
    email: string,
    password: string
}

export type LoginFieldName = keyof LoginCredentials;
export type RegisterFieldName = keyof UserCredentials

export interface LoginField {
    id: number;
    name: LoginFieldName;
    placeholder: string;
    secureTextEntry: boolean;
};

export interface RegisterField {
    id: number;
    name: RegisterFieldName;
    placeholder: string;
    secureTextEntry: boolean;
}