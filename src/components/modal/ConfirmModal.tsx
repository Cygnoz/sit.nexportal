import Warning from "../../assets/icons/Warning";
import Button from "../ui/Button";

type Props = {
  onClose: () => void;
  action: () => void;
};

function ConfirmModal({ onClose, action }: Props) {
  const handleConfirm = () => {
    action();
    onClose();
  };

  return (
    <div className="p-4 space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
        <Warning size={20}/>
        <p className="font-medium">Are you sure you want to proceed?</p>
        </div>
        <p onClick={onClose} className="text-xl font-bold cursor-pointer">
          &times;
        </p>
      </div>
      <div className="flex justify-end gap-2 mt-3 pb-2 ">
        <Button
          variant="tertiary"
          className="h-8 text-sm border rounded-lg"
          size="lg"
          onClick={onClose}
        >
          No
        </Button>
        <Button
          variant="primary"
          className="h-8 text-sm border rounded-lg"
          size="lg"
          type="button"
          onClick={handleConfirm}
        >
          Yes
        </Button>
      </div>
    </div>
  );
}

export default ConfirmModal;
