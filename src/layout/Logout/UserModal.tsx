import UserIcon from "../../assets/icons/UserIcon";
import useApi from "../../Hooks/useApi";
import { endPoints } from "../../services/apiEndpoints";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/modal/Modal";
import ConfirmModal from "../../components/modal/ConfirmModal";
import UserCogIcon from "../../assets/icons/UserCogIcon";
import CreditcardIcon from "../../assets/icons/CreditcardIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import NoImage from "../../components/ui/NoImage";

type Props = {};

const UserModal = ({ }: Props) => {
  const { user } = useUser();
  const navigate = useNavigate();

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState({
    confirm: false,
    userDropdown: false,
  });

  // Function to toggle the user dropdown visibility
  const toggleUserDropdown = (userDropdown=false) => {
    setIsModalOpen((prev) => ({
      ...prev,
      userDropdown: userDropdown,
    }));
  };

  // Function to toggle the confirmation modal visibility
  const toggleConfirmModal = () => {
    setIsModalOpen((prev) => ({
      ...prev,
      confirm: !prev.confirm,
    }));
  };

  const { request: userLogout } = useApi("get", 3003);

  const getLogout = async () => {
    try {
      const { response, error } = await userLogout(`${endPoints.LOGOUT}/${user?.id}`);
      if (response && !error) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log(error.data.message);
      }
    } catch (err) {
      console.log(err, " error message");
    }
  };

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleUserDropdown(); // Close the dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  

  return (
    <>
    <div className="relative" ref={dropdownRef}>
      <p
        onClick={()=>toggleUserDropdown(!isModalOpen.userDropdown)}
        className="tooltip cursor-pointer"
        data-tooltip="User"
      >
        {user?.userImage && user?.userImage.length > 50 ? (
          <img
            className="w-[34px] h-[34px] border border-[#E7E8EB] bg-[#FFFFFF] rounded-full"
            src={user?.userImage}
            alt=""
          />
        ) : (
          <NoImage roundedSize={34} iconSize={18} />
        )}
      </p>

      {isModalOpen.userDropdown && (
        <div className="absolute top-[40px] right-0 w-fit z-50">
          <div>
            <div className="w-64 h-fit bg-[#FFFFFF] p-4 rounded-lg shadow-lg">
              <div className="flex gap-4 my-2">
                {user?.userImage && user?.userImage.length > 50 ? (
                  <div>
                    <img className="rounded-full w-8 h-8" src={user?.userImage} alt="" />
                  </div>
                ) : (
                  <p className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                    <UserIcon color="white" size={22} />
                  </p>
                )}
                <div>
                  <p className="text-[#4B5C79] text-sm font-semibold">{user?.userName}</p>
                  <p className="text-[#8F99A9] text-xs font-normal">{user?.email || 'N/A'}</p>
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
                  <p
                    onClick={toggleConfirmModal}
                    className="text-[#4B5C79] text-sm font-medium p-1 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Modal className="w-[30%]" align="center" open={isModalOpen.confirm} onClose={toggleConfirmModal}>
    <ConfirmModal
      action={getLogout}
      prompt="Are you sure you want to logout?"
      onClose={toggleConfirmModal}
    />
  </Modal>
  </>
  );
};

export default UserModal;
