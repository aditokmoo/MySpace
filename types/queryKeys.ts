export enum QueryKeysType {
    Local = 1,
    Server = 2,
}

export enum UpdateType {
    Static = 1,
    WebSocket = 2,
}

export interface localQueryKeysTypes {
    component: string;
    data: string;
}

export interface backendQueryKeyType {
    updateType: UpdateType;
    endpoint: string;
    baseUrl: string;
    params?: Record<string, unknown>;
}