export interface UserData {
    userImage?: any; // Base64 string
    userName: string;
    email: string;
    phoneNo?: string; // Make phoneNo optional
    password?: string;
    confirmPassword?: string;
    role: string;
  }