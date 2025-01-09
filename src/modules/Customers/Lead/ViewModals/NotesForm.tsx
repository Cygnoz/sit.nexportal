

import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import { Quill } from 'react-quill';
import 'quill-emoji';
// import Pen from '../../../../assets/icons/Pen';
// import Trash2 from '../../../../assets/icons/Trash2';
import ReactDOMServer from 'react-dom/server';
// import "./Quill.css";
// import PencilLine from '../../../../assets/icons/PencilLine';
import BoldIcon from '../../../../assets/icons/BoldIcon';
import ItalicIcon from '../../../../assets/icons/ItalicIcon';
import UnderlineIcon from '../../../../assets/icons/UnderlineIcon';
import LinkIcon from '../../../../assets/icons/LinkIcon';
import EmojiIcon from '../../../../assets/icons/EmojiIcon';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/form/Input';
import StrikeThroughIcon from '../../../../assets/icons/StrikeThroughIcon';
import NumberListIcon from '../../../../assets/icons/NumberListIcon';
import BulletListIcon from '../../../../assets/icons/BulletListIcon';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useParams } from 'react-router-dom';
import { LeadNoteData } from '../../../../Interfaces/LeadNote';
import { SubmitHandler, useForm } from 'react-hook-form';
import useApi from '../../../../Hooks/useApi';
import { endPoints } from '../../../../services/apiEndpoints';
import toast from 'react-hot-toast';

type Props = {
  onClose: () => void;
  editId?: any;
}


const validationSchema = Yup.object().shape({
    activityType: Yup.string(), // Ensure it's validated as "Meeting".
    leadId: Yup.string(),
    relatedTo:Yup.string(),
    noteMembers:Yup.string(),
    note:Yup.string(),
});

const NotesForm = ({ onClose ,editId}: Props) => {
  console.log("editId",editId);
  
  const { id } = useParams()
        console.log(id);
  
      const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
        watch,
    } = useForm<LeadNoteData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
          activityType: "Note",
          leadId: id
      }
      });
    
      console.log(errors);

      const [quillValue, setQuillValue] = useState<any>();
      const {request: addLeadNote}=useApi('post',3001)

  const Emoji = Quill.import('formats/emoji');
  Quill.register('modules/emoji', Emoji);
  const icons = Quill.import('ui/icons');
  const OrderedListIconHTML = ReactDOMServer.renderToStaticMarkup(<NumberListIcon color='#4B5C79' />);
  const BulletListIconHTML = ReactDOMServer.renderToStaticMarkup(<BulletListIcon color='#4B5C79' />);
  const boldIconHTML = ReactDOMServer.renderToStaticMarkup(<BoldIcon size={12} color='#4B5C79' />);
  const ItalicIconHTML = ReactDOMServer.renderToStaticMarkup(<ItalicIcon color='#4B5C79' />);
  const UnderlineIconHTML = ReactDOMServer.renderToStaticMarkup(<UnderlineIcon color='#4B5C79' />);
  const StrikeIconHTML = ReactDOMServer.renderToStaticMarkup( <StrikeThroughIcon color='#4B5C79' /> );
  const LinkIconHTML = ReactDOMServer.renderToStaticMarkup(<LinkIcon color='#4B5C79' />);
  const EmojiIconHTML = ReactDOMServer.renderToStaticMarkup(<EmojiIcon color='#4B5C79' />);

  icons['list-ordered'] = OrderedListIconHTML;
  icons['list-bullet'] = BulletListIconHTML;
  icons['bold'] = boldIconHTML;
  icons['italic'] = ItalicIconHTML;
  icons['underline'] = UnderlineIconHTML;
  icons['strike'] = StrikeIconHTML;
  icons['link'] = LinkIconHTML;
  icons['emoji'] = EmojiIconHTML;



  const modules = {
    toolbar: [
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Add ordered and bullet lists
      ['bold', 'italic', 'underline', 'strike'],
      ['link'],
      [{ 'emoji': true }],
    ],
    'emoji-toolbar': true,
    'emoji-textarea': false,
    'emoji-shortname': true,
  };

  const onSubmit: SubmitHandler<LeadNoteData> = async (data: any, event) => {
    event?.preventDefault(); // Prevent default form submission behavior
    console.log("Data", data);
    try {
      const {response , error} = await addLeadNote(endPoints.LEAD_ACTIVITY,data)
      if (response && !error) {
        console.log(response.data);
        toast.success(response.data.message)
        onClose();
      } else {
        console.log(error.data.message);
        
      }
    } catch (err) {
      console.error("Error submitting lead note data:", err);
      toast.error("An unexpected error occurred."); // Handle unexpected errors
    }
  };


useEffect(()=>{
 if(quillValue){
  setValue("note",quillValue)
 }
},[quillValue])

console.log("darssss",errors);


  return (
    <div>
      <div className='p-4 mb-6 h-full'>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-lg font-bold text-deepStateBlue ">
              Add Note
            </h1>
          </div>
          <div>
            <p onClick={onClose} className="text-3xl cursor-pointer">&times;</p>
          </div>

        </div>
        <form className='my-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2"  >
            <p className='text-[#4B5C79] text-sm font-normal my-2'>Related to: </p>
            <Input
              placeholder='Anjela John'
              {...register("relatedTo")}
              value={watch("relatedTo")}
              className="w-fit h-fit flex p-2 mt-1 text-[#303F58] text-xs font-semibold"
            />

          </div>
          <div className='w-full h-full mb-4'>
          <ReactQuill
            value={quillValue}
            onChange={setQuillValue}
            placeholder="Start typing. @mention people to notify them"
            className="quill-editor h-[300px] text-[#4B5C79] text-sm font-normal outline-none"
            theme="snow"
            modules={modules}
          />
        </div>
        <div className='mt-16 flex justify-end'>
        <Button type="submit" className='w-16 h-9 ms-2' variant='primary' size='sm'>Done</Button>
      </div>
        </form>

        

      </div>
      
    </div>
  )
}

export default NotesForm