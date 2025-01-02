import { useEffect, useState } from "react";
import BuildingIcon from "../../../../assets/icons/BuildingIcon";
import CalenderDays from "../../../../assets/icons/CalenderDays"
import EmailIcon from "../../../../assets/icons/EmailIcon";
import FileBadgeIcon from "../../../../assets/icons/FileBadgeIcon";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../../assets/icons/PhoneIcon";

import UserIcon from "../../../../assets/icons/UserIcon"
import { endPoints } from "../../../../services/apiEndpoints";
import { LicenserData } from "../../../../Interfaces/Licenser";
import { useParams } from "react-router-dom";
import useApi from "../../../../Hooks/useApi";


type Props = {
    onClose: () => void;
  }

const LicenserViewForm = ({onClose}: Props) => {
  const {request: getaLicenser}=useApi('get',3001)
  const { id } = useParams();
  const [data, setData] = useState<LicenserData>()

     const getOneLicenser = async () => {
          try {
            const { response, error } = await getaLicenser(`${endPoints.LICENSER}/${id}`);
            if (response && !error) {
              const Licenser = response.data; // Return the fetched data
              console.log("Fetched Licenser data:", Licenser);
              const{licensers,...filteredLicencers}=Licenser
              setData(filteredLicencers);
            } else {
              // Handle the error case if needed (for example, log the error)
              console.error('Error fetching Lead data:', error);
            }
          } catch (err) {
            console.error('Error fetching Lead data:', err);
          }
        };
    
        useEffect(() => {
          getOneLicenser()
        }, [id]);

        console.log(data);
        
        
  return (
    <>
    
    <div>
      <div className="p-5 bg-white rounded shadow-md  ">
        <div className="flex justify-between items-center">
        <div className="px-2 ">
      <h1 className="font-bold text-sm">Licenser Info</h1>
        <p className="text-xs mt-2 font-normal text-[#8F99A9]">Purchasing power is a license to purchase power.
        Raoul Vaneigem</p>
       
      </div>
      <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 font-bold "
                >
                    <p className="text-xl">&times;</p>
                </button>

        </div>
    

      
        <div className="grid grid-cols-12 gap-2 p-2">
          {/* Table Section */}
          <div className="col-span-5 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-80">
              <h1 className="text-sm font-semibold my-2">Basic Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >First Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.firstName ? data?.firstName : 'N/A'}</p>

              </div>
             
              <hr />

              
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Last Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.lastName ? data?.lastName : 'N/A'}</p>

              </div>
             
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >City</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.city ? data?.city : 'N/A'}</p>

              </div>
             
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Country</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.country ? data?.country : 'N/A'}</p>

              </div>
             
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >State</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.state ? data?.state : 'N/A'}</p>

              </div>
             
              <hr />
            
              
            </div>

          </div>
          <div className="col-span-7 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-80">
              <h1 className="text-sm font-semibold my-2">Contact Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Address</h3>
              <div className="flex">
                <LocationIcon size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.address ? data?.address : 'N/A'}</p>

              </div>
              
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Phone</h3>
              <div className="flex">
                <PhoneIcon size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.phone ? data?.phone : 'N/A'}</p>

              </div>
              
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Email Address</h3>
              <div className="flex">
                <EmailIcon size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.email ? data?.email : 'N/A'}</p>

              </div>
            </div>

          </div>



        </div>

        <div className="grid grid-cols-12 gap-2">
          {/* Table Section */}
          <div className="col-span-5 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Company Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company ID</h3>
              <div className="flex">
                <BuildingIcon size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.companyId ? data?.companyId : 'N/A'}</p>

              </div>
            
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company Name</h3>
              <div className="flex">
                <BuildingIcon size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.companyName ? data?.companyName : 'N/A'}</p>

              </div>
              <hr />
            
              
             
             
            </div>

          </div>
          <div className="col-span-7 my-1 ">
            <div className="p-4 mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">License Info</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Licenser Status</h3>
              <div className="flex">
                <FileBadgeIcon size={20} color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">{data?.licensorStatus ? data?.licensorStatus : 'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Start Date</h3>
              <div className="flex">
              <CalenderDays color="#4B5C79" size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.startDate
                  ? new Date(data.startDate).toLocaleDateString()
                  : 'N/A'}</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> End Date</h3>
              <div className="flex">
              <CalenderDays color="#4B5C79" size={20}/>
                <p className="text-sm font-semibold ms-2">{data?.endDate
                  ? new Date(data.endDate).toLocaleDateString()
                  : 'N/A'}</p>

              </div>
            
            </div>

          </div>

        


        </div>


      </div>
      

    </div>
     
    </>
  )
}

export default LicenserViewForm