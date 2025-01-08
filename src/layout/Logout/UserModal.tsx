import UserIcon from "../../assets/icons/UserIcon"
import person1 from '../../assets/image/AvatarImg.png'
import useApi from "../../Hooks/useApi";
import { endPoints } from "../../services/apiEndpoints";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import ConfirmModal from "../../components/modal/ConfirmModal";
import UserCogIcon from "../../assets/icons/UserCogIcon";
import CreditcardIcon from "../../assets/icons/CreditcardIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";

type Props = {
    onClose: () => void; // Prop for handling modal close
}

const UserModal = ({onClose }: Props) => {

    const {user}=useUser()

    console.log(user);
    
    const navigate = useNavigate()

      // State to manage modal visibility
      const [isModalOpen, setIsModalOpen] = useState(false);
      // Function to toggle modal visibility
      const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
      };
    
    

    const {request : userLogout}=useApi('get',3003)

    const getLogout = async()=>{
        try{
            const { response, error } = await userLogout(endPoints.LOGOUT)
            console.log(response);
            console.log(error);
            if(response && !error){
                console.log(response.data);
                toast.success(response.data.message)
                onClose()
                setTimeout(() => {
                    navigate('/');
                  }, 2000);            }
            else{
                console.log(error.data.message);
                
            }
        }
        catch(err){
            console.log(err, ' error message');
            
        }
    }
    return (
        <div>
            <div className="w-64 h-fit bg-[#FFFFFF] p-4 rounded-lg">
                <div className="flex gap-4 my-2">
                    <div>
                    <img className="rounded-full w-8 h-8" src={person1} alt="" />
                    </div>
                    <div>
                        <p className="text-[#4B5C79] text-sm font-semibold">{user?.userName}</p>
                        <p className="text-[#8F99A9] text-xs font-normal">{user?.email ? user?.email:'N/A'}</p>
                    </div>
                </div>

                <hr />
                <div className="flex gap-2 my-2">
                    <div className="rounded-full w-8 h-8 bg-[#FFFFFF] border border-[#E7E8EB]">
                        <div className="p-1 mt-[3px] ms-[2px]">
                            <UserCogIcon size={18} color="#768294" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8F99A9] text-xs font-medium">User Role</p>
                        <p className="text-[#4B5C79] text-[10px] font-medium">{user?.role}</p>
                    </div>
                </div>

                <hr />
                <div className="flex gap-2 my-2">
                    <div className="rounded-full w-8 h-8 bg-[#FFFFFF] border border-[#E7E8EB]">
                        <div className="p-1 mt-[3px] ms-[2px]">
                            <CreditcardIcon size={18} color="#768294" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8F99A9] text-xs font-medium">User ID</p>
                        <p className="text-[#4B5C79] text-[10px] font-medium">{user?.employeeId}</p>
                    </div>
                </div>

                <hr />
                <div className="flex gap-2 my-2">
                    <div className="rounded-full w-8 h-8 bg-[#FFFFFF] border border-[#E7E8EB]">
                        <div className="p-1 mt-[3px] ms-[2px]">
                            <UserIcon size={18} color="#768294" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8F99A9] text-xs font-medium">User Name</p>
                        <p className="text-[#4B5C79] text-[10px] font-medium">{user?.userName}</p>
                    </div>
                </div>

                <hr />
                <div className="flex gap-2 my-2">
                    <div className="rounded-full w-8 h-8 bg-[#FFFFFF] border border-[#E7E8EB]">
                        <div className="p-1 mt-[3px] ms-[2px]">
                            <LogoutIcon size={18} color="#768294" />
                        </div>
                    </div>
                    <div>
                        <p onClick={()=>{handleModalToggle()}} className="text-[#4B5C79] text-sm font-medium p-1 cursor-pointer">Logout</p>
                    </div>
                </div>


            </div>
            <Modal className="w-[30%]" align="center" open={isModalOpen} onClose={handleModalToggle}>
      <ConfirmModal
       action={()=>getLogout()}
          prompt={
             "Are you sure you want to logout?"
          }
          onClose={() => handleModalToggle()}/>
      </Modal>

        </div>
    )
}

export default UserModal