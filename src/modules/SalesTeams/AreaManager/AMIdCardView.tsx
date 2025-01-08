import EmailIcon from "../../../assets/icons/EmailIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import profile from '../../../assets/image/AvatarImg.png';
import cygnoz from '../../../assets/image/cygnoz.com.png';
import previewFront from '../../../assets/image/image.png'

type Props = {
    onClose: () => void; // Prop for handling modal close
}

const AMIdCardView = ({onClose}: Props) => {
  return (
    <div>
       <div className="flex justify-end px-6 py-1">
      <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>

      </div>
    <div className="flex justify-center items-center   p-8 mx-5">
   
    <div className="bg-cover bg-center bg-no-repeat w-[400px] h-fit rounded-lg relative px-3  justify-center"
    style={{ backgroundImage: `url(${previewFront})`, minHeight: '550px' }}>
        {/* Profile Section */}
        <div className=" gap-1 mt-10 m-4">
                <div>
                    <img className="w-24 h-24 rounded-full" src={profile} alt="Profile" />
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
        <div className="px-3 mt-12">
            <div className="grid grid-cols-1 gap-2">
                {/* Email */}
                <div className="flex gap-2 items-center my-2">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                        <EmailIcon size={11} color="#FFFFFF" />
                    </div>
                        <p className="text-[#FFFFFF] font-light text-xs">john.doe@example.com</p>
                </div>
                {/* Phone */}
                <div className="flex gap-2 items-center my-2">
                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
                        <PhoneIcon size={11} color="#FFFFFF" />
                    </div>
                        <p className="text-[#FFFFFF] font-light text-xs">+919633564547</p>
                </div>
                {/* Address */}
                <div className="flex gap-2 items-start my-2">
  {/* Icon Container */}
  <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 flex items-center justify-center">
    <LocationIcon size={12} color="#FFFFFF" />
  </div>

  {/* Text Content */}
  <p className="text-[#FFFFFF] font-light text-xs leading-tight">
    2972 Westheimer Rd. Santa Ana, Illinois <br />
    2972 Westheimer Rd. Santa Ana, Illinois 85486 <br />
    Rd. Santa Ana, Illinois
  </p>
</div>

            </div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-center mt-7">
  <div className="text-center">
    <div className="flex justify-center mt-18">
      <img src={cygnoz} className="w-32 h-8" alt="Company Logo" />
    </div>
    <p className="text-white font-normal text-[10px] py-1">
      Engineering your business for the world<br />
      Mthripuram NGO, Quoters Kakkanad Kochi
    </p>
  </div>
</div>

    </div>
  </div>
  </div>
  )
}

export default AMIdCardView