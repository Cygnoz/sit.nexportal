import BankIcon from "../../../assets/icons/BankIcon";
import BloodGroupIcon from "../../../assets/icons/BloodGroupIcon";
import CalenderDays from "../../../assets/icons/CalenderDays"
import EmailIcon from "../../../assets/icons/EmailIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import RegionIcon from "../../../assets/icons/RegionIcon"
import UserIcon from "../../../assets/icons/UserIcon"

type Props = {
  onClose: () => void;
}



const AMViewForm: React.FC<Props> = ({ onClose }) => {
  return (
    <div>
      <div className="p-5 bg-white rounded shadow-md  ">
        <div className="flex justify-between items-center">
          <div className="px-2 ">
            <h1 className="font-bold text-sm">Area Manager Info</h1>
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
          <div className="col-span-3 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Basic Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Name</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">Sudeep Kumar</p>

              </div>

              <hr />


              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Age</h3>

              <div className="flex">
                <CalenderDays color="#4B5C79" />
                <p className="text-sm font-semibold ms-2 ">34</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Blood Group</h3>
              <div className="flex">
                <BloodGroupIcon size={20} />
                <p className="text-sm font-semibold ms-2">A-Positive</p>

              </div>

            </div>

          </div>
          <div className="col-span-4 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Contact Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Address</h3>
              <div className="flex">
                <LocationIcon size={20} />
                <p className="text-sm font-semibold ms-2">2827 ethikoli rd.pattambi</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Phone</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">784541221</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Email Address</h3>
              <div className="flex">
                <EmailIcon size={20} />
                <p className="text-sm font-semibold ms-2">abhi@gmail.com</p>

              </div>
            </div>

          </div>

          <div className="col-span-5 my-2 ">
            <div className="p-4  mx-1 bg-[#F3EEE7] h-60">
              <h1 className="text-sm font-semibold my-2">Identification and Employment Details</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Adhar Number</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">282798467436</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Pan Number</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">282798463444336</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Date Of Joining</h3>

              <div className="flex">
                <CalenderDays color="#4B5C79" />
                <p className="text-sm font-semibold ms-2 ">Jan 21 , 2023</p>

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
                <p className="text-sm font-semibold ms-2">HDFC</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Bank Branch</h3>
              <div className="flex">
                <BankIcon size={20} />
                <p className="text-sm font-semibold ms-2">Kunnamkulam</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Bank Account number</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">784541221</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">IFSC Code</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">HDFC2836383</p>

              </div>

            </div>

          </div>
          <div className="col-span-5 my-1 ">
            <div className="p-4 mx-1 bg-[#F3EEE7] h-[342px]">
              <h1 className="text-sm font-semibold my-2">Company Information</h1>
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Company Id</h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">PKLK2827</p>

              </div>

              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]" >Work Mail</h3>
              <div className="flex">
                <EmailIcon size={20} />
                <p className="text-sm font-semibold ms-2">abhi@gmail.com</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]"> Work Phone</h3>
              <div className="flex">
                <PhoneIcon size={20} />
                <p className="text-sm font-semibold ms-2">784541221</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Role </h3>
              <div className="flex">
                <UserIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">Area Manager</p>

              </div>
              <hr />
              <h3 className="text-xs font-semibold my-2 text-[#8F99A9]">Region</h3>

              <div className="flex">
                <RegionIcon color="#4B5C79" />
                <p className="text-sm font-semibold ms-2">RM 0937</p>

              </div>
            </div>

          </div>




        </div>


      </div>
    </div>
  )
}

export default AMViewForm