import EmailIcon from "../../assets/icons/EmailIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import c from '../../assets/image/card-c.png'
import cygnoz from '../../assets/image/cygnoz.com.png'
import profile from '../../assets/image/AvatarImg.png'
import busniessIcon from '../../assets/image/businesscardLogo.png'
import previewBack from '../../assets/image/preview-card-back.png'
// import polygon from '../../assets/image/polygon.png'
// import template2 from '../../assets/image/preview-template2.png'
import template2Back from '../../assets/image/template2-back.png'
// import previewFront from '../../assets/image/preview-card-front.png'
import idCardFront from '../../assets/image/idCard.png'
import template1Front from '../../assets/image/template1-back.png'

interface LayoutProps {
    toggleState?: any; 
    role?:any;
    staffData?:any;
}

export const Layout1Front: React.FC<LayoutProps> = ({ toggleState, role, staffData }) => {
    console.log("role",role);
    console.log("staffData",staffData);    
    
    return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden flex flex-col justify-between">
        <img className="w-40 h-[72px] absolute right-3" src={c} alt="" />
        <div className="flex gap-1 p-3">
            {toggleState?.["profilePhoto"] && (
                <div>
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                </div>
            )}
            {toggleState?.["name"] && (
                <div className="border-r">
                    <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs mx-2">{staffData?.userName ?staffData?.userName: 'John Doe'}</p>
                </div>
            )}
            {toggleState?.["designation"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">{role ? role:'Regional Manager'}</p>
                </div>
            )}
        </div>
        <div className="flex">
            {(toggleState?.["employeeId"] || toggleState?.["region"]) && (
                <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-e-full">
                    <div className="flex justify-between px-2 gap-8 me-2">
                        {toggleState?.["employeeId"] && (
                            <div>
                                <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
                                <p className="text-[#FFFFFF] font-medium text-xs">{staffData?.employeeId ? staffData?.employeeId:"RM-210215"}</p>
                            </div>
                        )}
                        {toggleState?.["region"] && (
                            <div className="me-2">
                                <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
                                <p className="text-[#FFFFFF] font-medium text-xs">{staffData?.region?.regionName ? staffData?.region?.regionName :'Ernakulam'}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>

        {(toggleState?.["email"] || toggleState?.["phoneNo"] || toggleState?.["address"]) && (
            <div className="px-3">
                <p className="text-[#FFFFFF] font-light text-[10px] my-2 text-start">Personal Address & Mail</p>
                <div className="grid grid-cols-2 gap-1">
                    {toggleState?.["email"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                <div className="p-1">
                                    <EmailIcon size={11} color="#FFFFFF" />
                                </div>
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.email ? staffData?.email: 'john.doe@example.com'}</p>
                        </div>
                    )}

                    {toggleState?.["phoneNo"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <PhoneIcon size={11} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.phoneNo ? staffData?.phoneNo : '+919633564547'}</p>
                        </div>
                    )}

                    {toggleState?.["address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">
                               {staffData?.address.street1 ? staffData?.address.street1:'2972 Westheimer Rd. Santa Ana, Illinois 85486'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )}


        <div className="flex justify-between p-2 relative">
            {toggleState?.["companyLogo"] && (
                <img src={cygnoz} className="w-24 h-5" alt="" />
            )}
            {toggleState?.["logoTitle"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
            )}
        </div>
        <div>
            <img className="w-32 h-32 -mt-32 rounded-b-lg ml-auto" src={busniessIcon} alt="" />
        </div>
    </div>

    //     return  <div
    //     className="bg-cover bg-center bg-no-repeat rounded-lg relative"
    //     style={{ backgroundImage: `url(${previewFront})`, minHeight: '200px' }}
    // >
    //     <div className="absolute inset-0 rounded-lg"></div>

    //     <div className="relative p-3">
    //         <div className="flex gap-1">
    //             {toggleState?.["profilePhoto"] && (
    //                 <div>
    //                     <img className="w-8 h-8 rounded-full" src={profile} alt="Profile" />
    //                 </div>
    //             )}
    //             {toggleState?.["Name"] && (
    //                 <div className="border-r">
    //                     <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
    //                     <p className="text-[#FFFFFF] font-semibold text-xs mx-2">John Doe</p>
    //                 </div>
    //             )}
    //             {toggleState?.["Designation"] && (
    //                 <div>
    //                     <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
    //                     <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
    //                 </div>
    //             )}
    //         </div>

    //         <div className="flex gap-8 mt-5">
    //             {toggleState?.["Employee ID"] && (
    //                 <div>
    //                     <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
    //                     <p className="text-[#FFFFFF] font-medium text-xs">RM-210215</p>
    //                 </div>
    //             )}
    //             {toggleState?.["Region"] && (
    //                 <div>
    //                     <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
    //                     <p className="text-[#FFFFFF] font-medium text-xs">Ernakulam</p>
    //                 </div>
    //             )}
    //         </div>

    //         <div className="mt-4">
    //             <p className="text-[#FFFFFF] font-light text-[10px] my-1 text-start">Personal Address & Mail</p>
    //             <div className="grid grid-cols-2">
    //             {toggleState?.["Email"] && (
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
    //                         <EmailIcon size={11} color="#FFFFFF" />
    //                     </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px]">john.doe@example.com</p>

    //                 </div>
    //                  )}
    //                 {toggleState?.["phoneNo"] && (
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
    //                         <PhoneIcon size={11} color="#FFFFFF" />
    //                     </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px]">+919633564547</p>
    //                 </div>
    //                 )}
    //                 {toggleState?.["Address"] && (
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
    //                         <LocationIcon size={12} color="#FFFFFF" />
    //                     </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px] text-start">
    //                             2972 Westheimer Rd. Santa Ana, Illinois 85486
    //                         </p>
    //                 </div>
    //                 )}

    //             </div>
    //         </div>

    //         <div className="flex justify-between mt-2">
    //             {toggleState?.["companyLogo"] && (
    //                 <img src={cygnoz} className="w-24 h-5" alt="companyLogo" />
    //             )}
    //             {toggleState?.["logoTitle"] && (
    //                 <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
    //                     Engineering your business for the world
    //                 </p>
    //             )}
    //         </div>
    //     </div>
    // </div>

}

export const Layout1Back: React.FC<LayoutProps> = ({ toggleState }) => {
    return <div
        className="mt-4 bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${previewBack})`, minHeight: '200px' }} // Ensure consistent minimum height
    >
        {/* Overlay for consistent background */}
        <div className="absolute inset-0 rounded-lg"></div>

        {/* Content Section */}
        <div className="relative flex gap-1 p-3">
            <div>
                {toggleState?.["companyLogo"] && (
                    <img className="w-32 h-8" src={cygnoz} alt="companyLogo" />
                )}
                {toggleState?.["logoTitle"] && (
                    <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
                        Engineering your business for the world
                    </p>
                )}
            </div>
        </div>
        {toggleState?.["companyInfo"] && (
            <div className="relative px-3 py-7">
                <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
                <div className="grid grid-cols-2 gap-1">
                    {/* Email */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <EmailIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            john.doe@example.com
                        </p>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <PhoneIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            +919633564547
                        </p>
                    </div>
                </div>
                 {/* Location */}
                 <div className="flex gap-2 mt-2">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                            <LocationIcon size={12} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                        Mythripuram Road, Near AIR, NGO Quarters, <br />
                        Thrikkakara PO, Kochi, Kerala, India - 682021
                        </p>
                    </div>
            </div>
        )}
    </div>
}

export const Layout2Front: React.FC<LayoutProps> = ({ toggleState , role, staffData }) => {
    // return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">

    //     <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
    //     <div className="flex gap-4 p-3">
    //         {toggleState?.["profilePhoto"] && (
    //             <div>
    //                 <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
    //             </div>
    //         )}
    //         {toggleState?.["Name"] && (
    //             <div>
    //                 <p className="text-[#FFFFFF] font-light text-[10px]">Name</p>
    //                 <p className="text-[#FFFFFF] font-semibold text-xs">John Doe</p>
    //             </div>
    //         )}
    //         {toggleState?.["Designation"] && (
    //             <div>
    //                 <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
    //                 <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
    //             </div>
    //         )}

    //     </div>
    //     {(toggleState?.["Employee ID"] || toggleState?.["Region"]) && (
    //         <div className="flex p-2 justify-between">
    //             {toggleState?.["Employee ID"] && (
    //                 <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
    //                     <div className="flex gap-3 px-1">
    //                         <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
    //                         <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
    //                     </div>
    //                 </div>
    //             )}
    //             {toggleState?.["Region"] && (
    //                 <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-xl">
    //                     <div className="flex gap-3 px-1">
    //                         <p className="text-[#FFFFFF] font-light text-xs">Region</p>
    //                         <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     )}

    //     {(toggleState?.["Email"] || toggleState?.["phoneNo"] || toggleState?.["Address"]) && (
    //         <div className="px-3">
    //             <p className="text-[#FFFFFF] font-light text-[10px] my-1 text-start">Personal Address & Mail</p>
    //             <div className="grid grid-cols-2 gap-1">
    //                 {toggleState?.["Email"] && (
    //                     <div className="flex gap-2">
    //                         <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
    //                             <div className="p-1">
    //                                 <EmailIcon size={11} color="#FFFFFF" />
    //                             </div>
    //                         </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px]">john.doe@example.com</p>
    //                     </div>
    //                 )}
    //                 {toggleState?.["phoneNo"] && (
    //                     <div className="flex gap-2">
    //                         <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
    //                             <PhoneIcon size={11} color="#FFFFFF" />
    //                         </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px]">+919633564547</p>
    //                     </div>
    //                 )}
    //                 {toggleState?.["Address"] && (
    //                     <div className="flex gap-2">
    //                         <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
    //                             <LocationIcon size={12} color="#FFFFFF" />
    //                         </div>
    //                         <p className="text-[#FFFFFF] font-light text-[9px] text-start">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
    //                     </div>
    //                 )}
    //             </div>
    //         </div>
    //     )}


    //     <div className="flex justify-between p-3">
    //         {toggleState?.["companyLogo"] && (
    //             <img src={cygnoz} className="w-24 h-5" alt="" />
    //         )}
    //         {toggleState?.["logoTitle"] && (
    //             <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
    //         )}
    //     </div>
    //     <div className="relative">
    //         <img className="w-48 h-48 -bottom-20 -right-14 absolute" src={polygon} alt="" />
    //     </div>

    // </div>    
   
    return <div className="bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${template1Front})`, minHeight: '200px' }}>
        <div className="flex gap-4 p-3">
            {toggleState?.["profilePhoto"] && (
                <div>
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                </div>
            )}
            {toggleState?.["name"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Name</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">{staffData?.userName ?staffData?.userName: 'John Doe'}</p>
                </div>
            )}
            {toggleState?.["designation"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">{role ? role:'Regional Manager'}</p>
                </div>
            )}

        </div>
        {(toggleState?.["employeeId"] || toggleState?.["region"]) && (
            <div className="flex p-2 justify-between">
                {toggleState?.["employeeId"] && (
                    <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                        <div className="flex gap-3 px-1">
                            <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                            <p className="text-[#FFFFFF] font-semibold text-xs">{staffData?.employeeId ? staffData?.employeeId:"RM-210215"}</p>
                        </div>
                    </div>
                )}
                {toggleState?.["region"] && (
                    <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-xl">
                        <div className="flex gap-3 px-1">
                            <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                            <p className="text-[#FFFFFF] font-semibold text-xs">{staffData?.region?.regionName ? staffData?.region?.regionName :'Ernakulam'}</p>
                        </div>
                    </div>
                )}
            </div>
        )}
        {(toggleState?.["email"] || toggleState?.["phoneNo"] || toggleState?.["address"]) && (
            <div className="px-3">
                <p className="text-[#FFFFFF] font-light text-[10px] my-1 text-start">Personal Address & Mail</p>
                <div className="grid grid-cols-2 gap-1">
                    {toggleState?.["email"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                <div className="p-1">
                                    <EmailIcon size={11} color="#FFFFFF" />
                                </div>
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.email ? staffData?.email: 'john.doe@example.com'}</p>
                        </div>
                    )}
                    {toggleState?.["phoneNo"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <PhoneIcon size={11} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.phoneNo ? staffData?.phoneNo : '+919633564547'}</p>
                        </div>
                    )}
                    {toggleState?.["address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">{staffData?.address.street1 ? staffData?.address.street1:'2972 Westheimer Rd. Santa Ana, Illinois 85486'}</p>
                        </div>
                    )}
                </div>
            </div>
        )}
        <div className="flex justify-between p-3">
            {toggleState?.["companyLogo"] && (
                <img src={cygnoz} className="w-24 h-5" alt="" />
            )}
            {toggleState?.["logoTitle"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
    </div>
}

export const Layout2Back: React.FC<LayoutProps> = ({ toggleState }) => {
    // return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
    //     <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
    //     <div className="p-3">
    //         {toggleState?.["companyLogo"] && (
    //             <img src={cygnoz} className="w-32 h-8" alt="" />
    //         )}
    //         {toggleState?.["logoTitle"] && (
    //             <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
    //         )}
    //     </div>
    //     {toggleState?.["companyInfo"] && (
    //         <div className="relative px-3 py-3">
    //             <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
    //             <div className="grid grid-cols-2 gap-1">
    //                 {/* Email */}
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
    //                         <EmailIcon size={11} color="#FFFFFF" />
    //                     </div>
    //                     <p className="text-[#FFFFFF] font-light text-[9px]">
    //                         john.doe@example.com
    //                     </p>
    //                 </div>
    //                 {/* Phone */}
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
    //                         <PhoneIcon size={11} color="#FFFFFF" />
    //                     </div>
    //                     <p className="text-[#FFFFFF] font-light text-[9px]">
    //                         +919633564547
    //                     </p>
    //                 </div>
    //                 {/* Location */}
    //                 <div className="flex gap-2 items-center">
    //                     <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
    //                         <LocationIcon size={12} color="#FFFFFF" />
    //                     </div>
    //                     <p className="text-[#FFFFFF] font-light text-[9px]">
    //                         2972 Westheimer Rd. Santa Ana, Illinois 85486
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     )}
    //     <div className="relative">
    //         <img className="w-48 h-48 -bottom-[100px] -right-14 absolute" src={polygon} alt="" />
    //     </div>

    // </div>
    return <div className="mt-4 bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${template1Front})`, minHeight: '200px' }}>
        <div className="p-3">
            {toggleState?.["companyLogo"] && (
                <img src={cygnoz} className="w-32 h-8" alt="" />
            )}
            {toggleState?.["logoTitle"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
        {toggleState?.["companyInfo"] && (
            <div className="relative px-3 py-3">
                <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
                <div className="grid grid-cols-2 gap-1">
                    {/* Email */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <EmailIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            john.doe@example.com
                        </p>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <PhoneIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            +919633564547
                        </p>
                    </div>
                </div>
                {/* Location */}
                <div className="flex gap-2 mt-2">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                        <LocationIcon size={12} color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-light text-[9px]">
                        Mythripuram Road, Near AIR, NGO Quarters, <br /> Thrikkakara PO, Kochi, Kerala, India - 682021
                    </p>
                </div>

            </div>
        )}
    </div>
}

export const Layout3Front: React.FC<LayoutProps> = ({ toggleState, role, staffData  }) => {
    return <div className="bg-cover bg-center bg-no-repeat rounded-lg relative flex flex-col justify-between"
        style={{ backgroundImage: `url(${template2Back})`, minHeight: '210px' }}>
            <div>
            <div className="flex gap-2 p-3 justify-between">
            <div className="flex gap-1">
                {toggleState?.["profilePhoto"] && (
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                )}
                <div>
                    {toggleState?.["name"] && (
                        <p className="text-[#FFFFFF] font-semibold text-[10px]">{staffData?.userName ?staffData?.userName: 'John Doe'}</p>
                    )}
                    {toggleState?.["designation"] && (
                        <p className="text-[#FFFFFF] font-semibold text-[10px]">{role ? role:'Regional Manager'}</p>
                    )}
                </div>
            </div>
            {(toggleState?.["employeeId"] !== false && toggleState?.["employeeId"] !== undefined) && (
                <div
                    className={`w-fit h-7 p-1 rounded-2xl ${toggleState?.["employeeId"] ? "bg-[#2795FB]" : ""
                        }`}
                >
                    <div className="flex px-1 gap-2">
                        <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                        <p className="text-[#FFFFFF] font-semibold text-xs">{staffData?.employeeId ? staffData?.employeeId:"RM-210215"}</p>
                    </div>
                </div>
            )}

        </div>
        {toggleState?.["region"] && (
            <div className="flex px-3 gap-4">
                <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                <p className="text-[#FFFFFF] font-semibold text-xs">{staffData?.region?.regionName ? staffData?.region?.regionName :'Ernakulam'}</p>
            </div>
        )}
            </div>
        <div className="px-3 grid grid-cols-2 z-20 ">

            <div className="gap-1">
                {toggleState?.["email"] && (
                    <div className="flex gap-2">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                            <div className="p-1">
                                <EmailIcon size={11} color="#FFFFFF" />
                            </div>
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.email ? staffData?.email: 'john.doe@example.com'}</p>
                    </div>
                )}
                {toggleState?.["phoneNo"] && (
                    <div className="flex gap-2 mt-1">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                            <PhoneIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">{staffData?.phoneNo ? staffData?.phoneNo : '+919633564547'}</p>
                    </div>
                )}
                <div className="flex py-1 gap-5">
                    {toggleState?.["address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">{staffData?.address?.street1 ? staffData?.address?.street1:'2972 Westheimer Rd. Santa Ana, Illinois 85486'} </p>
                        </div>
                    )}

                </div>
            </div>
            <div className="flex flex-col justify-end mb-2">
                <div>
                    {toggleState?.["companyLogo"] && (
                        <img src={cygnoz} className="w-24 h-5 ml-auto" alt="" />
                    )}
                    {toggleState?.["logoTitle"] && (
                        <p className="text-[#FFFFFF] font-light text-[8px] w-fit ml-auto">Engineering your business for the world</p>
                    )}
                </div>
            </div>
        </div>

    </div>
}

export const Layout3Back: React.FC<LayoutProps> = ({ toggleState }) => {
    return <div className="mt-4 bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${template2Back})`, minHeight: '200px' }}>
        <div className="p-3">
            {toggleState?.["companyLogo"] && (
                <img src={cygnoz} className="w-32 h-8" alt="" />
            )}
            {toggleState?.["logoTitle"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
        {toggleState?.["companyInfo"] && (
            <div className="relative px-3 py-6">
                <p className="text-[#FFFFFF] font-light text-[10px] my-2">Company Info</p>
                <div className="grid grid-cols-2 gap-1">
                    {/* Email */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <EmailIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            john.doe@example.com
                        </p>
                    </div>
                    {/* Phone */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                            <PhoneIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]">
                            +919633564547
                        </p>
                    </div>
                </div>
                {/* Location */}
                <div className="flex gap-2 mt-2">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                        <LocationIcon size={12} color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-light text-[9px]">
                        Mythripuram Road, Near AIR, NGO Quarters, <br />
                        Thrikkakara PO, Kochi, Kerala, India - 682021
                    </p>
                </div>
            </div>
        )}
    </div>
}

export const IdCardLayout: React.FC<LayoutProps> = () => {
    return <div className="bg-cover bg-center bg-no-repeat w-[300px] h-fit rounded-lg relative px-3  justify-center"
        style={{ backgroundImage: `url(${idCardFront})`, minHeight: '100px' }}>
        {/* Profile Section */}
        <div className="px-4 py-5">
            <div>
                <img className="w-16 h-16 rounded-full mt-5" src={profile} alt="Profile" />
            </div>
            <div>

                <p className="text-[#FFFFFF] font-extrabold text-md mt-4 ">John Doe</p>
            </div>
            <div >

                <p className="text-[#FFFFFF] font-medium text-sm mt-2">Regional Manager</p>
            </div>
            <div>
                <p className="text-[#FFFFFF] font-semibold text-sm mt-2">RM-0122</p>
            </div>
        </div>
        {/* Contact Info */}
        <div className="px-2 py-4">
            <div className="grid grid-cols-1 gap-2">
                {/* Email */}
                <div className="flex gap-2 items-center my-1">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                        <EmailIcon size={11} color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-light text-xs">john.doe@example.com</p>
                </div>
                {/* Phone */}
                <div className="flex gap-2 items-center mb-1  ">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                        <PhoneIcon size={11} color="#FFFFFF" />
                    </div>
                    <p className="text-[#FFFFFF] font-light text-xs">+919633564547</p>
                </div>
                {/* Address */}
                <div className="flex gap-2 items-start mb-1">
                    {/* Icon Container */}
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                        <LocationIcon size={12} color="#FFFFFF" />
                    </div>

                    {/* Text Content */}
                    <p className="text-[#FFFFFF] font-light text-xs leading-tight">
                        Mythripuram Road, Near AIR, NGO <br />Quarters,
                        Thrikkakara PO, Kochi, Kerala, <br />India - 682021
                    </p>
                </div>

            </div>
        </div>
        {/* Footer Section */}
        <div className="flex justify-center">
            <div className="text-center py-4">
                <div className="flex justify-center">
                    <img src={cygnoz} className="w-32 h-8" alt="companyLogo" />
                </div>
                <p className="text-white font-normal text-[10px] py-1">
                    Engineering your business for <br /> the world
                </p>
            </div>
        </div>

    </div>
}