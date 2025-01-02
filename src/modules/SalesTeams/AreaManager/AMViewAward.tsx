import { useParams } from 'react-router-dom';
import useApi from '../../../Hooks/useApi';
import { useEffect, useState } from 'react';
import { endPoints } from '../../../services/apiEndpoints';
import UserIcon from '../../../assets/icons/UserIcon';
import No_Data_found from '../../../assets/image/NO_DATA.png';

type Props = {
    onClose: () => void;
    getData: any;
};

const AMViewAward = ({ getData, onClose }: Props) => {
    const { request: getaAWARD } = useApi('get', 3004);
    const { id } = useParams();
    const [getAwards, setGetDatas] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const getAAward = async () => {
        try {
            const { response, error } = await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${getData?.amData?.user?._id}`);
            if (response && !error) {
                setGetDatas(response?.data?.praises);
            } else {
                console.error(error.response.data);
            }
        } catch (err) {
            console.error('Error fetching AWARDS data:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAAward();
    }, [id]);

    return (
        <div>
            <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
                <div className="flex justify-between items-center">
                    <p className="text-[#303F58] font-semibold text-base">Achievements and Awards</p>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-600 text-3xl cursor-pointer hover:text-gray-900 -mt-2"
                    >
                        &times;
                    </button>
                </div>
                <div className={`h-96 ${getAwards.length > 3 ? 'overflow-y-scroll custom-scrollbar' : ''}`}>
                {loading ? (
    <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
            <div
                key={index}
                className="animate-pulse bg-gray-200 p-3 gap-3 rounded-lg my-2"
            >
                <div className="bg-gray-300 w-20 h-5 rounded-xl mb-2"></div>
                <div className="flex gap-3 mb-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="bg-gray-300 h-3 w-2/3 rounded"></div>
                </div>
                <div className="bg-gray-300 h-3 w-1/3 rounded"></div>
            </div>
        ))}
    </div>
) : getAwards?.length > 0 ? (
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
                Date Received:{' '}
                <span className="font-bold">
                    {praises?.openingDate
                        ? new Date(praises?.openingDate).toLocaleDateString()
                        : 'N/A'}
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
    );
};

export default AMViewAward;
