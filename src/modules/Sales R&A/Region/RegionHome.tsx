import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { RegionData } from "../../../Interfaces/Region";
import AreaIcon from "../../../assets/icons/AreaIcon";
import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import Notebook from "../../../assets/icons/Notebook";
import RegionIcon from "../../../assets/icons/RegionIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import HomeCard from "../../../components/ui/HomeCards";
import Table from "../../../components/ui/Table";
import { useRegularApi } from "../../../context/ApiContext";
import { endPoints } from "../../../services/apiEndpoints";
import RegionForm from "./RegionForm";

// Define the type for data items

const RegionHome = () => {
  const { totalCounts } = useRegularApi();
  const [allRegion, setAllRegion] = useState<RegionData[]>([]);
  const { request: getAllRegion } = useApi("get", 3003);
  const navigate = useNavigate();
  const [editId, setEditId] = useState("");
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
    getAllRegions();
  };

  const handleView = (id: any) => {
    navigate(`/regions/${id}`);
  };

  // const handleDelete=async(id:any)=>{
  //   try{
  //     const {response,error}=await deleteRegion(`${endPoints.REGION}/${id}`)
  //   if(response && !error){
  //     toast.success(response.data.message)
  //     getAllRegions()
  //   }else{
  //     toast.error(error.response.data.message)
  //   }
  //   }catch(err){
  //     console.log();
  //   }
  // }

  const handleEdit = (id: any) => {
    handleModalToggle();
    setEditId(id);
  };

  const getAllRegions = async () => {
    try {
      const { response, error } = await getAllRegion(endPoints.GET_REGIONS);
      if (response && !error) {
        const transformedRegions = response.data.regions?.map(
          (region: any) => ({
            ...region,
            createdAt: new Date(region.createdAt).toLocaleDateString("en-GB"), // This formats the date to "dd/mm/yyyy"
          })
        );

        // Then set the transformed regions into state
        setAllRegion(transformedRegions);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllRegions();
  }, []);

  // Data for HomeCards
  const homeCardData = [
    {
      icon: <RegionIcon size={24} />,
      number: totalCounts?.totalUsers,
      title: "Total Users",
      iconFrameColor: "#F9A51A",
      iconFrameBorderColor: "#FFF2DDCC",
    },
    {
      icon: <AreaIcon size={24} />,
      number: totalCounts?.totalArea,
      title: "Total Area",
      iconFrameColor: "#30B777",
      iconFrameBorderColor: "#B3F0D3CC",
    },
    {
      icon: <UserIcon size={24} />,
      number: totalCounts?.totalRegionManagers,
      title: "Total Region Manager",
      iconFrameColor: "#51BFDA",
      iconFrameBorderColor: "#C1E7F1CC",
    },
    {
      icon: <UserIcon size={24} />,
      number: totalCounts?.totalAreaManagers,
      title: "Total Area Manager",
      iconFrameColor: "#1A9CF9",
      iconFrameBorderColor: "#BBD8EDCC",
    },
    {
      icon: <AreaManagerIcon size={24} />,
      number: totalCounts?.totalBdas,
      title: "Total BDA's",
      iconFrameColor: "#D786DD",
      iconFrameBorderColor: "#FADDFCCC",
    },
  ];

  // Define the columns with strict keys
  const columns: { key: keyof RegionData; label: string }[] = [
    { key: "regionCode", label: "Region Code" },
    { key: "regionName", label: "Region Name" },
    { key: "country", label: "Country" },
    { key: "description", label: "Discription" },
    { key: "createdAt", label: "Created Date" },
  ];

  const name = "Name";
const country = "Country";
const code = "Code";

const handleFilter = ({ options }: { options: string }) => {
  if (options === 'Name') {
    // Create a new sorted array to avoid mutating the original state
    const sortedRegions = [...allRegion].sort((a, b) => b.regionName.localeCompare(a.regionName));
    setAllRegion(sortedRegions);
  }else if(options==='Country'){
    const sortedRegions = [...allRegion].sort((a, b) => b.country.localeCompare(a.country));
    setAllRegion(sortedRegions);
  }else {
    const sortedRegions = [...allRegion].sort((a:any, b:any) => {
      // Extract the numeric part of the regionCode
      const numA = parseInt(a.regionCode.split('-')[1], 10);
      const numB = parseInt(b.regionCode.split('-')[1], 10);
      
      // Sort in descending order
      return numB - numA;
    });
    setAllRegion(sortedRegions);
  }
};

 

  return (
    <>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#303F58] text-xl font-bold">Region</h1>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              handleModalToggle();
              setEditId("");
            }}
          >
            <span className="font-bold text-xl">+</span> Create Region
          </Button>
        </div>

        {/* HomeCards Section */}
        <div className="flex gap-3 py-2 justify-between">
          {homeCardData.map((card, index) => (
            <HomeCard
              iconFrameColor={card.iconFrameColor}
              iconFrameBorderColor={card.iconFrameBorderColor}
              key={index}
              icon={card.icon}
              number={card.number}
              title={card.title}
            />
          ))}
        </div>

        {/* Table Section */}
        <div>
          <Table<RegionData>
            data={allRegion}
            columns={columns}
            headerContents={{
              title: "Region",
              search: { placeholder: "Search Region..." },
              sort: [
                {
                  sortHead: "Filter",
                  sortList: [
                    {
                      label: "Sort by Name",
                      icon: <UserIcon size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: name }),
                    },
                    {
                      label: "Sort by Country",
                      icon: <RegionIcon size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: country }),
                    },
                    {
                      label: "Sort by Code",
                      icon: <Notebook size={14} color="#4B5C79" />,
                      action: () => handleFilter({ options: code }),
                    },
                  ],
                },
              ],
            }}
            actionList={[
              { label: "edit", function: handleEdit },
              { label: "view", function: handleView },
            ]}
          />
        </div>
      </div>
      {/* Modal Section */}
      <Modal open={isModalOpen} onClose={handleModalToggle} className="w-[35%]">
        <RegionForm editId={editId} onClose={handleModalToggle} />
      </Modal>
    </>
  );
};

export default RegionHome;
