import { RegisterField } from "@/types/auth";

export const fields: RegisterField[] = [
    {
        id: 1,
        name: 'name',
        placeholder: 'Name',
        secureTextEntry: false,
    },
    {
        id: 2,
        name: 'email',
        placeholder: 'Email',
        secureTextEntry: false,
    },
    {
        id: 3,
        name: 'password',
        placeholder: 'Password',
        secureTextEntry: true,
    },
]