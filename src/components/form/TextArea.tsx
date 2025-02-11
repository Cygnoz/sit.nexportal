import React, { forwardRef } from "react";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
  label?: string;
  error?: string;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
}



const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ label, error, placeholder, required, readOnly, rows, cols, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={props.name}
            className="block text-sm mb-2 font-normal text-deepStateBlue"
          >
            <p>
              {label} {required && <span className="text-red-500">*</span>}
            </p>
          </label>
        )}
        <textarea
          ref={ref}
          id={props.name}
          readOnly={readOnly}
          rows={rows}
          cols={cols}
          className={`w-full py-2 px-3 text-sm border rounded-[4px] font-[400] text-[#495160]  h-auto ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default TextArea;
