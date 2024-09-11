export interface User {
    id: number;
    userName: string;
    role: string;
}

export interface ChatMessage {
    id?: number;
    from: User;
    context: string;
    timestamp?: Date;
}