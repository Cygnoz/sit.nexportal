import { useEffect, useState } from "react";
import AreaIcon from "../../../assets/icons/AreaIcon";
import BankIcon from "../../../assets/icons/BankIcon";
import BloodGroupIcon from "../../../assets/icons/BloodGroupIcon";
import CalenderDays from "../../../assets/icons/CalenderDays";
import EmailIcon from "../../../assets/icons/EmailIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import useApi from "../../../Hooks/useApi";
import { endPoints } from "../../../services/apiEndpoints";

type Props = {
  onClose: () => void;
  id:any
}



const AMViewForm: React.FC<Props> = ({ onClose,id }) => {

  const {request: getaAM}=useApi('get',3002)
  const [data, setData] = useState<{
    amData:any;}>
    ({amData:[]})


    const getAAM = async()=>{
      try{
        const {response,error}= await getaAM(`${endPoints.GET_ALL_AM}/${id}`);
        if(response && !error){
          setData((prevData)=>({
            ...prevData,
            amData:response.data
          }))
        }
        else{
          console.error(error.response.data.message)
        }
      }
      catch(err){
        console.error("Error fetching AM data:", err);
      }
    }

    useEffect(()=>{
      getAAM();
    },[id])
    console.log(data);
    
  return (
    <div>
      <div className="p-5 bg-white rounded shadow-md  ">
        <div className="flex justify-between items-center">
          <div className="px-2 ">
            <h1 className="font-bold text-sm">Area Manager Info</h1>
            <p className="text-xs mt-2 font-normal text-[#8F99A9]">Building strong connections, achieving regional goals.</p>

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
          <div className="col-span-3 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Basic Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">{data.amData?.user?.userName ? data.amData?.user?.userName: 'N/A'}</p>

              </div>

              <hr />


              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Age</h3>

              <div className="flex">
                <CalenderDays color="#4B5C79" />
                <p className="text-sm font-semibold ms-2 ">{data.amData?.age ? data.amData?.age: 'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Blood Group</h3>
              <div className="flex">
                <BloodGroupIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.bloodGroup ?data.amData?.bloodGroup:'N/A' }</p>

              </div>

            </div>

          </div>
          <div className="col-span-4 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Contact Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Address</h3>
              <div className="flex">
                <LocationIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.address?.street1 ?data.amData?.address?.street1:'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Phone</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.user?.phoneNo ? data.amData?.user?.phoneNo:'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Email Address</h3>
              <div className="flex">
                <EmailIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.personalEmail ? data.amData?.personalEmail:'N/A'}</p>

              </div>
            </div>

          </div>

          <div className="col-span-5 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Identification and Employment Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Adhar Number</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">{data.amData?.adhaarNo ? data.amData?.adhaarNo:'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Pan Number</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">{data.amData?.panNo ?data.amData?.panNo :'N/A' }</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Date Of Joining</h3>

              <div className="flex">
                <CalenderDays color="#4B5C79" />
                <p className="text-sm font-semibold ms-2 ">{data.amData?.dateOfJoining? new Date(data.amData.dateOfJoining).toLocaleDateString() : 'N/A'} </p>

              </div>
            </div>

          </div>


        </div>

        <div className="grid grid-cols-12 gap-2">
          {/* Table Section */}
          <div className="col-span-7 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-[342px]">
              <h1 className="text-sm font-semibold my-2">Bank Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Bank Name</h3>
              <div className="flex">
                <BankIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.bankDetails?.bankName ? data.amData?.bankDetails?.bankName:'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Bank Branch</h3>
              <div className="flex">
                <BankIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.bankDetails?.bankBranch?data.amData?.bankDetails?.bankBranch:'N/A'}</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Bank Account number</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.bankDetails?.bankAccountNo?data.amData?.bankDetails?.bankAccountNo:'N/A'}</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">IFSC Code</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">{data.amData?.bankDetails?.ifscCode?data.amData?.bankDetails?.ifscCode:'N/A'}</p>

              </div>

            </div>

          </div>
          <div className="col-span-5 my-1 ">
            <div className="p-4 mx-1 bg-[#F3EEE7] h-[342px]">
              <h1 className="text-sm font-semibold my-2">Company Information</h1>
              {/* <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company Id</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">PKLK2827</p>

              </div> */}

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Work Mail</h3>
              <div className="flex">
                <EmailIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.workEmail?data.amData?.workEmail:'N/A'}</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Work Phone</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">{data.amData?.workPhone?data.amData?.workPhone:'N/A'}</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Role </h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">Area Manager</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Area</h3>

              <div className="flex">
                <AreaIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">{data.amData?.area?.areaCode?data.amData?.area?.areaCode:'N/A'}</p>

              </div>
            </div>

          </div>




        </div>


      </div>
    </div>
  )
}

export default AMViewForm