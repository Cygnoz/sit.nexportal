import ImportFileIcon from '../../../assets/icons/ImportFileIcon';
import Button from '../../../components/ui/Button';

type Props = {
    onClose: () => void;
}

function ImportLeadModal({onClose}: Props) {
  return (
    <div className='p-4' >
      <header className='bg-[#FDF8F0] p-2 flex justify-between rounded-lg items-center' >
        <p className='font-bold text-lg'>ImportLead</p>
        <p className='text-3xl cursor-pointer' onClick={onClose}>&times;</p>
      </header>

      <div className='flex justify-center text-sm items-center mt-6 space-y-7 flex-col'>
      <ImportFileIcon />
      <p className='text-lg font-bold'>Drag and Drop your File here</p>
      <p className='text-lg font-bold'>Or</p>
      <label className="cursor-pointer text-center" htmlFor="file-upload">
  <input
    id="file-upload"
    type="file"
    className="hidden"
    onChange={(e) => console.log(e.target.files)} // Handle file selection
  />
  <Button
    variant="primary"
    className="px-7"
    size="sm"
    onClick={() => document?.getElementById('file-upload')?.click()} // Trigger file input
  >
    Browse
  </Button>
</label>

      </div>
      <Button
                  variant="tertiary"
                  className="h-8 text-sm text-[#565148] ms-auto border border-[#565148] rounded-lg mt-6"
                  size="lg"
                  onClick={onClose}
                >
                  Close
                </Button>
    </div>
  )
}

export default ImportLeadModal