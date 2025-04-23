import { supabase } from "@/lib/supabase"
import { SignInWithPasswordCredentials } from "@supabase/supabase-js";

export const createAccount = async (payload: { email: string, password: string, name: string }) => {
    const { error, data } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
            data: {
                name: payload.name,
            }
        }
    });
    if (error) throw error;
    return data;
}

export const login = async (payload: SignInWithPasswordCredentials) => {
    const { error, data } = await supabase.auth.signInWithPassword(payload);
    if (error) throw error;
    return data;
}