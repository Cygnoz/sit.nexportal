import Input from "../../../../components/form/Input"
import Select from "../../../../components/form/Select"
import Button from "../../../../components/ui/Button"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { LeadTaskData } from "../../../../Interfaces/LeadTask";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useApi from "../../../../Hooks/useApi";
import { endPoints } from "../../../../services/apiEndpoints";
import toast from "react-hot-toast";

type Props = {
    onClose: () => void;
}

const validationSchema = Yup.object().shape({
    leadId: Yup.string(),
    activityType: Yup.string(), // Ensure it's validated as "Meeting".
    taskTitle: Yup.string(),
    taskDescription: Yup.string(),
    taskType: Yup.string(),
    dueDate: Yup.string(),
    time: Yup.string(),
});


const TasksForm = ({ onClose }: Props) => {

    const { id } = useParams()
    console.log(id);


    const {
        handleSubmit,
        register,
        clearErrors,
        setValue,
        formState: { errors },
        watch,
    } = useForm<LeadTaskData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            activityType: "Task",
            leadId: id
        }
    });

    const handleInputChange = (field: keyof LeadTaskData) => {
        clearErrors(field); // Clear the error for the specific field when the user starts typing
    };

    const {request : addLeadTask}=useApi('post',3001)

    console.log(errors);
    

    const onSubmit: SubmitHandler<LeadTaskData> = async (data: any, event) => {

        
        event?.preventDefault(); // Prevent default form submission behavior
        console.log("Data", data);
    // if (submit) {
        try {
         const {response , error} = await addLeadTask(endPoints.LEAD_ACTIVITY, data)
          console.log(response);
          console.log(error);
    
          if (response && !error) {
            console.log(response.data)     
            toast.success(response.data.message); // Show success toast
            onClose(); // Close the form/modal
          } else {
            console.log(error.response.data.message);           
            toast.error(error.response.data.message); // Show error toast
          }
        } catch (err) {
          console.error("Error submitting lead task data:", err);
          toast.error("An unexpected error occurred."); // Handle unexpected errors
        }
      }

    return (
        <div>
            <div className="h-fit w-full rounded-lg">
                <div className="flex justify-between">
                    <div className="space-y-2 p-4">
                        <h3 className="text-[#303F58] font-bold text-lg">Create Task</h3>
                    </div>
                    <p onClick={onClose} className="text-3xl p-4 cursor-pointer">&times;</p>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <div className="space-y-4 px-4">
                            <Input
                                label=" Task Title"
                                placeholder=""
                                value={watch("taskTitle")}
                                {...register("taskTitle")}
                            />
                            {/* <Input
                                label="Task Description"
                                placeholder=""
                            /> */}
                            <p className="text-[#303F58] text-sm font-normal">Task Description</p>
                            <textarea
                                className="w-full border border-[#CECECE]"
                                {...register("taskDescription")}
                                value={watch("taskDescription")}
                            >

                            </textarea>

                            <div className="grid grid-cols-3 gap-4">
                                <Select
                                    label="Task Type"
                                    placeholder="Select Type"
                                    value={watch("taskType")}
                                    onChange={(selectedValue) => {
                                        setValue("taskType", selectedValue);
                                        handleInputChange("taskType");
                                      }}
                                    options={[
                                        { value: "Urgent", label: "Urgent" },
                                        { value: "Normal", label: "Normal" },
                                    ]}
                            />
                                <Input
                                    label="Due Date"
                                    placeholder="Enter Date"
                                    type="date"
                                    {...register("dueDate")}
                                    value={watch("dueDate")}
                                />

                                <Input
                                    label="Time"
                                    placeholder="Enter Time"
                                    {...register("time")}
                                    value={watch("time")}
                                />
                            </div>

                        </div>
                    </div>
                    <div className=" flex justify-end gap-2 px-4 my-4">
                        <Button
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

export default TasksForm