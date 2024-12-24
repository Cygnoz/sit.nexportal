import { useParams } from 'react-router-dom';
import useApi from '../../../../Hooks/useApi';
import { useEffect, useState } from 'react';
import { endPoints } from '../../../../services/apiEndpoints';
import UserIcon from '../../../../assets/icons/UserIcon';

type Props = {
    onClose: () => void;
    data: any
}

const BDAViewAward = ({ data }: Props) => {
    const {request: getaAWARD}=useApi('get',3004)
    const {id}= useParams()
     const [getAwards, setGetDatas] = useState<any>([])
    console.log(data);
     
    console.log(data?.bdaData);
       const getAAward = async()=>{
            try{
              const {response,error}= await getaAWARD(`${endPoints.GET_ONE_PRAISE}/${data?.bdaData?.user?._id}`);
            //   console.log(response);
            //   console.log(error);
              
              if(response && !error){
                console.log(response?.data?.praises);
                setGetDatas(response?.data?.praises);
                
              }
              else{
                console.error(error.response.data)
              }
            }
            catch(err){
              console.error("Error fetching AWARDS data:", err);
            }
          }
          useEffect(()=>{
            getAAward();
          },[id])
          console.log(getAwards);
    return (
        <div>
            <div className="p-3 bg-[#FFFFFF] gap-4 mt-3 rounded-lg">
                <p className="text-[#303F58] font-semibold text-base">Achievements and Awards</p>
                <div className='h-96 overflow-y-scroll custom-scrollbar'>
                {getAwards?.map((praises: any) => (
                    <div className="bg-[#F5F9FC] p-4 gap-3 h-auto rounded-lg my-3">
                        <p className="bg-[#9DF6B42E] w-fit h-7 p-2 rounded-xl mb-3 text-[#303F58] font-semibold text-xs">{praises?.achievement}</p>
                        <div className="flex gap-4 mb-3">
                           
                                {
                                    praises?.userDetails?.userImage ?
                                        <img className="w-8 h-8 rounded-full" src={praises?.userDetails?.userImage} alt="" />
                                        :
                                        <p className="w-8 h-8    bg-black rounded-full flex justify-center items-center">
                                            <UserIcon color="white" size={18} />
                                        </p>
                                }

                           
                            <p className="mb-2 text-[#4B5C79] text-xs font-normal mt-1">{praises?.notes}</p>
                        </div>
                        <p className="text-[#303F58] font-normal text-xs">Date Received: <span className="font-bold">{praises.openingDate ? new Date(praises?.openingDate).toLocaleDateString() : 'N/A'}</span></p>
                    </div>
                ))}
                </div>
                

            </div>
        </div>
    )
}

export default BDAViewAward