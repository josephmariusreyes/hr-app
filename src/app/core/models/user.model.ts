export interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    role: 'admin' | 'noneadmin';
    contactNo: string;
  }
  