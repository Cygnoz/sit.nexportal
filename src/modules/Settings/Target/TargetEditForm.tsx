// Updated TargetEditForm
import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";
import image from "../../../assets/image/AvatarImg.png"
type Props = {
  onClose: () => void;
  type: "RM" | "AM";
};

const TargetEditForm = ({ onClose, type }: Props) => {
  return (
    <div className="h-64 p-3">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">
            Edit - {type === "RM" ? "Region Manager" : "Area Manager"}
          </h3>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>

      <div className="my-3">
        <div className="flex">
          <div>
            
            <img  className="w-8 h-8 rounded-full" src={image} alt="" />
           
          </div>
          <div className="ms-4">
            <p className="text-xs font-medium text-[#8F99A9]">Name</p>
            <p className="text-xs font-medium text-[#4B5C79]">Asok</p>
          </div>
          <div className="ml-20">
            <p className="text-xs font-medium text-[#8F99A9]">
              {type === "RM" ? "Region" : "Area"}
            </p>
            <p className="text-xs font-medium text-[#4B5C79]">AGBJ22</p>
          </div>
        </div>
      </div>

      <Input
        required
        label="Target"
        type="text"
        placeholder={`Enter target for ${
          type === "RM" ? "Region Manager" : "Area Manager"
        }`}
      />
      <div className="flex justify-end gap-2 mt-3 pb-2 ">
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
  );
};

export default TargetEditForm;