import { useNavigate } from 'react-router-dom';
import AreaManagerIcon from '../../../../assets/icons/AreaMangerIcon';
import Bell from '../../../../assets/icons/Bell';
import CalenderDays from '../../../../assets/icons/CalenderDays';
import RegionIcon from '../../../../assets/icons/RegionIcon';
import Table from '../../../../components/ui/Table';

type Props = {}
interface PaymentData {
    paymentDate: string;
    amount: number;
    paymentMode: string;
    status: string;
    paymentID: string;
    renewalStatus: string;
  }

function PaymentTable({}: Props) {
    const navigate=useNavigate()
    // Payment history data
const paymentData: PaymentData[] = [
    { paymentDate: '12-12-2012', amount: 4500.00, paymentMode: 'UPI', status: 'Paid', paymentID: 'PAY123456', renewalStatus: 'Auto renew' },
    { paymentDate: '12-12-2012', amount: 4500.00, paymentMode: 'Credit Card', status: 'Paid', paymentID: 'PAY123456', renewalStatus: 'Pending' },
    { paymentDate: '12-12-2012', amount: 4500.00, paymentMode: 'Net Banking', status: 'Paid', paymentID: 'PAY123456', renewalStatus: 'Renewed' },
    { paymentDate: '12-12-2012', amount: 4500.00, paymentMode: 'Cash', status: 'Paid', paymentID: 'PAY123456', renewalStatus: 'Auto renew' },
    { paymentDate: '12-12-2012', amount: 4500.00, paymentMode: 'Debit Card', status: 'Paid', paymentID: 'PAY123456', renewalStatus: 'Pending' },
  ];
  
  // Columns for the payment history table
  const paymentColumns:{ key: keyof PaymentData; label: string }[] = [
    { key: "paymentDate", label: "Payment Date" },
    { key: "amount", label: "Amount" },
    { key: "paymentMode", label: "Payment Mode" },
    { key: "status", label: "Status" },
    { key: "paymentID", label: "Payment ID" },
    { key: "renewalStatus", label: "Renewal Status" },
  ];

  const handleView=(id:any)=>{
    navigate(`/trialView/${id}`)
  }
  
  
  return (
    <>
   <div>
    <Table<PaymentData> data={paymentData} columns={paymentColumns} headerContents={{
      title:'Payment History',
      search:{placeholder:'Search'},
      sort: [
        {
          sortHead: "Sent Notifications",
          sortList: [
            { label: "Sent Notifications", icon: <Bell size={14} color="#4B5C79"/> },
            { label: "Sort by Age", icon: <RegionIcon size={14} color="#4B5C79"/> },
            { label: "Sort by supervisorCode", icon: <AreaManagerIcon size={14} color="#4B5C79"/> },
            { label: "Sort by Age", icon: <CalenderDays size={14} color="#4B5C79"/> }
          ]
        }
  ]
    }}
    actionList={[
        { label: 'view', function: handleView },
      ]}
     noPagination
     maxHeight='450px'
    />
  </div>
   </>
  )
}

export default PaymentTable