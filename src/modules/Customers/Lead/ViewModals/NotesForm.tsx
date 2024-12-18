
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
    'emoji-textarea': true,
    'emoji-shortname': true,
  };

  return (
    <div className="mt-6 p-4">
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
          className="quill-editor ml-4 w-[100%] h-[80%] me-4"
          theme="snow"
          modules={modules}
          />
          </div>
          <div className='mb-4 ms-[530px]'>
          <Button className='ml-12 text-sm font-medium bg-[#FCFFED] mt-5' variant='secondary' size='sm'>Add Comments</Button>
          </div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">Add Note</h2>
        <button className="text-gray-500 hover:text-black">&times;</button>
      </div>

      {/* Related To */}
      <div className="flex items-center mt-4">
        <span className="text-gray-600 mr-2">Related to:</span>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/32" // Replace with user image
            alt="Anjela John"
            className="h-8 w-8 rounded-full"
          />
          <span className="ml-2 font-semibold text-black">Anjela John</span>
        </div>
      </div>

      {/* Note Input */}
      <div className="mt-4">
        <textarea
          placeholder="Start typing. @mention people to notify them"
          className="w-full h-32 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mt-3 text-gray-600">
        {/* <div className="flex gap-4">
          <button className="hover:text-blue-500">
            <i className="fas fa-list-ul"></i> {/* List Icon */}
          {/* </button> */}
          {/* <button className="hover:text-blue-500 font-bold">B</button>
          <button className="hover:text-blue-500 italic">I</button>
          <button className="hover:text-blue-500 underline">U</button>
          <button className="hover:text-blue-500 line-through">S</button>
          <button className="hover:text-blue-500">
            <i className="fas fa-link"></i> {/* Link Icon */}
          {/* </button>
          <button className="hover:text-blue-500">
            <span role="img" aria-label="emoji">
              🙂
            </span>
          </button>
        </div> */} 

<ReactQuill
          value={value}
          onChange={setValue}
          placeholder="Write text here..."
          className="quill-editor ml-4 w-[100%] h-[80%] me-4"
          theme="snow"
          modules={modules}
          />
        
        <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">
          Done
        </button>
      </div>
    </div>

    </div>
  );
};

export default Comment;