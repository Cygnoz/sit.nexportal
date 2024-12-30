
export interface regionAreaData {
    areaCode: string;
    areaName: string;
    userName:string
}

interface regionRMData {
    userName: string;
    email: string;
    phoneNo: string;
    userImage:string;
}

export interface regionLicenserData{
    customerId:string
    firstName:string
    trialStatus:string
    leadSource:string
    totalRevenue:string
    _id:string
}

export interface RegionView {
    areas: regionAreaData[]; // Represents an array of AreaData objects
    licensers:regionLicenserData[];
    regionManager: regionRMData;
    totalAreaManagers: number;
    totalBdas: number; // Adjusted to follow consistent camelCase naming
    totalLeadThisMonth: number; // Adjusted for proper naming convention
    totalLicensors: number;
}
