import Button from "../../../components/ui/Button";
// import comfetti from '../../../assets/image/confetti.png'
import useApi from "../../../Hooks/useApi";
import { useEffect, useState } from "react";
// import { UserData } from "../../../Interfaces/User";
import { endPoints } from "../../../services/apiEndpoints";
import Input from "../../../components/form/Input";
// import { PraiseData } from "../../../Interfaces/Praise";
// import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { themes } from "../../../Interfaces/Praise";
import { achievements } from "../../../Interfaces/Praise";


type Props = {
  onClose: () => void;
}


const PraiseForm = ({ onClose }: Props) => {

  const { request: getUsers } = useApi('get', 3002)
  const { request: addPraise} = useApi('post',3004)
  // const [allUsers, setAllUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [prise, setPrise] = useState({
    usersId: "", achievement: "", theme: "", notes: "",
  })

  const getAllUsers = async () => {
    const url = endPoints.GET_USERS
    try {
      const { response, error } = await getUsers(url)
      console.log(response)
      console.log(error)
      if (response && !error) {
        // toast.success(response.data.message)
        // const transformedUser = response.data.AllUsers?.map((users: any) => ({
        //   ...users,
        // }));

        // setAllUsers(response.data.AllUsers);
        setFilteredUsers(response.data.AllUsers);
      } else {
        console.log(error)
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  // console.log(allUsers);
  console.log(prise);


  const [selectedTheme, setSelectedTheme] = useState<any | null>(0);

  const handleThemeSelect = (index: number) => {
    setSelectedTheme(index);
    setPrise((prevState) => ({
      ...prevState,
      theme: themes[index].name,
    }));
  };

  const [selectBg, setSelectedBg] = useState<any | null>(0)

  const handleBgSelect = (index: number) => {
    setSelectedBg(index);
    setPrise((prevState) => ({
      ...prevState,
      achievement: achievements[index].name,
    }));
  };

  const handleSubmit= async()=>{
    try {
      // Call addLicenser function for adding a new licenser
      const { response, error } = await addPraise(endPoints.PRAISE, prise);
 
      console.log("Response:", response);
      console.log("Error:", error);
 
      if (response && !error) {
        console.log(response.data);
        
        toast.success(response.data.message); // Show success toast
        onClose(); // Close the form/modal
      } else {
        toast.error(error.response?.data?.message || "An error occurred."); // Show error toast
      }
    } catch (err) {
      console.error("Error submitting tickets data:", err);
      toast.error("An unexpected error occurred."); // Handle unexpected errors
    }

  }

  // const ribbonBg = comfetti;



  return (
    <div>
      <div className="p-8 bg-white rounded-2xl border border-[#E7E7ED]">
        <div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <h3 className="text-[#303F58] font-bold text-lg">Send Praise</h3>
            </div>
            <p onClick={onClose} className="text-3xl cursor-pointer">&times;</p>
          </div>
          <p>To</p>
          <div className="relative">
            {/* Input Field */}
            <Input
              className="w-[672px] h-[40px] px-3 my-2 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(event) => setSearch(event.target.value)} // Update the input value
              onFocus={() => setShowDropdown(true)} // Show dropdown on focus
              style={{ appearance: "none" }} // Remove default icon
            />

            {/* Custom Dropdown */}
            {showDropdown && search && (
              <div
                className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md max-h-[200px] overflow-y-auto z-10 custom-scrollbar"
                style={{ width: "672px" }}
              >
                {filteredUsers?.map((user: any) => (
                  <div
                    key={user.value}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setSearch(user.userName); // Display the selected value in the input
                      setPrise((prevData: any) => ({
                        ...prevData,
                        usersId: user._id,
                      }));
                      setShowDropdown(false); // Close the dropdown
                    }}
                  >
                    {user.userName}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* <div className="mt-2 mb-6 flex gap-2">
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <img className="w-8 h-8 rotate-12" src={firstMedal} alt="" />
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Achiever</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-[2px]">
                <PraiseIcon size={20} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Congratulations</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[5px] mt-[2px]">
                <BulbIcon size={18} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Problem Solver</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <img className="w-6 h-6 ms-[6px] mt-1" src={staryTwinkle} alt="" />
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Thank You</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-[2px]">
                <CupIcon size={20} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Awesome</p>
            </div>
          </div>
          <div className="bg-[#F3F3F3] rounded-2xl w-40 h-12 p-3 mt-4 flex gap-2">
            <div className="bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB] rounded-full w-8 h-8 -mt-1">
              <div className="p-1 ms-[3px] mt-1">
                <LionIcon size={18} />
              </div>
            </div>
            <div>
              <p className="text-center text-[#495160] text-xs font-normal mt-1 ms-1">Courage</p>
            </div>
          </div>




        </div> */}
        <div className="flex flex-wrap gap-4 mt-6 cursor-pointer">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onClick={() => handleBgSelect(index)}
              className={`${selectBg === index ? "border-2 border-blue-500" : "border border-gray-300"
                } bg-[#F3F3F3] rounded-2xl w-fit h-11 p-3 flex gap-2 items-center`}
            >
              <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#EDE7FB] to-[#B5DBDB]">
                {achievement.icon}
              </div>
              <p className="text-[#495160] text-xs font-normal">{achievement.name}</p>
            </div>
          ))}
        </div>
        {/* <div className="mt-6">
        <p className="text-lg">
          Selected Achievement: <span className="font-bold">{prise.achievement}</span>
        </p>
      </div> */}

        <p className="my-3">Select Background</p>
        {/* <div className="flex mb-6 gap-2">
          <div className="bg-gradient-to-r from-[#F86C6C2B] to-[#F9DBA0A8] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 1</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#CCB7FE] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 2</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#DEFFDBA6] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 3</p>
          </div>
          <div className="bg-gradient-to-r from-[#FFC9B182] to-[#FCCF7447] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 4</p>
          </div>
          <div className="bg-gradient-to-r from-[#EDE7FB] to-[#D786DD4D] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 5</p>
          </div>
          <div className="bg-gradient-to-r from-[#D52B1E45] to-[#FCCF741F] rounded-2xl w-40 h-12 p-3 flex gap-2">
            <p className="text-center ms-10 mt-1 text-[#495160] text-xs font-normal">Theme 6</p>
          </div>
        </div> */}
        <div className="flex mb-6 gap-2 flex-wrap cursor-pointer">
          {themes.map((item, index) => (
            <div
              key={index}
              onClick={() => handleThemeSelect(index)}
              className={`${selectedTheme === index
                ? "border-2 border-blue-500"
                : "border border-gray-300"
                } ${item.bgColor} rounded-2xl w-36 h-12 p-3 flex gap-2`}
            >
              <p className="text-center mx-8 mt-1 text-[#495160] text-xs font-normal">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="mt-4">
          <p className="text-lg">Selected Theme: {prise.theme}</p>
        </div> */}


        <div className="bg-[#F3F3F3] border border-[#EAECF0] rounded-2xl p-6">
          <p className="gap-2 my-2">Add Notes </p>
          <div className="bg-[#FFFFFFA1] rounded-lg">
            {/* <p className="text-[#2C3E50A3] text-xs font-normal mb-4">Lorem ipsum dolor sit amet consectetur. Egestas amet purus.Lorem ipsum <br /> dolor sit amet consectetur. Egestas amet purus.</p>
            <p className="text-end text-[#495160A1] text-[10px] font-semibold">200/500</p> */}
            <textarea onChange={(e) => setPrise((prevData: any) => ({
              ...prevData,
              notes:e.target.value,
            }))} className="w-full min-h-28 rounded-lg outline-none p-3 text-[#2C3E50A3] text-xs font-normal" name="" id=""></textarea>
        </div>

      </div>

      <div className="w-full bg-white flex justify-end gap-2 mt-4">
        <Button variant="tertiary" onClick={onClose} className="h-8 text-sm border rounded-lg" size="lg">Cancel</Button>
        <Button variant="primary" onClick={handleSubmit} className="h-8 text-sm border rounded-lg" size="lg">Send</Button>

      </div>
    </div>
    </div >
  )
}

export default PraiseForm