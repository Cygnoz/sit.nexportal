interface Address {
    street1: string;
    street2?: string;
  }
  
  interface BankDetails {
    bankName?: string;
    bankBranch?: string;
    bankAccountNo?: string;
    ifscCode?: string;
  }
  
  export interface SVData {
    userName: string;
    personalEmail?: string;
    phoneNo: string;
    age?: number |null;
    bloodGroup?: string;
    address: Address;
    adhaarNo?: string;
    panNo?: string;
    dateOfJoining?: string;
    email?: string;  
    password?: string;
    confirmPassword?:string;   
    workEmail?: string;
    workPhone?: string;
    city?: string;
    state?: string;
    country?:string
    region: string;
    salaryAmount:string;
    bankDetails?: BankDetails;
    userImage?: string;  
  }