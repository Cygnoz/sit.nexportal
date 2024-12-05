

// export interface RMData {
//     image?: string;
//     fullName: string;
//     email?: string;
//     phone: string;
//     age?: number;
//     bloodGroup?: string;
//     city?: string;
//     state?: string;
//     adhaarNo?: string;
//     panNo?: string;
//     dateOfJoining?: string; // Use a string for ISO date format
//     loginEmail: string;
//     password: string;
//     confirmPassword:string;
//     workEmail?: string;
//     workPhone?: string;
//     region?: string;
//     commission?: number; // Use number for percentage values
//     bankName?: string;
//     bankBranch?: string;
//     bankAccountNo?: string;
//     ifscCode?: string;
//     street1?: string;
//     street2?: string;
// }

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
    image?: string;
    fullName: string;
    email?: string;
    phone: string;
    age?: number;
    bloodGroup?: string;
    address?: Address;
    city?: string;
    state?: string;
    adhaarNo?: string;
    panNo?: string;
    dateOfJoining?: string; // Use a string for ISO date format
    loginEmail: string;
    password: string;
    confirmPassword:string;
    workEmail?: string;
    workPhone?: string;
    region?: string;
    commission?: number; // Use number for percentage values
    bankDetails?: BankDetails;
}
