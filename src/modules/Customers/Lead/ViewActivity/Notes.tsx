import { useEffect, useState } from "react"
import Notebook from "../../../../assets/icons/Notebook"
import PencilLine from "../../../../assets/icons/PencilLine"
import Trash from "../../../../assets/icons/Trash"
import Button from "../../../../components/ui/Button"
// import NotesForm from "../View/NotesForm"
import Modal from "../../../../components/modal/Modal"
import NotesForm from "../ViewModals/NotesForm"
import SearchBar from "../../../../components/ui/SearchBar"
import useApi from "../../../../Hooks/useApi"
import { useParams } from "react-router-dom"
import { endPoints } from "../../../../services/apiEndpoints"
import DOMPurify from "dompurify"; 

type Props = {}

const Notes = ({ }: Props) => {

    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [editId,setEditId]=useState('')

    // Function to toggle modal visibility
    const handleModalToggle = (editId?:any) => {
        setIsModalOpen((prev) => !prev);
        getNotes();
        setEditId(editId)

    };

    // const handleEdit=(id:any)=>{
    //     handleModalToggle()
    //    ./// setEditId(id)
    //   }

    const [searchValue, setSearchValue] = useState<string>("");
    const { request: getLeadNote } = useApi('get', 3001);
    const [noteData, setNoteData] = useState<any[]>([])

     const { id } = useParams()

     const getNotes = async () => {
        try {
            const { response, error } = await getLeadNote(`${endPoints.GET_ALL_LEAD_ACTIVITIES}/${id}`)
            console.log(response);
            console.log(error);
            if (response && !error) {
                console.log(response.data);
                const taskActivities = response.data.activities.filter((activity:any) => activity?.activityType === 'Note');
                setNoteData(taskActivities)
                console.log(taskActivities);
               
            }
            else {
                console.log(error.response.data.message);
            }
        }
        catch (err) {
            console.log(err, "error message");
 
        }
    }
    useEffect(() => {
        getNotes()
    }, [])
    console.log(noteData);

    return (
        <div>
            <div className="w-full h-fit rounded-lg p-5 gap-5 bg-[#FFFFFF]">
                <div className="flex justify-between">
                    <div className="flex gap-6">
                        <p className="text-[#303F58] text-sm font-bold p-2">Notes</p>
                        <SearchBar
                            placeholder="Search"
                            searchValue={searchValue}
                            onSearchChange={setSearchValue}
                        />
                    </div>            {/* <SearchBar placeholder="Search" searchValue="" onSearchChange={} /> */}
                    <Button onClick={handleModalToggle} className="text-[#565148] text-base rounded-lg w-fit h-9 bg-[#FEFDFA] border-[#565148]" variant="secondary">+<span className="text-xs">Add Notes</span></Button>
                </div>

                {noteData.map((meeting) => (
                <div className="bg-[#FAFAFA] w-full h-fit rounded-xl my-5">
                    <div className="flex justify-between p-5">
                        <div className="flex gap-3">
                            <div className="bg-[#F3E6E6] rounded-full size-8 px-2 py-2"> <Notebook color="#820000" size={18} /></div>
                            <p className="mt-1 text-[#303F58] text-xs font-semibold">{meeting?.relatedTo}</p>
                        </div>
                        <div className="text-[#4B5C79] text-xs font-semibold">
                        {new Date(meeting?.updatedAt
                        ).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
                        </div>
                    </div>
                    <div className="flex justify-between p-5">
                    <div
  className="flex gap-4 ms-2 bg-[#FFFFFF] w-[680px] p-1 rounded "
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(meeting?.note || ""),
  }}
/>
                        <div className="flex gap-4">
                            <div className="">
                                <div className="ms-1" onClick={()=>handleModalToggle(meeting?._id)}><PencilLine color="#303F58" size={16} /></div>
                                <p className="text-[#303F58] text-xs font-normal mt-1">Edit</p>
                            </div>
                            <div className="">
                                <div className="ms-2"><Trash color="#303F58" size={16} /></div>
                                <p className="text-[#303F58] text-xs font-normal mt-1">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                   ))}



            </div>

            <Modal className="w-[45%]" open={isModalOpen} onClose={handleModalToggle}>
                <NotesForm editId={editId} onClose={handleModalToggle} />
            </Modal>

        </div>
    )
}

export default Notes