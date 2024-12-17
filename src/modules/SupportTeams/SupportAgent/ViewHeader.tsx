import { useEffect, useState } from "react"
import DeActivateIcon from "../../../assets/icons/DeActivateIcon"
import EditIcon from "../../../assets/icons/EditIcon"
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon"
import supportAgentbg from '../../../assets/image/SupportAgentView.png'
import Modal from "../../../components/modal/Modal"
import SupportAgentForm from "./SupportAgentForm"
import SAViewForm from "./SAViewForm"
import { useNavigate, useParams } from "react-router-dom"
import useApi from "../../../Hooks/useApi"
import { endPoints } from "../../../services/apiEndpoints"
import UserIcon from "../../../assets/icons/UserIcon"

type Props = {}

const ViewHeader = ({}: Props) => {

    const [isModalOpen, setIsModalOpen] = useState({
        editSA:false,
        viewSA:false
      });
    
      const handleModalToggle = (editSA=false, viewSA=false) => {
        setIsModalOpen((prevState:any )=> ({
            ...prevState,
            editSA: editSA,
            viewSA: viewSA
        }));
        getASA()
    }
    
    const {request: getaSA}=useApi('get',3003)
    const {id} =useParams()
    const [getData, setGetData] = useState<{
        saData:any;}>
      ({saData:[]})
  
  const getASA = async()=>{
    try{
const {response,error}= await getaSA(`${endPoints.SUPPORT_AGENT}/${id}`);
        if(response && !error){
          setGetData((prevData)=>({
            ...prevData,
            saData:response.data
          }))
        }
        else{
          console.error(error.response.data.message)
        }
    }
    catch(err){
        console.error("Error fetching data",err)
    }
  }
  useEffect(()=>{
    getASA();
  },[id])

  const navigate = useNavigate()
    
  return (
     <div>
        <div className="w-full space-y-3">
          <div className="h-[150px] relative flex flex-col  bg-white rounded-lg">
          {
             getData.saData?.user?.userImage?
             <img src={getData.saData?.user?.userImage} className="rounded-full absolute top-8 left-8 w-20 h-20 border-[3px] border-white"></img> 
            :
                <p className="w-20 h-20 absolute top-8  left-8 bg-black rounded-full flex justify-center items-center">
                <UserIcon color="white" size={35} />
              </p>
                 }
            {/* <img src={profileImage} className="rounded-full absolute top-8 left-5 border-2 border-white bg-slate-500 w-20 h-20"></img> */}
            <div className="h-[65px] bg-cover rounded-t-lg w-full flex justify-center" style={{ backgroundImage: `url(${supportAgentbg})` }}>
              <div className="flex mt-[88px] gap-8 ms-32">
              <div className="gap-4">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Support Agent</p>
            <p className="text-[#303F58] text-xs font-medium">{getData.saData?.user?.userName ? getData.saData?.user?.userName:'N/A'}</p>
        </div>
        <div className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Email</p>
            <p className="text-[#303F58] text-xs font-medium">{getData.saData?.personalEmail ? getData.saData?.personalEmail:'N/A'}</p>
        </div>
        <div className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Phone</p>
            <p className="text-[#303F58] text-xs font-medium">{getData.saData?.user?.phoneNo ? getData.saData?.user?.phoneNo:'N/A'}</p>
        </div>
        <div className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Employee ID</p>
            <p className="text-[#303F58] text-xs font-medium">{getData.saData?.user?.employeeId ? getData.saData?.user?.employeeId:'N/A'}</p>
        </div>
        <div  className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Region</p>
            <p onClick={()=>navigate(`/regionView/${getData.saData?.region?._id}`)} className="text-[#303F58] text-xs font-medium underline cursor-pointer">{getData.saData?.region?.regionCode ?getData.saData?.region?.regionCode  :'N/A'}</p>
        </div>
        <div className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Assigned Supervisor</p>
            <p className="text-[#303F58] text-xs font-medium">Thomas</p>
        </div>
        <div className="">
            <p className="text-[#8F99A9] text-xs font-medium mb-1">Joining Date</p>
            <p className="text-[#303F58] text-xs font-medium">{getData.saData?.dateOfJoining   ? new Date(getData.saData?.dateOfJoining).toLocaleDateString() : 'N/A'}</p>
        </div>

              </div>
              <div className="flex  mt-20 ms-auto me-2 gap-2">
              <div className="flex flex-col items-center">
                <div onClick={()=>handleModalToggle(true,false)} className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                  <EditIcon size={32} color="#4B5C79" />
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium" >Edit Profile</p>
              </div>

              <div className="flex flex-col  items-center">
                <div onClick={()=>handleModalToggle(false,true)} className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                  <ViewRoundIcon size={32} color="#4B5C79" />
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium">View Details</p>
              </div>

              <div className="flex flex-col  items-center">
                <div className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                  <DeActivateIcon size={32} color="#4B5C79" />
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium">DeActivate</p>
              </div>

            </div>
            </div>
           
          </div>
        </div>
        <Modal open={isModalOpen.editSA} onClose={()=>handleModalToggle()} className="">
        <SupportAgentForm editId={id}  onClose={()=>handleModalToggle()} />
      </Modal><Modal open={isModalOpen.viewSA} onClose={()=>handleModalToggle()} className="">
        <SAViewForm onClose={()=>handleModalToggle()} />
      </Modal>
    </div>
  )
}

export default ViewHeader