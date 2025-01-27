import EmailIcon from "../../../assets/icons/EmailIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import profile from '../../../assets/image/AvatarImg.png';
import cygnoz from '../../../assets/image/Cygnoz.png';
import idCardFront from '../../../assets/image/idCard.png'

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
   
    <div className="bg-cover bg-center bg-no-repeat w-[345px] h-fit rounded-lg relative px-3  justify-center"
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
  </div>
  </div>
  )
}

export default AMIdCardView