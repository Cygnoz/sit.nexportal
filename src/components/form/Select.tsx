// src/components/form/Select.tsx
import React from "react";

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
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        id={props.name}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      >
        {/* Placeholder as default option */}
        {placeholder && (
          <option value="" disabled selected={props.value === ""}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Select;
