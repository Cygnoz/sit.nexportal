import React, { forwardRef } from "react";

interface Option {
  value: string;
  label: string;
}

interface PrefixInputProps {
  label?: string;
  required?:boolean
  selectName: string;
  inputName: string;
  selectValue?: string;
  inputValue?: string;
  options: Option[];
  placeholder?: string;
  error?: string;
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrefixInput = forwardRef<HTMLInputElement, PrefixInputProps>(
  (
    {
      required,
      label,
      selectName,
      inputName,
      selectValue,
      inputValue,
      options,
      placeholder,
      error,
      onSelectChange,
      onInputChange,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={inputName}
            className="block text-sm mb-2 font-normal text-deepStateBlue"
          >
            <p>{label} {required&&<span className="text-red-500">*</span>}</p>
            
          </label>
        )}
        <div className="flex items-center">
          <select
            name={selectName}
            value={selectValue}
            onChange={onSelectChange}
            className={`w-auto text-sm border rounded-[4px] rounded-e-none h-9 text-[#495160] ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            ref={ref}
            name={inputName}
            value={inputValue}
            onChange={onInputChange}
            placeholder={placeholder}
            className={`w-full py-2 px-3 text-sm border rounded-[4px] rounded-s-none h-9 text-[#495160] ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default PrefixInput;
