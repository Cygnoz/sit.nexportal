import { useEffect, useState } from "react"
import DeActivateIcon from "../../../assets/icons/DeActivateIcon"
import EditIcon from "../../../assets/icons/EditIcon"
import ViewRoundIcon from "../../../assets/icons/ViewRoundIcon"
import supportAgentbg from '../../../assets/image/SupportAgentView.png'
import Modal from "../../../components/modal/Modal"
import SupportAgentForm from "./SupportAgentForm"
import SAViewForm from "./SAViewForm"
import { useNavigate } from "react-router-dom"
import useApi from "../../../Hooks/useApi"
import { endPoints } from "../../../services/apiEndpoints"
import UserIcon from "../../../assets/icons/UserIcon"
import Trash from "../../../assets/icons/Trash"
import ConfirmModal from "../../../components/modal/ConfirmModal"
import toast from "react-hot-toast"
import UserRoundCheckIcon from "../../../assets/icons/UserRoundCheckIcon"

type Props = {
  id:any
}

const ViewHeader = ({id}: Props) => {

    const [isModalOpen, setIsModalOpen] = useState({
        editSA:false,
        viewSA:false,
        confirm: false,
        deacivateSA:false,
      });
    
      const handleModalToggle = (editSA=false, viewSA=false, confirm=false,deacivateSA=false) => {
        setIsModalOpen((prevState:any )=> ({
            ...prevState,
            editSA: editSA,
            viewSA: viewSA,
            confirm: confirm,
            deacivateSA:deacivateSA,
        }));
        getASA()
    }
    
    const {request:deleteaSA}=useApi('delete',3003)
    const {request: deactiveSA}=useApi('put',3003)
    const {request: getaSA}=useApi('get',3003)
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

  const handleDelete = async () => {
    try {
      const { response, error } = await deleteaSA(`${endPoints.SUPPORT_AGENT}/${id}`); 
      if (response) {
        toast.success(response.data.message);
        navigate("/support-agent");
      } else {
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete the Support Agent.");
    }
  };
  const navigate = useNavigate()
  const handleDeactivate = async () => {
    const body = {
      status: getData.saData?.status === "Active" ? 'Deactive' : 'Active'
    }
    try {
      const { response, error } = await deactiveSA(`${endPoints.DEACTIVATE_SA}/${id}`, body);
      console.log(response);
      console.log(error, "error message");


      if (response) {
        toast.success(response.data.message);
        navigate("/supervisor");
      } else {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    } catch (err) {
      console.error("Deactivate error:", err);
      toast.error("Failed to Deactivate the supervisor.");
    }
  };

    
  return (
     <div>
        <div className="w-full space-y-3">
          <div className="h-[150px] relative flex flex-col  bg-white rounded-lg">
          {
             getData.saData?.user?.userImage && getData.saData?.user?.userImage>50?
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
            <p onClick={()=>navigate(`/regions/${getData.saData?.region?._id}`)} className="text-[#303F58] text-xs font-medium underline cursor-pointer">{getData.saData?.region?.regionCode ?getData.saData?.region?.regionCode  :'N/A'}</p>
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
                <div onClick={()=>handleModalToggle(true,false,false,false)} className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <EditIcon size={18} color="#4B5C79" />
                   </div>
                    </div>
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium" >Edit Profile</p>
              </div>

              <div className="flex flex-col  items-center">
                <div onClick={()=>handleModalToggle(false,true,false,false)} className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <ViewRoundIcon size={18} color="#4B5C79" />
                   </div>
                    </div> 
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium">View Details</p>
              </div>

              <div onClick={() => handleModalToggle(false, false,false, true)} className="flex flex-col  items-center">
              <div className="w-8 h-8 mb-1 rounded-full cursor-pointer">
              {getData.saData?.status === "Active" ?
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                  <div className="ms-2 mt-2">
                      <DeActivateIcon size={18} color="#D52B1E4D" />
                  </div>
                </div>
                :
                <div className="rounded-full bg-[#B6FFD7] h-9 w-9 border border-white">
                <div className="ms-2 mt-2">
                    <UserRoundCheckIcon size={20} color="#D52B1E4D" />
                </div>
              </div>

                  }

              </div>
              <p className="text-center font-medium text-[#4B5C79] text-xs ms-2">
                {getData.saData?.status === "Active" ? "Deactivate" : "Activate"}
              </p>
              </div>

              <div className="flex flex-col  items-center">
                <div onClick={() => handleModalToggle(false, false,true, false)} className="w-8 h-8 mb-1 rounded-full cursor-pointer">
                <div className="rounded-full bg-[#C4A25D4D] h-9 w-9 border border-white">
                   <div className="ms-2 mt-2">
                   <Trash size={18} color="#BC3126" />
                   </div>
                    </div>
                </div>
                <p className="text-center ms-3 text-[#4B5C79] text-xs font-medium">Delete</p>
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
      <Modal
        open={isModalOpen.confirm}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDelete}
          prompt="Are you sure want to delete this Supervisor?"
          onClose={() => handleModalToggle()}
        />
      </Modal>  
      <Modal
        open={isModalOpen.deacivateSA}
        align="center"
        onClose={() => handleModalToggle()}
        className="w-[30%]"
      >
        <ConfirmModal
          action={handleDeactivate}
          prompt={
            getData.saData?.status === "Active"
              ? "Are you sure you want to deactivate this Support Agent?"
              : "Are you sure you want to activate this Support Agent?"
          }
          onClose={() => handleModalToggle()}
        />
      </Modal>

    </div>
  )
}

export default ViewHeader