import Button from "../../../../components/ui/Button";

import bgpicturee from "../../../../assets/image/Group.png"


type Props = {
    onClose: () => void;
};


const ResumePauseTrail = ({ onClose }: Props) => {
  return (
    <div className="p-2 bg-white rounded shadow-md space-y-2">
    <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
        <div className="flex justify-between p-2">
            <div>
                <h3 className="text-[#303F58] font-bold text-lg">Pause Trail Confirmation</h3>
                <p className="text-[11px] text-[#8F99A9] mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
            </div>
            <p onClick={onClose} className="text-3xl cursor-pointer">
                &times;
            </p>
        </div>

        <div >

            <div className=" my-2">
                <div className="justify-center">

                    <img className="h-44 w-28 ms-52" src={bgpicturee} alt="" />

                    <p className="font-semibold text-[#4B5C79] text-sm my-3">
                        Pausing this trial will restrict all user activities until resumed. Are you sure you want to proceed?</p>








                </div>
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
                Pause
            </Button>
        </div>


    </div>

</div>
  )
}

export default ResumePauseTrail