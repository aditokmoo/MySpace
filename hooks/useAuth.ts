import { queryKeys } from "@/keyFactory";
import { supabase } from "@/lib/supabase"
import { useQuery } from "@tanstack/react-query"
import { router } from "expo-router";

export const useAuth = () => {
    const { data: session, isLoading } = useQuery({
        queryKey: queryKeys.auth,
        gcTime: Infinity,
        refetchInterval: 55 * 60 * 1000,
        queryFn: async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) return null;
            return { data: data.user }
        }
    })

    const logout = async () => {
        await supabase.auth.signOut();
        router.replace("/(auth)/login");
    };

    return { session, isLoading, logout };
}