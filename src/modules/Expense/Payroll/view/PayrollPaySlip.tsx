
import { useNavigate } from "react-router-dom";
import ChevronRight from "../../../../assets/icons/ChevronRight";
import EmailIcon from "../../../../assets/icons/EmailIcon";
import VectorIcon from "../../../../assets/icons/VectorIcon";
import cygnoz from "../../../../assets/image/cygnozzzz.png";
type Props = {};

const PayrollPaySlip = ({ }: Props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className="flex items-center text-[16px] space-x-2 mb-4">
          <p onClick={() => navigate('/payroll')} className="font-bold cursor-pointer text-[#820000]">Payroll</p>
          <ChevronRight color="#4B5C79" size={18} />
          <p className="font-bold text-[#303F58]">
            payroll-01
          </p>
        </div>
        {/* Header Section */}
        <header className="flex justify-between items-center border-b pb-4 bg-white p-3 rounded-lg">
          <h1 className="text-xl font-semibold">Payroll-001</h1>
          <div className="flex gap-2">
            <button className="border px-4 py-2 rounded-md bg-[#FEFDFA] flex items-center">
              <span className="p-1">
                <EmailIcon size={16} />
              </span>
              Send Mail
            </button>
            <button className="border px-4 py-2 rounded-md bg-[#FEFDFA] flex items-center">
              <span className="p-1">
                <VectorIcon size={16} />
              </span>
              Print
            </button>
          </div>
        </header>


      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
          <div className="bg-[#EFEFEF] p-4  shadow-md rounded-md">
            <div className="flex justify-between mt-5">
              <p className="text-2xl font-semibold">Pay Slip</p>
              <p className="font-normal text-xs text-[#5E6470] text-right">
                CygnoNex Innovations Private Limited,
                <br />
                NGO Quarters, Kakkanad Kochi, Kerala, India
                <br />
                Phone: +91 9544431166
                <br />
                Email: notify@cygnonex.com
              </p>
            </div>
            <div>
              <section className="mt-6">



                <div className="mt-4 bg-gray-50 p-4 rounded-md shadow-sm">
                  <div>
                    <div className="grid grid-cols-4 gap-4 p-3">
                      <div>
                        <p className="text-xs font-medium">Employee ID</p>
                        <p className="text-xs font-semibold">12657</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Pay Slip ID</p>
                        <p className="text-xs font-semibold">EU5676</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Employee ID</p>
                        <p className="text-xs font-semibold">12657</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Pay Slip ID</p>
                        <p className="text-xs font-semibold">EU5676</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Employee ID</p>
                        <p className="text-xs font-semibold">12657</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Pay Slip ID</p>
                        <p className="text-xs font-semibold">EU5676</p>
                      </div>
                  
                    </div>

                    <div className="mt-14 rounded-md">
                      <table className="w-full text-left">
                        <thead className="">
                          <tr className="border-t">
                            <th className="p-3 text-xs font-semibold text-[#5E6470]">Detail</th>
                            <th className="p-3 text-xs font-semibold text-[#5E6470] text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="border-t">
                          {[
                            { name: "Basic Salary", amount: "₹45,000" },
                            { name: "New License Earning", amount: "₹10,000" },
                            { name: "Recurring Amount", amount: "₹2,000.00" },
                            { name: "Travel Elevance", amount: "₹3,000.00" },
                          ].map((item, index) => (
                            <tr key={index} className="">
                              <td className="p-3 my-6 text-xs font-semibold">{item.name}</td>
                              <td className="p-3 my-6 text-xs font-medium text-right">{item.amount}</td>
                            </tr>
                          ))}


                        </tbody>
                      </table>
                      <p className="border-t mt-9"></p>
                      <div className="mt-10 flex justify-end my-5">
                        <table className="w-[40%]">
                          <tbody>
                            <tr className="font-bold">
                              <td className="p-3">Total</td>
                              <td className="p-3">₹65,000.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="border-t mt-10"></p>
                      <div className="p-5">
                        <h3 className="text-xs font-semibold">Remarks</h3>
                        <p className="mt-2 text-xs font-medium">
                          Lorem ipsum dolor sit amet consectetur. Neque maecenas varius
                          lobortis nibh felis aliquam.
                        </p>
                      </div>
                      <div className="flex gap-16 justify-end mt-14">
                        <p className="text-xs text-[#5E6470] font-medium">Approved by</p>
                        <p className="text-xs text-[#5E6470] font-medium">Approved Date</p>
                      </div>
                      <div className="flex gap-16 justify-end my-1">
                        <p className="text-xs font-semibold text-[#1A1C21]">Sreejith Ravi</p>
                        <p className="text-xs font-semibold text-[#1A1C21]">Dec 18, 2024</p>
                      </div>
                    </div>
                  </div>



                </div>
                <div className="mt-6 flex justify-center">
                  <img src={cygnoz} alt="Cygnoz Logo" className="w-auto h-auto" />
                </div>

              </section>
            </div>
          </div>








        </div>
      </div>


    </div>
  );
};


export default PayrollPaySlip;