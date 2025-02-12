import React from 'react';
import PayrollTable from '../../modules/Expense/Payroll/PayrollTable';


interface Props {
  onClose: () => void;
  salaryDetails: any;
}

const SalaryInfoModal: React.FC<Props> = ({ onClose, salaryDetails }) => {
 // console.log(salaryDetails);
  
  const columns = [
    { key: 'month', label: 'Month' },
    { key: 'payRollStatus', label: 'Payslip Status' },
    { key: 'totalSalary', label: 'Total Salary' },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="px-2">
          <h1 className="font-bold text-sm">Salary Information</h1>
          <p className="text-xs mt-2 font-normal text-[#8F99A9]">
            Growth is the only constant, let's chase it together
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>
      </div>
      <div className="flex justify-between p-4 border rounded-lg bg-gray-100 mt-3">
      
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">Salary Amount</p>
          <p className="font-bold text-xs text-[#303F58]">₹ {salaryDetails.basicSalary}</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">No of License</p>
          <p className="font-bold text-xs text-[#303F58]">{salaryDetails.licenserCount}</p>
        </div>
        <div>
          <p className="text-[#8F99A9] text-xs font-medium">
            No of Recurring Licenses
          </p>
          <p className="font-bold text-xs text-[#303F58]">
     {salaryDetails.totalRenewalCount}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <PayrollTable 
        data={salaryDetails.payrollRecords} 
        columns={columns} 
        noAction />
      </div>
    </div>
  );
};

export default SalaryInfoModal;
