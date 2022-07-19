export interface AuthResponse {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
    userId:string;
    status:string;

    
}