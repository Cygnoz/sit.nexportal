import React, { forwardRef } from "react";
import ChevronDown from "../../assets/icons/ChevronDown";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  required?:boolean
  label?: string;
  options: { value: any; label: string }[];
  error?: string;
  placeholder?: string;
}

// Forward ref to allow react-hook-form to control this component
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder,required,...props }, ref) => {
    return (
      <div className="relative w-full">
        <label htmlFor={props.name} className={`block text-sm font-medium ${label&&'mb-2'}`}>
         <p> {label} {required&&<span className="text-red-500">*</span>}</p>
        </label>
        <div className="relative cursor-pointer">
          <select
            id={props.name}
            ref={ref} // Pass ref from react-hook-form
            className={`block appearance-none w-full h-9 text-[#818894] bg-white border cursor-pointer 
                        text-sm pl-2 pr-8 rounded-md leading-tight 
                        focus:outline-none focus:bg-white 
                        ${error ? "border-red-500" : "border-gray-300"}`}
            {...props}
          >
            {placeholder&&<option value="">
              {placeholder}
            </option>}
            {options.map((option) => (
              <option  key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown color="gray" />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select"; // Required for forwardRef components

export default Select;
