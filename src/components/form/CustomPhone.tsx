import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

interface CustomPhoneInputProps {
  required?:boolean
  label: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  isReadOnly?:boolean
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  label,
  error,
  placeholder,
  required,
  value,
  onChange,
  isReadOnly,
  ...props
}) => {
  const handlePhoneChange = (value: string) => {
    if (onChange) {
      onChange(value); // Pass the value to parent component to update form state
    }
  };  
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm mb-2 font-normal text-deepStateBlue"
      >
        <p>{label} {required&&<span className="text-red-500">*</span>}</p>
      </label>
      <PhoneInput
        inputClass="appearance-none text-[#818894] bg-white border-inputBorder text-sm h-[39px] pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-darkRed"
        inputStyle={{ height: "38px", width: "100%" }}
        containerStyle={{ width: "100%" }}
        country={"in"}
        value={value || ""} // Controlled component value
        onChange={handlePhoneChange} // Propagate change to parent
        placeholder={placeholder}
        disabled={isReadOnly?true:false}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};


export default CustomPhoneInput;
