interface Address {
    street1?: string;
    street2?: string;
  }
  
  interface BankDetails {
    bankName?: string;
    bankBranch?: string;
    bankAccountNo?: string;
    ifscCode?: string;
  }
  
  export interface BDAData {
    fullName: string;
    email?: string;
    phone: string;
    age?: number | null;
    bloodGroup?: string;
    address?: Address;
    adhaarNo?: string;
    panNo?: string;
    dateOfJoining?: string;
    loginEmail: string;  
    password: string;
    confirmPassword:string;   
    workEmail?: string;
    workPhone?: string;
    city?: string;
    state?: string;
    region?: string;
    area?: string;
    commission?:string;
    bankDetails?: BankDetails;
    image?: string;  
  }