import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { endPoints } from '../../../services/apiEndpoints';
import useApi from '../../../Hooks/useApi';
import UserIcon from '../../../assets/icons/UserIcon';
import No_Data_found from '../../../assets/image/NO_DATA.png'
//import { Log } from 'victory';

type Props = {
    onClose: () => void;
    getData: any
}

const RMViewAward = ({ getData, onClose }: Props) => {


    const { request: getaAWARD } = useApi('get', 3004)
    const { id } = useParams()
    const [getAwards, setGetDatas] = useState<any>([])

    ///console.log(id);
    console.log(getData);
    console.log(getData?.rmData);

    const getAAward = async () => {
        try {
            const { response, error } = await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${getData?.rmData?.user?._id}`);
            //   console.log(response);
            //   console.log(error);

            if (response && !error) {
                console.log(response?.data?.praises);
                setGetDatas(response?.data?.praises);

            }
            else {
                console.error(error.response.data)
            }
        }
        catch (err) {
            console.error("Error fetching AWARDS data:", err);
        }
    }
    useEffect(() => {
        getAAward();
    }, [id])
    console.log(getAwards);

    //const navigate=useNavigate()
    return (
        <div>
            <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
               <div className='flex justify-between'>
               <p className="text-[#303F58] font-semibold text-base">Achievements and Awards</p>
                <button
          type="button"
          onClick={onClose}
          className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900"
        >
          &times;
        </button>
               </div>
                <div className={`h-96 ${getAwards.length > 3 ? 'overflow-y-scroll custom-scrollbar' : ''}`}>
                    {getAwards?.length > 0 ? (
                        getAwards.map((praises: any) => (
                            <div key={praises?.id} className="bg-[#F5F9FC] p-4 gap-3 h-auto rounded-lg my-3">
                                <p className="bg-[#9DF6B42E] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">
                                    {praises?.achievement}
                                </p>
                                <div className="flex gap-4 mb-3">
                                    {praises?.userDetails?.userImage ? (
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src={praises?.userDetails?.userImage}
                                            alt="User"
                                        />
                                    ) : (
                                        <p className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                                            <UserIcon color="white" size={18} />
                                        </p>
                                    )}
                                    <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">
                                        {praises?.notes}
                                    </p>
                                </div>
                                <p className="text-[#303F58] font-normal text-xs">
                                    Date Received:{" "}
                                    <span className="font-bold">
                                        {praises?.openingDate
                                            ? new Date(praises?.openingDate).toLocaleDateString()
                                            : "N/A"}
                                    </span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center flex-col items-center h-full">
                            <img width={70} src={No_Data_found} alt="No Data Found" />
                            <p className="font-bold text-red-700">No Achievements Found!</p>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default RMViewAward