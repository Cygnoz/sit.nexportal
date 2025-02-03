import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";


type Props = {
    onClose: () => void;
}

const TargetAddForm = ({onClose}: Props) => {
  return (
    <div className="p-4">
           <div className="flex justify-between">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg"> Assign Target</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
          
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form  className="space-y-3 mt-2">
      <Input
          
          label="Area Name"
          placeholder="Enter Area Name"
         
        />
         <Select
          
          label="Area"
          placeholder="Select Area Manager"
          
          options={[
            { label: "Area1", value: "area1" },
            { label: "Area2", value: "area2" },
            { label: "Area3", value: "area3" },
        
          ]}
         
        />
        <Input
          
          label="Target Number"
          placeholder="Enter Target Number"
         
        />
        <div className="flex gap-2 justify-end mt-4">
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
                    Done
                  </Button>
                </div>
      </form>
    </div>
  )
}

export default TargetAddForm