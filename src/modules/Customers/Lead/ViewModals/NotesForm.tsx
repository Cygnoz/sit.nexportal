// // import ReactQuill from "react-quill";
// // import ReactQuill from "react-quill";
// import LocationIcon from "../../../../assets/icons/LocationIcon";
// import Input from "../../../../components/form/Input";
// import Select from "../../../../components/form/Select";
// import Button from "../../../../components/ui/Button";

// type Props = {
//     onClose: () => void;
// }

// const NotesForm = ({onClose}: Props) => {

//   // const modules = {
//   //   toolbar: [
//   //     ['bold', 'italic', 'underline'],
//   //     ['link', 'image'],
//   //     [{ 'emoji': true }],
//   //   ],
//   //   'emoji-toolbar': true,
//   //   'emoji-textarea': false,
//   //   'emoji-shortname': true,
//   // };


//   return (
//     <div>
//         <div className="h-fit w-fit rounded-lg">
//         <div className="flex justify-between">
//         <div className="space-y-2 p-4">
//             <h3 className="text-[#303F58] font-bold text-lg">Create Notes</h3>
//             <p className="text-[11px] text-[#8F99A9] mt-1">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//             </p>
//         </div>
//         <p onClick={onClose} className="text-3xl p-4 cursor-pointer">&times;</p>
//         </div>
          
                   
// <form>
//       <div >
//         <div className="space-y-4 px-4">
//         <Input
//             label=" Meeting Title"
//             placeholder=""
//         />
//         <Input
//             label="Add Notes"
//             placeholder=""
//         />

//         <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-3">
//             <Select
//                 label="Meeting Type"
//                 placeholder="Select Type"
//                 options={[
//                 { value: "name", label: "Kkkk" },
//                 { value: "name", label: "Taattuu" },
//                 { value: "name", label: "pipi" },
//                 ]}
//             />
//             </div>
//             <div className="col-span-3">
//             <Input
//                   type="date"
//                   label="Due Date"
//                 />
//             </div>
//             <div className="col-span-3 flex">
//             <Input
//                 label="Time"
//                 placeholder="7:28"
//             />
//             <p className="mt-9 ms-4">to</p>

//             </div>
//             {/* <div className="col-span-1">
//                 <p className="text-center mt-9">to</p>
//             </div> */}
//             <div className="col-span-3 mt-7">
//             <Input
//                 label=""
//                 placeholder="7:28 "
//             />
//             </div>
//         </div>


//             <div className="grid grid-cols-3 gap-4">
//             <Select
//                 label="Meeting Location"
//                 placeholder="Select Place"
//                 options={[
//                 { value: "name", label: "Kkkk" },
//                 { value: "name", label: "Taattuu" },
//                 { value: "name", label: "pipi" },
//                 ]}
//             />
//             <div className="flex">
//             <Input
//                 label="Location"
//                 placeholder="Enter Location"
//             />
//             <div className="mt-10 -ms-7">
//             <LocationIcon size={14}/>
//             </div>
//             </div>
//             <Input
//                 label="Landmark"
//                 placeholder="Enter Landmark"
//             />
//         </div>

//     </div>
// </div>

// <div>
  
// </div>
//           <div className=" flex justify-end gap-2 px-4 my-4">
//             <Button
//               variant="tertiary"
//               className="h-8 text-sm border rounded-lg"
//               size="lg"
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="primary"
//               className="h-8 text-sm border rounded-lg"
//               size="lg"
//               type="submit"
//             >
//               Save
//             </Button>
//           </div>
          
//         </form>
//         {/* <div className='flex items-start w-[20%] h-[50px]'>
       
//         <ReactQuill
//           // value={value}
//           // onChange={setValue}
//           placeholder="Write text here..."
//           className="quill-editor ml-4 w-[90%] h-[80%]"
//           theme="snow"
//           // modules={modules}
//           />
//           </div> */}


//         </div>
//     </div>
//   )
// }

// export default NotesForm

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import { Quill } from 'react-quill';
import 'quill-emoji';
// import Pen from '../../../../assets/icons/Pen';
// import Trash2 from '../../../../assets/icons/Trash2';
import ReactDOMServer from 'react-dom/server';
// import "./Quill.css";
import Button from '../../../../components/ui/Button';
import PencilLine from '../../../../assets/icons/PencilLine';
// import Trash from '../../../../assets/icons/Trash';
// import Button from '../../../../Components/Button';
// import ItalicIcon from '../../../../assets/icons/ItalicIcon';
// import UnderlineIcon from '../../../../assets/icons/UnderlineIcon';
// import LinkIcon from '../../../../assets/icons/LinkIcon';
// import ImageIcon from '../../../../assets/icons/ImageIcon';
// import EmojiIcon from '../../../../assets/icons/EmojiIcon';
// import BoldIcon from '../../../../assets/icons/BoldIcon';



const Emoji = Quill.import('formats/emoji');
Quill.register('modules/emoji', Emoji);
const icons = Quill.import('ui/icons');
// const boldIconHTML = ReactDOMServer.renderToStaticMarkup(<BoldIcon color='#4B5C79' />);
// const ItalicIconHTML = ReactDOMServer.renderToStaticMarkup(<ItalicIcon color='#4B5C79' />);
// const UnderlineIconHTML = ReactDOMServer.renderToStaticMarkup(<UnderlineIcon color='#4B5C79' />);
// const LinkIconHTML = ReactDOMServer.renderToStaticMarkup(<LinkIcon color='#4B5C79' />);
// const ImageIconHTML = ReactDOMServer.renderToStaticMarkup(<ImageIcon />);
// const EmojiIconHTML = ReactDOMServer.renderToStaticMarkup(<EmojiIcon />);
const boldIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine color='#4B5C79' />);
const ItalicIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine color='#4B5C79' />);
const UnderlineIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine color='#4B5C79' />);
const LinkIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine color='#4B5C79' />);
const ImageIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine />);
const EmojiIconHTML = ReactDOMServer.renderToStaticMarkup(<PencilLine />);

icons['bold'] = boldIconHTML;
icons['italic'] = ItalicIconHTML;
icons['underline'] = UnderlineIconHTML;
icons['link'] = LinkIconHTML;
icons['image'] = ImageIconHTML;
icons['emoji'] = EmojiIconHTML;

type Props = {
  onClose: () => void;
};

const Comment: React.FC<Props> = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ 'emoji': true }],
    ],
    'emoji-toolbar': true,
    'emoji-textarea': false,
    'emoji-shortname': true,
  };

  // const imgSrc = "https://s3-alpha-sig.figma.com/img/1d07/dd79/425caa4701d548ea67930c965b34768d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDNG1uH8kJDCORYIU6gY2OiXnwJ45TKOIHXSp5rpFlxBxG-ezjO7zF9CJHJ0u7nvfXp81pS0uiL9NFk3ZXnnnrWXBCl8lYcI34QSkmPZ9LeX1IYnaCDbkT1pbgsshNh78rQV8YKUVyR2DGe89caWnTzWaiK46tQR1DFEbg4BrK9GbDG3Zk9gYPMg8hzd5vHdkprIcs6tMdO0E~g66m1qJnzYtasiiq93tpppjbHECvc3nIIN7OOgL0hNimgwX6oVQlLmvwGXf113NtG4haH~loXVngkLCjfEceHqEjEMhUIBD4zKLLHucYEBPLeMBbrrREit~SC5tQ1oAIiVRMjwuA__";

  return (
    <div className="mt-6 flex justify-between">
      <div className="w-full h-[80%] align-middle">
        <div className='flex items-start w-[100%] h-[250px]'>
        {/* <img
          src={imgSrc}
          className="w-8 h-8 rounded-full"
          alt="User Avatar"
        /> */}
        <ReactQuill
          value={value}
          onChange={setValue}
          placeholder="Write text here..."
          className="quill-editor ml-4 w-[90%] h-[80%]"
          theme="snow"
          modules={modules}
          />
          </div>
          <Button className='ml-12 text-sm font-medium bg-[#FCFFED] mt-5' variant='secondary' size='sm'>Add Comments</Button>
      </div>
      {/* <div className="w-[50%] ml-6">
        <p className="text-textColor font-bold text-base">
          All Comments
          <span className="bg-cardBg w-8 h-6 ml-4 pt-1 pr-2.5 pb-1 pl-2.5 rounded font-semibold text-sm">3</span>
        </p>
        <div className="rounded-lg p-5 border border-[#DCDEE2] mt-4 mb-4 w-[85%]">
          <div className="flex items-center text-dropdownText justify-between">
            <div className='flex items-center gap-3'>
              <img src={imgSrc} alt="Comment Avatar" className="w-10 h-10 rounded-full" />
              <p className='text-sm font-medium'>Micheal Gough</p>
            </div>
            <div className='text-sm font-medium flex items-center gap-3'>
              <span className='border-r border-dropdownText pr-3'>12/07/2024</span>
              <span >10:05 AM</span>
            </div>
            <div className='flex items-center gap-3'>
              <PencilLine color='#4B5C79' size={16} />
              <Trash color='#4B5C79' />
            </div>
          </div>
          <div className='mt-4 text-xs text-dropdownText'>
            Lorem ipsum dolor sit amet consectetur. Ornare eu ac felis ut gravida. em ipsum dolor sit amet consectetur. Ornare eu ac felis ut gravida
          </div>
        </div>
        <div className="rounded-lg p-5 border border-[#DCDEE2]  w-[85%]">
          <div className="flex items-center text-dropdownText justify-between">
            <div className='flex items-center gap-3'>
              <img src={imgSrc} alt="Comment Avatar" className="w-10 h-10 rounded-full" />
              <p className='text-sm font-medium'>Micheal Gough</p>
            </div>
            <div className='text-sm font-medium flex items-center gap-3'>
              <span className='border-r border-dropdownText pr-3'>12/07/2024</span>
              <span >10:05 AM</span>
            </div>
            <div className='flex items-center gap-3'>
              <PencilLine color='#4B5C79' size={16} />
              <Trash color='#4B5C79' />
            </div>
          </div>
          <div className='mt-4 text-xs text-dropdownText'>
            Lorem ipsum dolor sit amet consectetur. Ornare eu ac felis ut gravida. em ipsum dolor sit amet consectetur. Ornare eu ac felis ut gravida
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Comment;