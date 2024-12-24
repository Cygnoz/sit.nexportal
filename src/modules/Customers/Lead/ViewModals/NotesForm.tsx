

import { useState } from 'react';
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


type Props = {
  onClose: () => void;
}

const NotesForm = ({ onClose }: Props) => {
  const [value, setValue] = useState('');

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
        <div className='my-4'>
          <div className="flex gap-2">
            <p className='text-[#4B5C79] text-sm font-normal my-2'>Related to: </p>
            <Input
              placeholder='Anjela John'
              type="email"
              className="w-fit h-fit flex p-2 mt-1 text-[#303F58] text-xs font-semibold"
            />

          </div>
        </div>

        <div className='w-full h-full mb-4 bg-[#FAFAFA]'>
          <ReactQuill
            value={value}
            onChange={setValue}
            placeholder="Start typing. @mention people to notify them"
            className="quill-editor h-[300px] text-[#4B5C79] text-sm font-normal outline-none"
            theme="snow"
            modules={modules}
          />
        </div>
      </div>
      <div className='m-4 flex justify-end'>
        <Button className='w-16 h-9 ms-2' variant='primary' size='sm'>Done</Button>
      </div>

    </div>
  )
}

export default NotesForm