import ReactQuill from "react-quill";
import ExternalLinkIcon from "../../../../assets/icons/ExternalLinkIcon";
import BoldIcon from "../../../../assets/icons/BoldIcon";
import ItalicIcon from "../../../../assets/icons/ItalicIcon";
import UnderlineIcon from "../../../../assets/icons/UnderlineIcon";
import LinkIcon from "../../../../assets/icons/LinkIcon";
import EmojiIcon from "../../../../assets/icons/EmojiIcon";
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import { Quill } from 'react-quill';
import 'quill-emoji';
import ReactDOMServer from 'react-dom/server';
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/form/Input";


type Props = {
  onClose: () => void;
}

const MailsForm = ({ onClose }: Props) => {

  const Emoji = Quill.import('formats/emoji');
  Quill.register('modules/emoji', Emoji);
  const icons = Quill.import('ui/icons');


  const boldIconHTML = ReactDOMServer.renderToStaticMarkup(<BoldIcon size={12} color='#4B5C79' />);
  const ItalicIconHTML = ReactDOMServer.renderToStaticMarkup(<ItalicIcon color='#4B5C79' />);
  const UnderlineIconHTML = ReactDOMServer.renderToStaticMarkup(<UnderlineIcon color='#4B5C79' />);
  const LinkIconHTML = ReactDOMServer.renderToStaticMarkup(<LinkIcon color='#4B5C79' />);
  const EmojiIconHTML = ReactDOMServer.renderToStaticMarkup(<EmojiIcon color='#4B5C79' />);

  icons['bold'] = boldIconHTML;
  icons['italic'] = ItalicIconHTML;
  icons['underline'] = UnderlineIconHTML;
  icons['link'] = LinkIconHTML;
  icons['emoji'] = EmojiIconHTML;

  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link',],
      [{ 'emoji': true }],
    ],
    'emoji-toolbar': true,
    'emoji-textarea': false,
    'emoji-shortname': true,
  };


  return (
    <div>
      <div className="rounded-2xl">
        <div className="flex w-full justify-between bg-[#71736B] rounded-t-lg">
          <div className="space-y-2 p-4">
            <h3 className="text-[#FFFEFB] font-bold text-sm">Create Mails</h3>
          </div>
          <div className="flex gap-2 p-4">
            <div className="mt-1 cursor-pointer">
              <ExternalLinkIcon size={20} />
            </div>
            <div>
              <p onClick={onClose} className="text-2xl text-[#FFFEFB] cursor-pointer">&times;</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <p className="mt-3 text-[#303F58] text-xs font-semibold ms-2">To</p>
          <Input 
            placeholder='Anjela John (anjela@gmail.com)'
            type="email"
            className="w-60 h-10 bg-[#EAEEF5] rounded-[50px] flex p-2 text-[#303F58] text-xs font-semibold text-center"
            />

          {/* <div className="w-60 h-10 bg-[#EAEEF5] rounded-[50px] flex p-2">
            <div className="rounded-full w-6 h-6 overflow-hidden ms-1 mt-[1%]">
              <img src={image} alt="" />
            </div>
            <p className="text-[#303F58] text-xs font-semibold mt-1">Anjela John (anjela@gmail.com)</p>

          </div> */}
        </div>
        <p className="text-end px-6 -mt-11">Cc <span className="ms-2">Bcc</span></p>


        {/* <p className="text-[#303F58] text-sm font-semibold p-4 ms-2 mt-2">Your Subject Title</p> */}
        <Input
        placeholder="Your Subject Title"
        type="text"
        className="text-[#303F58] text-sm font-semibold outline-none w-[493px] px-4 mt-6"
        />

        <hr className="my-2" />

 
        <div className='w-full h-[300px] px-6 mt-6'>
          <ReactQuill
            value={value}
            onChange={setValue}
            placeholder="Write here your message..."
            className="quill-editor h-[250px]  text-[#4B5C79] text-sm font-normal"
            theme="snow"
            modules={modules}
          />
        </div>

        <div className='m-5 justify-end ms-[680px]'>
          <Button className="w-16 h-9" variant='primary' size='sm'>Done</Button>
        </div>


      </div>
    </div>
  )
}

export default MailsForm