import React, { useState, forwardRef } from "react";
import EyeOffIcon from "../../assets/icons/EyeOffIcon";
import Eye from "../../assets/icons/Eye";

interface InputPasswordEyeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputPasswordEye = forwardRef<HTMLInputElement, InputPasswordEyeProps>(
  ({ label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        {label && (
          <label
            htmlFor={props.name}
            className="block text-sm mb-2 font-normal text-deepStateBlue"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref} // Forward ref to the input element
            id={props.name}
            type={showPassword ? "text" : "password"}
            className={`w-full py-2 px-3 text-sm border rounded-[4px] font-[400] h-9 text-[#495160] ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            {...props} // Spread other props such as 'name', 'value', etc.
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOffIcon /> : <Eye color="#A3A9B3"/>}
          </span>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default InputPasswordEye;
