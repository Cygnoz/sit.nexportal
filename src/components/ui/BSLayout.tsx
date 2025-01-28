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
}

export const Layout1Front: React.FC<LayoutProps> = ({ toggleState }) => {
    return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
        <img className="w-40 h-[72px] absolute right-3" src={c} alt="" />
        <div className="flex gap-1 p-3">
            {toggleState?.["Profile Photo"] && (
                <div>
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                </div>
            )}
            {toggleState?.["Name"] && (
                <div className="border-r">
                    <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs mx-2">John Doe</p>
                </div>
            )}
            {toggleState?.["Designation"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                </div>
            )}
        </div>
        <div className="flex">
            {(toggleState?.["Employee ID"] || toggleState?.["Region"]) && (
                <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-e-full">
                    <div className="flex justify-between px-2 gap-8 me-2">
                        {toggleState?.["Employee ID"] && (
                            <div>
                                <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
                                <p className="text-[#FFFFFF] font-medium text-xs">RM-210215</p>
                            </div>
                        )}
                        {toggleState?.["Region"] && (
                            <div className="me-2">
                                <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
                                <p className="text-[#FFFFFF] font-medium text-xs">Ernakulam</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>

        {(toggleState?.["Email"] || toggleState?.["phoneNo"] || toggleState?.["Address"]) && (
            <div className="px-3">
                <p className="text-[#FFFFFF] font-light text-[10px] my-2 text-start">Personal Address & Mail</p>
                <div className="grid grid-cols-2 gap-1">
                    {toggleState?.["Email"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                <div className="p-1">
                                    <EmailIcon size={11} color="#FFFFFF" />
                                </div>
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>
                        </div>
                    )}

                    {toggleState?.["phoneNo"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <PhoneIcon size={11} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>
                        </div>
                    )}

                    {toggleState?.["Address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">
                                2972 Westheimer Rd. Santa Ana, Illinois 85486
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )}


        <div className="flex justify-between p-2 relative">
            {toggleState?.["Company Logo"] && (
                <img src={cygnoz} className="w-24 h-5" alt="" />
            )}
            {toggleState?.["Logo Title"] && (
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
    //             {toggleState?.["Profile Photo"] && (
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
    //             {toggleState?.["Company Logo"] && (
    //                 <img src={cygnoz} className="w-24 h-5" alt="Company Logo" />
    //             )}
    //             {toggleState?.["Logo Title"] && (
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
        className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${previewBack})`, minHeight: '200px' }} // Ensure consistent minimum height
    >
        {/* Overlay for consistent background */}
        <div className="absolute inset-0 rounded-lg"></div>

        {/* Content Section */}
        <div className="relative flex gap-1 p-3">
            <div>
                {toggleState?.["Company Logo"] && (
                    <img className="w-32 h-8" src={cygnoz} alt="Company Logo" />
                )}
                {toggleState?.["Logo Title"] && (
                    <p className="text-[#FFFFFF] font-normal text-[10px] py-1">
                        Engineering your business for the world
                    </p>
                )}
            </div>
        </div>
        {toggleState?.["CompanyInfo"] && (
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

export const Layout2Front: React.FC<LayoutProps> = ({ toggleState }) => {
    // return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
    //     <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
    //     <div className="flex gap-4 p-3">
    //         {toggleState?.["Profile Photo"] && (
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
    //         {toggleState?.["Company Logo"] && (
    //             <img src={cygnoz} className="w-24 h-5" alt="" />
    //         )}
    //         {toggleState?.["Logo Title"] && (
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
            {toggleState?.["Profile Photo"] && (
                <div>
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                </div>
            )}
            {toggleState?.["Name"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Name</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">John Doe</p>
                </div>
            )}
            {toggleState?.["Designation"] && (
                <div>
                    <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                    <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                </div>
            )}

        </div>
        {(toggleState?.["Employee ID"] || toggleState?.["Region"]) && (
            <div className="flex p-2 justify-between">
                {toggleState?.["Employee ID"] && (
                    <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                        <div className="flex gap-3 px-1">
                            <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                            <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                        </div>
                    </div>
                )}
                {toggleState?.["Region"] && (
                    <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-xl">
                        <div className="flex gap-3 px-1">
                            <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                            <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                        </div>
                    </div>
                )}
            </div>
        )}
        {(toggleState?.["Email"] || toggleState?.["phoneNo"] || toggleState?.["Address"]) && (
            <div className="px-3">
                <p className="text-[#FFFFFF] font-light text-[10px] my-1 text-start">Personal Address & Mail</p>
                <div className="grid grid-cols-2 gap-1">
                    {toggleState?.["Email"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                <div className="p-1">
                                    <EmailIcon size={11} color="#FFFFFF" />
                                </div>
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">john.doe@example.com</p>
                        </div>
                    )}
                    {toggleState?.["phoneNo"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <PhoneIcon size={11} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px]">+919633564547</p>
                        </div>
                    )}
                    {toggleState?.["Address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                        </div>
                    )}
                </div>
            </div>
        )}
        <div className="flex justify-between p-3">
            {toggleState?.["Company Logo"] && (
                <img src={cygnoz} className="w-24 h-5" alt="" />
            )}
            {toggleState?.["Logo Title"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
    </div>
}

export const Layout2Back: React.FC<LayoutProps> = ({ toggleState }) => {
    // return <div className="bg-[#184D81] min-h-[200px] relative rounded-lg w-full h-fit overflow-hidden">
    //     <img className="w-40 h-[72px] absolute -right-8" src={c} alt="" />
    //     <div className="p-3">
    //         {toggleState?.["Company Logo"] && (
    //             <img src={cygnoz} className="w-32 h-8" alt="" />
    //         )}
    //         {toggleState?.["Logo Title"] && (
    //             <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
    //         )}
    //     </div>
    //     {toggleState?.["CompanyInfo"] && (
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
    return <div className="bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${template1Front})`, minHeight: '200px' }}>
        <div className="p-3">
            {toggleState?.["Company Logo"] && (
                <img src={cygnoz} className="w-32 h-8" alt="" />
            )}
            {toggleState?.["Logo Title"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
        {toggleState?.["CompanyInfo"] && (
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

export const Layout3Front: React.FC<LayoutProps> = ({ toggleState }) => {
    return <div className="my-2 bg-cover bg-center bg-no-repeat rounded-lg relative flex flex-col justify-between"
        style={{ backgroundImage: `url(${template2Back})`, minHeight: '210px' }}>
            <div>
            <div className="flex gap-2 p-3 justify-between">
            <div className="flex gap-1">
                {toggleState?.["Profile Photo"] && (
                    <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                )}
                <div>
                    {toggleState?.["Name"] && (
                        <p className="text-[#FFFFFF] font-semibold text-[10px]">John Doe</p>
                    )}
                    {toggleState?.["Designation"] && (
                        <p className="text-[#FFFFFF] font-semibold text-[10px]">Regional Manager</p>
                    )}
                </div>
            </div>
            {(toggleState?.["Employee ID"] !== false && toggleState?.["Employee ID"] !== undefined) && (
                <div
                    className={`w-fit h-7 p-1 rounded-2xl ${toggleState?.["Employee ID"] ? "bg-[#2795FB]" : ""
                        }`}
                >
                    <div className="flex px-1 gap-2">
                        <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                        <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                    </div>
                </div>
            )}

        </div>
        {toggleState?.["Region"] && (
            <div className="flex px-3 gap-4">
                <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
            </div>
        )}
            </div>
        <div className="px-3 grid grid-cols-2 z-20 ">

            <div className="gap-1">
                {toggleState?.["Email"] && (
                    <div className="flex gap-2">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                            <div className="p-1">
                                <EmailIcon size={11} color="#FFFFFF" />
                            </div>
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>
                    </div>
                )}
                {toggleState?.["phoneNo"] && (
                    <div className="flex gap-2 mt-1">
                        <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                            <PhoneIcon size={11} color="#FFFFFF" />
                        </div>
                        <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>
                    </div>
                )}
                <div className="flex py-1 gap-5">
                    {toggleState?.["Address"] && (
                        <div className="flex gap-2">
                            <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                <LocationIcon size={12} color="#FFFFFF" />
                            </div>
                            <p className="text-[#FFFFFF] font-light text-[9px] text-start">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                        </div>
                    )}

                </div>
            </div>
            <div className="flex flex-col justify-end mb-2">
                <div>
                    {toggleState?.["Company Logo"] && (
                        <img src={cygnoz} className="w-24 h-5 ml-auto" alt="" />
                    )}
                    {toggleState?.["Logo Title"] && (
                        <p className="text-[#FFFFFF] font-light text-[8px] w-fit ml-auto">Engineering your business for the world</p>
                    )}
                </div>
            </div>
        </div>

    </div>
}

export const Layout3Back: React.FC<LayoutProps> = ({ toggleState }) => {
    return <div className="bg-cover bg-center bg-no-repeat rounded-lg relative"
        style={{ backgroundImage: `url(${template2Back})`, minHeight: '200px' }}>
        <div className="p-3">
            {toggleState?.["Company Logo"] && (
                <img src={cygnoz} className="w-32 h-8" alt="" />
            )}
            {toggleState?.["Logo Title"] && (
                <p className="text-[#FFFFFF] font-normal text-[10px] py-1 z-10">Engineering your business for the world</p>
            )}
        </div>
        {toggleState?.["CompanyInfo"] && (
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
    return <div className="bg-cover bg-center bg-no-repeat w-[345px] h-fit rounded-lg relative px-3  justify-center"
        style={{ backgroundImage: `url(${idCardFront})`, minHeight: '593px' }}>
        {/* Profile Section */}
        <div className="mt-16 p-4">
            <div>
                <img className="w-24 h-24 rounded-full border-4" src={profile} alt="Profile" />
            </div>
            <div>

                <p className="text-[#FFFFFF] font-extrabold text-lg mt-4 ">John Doe</p>
            </div>
            <div >

                <p className="text-[#FFFFFF] font-medium text-sm mt-2">Regional Manager</p>
            </div>
            <div>
                <p className="text-[#FFFFFF] font-semibold text-sm mt-2">RM-0122</p>
            </div>
        </div>
        {/* Contact Info */}
        <div className="px-4 py-12">
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
                    <img src={cygnoz} className="w-32 h-8" alt="Company Logo" />
                </div>
                <p className="text-white font-normal text-[10px] py-1">
                    Engineering your business for <br /> the world
                </p>
            </div>
        </div>

    </div>
}