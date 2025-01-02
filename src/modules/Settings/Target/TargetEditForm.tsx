import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";

type Props = {
    onClose: () => void;
   // type:"RM"|"AM";
}

const TargetEditForm = ({onClose}: Props) => {
  return (
    <div className="h-64 p-2">
         <div className="flex justify-between p-2">
        <div>
        <h3 className="text-[#303F58] font-bold text-lg">Edit Target</h3>
          
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>

        <div className="my-3"> 
            
       
      <div>
       <div className="flex">
       <div>
            <p className="w-8 h-8 rounded-full bg-slate-400 "></p>
        </div>
        <div className="ms-4">
            <p className="text-xs font-medium text-[#8F99A9]">Name</p>
            <p className="text-xs font-medium text-[#4B5C79]">Asok</p>
        </div>
        <div className="ml-20">
            <p className="text-xs font-medium text-[#8F99A9]">Area</p>
            <p className="text-xs font-medium text-[#4B5C79]">AGBJ22</p>
        </div>
       </div>
      </div>
        </div>

      <Input
                 required
                
                 label="Target"
                 type="number"
                 placeholder="Enter target"
               
               />
                <div className=" flex justify-end gap-2 mt-3 pb-2 me-3">
                         <Button
                           variant="tertiary"
                           className="h-8 text-sm border rounded-lg"
                           size="lg"
                           onClick={onClose}
                         >
                           Cancel
                         </Button>
                         <Button
                           variant="primary"
                           className="h-8 text-sm border rounded-lg"
                           size="lg"
                           type="submit"
                         >
                           Submit
                         </Button>
                       </div>
    </div>
  )
}

export default TargetEditForm