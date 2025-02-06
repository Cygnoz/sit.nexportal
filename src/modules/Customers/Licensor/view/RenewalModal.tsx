import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../../components/form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../../../../components/ui/Button";
import { useEffect } from "react";
type Props = {
  onClose: () => void;
};
interface Renewal {
  startingDate: string;
  endingDate: string;
}

function RenewalModal({ onClose }: Props) {
  const validationSchema = Yup.object({
    startingDate: Yup.string().required("First name is required"),
    endingDate: Yup.string().required("First name is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<Renewal>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Renewal> = async (data: any, event) => {
    event?.preventDefault(); // Prevent default form submission
    console.log("Form Data", data);

    // try {
    //   const fun = editId ? editLicenser : addLicenser; // Select function
    //   let response, error;

    //   if (editId) {
    //     ({ response, error } = await fun(
    //       `${endPoints.LICENSER}/${editId}`,
    //       data
    //     ));
    //   } else {
    //     ({ response, error } = await fun(endPoints.LICENSER, data));
    //   }

    //   console.log("Response:", response);
    //   console.log("Error:", error);

    //   if (response && !error) {
    //     toast.success(response.data.message);
    //     onClose()
    //   } else {
    //     toast.error(error.response?.data?.message || "An error occurred.");
    //   }
    // } catch (err) {
    //   console.error("Error submitting license data:", err);
    //   toast.error("An unexpected error occurred.");
    // }
  };
 
  return (
    <div className="p-3 space-y-2">
      <div className="flex justify-between items-center">
        <p className='text-[#303F58] font-bold text-lg'>Renew Licenser</p>
        <p onClick={onClose} className="text-3xl cursor-pointer">
          &times;
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Input
          label="Starting Date"
          required
          type="date"
          placeholder="Starting Date"
          error={errors.startingDate?.message}
          {...register("startingDate")}
          readOnly
          value={
            watch("startingDate")
              ? watch("startingDate")
              : new Date().toISOString().split("T")[0]
          } // Sets current date as defau
        />
        <Input
          label="Ending Date"
          required
          type="date"
          placeholder="Starting Date"
          error={errors.endingDate?.message}
          {...register("endingDate")}
        />
        <div className="bottom-0 left-0 w-full pt-2 ps-2 bg-white flex gap-2 justify-end">
          <Button
            variant="tertiary"
            className="h-8 text-sm border rounded-lg"
            size="xl"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="h-8 text-sm border rounded-lg"
            size="xl"
            type="submit"
          >
            Done
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RenewalModal;
