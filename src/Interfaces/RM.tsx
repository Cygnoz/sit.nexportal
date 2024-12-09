
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
 
export interface RMData {
    userImage?: string;
    userName: string;
    personalEmail?: string;
    phoneNo: string;
    age?: number | null;
    bloodGroup?: string;
    address?: Address;
    city?: string;
    country?: string
    state?: string;
    adhaarNo?: string;
    panNo?: string;
    dateOfJoining?: string; // Use a string for ISO date format
    email: string;
    password?: string;
    confirmPassword?:string;
    workEmail?: string;
    workPhone?: string;
    region?: string;
    commission?: string; // Use number for percentage values
    bankDetails?: BankDetails;
}
