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
    age?: string;
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
    regionId?: string;
    area?: string;
    areaId?: string;
    commission?: number;
    bankDetails?: BankDetails;
    image?: string;  
  }