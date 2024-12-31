import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import Button from "../../../components/ui/Button";


type Props = {onClose: () => void;}

const TargetForm = ({onClose}: Props) => {
  return (
    <div>
         <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg"> Create Target for RM</h3>
          
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <div>
      <form>
<div className=" my-2">
  <div className="mx-3 gap-4 space-y-2 max-w-2xl">
  <Select
  required
  label="Area"
  options={[
    { label: "India", value: "India" },
    { label: "UAE", value: "UAE" },
    
  ]}
  placeholder="Select Area"
/>

<Select
  required
  label="Area manager"
  options={[
    { label: "India", value: "India" },
    { label: "UAE", value: "UAE" },
    
  ]}
  placeholder="Select Area manager"
  />
    <Input
      required
      label="Target"
      type="number"
      placeholder="Enter target"
    
    />


  </div>
</div>
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
        </form>
</div>

    </div>
  )
}

export default TargetForm