/* Defines the product entity */
export interface IUser {
    id: number;
    Name: string;
    email: string;
    preferences?: string[];
    password: string;
    skills: number;
    expertise: string;
    ratings?: number;
    experience?: string;
}
