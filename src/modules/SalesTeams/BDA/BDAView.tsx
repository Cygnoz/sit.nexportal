import UserIcon from "../../../assets/icons/UserIcon";
// import Button from "../../../components/ui/Button";
import Licensers from "../../../components/ui/Licensers";
import Table from "../../../components/ui/Table";
import ViewCard from "../../../components/ui/ViewCard"
import GraphTable from "./GraphTable";
interface BDAViewData {
  leadId:string;
  leadName: string;
  phoneNo: string;
  email: string;
  origin:string;
  assignedDate:string;
  status: string;
}


type Props = {}

const BDAView = ({}: Props) => {
  const viewCardData = [
    { icon: <UserIcon />, number: "189", title: "Total Area Managed", iconFrameColor: '#1A9CF9', iconFrameBorderColor: '#BBD8EDCC' },
    // { icon: <AreaManagerIcon />, number: "498", title: "Total BDA's", iconFrameColor: '#D786DD', iconFrameBorderColor: '#FADDFCCC' },
  ];

  const handleEditDeleteView = (editId?: any, viewId?: any, deleteId?: any) => {
    if (viewId) {
      // navigate(`/amView/${viewId}`)
      console.log(viewId);

    }
    console.log(editId);
    console.log(deleteId);
    
  }
  // Data for the table
  const data: BDAViewData[] = [
    { leadId:"LD12345", leadName: "Devid Billie", phoneNo: "(406) 555-0120", email: "danten@mail.ru", origin:"Website", assignedDate:"7/11/19", status: "New",  },
    { leadId:"LD12345", leadName: "Sudeep Kumar", phoneNo: "(406) 555-0120", email: "danten@mail.ru", origin:"Referral", assignedDate:"7/11/19", status: "Contacted",  },
    { leadId:"LD12345", leadName: "Kathryn Murphy", phoneNo: "(406) 555-0120", email: "irnabela@gmail.com", origin:"Website", assignedDate:"7/11/19", status: "Closed",  },
    { leadId:"LD12345", leadName: "Darrell Steward", phoneNo: "(406) 555-0120", email: "irnabela@gmail.com", origin:"Event", assignedDate:"7/11/19", status: "New", },
  ];
  // Define the columns with strict keys
  const columns: { key: keyof BDAViewData; label: string }[] = [
    { key: "leadId", label: "Lead ID" },
    { key: "leadName", label: "Lead Name" },
    { key: "phoneNo", label: "Phone Number" },
    { key: "email", label: "Email Address" },
    { key: "origin", label: "Status" },
    { key: "assignedDate", label: "Assigned Date" },
    { key: "status", label: "Status" },
  ];
  

  const LicencerData = [
    { plan: "1", name: "John Doe", startDate: "2024-01-01", endDate: "2024-12-31", status: "Active", buttonValue: "Renew" },
    { plan: "2", name: "Jane Smith", startDate: "2023-06-15", endDate: "2024-06-14", status: "Expired", buttonValue: "Renew" },
    { plan: "1", name: "Robert Brown", startDate: "2024-03-01", endDate: "2025-02-28", status: "Active", buttonValue: "Renew" },
    { plan: "3", name: "Emily Clark", startDate: "2023-11-20", endDate: "2024-11-19", status: "Pending Renewal", buttonValue: "Upgrade" },
    { plan: "2", name: "Jessica Davis", startDate: "2023-08-05", endDate: "2024-08-04", status: "Expired", buttonValue: "Renew" }
  ];


  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
        <div className="mt-4">
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
          <div className="mt-3">
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
          <div className="mt-3">
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
          <div className="mt-3">
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

        </div>
        <div className="col-span-5">
        </div>
        <div className="col-span-5"></div>
      </div>
        
     {/* Table Section */}
      <div className="ms-4 mt-4">
        <Table<BDAViewData> data={data} columns={columns} headerContents={{
          title: "Leads Details",
          search: { placeholder: 'Search BDA by Name' },
        }}
        actionList={[
          { label: 'view', function: handleEditDeleteView },
        ]} />
      </div>

      {/* Graph & Table */}
      <GraphTable/>

        {/* Licenser Card */}
        <div className="py-2">
        <Licensers headerContents={{
          title: 'Licensers handled by BDA',
          search: { placeholder: 'Search License by Name or Holder Name' }
        }}
          cardContents={LicencerData}
        />
      </div>


    </div>
  )
}

export default BDAView