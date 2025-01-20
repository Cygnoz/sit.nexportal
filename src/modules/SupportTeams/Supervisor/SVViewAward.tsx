import { useEffect, useState } from 'react';
import UserIcon from '../../../assets/icons/UserIcon';
import NoRecords from '../../../components/ui/NoRecords';
import useApi from '../../../Hooks/useApi';
import { endPoints } from '../../../services/apiEndpoints';

type Props = {
    onClose: () => void;
    getData: any;
    id:any
};

const SVViewAward = ({ getData, onClose,id }: Props) => {
    const { request: getaAWARD } = useApi('get', 3004);
    const [getAwards, setGetDatas] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const getAAward = async () => {
        try {
            const { response, error } = await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${getData?.svData?.user?._id}`);
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
                        <NoRecords text="No Achievments Found" parentHeight="430px" imgSize={90} textSize="lg"/>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SVViewAward;
