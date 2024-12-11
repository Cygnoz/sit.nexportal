import { useParams } from "react-router-dom"

import CalenderRound from "../../../../assets/icons/CalenderRound"

import ChevronRight from "../../../../assets/icons/ChevronRight"
import DeleteIcon from "../../../../assets/icons/DeleteIcon"
import EditIcon from "../../../../assets/icons/EditIcon"
import EmailIcon from "../../../../assets/icons/EmailIcon"
import EmailRoundIcon from "../../../../assets/icons/EmailRoundIcon"
import PhoneRingIcon from "../../../../assets/icons/PhoneRingIcon"
import ViewRoundIcon from "../../../../assets/icons/ViewRoundIcon"
import profileImage from "../../../../assets/image/AvatarImg.png"
import BackgroundImage from '../../../../assets/image/LeadView.jpg'
import BuildingIcon from "../../../../assets/icons/BuildingIcon"
import CalenderDays from "../../../../assets/icons/CalenderDays"
import Modal from "../../../../components/modal/Modal"
import TrialViewForm from "./TrialViewForm"
import { useState } from "react"
// import ArrowRight from "../../../../assets/icons/ArrowRight"
import TrialEditForm from "./TrialEditForm"
import Button from "../../../../components/ui/Button"
import ExtentTrail from "./ExtentTrail"
import ConvertModal from "../../../../components/modal/ConvertionModal/CovertLicenser"
import ResumePauseTrail from "./ResumePauseTrail"
import rightArrow from '../../../../assets/image/right-arrow.png'


type Props = {}

const TrialView = ({}: Props) => {
     // State to manage modal visibility
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [editModalOpen, setEditModalOpen] = useState(false);
     const [extentModalOpen, setExtentModalOpen]= useState(false);
     const [conLicModalOpen, setConvLicModalOpen]= useState(false);
     const [pausModalOpen, setPausModalOpen]= useState(false)
   
       // Function to toggle modal visibility
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
        };

    const edtiModalToggle = () => {
    setEditModalOpen((prev) => !prev);
  };

  const extentModalToggle = () => {
    setExtentModalOpen((prev) => !prev);
    };

    const covertModalToggle= ()=> {
      setConvLicModalOpen((prev)=> !prev);
    }

    const pauseModalToggle= () =>{
      setPausModalOpen((prev) => !prev);
    }



    const {id}=useParams()
  return (
    <div>
          <div className="flex items-center text-[16px] space-x-2">
       <p className="font-bold text-[#820000] ">Trail</p>
        <ChevronRight color="#4B5C79" size={18}/>
        <p className="font-bold text-[#303F58] "> {id}</p>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-3">
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
                <BuildingIcon color="#FFFFFF" size={16}/>
                <span className="text-[#FFFFFF] text-xs font-normal">Organization</span>
  <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
  <span className="text-[#FFFFFF] text-xs font-normal">DeltaTech</span>
              </div>
              <div className="flex gap-4 my-4 ms-4">
                <BuildingIcon color="#FFFFFF" size={16}/>
                <span className="text-[#FFFFFF] text-xs font-normal">Organization Id</span>
  <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
  <span className="text-[#FFFFFF] text-xs font-normal">ORG-1897</span>
              </div>

              <div className="my-8">
              <div className="flex gap-4 my-4 ms-4">
                <EmailIcon color="#FFFFFF" size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">Angelinaj@gmail.com</p>
              </div>
              <div className="flex gap-4 mb-2 ms-4">
                <PhoneRingIcon color="#FFFFFF"  size={16}/>
                <p className="text-[#FFFFFF] text-xs font-normal">(480) 555-0103</p>
              </div>
            

              </div>

                <div className="flex gap-4 my-4 ms-4">
                <CalenderDays color="#FFFFFF" size={16}/>
                <span className="text-[#FFFFFF] text-xs font-normal">Start Date</span>
  <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
  <span className="text-[#FFFFFF] text-xs font-normal">04 Dec 2024</span>
              </div>
              <div className="flex gap-4 my-4 ms-4">
                <CalenderDays color="#FFFFFF" size={16}/>
                <span className="text-[#FFFFFF] text-xs font-normal">End Date</span>
  <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
  <span className="text-[#FFFFFF] text-xs font-normal">03 Jan 2024</span>

              </div>

              <div className="flex gap-4 my-4 ms-4 p-2 w-48 rounded-xl mt-7 bg-[#34B8A4]">
                <EmailIcon color="#FFFFFF" size={16}/>
                <span className="text-[#FFFFFF] text-xs font-normal">Duration</span>
  <div className="w-2 h-2 rounded-full mt-1 bg-white"></div>
  <span className="text-[#FFFFFF] text-xs font-normal">30 Days</span>

              </div>

             

              <div className="my-4 mt-7">
                  
              <div className="flex gap-4 ms-4 my-3">
                  <p className="text-[#FFFFFF] text-xs font-normal">Region</p>
                  <p className="text-[#FFFFFF] text-xs font-bold">Kerala</p>
                </div>
                <div className="flex gap-4 mb-4 ms-4">
                  <p className="text-[#FFFFFF] text-xs font-normal">Area</p>
                  <p className="text-[#FFFFFF] text-xs font-bold ms-3">Kochi</p>
                </div>
              </div>

                 <div className="flex w-60 h-20 px-6 py-4 gap-5 rounded-xl bg-[#FFFFFF33] mx-4">
                  
                 <div>
                 <EmailRoundIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium ms-1 mt-1">Email</p>
                 </div>
                 <div onClick={edtiModalToggle}>
                 <EditIcon size={32}/>
                 <p className="text-[#FFF9F9] text-[10px] font-medium mt-1 ms-2">Edit</p>
                 </div>
                 <div onClick={handleModalToggle} >
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

                <div className="flex gap-2 ml-5 my-2">
              <div onClick={extentModalToggle}>
              <Button className="w-28 h-10" variant="tertiary">
                <CalenderDays size={16} color="#4B5C79" />
                <p className="text-#565148 font-medium text-xs">Extent Trial</p>
               </Button>
              </div>
              <div onClick={pauseModalToggle}>
              <Button className="w-28 h-10" variant="secondary">
               <CalenderDays size={16} color="#4B5C79"/>
               <p className="text-#585953 font-medium text-xs">Resume Trial</p>
               </Button>

              </div>
              
                </div>

                <div className="rounded-lg w-60 bg-[#820000] h-12 py-3 px-3 mb-4 mx-4" onClick={covertModalToggle}>
                  <p className="text-center text-[#FEFDF9] text-base font-medium">Converted to Licenser</p>
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
             
        </div>

        <div className="col-span-5 w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
            <h1 className="text-sm font-bold">Recent Activities</h1>
        <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
        <div className="ml-24 my-1 text-sm font-bold"><p>Email Sent</p></div>
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

                <div className="flex gap-2 mt-2 -ml-2">
                    <EditIcon size={20}/>
                    <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium ml-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
                <div className="mt-2 -ml-2"><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-24 -mt-1">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold">Lead of the Trail</span></p>
                </div>
            </div>

            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
        <div className="ml-24 my-1 text-sm font-bold"><p>Email Sent</p></div>
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

                <div className="flex gap-2 mt-2 -ml-2">
                    <EditIcon size={20}/>
                    <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium ml-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
                <div className="mt-2 -ml-2"><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-24 -mt-1">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold">Lead of the Trail</span></p>
                </div>
            </div>
            <div className="bg-[#F5F9FC] p-5 rounded-lg my-4">
        <div className="ml-24 my-1 text-sm font-bold"><p>Email Sent</p></div>
                <div className="flex gap-6">
                <div className="mt-2 w-11 h-11 bg-[#EBEFF4] rounded-full">
                    <img className="w-6 h-6 ms-3 mt-[25%]" src={rightArrow} alt="" />
                </div>
                <div className="w-3 h-3 mt-3 ml-6 bg-[#C8C8C8] rounded-full shadow-md"></div>

                <div className="flex gap-2 mt-2 -ml-2">
                    <EditIcon size={20}/>
                    <div className="w-32 h-8 p-2 bg-[#FFFFFF] flex -mt-2 rounded-2xl">
                    <div className="rounded-full w-5 h-5 overflow-hidden">
                        <img src={profileImage} alt="" />
                    </div>
                    <p className="text-[#4B5C79] text-xs font-medium ml-1">Kristin Watson</p>
                    </div>
                </div>
                <div className="w-3 h-3 mt-3 -ml-4 bg-[#C8C8C8] rounded-full shadow-md"></div>
                <div className="mt-2 -ml-2"><p className="text-[#4B5C79] text-xs font-medium">19 minutes ago</p></div>
                </div>
                <div className="ms-24 -mt-1">
                    <p className="text-[#4B5C79] text-xs font-medium">Details <span className="text-[#4B5C79] text-sm font-bold">Lead of the Trail</span></p>
                </div>
            
            </div>
        </div>

        <div className="col-span-4">
            <h1 className="my-6">Graph</h1>
        </div>
        
      </div>
      
            {/* Modal controlled by state */}
            <Modal open={isModalOpen} align="center" onClose={handleModalToggle} className="w-[40%]">
                <TrialViewForm onClose={handleModalToggle} />
            </Modal>

              {/* Modal controlled by state */}
              <Modal open={editModalOpen} align="center" onClose={edtiModalToggle} className="w-[35%]">
                <TrialEditForm onClose={edtiModalToggle} />
            </Modal>

              {/* Modal controlled by state */}
              <Modal open={extentModalOpen} align="center" onClose={extentModalToggle} className="w-[35%]">
                <ExtentTrail onClose={extentModalToggle} />
            </Modal>

             {/* Modal controlled by state */}
             <Modal open={conLicModalOpen} align="center" onClose={covertModalToggle} className="w-[30%]">
                <ConvertModal onClose={covertModalToggle} type="trial" />
            </Modal>

            {/* Modal controlled by state */}
            <Modal open={pausModalOpen} align="center" onClose={pauseModalToggle} className="w-[35%]">
                <ResumePauseTrail onClose={pauseModalToggle} />
            </Modal> 

          
    </div>
  )
}

export default TrialView