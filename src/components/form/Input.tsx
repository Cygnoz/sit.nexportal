// src/components/form/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  placeholder?:string
}

const Input: React.FC<InputProps> = ({ label, error,placeholder, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={props.name}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
