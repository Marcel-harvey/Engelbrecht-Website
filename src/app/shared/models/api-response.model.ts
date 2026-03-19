export interface ApiResponse<T> {
    succeeded: boolean;
    message: string;
    errors: string[];
    data: T;
}

export interface BlankApiResponse {
    succeeded: boolean;
    message: string;
    errors: string[];
}