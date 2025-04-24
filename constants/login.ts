import { LoginField } from "@/types/auth";

export const fields: LoginField[] = [
    {
        id: 1,
        name: 'email',
        placeholder: 'Email',
        secureTextEntry: false,
    },
    {
        id: 2,
        name: 'password',
        placeholder: 'Password',
        secureTextEntry: true,
    },
];