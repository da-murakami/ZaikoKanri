import React from 'react';

interface DropDownWithLabelProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const DropDownWithLabel: React.FC<DropDownWithLabelProps> = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownWithLabel;