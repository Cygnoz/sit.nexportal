export interface LicenserData {
    salutation?: string;
    image?: string;
    firstName: string;
    password:string;
    confirmPassword:string
    lastName?: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    country?:string;
    state?: string;
    startDate: string;
    endDate: string;
    regionId: string;
    areaId: string;
    bdaId: string;
    companyId?: string;
    companyName: string;
    licensorStatus?: string;
}