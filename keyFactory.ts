import { backendQueryKeyType, localQueryKeysTypes } from "@/types/queryKeys";

export const localQueryKey = (queryKeyObject: localQueryKeysTypes) => [queryKeyObject];
export const backendQueryKey = (queryKeyObject: backendQueryKeyType) => [queryKeyObject];

export const queryKeys = {
    auth: localQueryKey({ component: "app", data: "UserData" }),
};