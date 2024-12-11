//import ImagePlaceHolder from "../../../components/form/ImagePlaceHolder";
import Input from "../../form/Input";
//import Select from "../../../components/form/Select";
import Button from "../../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import Select from "../../form/Select";
//import CustomPhoneInput from "../../../components/form/CustomPhone";
//import InputPasswordEye from "../../../components/form/InputPasswordEye";

type Props = {
    onClose: () => void;
};

interface TrialData {
    name: string;
    mail: string;
    phone?: string;
    status?: string;
password?:string;
confirmPassword?:string;
startDate?:string;
endDate?:string;


}

const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    mail: Yup.string()
        .required("mail is required")

});
const OrganisationForm = ({onClose}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },


    } = useForm<TrialData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<TrialData> = (data) => {
        console.log("Form Data:", data);
    };

  return (
    <div className="p-2 bg-white rounded shadow-md space-y-2">
    <div className="p-2 space-y-1 text-[#4B5C79] py-2 w-[100%]">
        <div className="flex justify-between p-2">
            <div>
                <h3 className="text-[#303F58] font-bold text-lg"> Organization Creation</h3>
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

                        <Input
                            label="Organization Name"
                            type="text"
                            placeholder="Enter Name"
                            error={errors.name?.message}
                            {...register("name")}

                        />
                        <Input
                            label="Email"
                            type="text"
                            placeholder="Enter Email"
                            error={errors.mail?.message}
                            {...register("mail")}
                        />

                        <Input
                            label="Phone"
                            type="text"
                            placeholder="Enter Phone"
                            error={errors.phone?.message}
                            {...register("phone")}
                        />
                         <Input
                      required
                      placeholder="Enter Password"
                      label="New Password"
                      type="password"
                      error={errors.password?.message}
                      {...register("password")}
                    />
                    <Input
                      required
                      placeholder="Re-enter Password"
                      label="Confirm Password"
                      type="password"
                      error={errors.confirmPassword?.message}
                      {...register("confirmPassword")}
                    />
                         <Input
                  type="date"
                  label="Start Date"
                  error={errors.startDate?.message}
                  {...register("startDate")}
                />

<Input
                  type="date"
                  label="End Date"
                  error={errors.endDate?.message}
                  {...register("endDate")}
                />
                       




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
                    Submit
                </Button>
            </div>
        </form>

    </div>

</div>
  )
}

export default OrganisationForm