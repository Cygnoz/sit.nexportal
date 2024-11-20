import React, { useState } from "react";
import ChevronDown from "../../assets/icons/ChevroDown";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
}
const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  placeholder = "Select an option...",
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(false); // Track if an option is selected

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(true); // Mark as selected when a user picks an option
    if (props.onChange) {
      props.onChange(event); // Trigger the onChange callback if provided
    }
  };

  const displayOptions = isSelected
    ? options // Only show actual options after selection
    : [{ value: "", label: placeholder }, ...options]; // Include placeholder initially

  return (
    <div className="relative w-full">
      <label htmlFor={props.name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative cursor-pointer">
        <select
          id={props.name}
          className={`block appearance-none w-full h-9 text-[#818894] bg-white border border-inputBorder cursor-pointer 
                      text-sm pl-2 pr-8 rounded-md leading-tight 
                      focus:outline-none focus:bg-white focus:border-gray-500 
                      ${error ? "border-red-500" : "border-gray-300"}`}
          onChange={handleChange}
          {...props}
        >
          {displayOptions.map((option) => (
            <option key={option.value} value={option.value}>
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
};
export default Select;