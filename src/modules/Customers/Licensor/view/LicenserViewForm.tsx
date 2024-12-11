import BuildingIcon from "../../../../assets/icons/BuildingIcon";
import CalenderDays from "../../../../assets/icons/CalenderDays"
import EmailIcon from "../../../../assets/icons/EmailIcon";
import FileBadgeIcon from "../../../../assets/icons/FileBadgeIcon";
import LocationIcon from "../../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../../assets/icons/PhoneIcon";

import UserIcon from "../../../../assets/icons/UserIcon"


type Props = {
    onClose: () => void;
  }

const LicenserViewForm = ({onClose}: Props) => {
  return (
    <>
    
    <div>
      <div className="p-5 bg-white rounded shadow-md  ">
        <div className="flex justify-between items-center">
        <div className="px-2 ">
      <h1 className="font-bold text-sm">Licenser Info</h1>
        <p className="text-xs mt-2 font-normal text-[#8F99A9]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam pos</p>
       
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
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Basic Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >First Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">Sudeep Kumar</p>

              </div>
             
              <hr />

              
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Last Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">Sudeep Kumar</p>

              </div>
             
              <hr />
            
              
            </div>

          </div>
          <div className="col-span-7 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Contact Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Address</h3>
              <div className="flex">
                <LocationIcon size={20}/>
                <p className="text-sm font-semibold ms-2">2827 ethikoli rd.pattambi</p>

              </div>
              
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Phone</h3>
              <div className="flex">
                <PhoneIcon size={20}/>
                <p className="text-sm font-semibold ms-2">784541221</p>

              </div>
              
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Email Address</h3>
              <div className="flex">
                <EmailIcon size={20}/>
                <p className="text-sm font-semibold ms-2">abhi@gmail.com</p>

              </div>
            </div>

          </div>



        </div>

        <div className="grid grid-cols-12 gap-2">
          {/* Table Section */}
          <div className="col-span-5 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-[342px]">
              <h1 className="text-sm font-semibold my-2">Company Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company ID</h3>
              <div className="flex">
                <BuildingIcon size={20}/>
                <p className="text-sm font-semibold ms-2">CGRT447473</p>

              </div>
            
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company Name</h3>
              <div className="flex">
                <BuildingIcon size={20}/>
                <p className="text-sm font-semibold ms-2">CTYSTHWJ87</p>

              </div>
              <hr />
            
              
             
             
            </div>

          </div>
          <div className="col-span-7 my-1 ">
            <div className="p-4 mx-1 bg-[#F3EEE7] h-[342px]">
              <h1 className="text-sm font-semibold my-2">License Info</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">License Type</h3>
              <div className="flex">
                <FileBadgeIcon size={20} color="#4B5C79"/>
                <p className="text-sm font-semibold ms-2">Type 1</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Start Date</h3>
              <div className="flex">
              <CalenderDays color="#4B5C79" size={20}/>
                <p className="text-sm font-semibold ms-2">21 Nov 2024</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> End Date</h3>
              <div className="flex">
              <CalenderDays color="#4B5C79" size={20}/>
                <p className="text-sm font-semibold ms-2">21 Nov 2024</p>

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