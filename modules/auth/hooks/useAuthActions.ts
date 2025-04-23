import { useMutation } from '@tanstack/react-query';
import {
    SignInWithPasswordCredentials,
} from '@supabase/supabase-js';
import { UserCredentials } from '@/types/auth';
import { createAccount, login } from '../services';
import { useRouter } from 'expo-router';

export const useAuthActions = () => {
    const router = useRouter();

    const { mutate: signIn, isPending: isSigningIn } = useMutation({
        mutationFn: (payload: SignInWithPasswordCredentials) => login(payload),
        onError: (error) => console.log(error)
    });

    const { mutate: signUp, isPending: isSigningUp } = useMutation({
        mutationFn: (payload: UserCredentials) => createAccount(payload),
        onSuccess: () => {
            router.replace('/login');
        },
        onError: (error) => console.log(error),
    });

    return {
        signIn,
        signUp,
        isSigningIn,
        isSigningUp,
    };
};
