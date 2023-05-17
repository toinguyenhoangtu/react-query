export interface Student {
    id: number;
    frist_name: string;
    avatar: string;
    last_name: string;
    email: string;
    gender: string;
    country: string;
    btc_address: string;
}

export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]