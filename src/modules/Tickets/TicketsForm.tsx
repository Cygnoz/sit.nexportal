//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../components/form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "../../components/form/Select";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
  onClose: () => void;
};

interface TicketsData {
  subject: string;
  requestor:string;
agent?:string;
priority?:string;
question?:string;
 
  
}

const validationSchema = Yup.object({
  subject: Yup.string().required("Subject is required"),
  requestor: Yup.string()
    .required("Request is required")
    
});

function TicketsForm({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
   
  } = useForm<TicketsData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<TicketsData> = (data) => {
    console.log("Form Data:", data);
  };

  const handleInputChange = (field: keyof TicketsData) => {
    clearErrors(field); // Clear the error for the specific field when the user starts typing
  };


  
  return (
    <div>
        <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-[#303F58] font-bold text-lg">Create Tickets</h3>
          <p className="text-[11px] text-[#8F99A9] mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
        
        <div className=" my-2">
          <div className="mx-3 gap-4 space-y-2 max-w-xl">
          <Select
                                    label="Requestor"
                                    placeholder="Search Name"
                                    error={errors.requestor?.message}
                                    options={[
                                        { value: "name", label: "Kkkk" },
                                        { value: "name", label: "Taattuu" },
                                        { value: "name", label: "pipi" },
                                    ]}
                                    {...register("requestor")}
                                    onChange={() => handleInputChange("requestor")}
                                />
            <Input
              label="Subject"
              type="text"
              placeholder="A brief title or summary of the issue"
              error={errors.subject?.message}
              {...register("subject")}
              onChange={() => handleInputChange("subject")}
            />
             <Input
              label="Description"
              type="text"
              placeholder="Detailed explanation of the issue or request"
             
            />
            <Select
                                    label="Assigned To"
                                    placeholder="Select Agent"
                                    error={errors.agent?.message}
                                    options={[
                                        { value: "name", label: "Kkkk" },
                                        { value: "name", label: "Taattuu" },
                                        { value: "name", label: "pipi" },
                                    ]}
                                    {...register("agent")}
                                />

                                <div className="grid grid-cols-2 gap-4">

                                <Select
                                    label="Priority"
                                    placeholder="High"
                                    error={errors.priority?.message}
                                    options={[
                                        { value: "name", label: "normal" },
                                        { value: "name", label: "High" },
                                        { value: "name", label: "normal" },
                                    ]}
                                    {...register("priority")}
                                />
                                <Select
                                    label="Type"
                                    placeholder="Question"
                                    error={errors.question?.message}
                                    options={[
                                        { value: "name", label: "Kkkk" },
                                        { value: "name", label: "Taattuu" },
                                        { value: "name", label: "pipi" },
                                    ]}
                                    {...register("question")}
                                />


                                </div>
           
            
          </div>
        </div>
        </div>
        <div className=" flex justify-end gap-2 mt-3 pb-2 me-5">
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
          Save
        </Button>
      </div>
      </form>
      
    </div>

    </div>
    
  );
}

export default TicketsForm;
