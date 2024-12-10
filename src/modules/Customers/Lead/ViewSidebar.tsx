import CalenderRound from "../../../assets/icons/CalenderRound"
import DeleteIcon from "../../../assets/icons/DeleteIcon"
import DeltaTech from "../../../assets/icons/DeltaTech"
import EditIcon from "../../../assets/icons/EditIcon"
import EmailIcon from "../../../assets/icons/EmailIcon"
import EmailRoundIcon from "../../../assets/icons/EmailRoundIcon"
import PhoneRingIcon from "../../../assets/icons/PhoneRingIcon"
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon"
import BackgroundImage from '../../../assets/image/LeadView.jpg'
import profileImage from '../../../assets/image/AvatarImg.png'

type Props = {}

const ViewSidebar = ({}: Props) => {
  return (
    <div>
            <div className="h-fit w-fit bg-cover rounded-xl p-6" style={{backgroundImage:`url(${BackgroundImage})`}}>
              <div className="bg-[#54B86DE0] py-1 px-2 w-fit rounded-2xl ms-48">
                <p className="text-[#FFFFFF] text-xs font-normal">In progress</p>
              </div>
              <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={profileImage} // Replace with the actual image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-3 mt-3">
        <p className="text-[#FFFFFF] text-xs font-semibold mb-3">Angela John</p>
        <p className="text-[#FFFFFF] text-xs font-normal">Lead ID <span className="text-xs font-bold ms-3">BDA12345</span></p>
        </div>
              </div>

              <div className="flex gap-4 my-4 ms-4">
                <EmailIcon color="#FFFFFF" size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">Angelinaj@gmail.com</p>
              </div>
              <div className="flex gap-4 mb-2 ms-4">
                <PhoneRingIcon color="#FFFFFF"  size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">(480) 555-0103</p>
              </div>
              <div className="flex gap-4 mb-2 ms-4">
                <DeltaTech size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">DeltaTech</p>
                </div>
                <div className="flex gap-4 ms-4 my-4">
                  <p className="text-[#FFFFFF] text-xs font-normal">Region</p>
                  <p className="text-[#FFFFFF] text-xs font-bold">Kerala</p>
                </div>
                <div className="flex gap-4 mb-4 ms-4">
                  <p className="text-[#FFFFFF] text-xs font-normal">Area</p>
                  <p className="text-[#FFFFFF] text-xs font-bold ms-3">Kochi</p>
                </div>

                <div className="flex w-60 h-20 px-6 py-4 gap-5 rounded-xl bg-[#FFFFFF33] mx-4">
                  
                 <div>
                 <EmailRoundIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">Email</p>
                 </div>
                 <div>
                 <EditIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium mt-1 ms-2">Edit</p>
                 </div>
                 <div>
                 <ViewRoundIcon size={32} color=""/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">View</p>
                 </div>
                 <div>
                 <DeleteIcon size={32} />
                 <p className="text-[#FFF9F9] text-[10px] font-medium mt-1">Delete</p>
                 </div>

                </div>
                <div className="flex gap-2 rounded-xl bg-[#FFFFFF33] w-60 py-3 px-2 h-14 my-4 mx-4">
                  <div className="px-2 ms-6"><CalenderRound size={32}/></div>
                  <p className="mt-2 text-[#FFFFFF] text-xs font-medium">View Calender</p>
                </div>
                <div className="rounded-lg w-60 bg-[#820000] h-12 py-3 px-3 mb-4 mx-4">
                  <p className="text-center text-[#FEFDF9] text-base font-medium">Converted to Trail</p>
                </div>
                <hr />
                <div className="p-4">
                  <p className="text-[#FFFFFF] text-xs font-normal mb-2">Assigned BDA</p>
                  <div className="flex gap-2">
                  <div className="rounded-full w-7 h-7 overflow-hidden">
                  <img src={profileImage} alt="" />
                  </div>
                  <p className="text-[#FFFFFF] text-xs font-bold py-2 px-1">Ronald J</p>
                  </div>
                </div>  
            </div>
              {/* Graph */}
              <div>Graph</div>
    </div>
  )
}

export default ViewSidebar