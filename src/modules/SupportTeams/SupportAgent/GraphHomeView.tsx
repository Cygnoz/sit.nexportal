import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import profileImage from '../../../assets/image/AvatarImg.png';
import RatingStar from '../../../components/ui/RatingStar';
import useApi from '../../../Hooks/useApi';
import SelectDropdown from '../../../components/ui/SelectDropdown';
import { useEffect, useState } from 'react';
import { endPoints } from '../../../services/apiEndpoints';
import No_Data_found from '../../../assets/image/NO_DATA.png'
import { months, years } from '../../../components/list/MonthYearList';

type Props = {
  id:any
}

const GraphHomeView = ({ id}: Props) => {

  const { request: getTicketOvertime } = useApi('get', 3003)
  const [selectedMonth, setSelectedMonth] = useState<any>(months[0]);
  const [selectedYear,setSelectedYear]=useState<any>(years[years.length-1])
  const [selectedData, setSelectedDate] = useState<string>(`${selectedYear.value}-1-1`);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      // Convert month name to number (1-12)
      const monthIndex = months.findIndex((m) => m.value === selectedMonth.value) + 1;
      setSelectedDate(`${selectedYear.value}-${monthIndex}-1`);
    }, [selectedMonth, selectedYear]);
  const formatDate = (date: any) => {
    // Convert "2024-08-05" to "Aug 05"
    const options: any = { month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const getOvertime = async () => {
    try {
      const endPoint = `${endPoints.GET_TICKETS}/overtime/${id}?date=${selectedData}`
      const { response, error } = await getTicketOvertime(endPoint)
      console.log('res', response);
      console.log(endPoint);
      if (response && !error) {
        console.log(response.data);

        const transformedData = response.data.ticketsOverTime.map((item: any) => ({
          name: formatDate(item.date),
          TC: item.ticketCount,
        }))
        setChartData(transformedData)
        console.log(transformedData);
        
      }
      else {
        console.log(error.response.data.message)
      }
    }
    catch (err) {
      console.error('error message', err)
    }
  }
  useEffect(() => {
    getOvertime()
  }, [selectedMonth])


  const Star = [
    {

      ratingCount: 4,
    },
    {


      ratingCount: 3,
    },
    {

      ratingCount: 5,
    },


  ];

  // const datas = [
  //   {
  //     name: 'Jan 05',

  //     Area1: 0,
  //     amt: 9000,
  //   },
  //   {
  //     name: 'Jan 10',
  //     Area1: 2563,

  //     amt: 9777,
  //   },
  //   {
  //     name: 'Jan 15',
  //     Area1: 1998,

  //     amt: 8000,
  //   },
  //   {
  //     name: 'Jan 20',
  //     Area1: 3890,

  //     amt: 6000,
  //   },
  //   {
  //     name: 'Jan 25',
  //     Area1: 2890,

  //     amt: 2181,
  //   },
  //   {
  //     name: 'Jan 30',
  //     Area1: 5890,

  //     amt: 2500,
  //   },

  // ];
  // const [selectedYear, setSelectedYear]=useState({label:'Select Year',vale:''})
  // const handleYearSelection=(selectedOption:any)=>{
  //   setSelectedYear(selectedOption)
  // }

  // const yearOptions=[
  //   {label:'2020', value:'2020'},
  //   {label:'2021', value:'2021'},
  //   {label:'2022', value:'2022'},
  //   {label:'2023', value:'2023'},
  //   {label:'2024', value:'2024'},
  //   {label:'2025', value:'2025'},
  // ]

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-9">
          <div className="py-1 bg-white mt-2  rounded-lg">
            <div className="py-1 ms-2 flex justify-between mt-3 px-4 gap-4 m-2">
              <h2 className='font-bold'>Tickets OverTime</h2>
              <div className="flex gap-1">
                <label htmlFor="month-select"></label>

                <SelectDropdown
                  setSelectedValue={setSelectedMonth}
                  selectedValue={selectedMonth}
                  filteredData={months}
                  placeholder='Select Month'
                 // searchPlaceholder="Search Month"
                  width="w-44"
                />
                <SelectDropdown
                  setSelectedValue={setSelectedYear}
                  selectedValue={selectedYear}
                  filteredData={years}
                  placeholder='Select Year'
                 // searchPlaceholder="Search Year"
                  width="w-44"
                />
              </div>
            </div>
            <div className="mt-3 p-2 gap-4">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" minHeight={400}>
                  <LineChart
                    width={900}
                    height={450}
                    data={chartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />

                    <Line type="monotone" dataKey="Area1" stroke="#e2b0ff" strokeWidth={3} dot={false} />

                  </LineChart>
                </ResponsiveContainer>
              )
                :
                (
                  <div className="flex justify-center flex-col items-center">
                    <img width={70} src={No_Data_found} alt="No Data Found" />
                    <p className="font-bold text-red-700">No Records Found!</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="p-3 bg-[#FFFFFF] gap-4 mt-2 rounded-lg">
            <p className="text-[#303F58] font-semibold text-base">Customer Feedback</p>
            {
              Star.map((Stars) => (
                <div className="bg-[#F5F9FC] p-4 gap-3 w-fit h-fit rounded-lg my-4">
                  <p className="mb-2 text-[#303F58] font-bold text-xs">Quick and efficient service</p>
                  <div className="flex gap-4 mb-2">
                    <div className="rounded-full w-7 h-7 overflow-hidden">
                      <img src={profileImage} alt="" />
                    </div>
                    <p className="mb-2 text-[#303F58] text-xs font-medium">Bessie Cooper</p>
                    <p><RatingStar size={16} count={Stars.ratingCount} /></p>
                  </div>
                  <p className="text-[#4B5C79] font-normal text-xs">The support agent was very responsive and resolved my issue quickly. I appreciated the help</p>
                </div>
              ))
            }



          </div>

        </div>

      </div>

    </div>
  )
}

export default GraphHomeView