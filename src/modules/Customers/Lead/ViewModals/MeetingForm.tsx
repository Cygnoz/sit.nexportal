import Input from "../../../../components/form/Input";
import Select from "../../../../components/form/Select";
import Button from "../../../../components/ui/Button";

type Props = {
    onClose: () => void;
}

const MeetingForm = ({ onClose }: Props) => {

    return (
        <div>
            <div className="h-fit w-full rounded-lg">
                <div className="flex justify-between">
                    <div className="space-y-2 p-4">
                        <h3 className="text-[#303F58] font-bold text-lg">Create Meeting</h3>
                    </div>
                    <p onClick={onClose} className="text-3xl p-4 cursor-pointer">&times;</p>
                </div>


                <form>
                    <div >
                        <div className="space-y-4 px-4">
                            <Input
                                label=" Meeting Title"
                                placeholder=""
                            />
                            {/* <Input
                                label="Add Notes"
                                placeholder=""
                            /> */}
                            <p className="text-[#303F58] text-sm font-normal">Add Notes</p>
                            <textarea
                                className="w-full border border-[#CECECE]"
                            >

                            </textarea>


                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-3">
                                    <Select
                                        label="Meeting Type"
                                        placeholder="Select Type"
                                        options={[
                                            { value: "name", label: "Kkkk" },
                                            { value: "name", label: "Taattuu" },
                                            { value: "name", label: "pipi" },
                                        ]}
                                    />
                                </div>
                                <div className="col-span-3">
                                    <Input
                                        type="date"
                                        label="Due Date"
                                    />
                                </div>
                                <div className="col-span-3 flex">
                                    <Input
                                        label="Time"
                                        placeholder="7:28"
                                    />
                                    <p className="mt-9 ms-4">to</p>

                                </div>
                                {/* <div className="col-span-1">
                <p className="text-center mt-9">to</p>
            </div> */}
                                <div className="col-span-3 mt-7">
                                    <Input
                                        label=""
                                        placeholder="7:28 "
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-4">
                                <Select
                                    label="Meeting Location"
                                    placeholder="Select Place"
                                    options={[
                                        { value: "name", label: "Kkkk" },
                                        { value: "name", label: "Taattuu" },
                                        { value: "name", label: "pipi" },
                                    ]}
                                />
                                <Input
                                    label="Location"
                                    placeholder="Enter Location"
                                />
                                <Input
                                    label="Landmark"
                                    placeholder="Enter Landmark"
                                />
                            </div>

                        </div>
                    </div>
                    <div className=" flex justify-end gap-2 px-4 my-4">
                        <Button
                            onClick={onClose}
                            variant="tertiary"
                            className="h-8 text-sm border rounded-lg"
                            size="lg"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            className="h-8 text-sm border rounded-lg"
                            size="lg"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default MeetingForm