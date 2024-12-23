import AreaManagerIcon from "../../../assets/icons/AreaMangerIcon";
import LeadsCardIcon from "../../../assets/icons/LeadsCardIcon";
import Licensor from "../../../assets/icons/Licensor";
import UserIcon from "../../../assets/icons/UserIcon";
import Table from "../../../components/ui/Table"
import ViewCard from "../../../components/ui/ViewCard";

interface AMViewData {
    BDAname: string;
    leadAssigned: string;
    conversionRate: string;
    status: string;
    area: string;
  }
  
type Props = {}

const AMViewCardandTable = ({}: Props) => {

    const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
        if (viewId) {
          // navigate(`/amView/${viewId}`)
          console.log(viewId);
    
        }
        console.log(editId);
        console.log(deleteId);
      }

    const viewCardData = [
        { icon: <UserIcon />, number: "189", title: "Total Area Manager", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
        { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
      ];
    
      const SecondCard = [
        { icon: <LeadsCardIcon />, number: "46", title: "Total Leads", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
        { icon: <Licensor />, number: "147", title: "Total Licensers", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
      ];
      const ThirdCard = [
        // { icon: <LeadsCardIcon />, number: "147", title: "Lead Conversion rate", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
        { icon: <Licensor />, number: "147", title: "Closed Licenses", iconFrameColor: '#DD8686', iconFrameBorderColor: '#E9CBCBCC' },
      ];
    
      // Data for the table
      const data: AMViewData[] = [
        { BDAname: "Devid Billie", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
        { BDAname: "Sudeep Kumar", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
        { BDAname: "Kathryn Murphy", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
        { BDAname: "Darrell Steward", leadAssigned: "45", conversionRate: "32%", status: "New", area: "Area 2", },
      ];
      // Define the columns with strict keys
      const columns: { key: keyof AMViewData; label: string }[] = [
        { key: "BDAname", label: "BDA Name" },
        { key: "leadAssigned", label: "Leads Assigned" },
        { key: "conversionRate", label: "Conversion Rate" },
        { key: "status", label: "Status" },
        { key: "area", label: "Area" },
      ];
    
    
  return (
    <div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">
          {/* Cards Section */}
          <div className="flex gap-3 py-2 justify-between mt-4">
            {viewCardData.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>
          <div className="flex gap-3 py-2 justify-between mt-2">
            {SecondCard.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>
          <div className="py-2 w-full mt-2 ">
            {ThirdCard.map((card, index) => (
              <ViewCard
                iconFrameColor={card.iconFrameColor}
                iconFrameBorderColor={card.iconFrameBorderColor}
                key={index}
                icon={card.icon}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>

        </div>
        <div className="col-span-8">
          {/* Table Section */}
          <div className="ms-4 py-2 mt-4">
            <Table<AMViewData> data={data} columns={columns} headerContents={{
              title: "BDA's",
              search: { placeholder: 'Search BDA by Name' },
            }}
              actionList={[
                { label: 'view', function: handleEditDeleteView },
              ]} 
              noPagination 
              maxHeight="300px"/>
          </div>

        </div>
        </div>
    </div>
  )
}

export default AMViewCardandTable