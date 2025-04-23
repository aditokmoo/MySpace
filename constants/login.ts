import { LoginField } from "@/types/auth";

export const fields: LoginField[] = [
    {
        id: 1,
        name: 'identifier',
        placeholder: 'Email or Name',
        secureTextEntry: false,
    },
    {
        id: 2,
        name: 'password',
        placeholder: 'Password',
        secureTextEntry: true,
    },
];