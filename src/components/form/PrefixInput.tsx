import React from "react";

interface Option {
  value: string;
  label: string;
}

interface PrefixInputProps {
  label?: string;
  error?: string;
  placeholder?: string;
  options: Option[];
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PrefixInput: React.FC<PrefixInputProps> = ({
  label,
  error,
  placeholder,
  options,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm mb-2 font-normal text-deepStateBlue"
        >
          {label}
        </label>
      )}
      <div className="flex items-center">
        <select
          name={`${name}-select`}
          className={`w-auto  text-sm border rounded-[4px] rounded-e-none h-9 text-[#495160] ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          onChange={onChange}
        >
          {options.map((option) => (
            <option className="" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          name={name}
          value={value}
          className={`w-full py-2 px-3 text-sm border rounded-[4px] rounded-s-none h-9 text-[#495160] ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PrefixInput;