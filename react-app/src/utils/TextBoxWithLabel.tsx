import React from 'react';

interface TextBoxWithLabelProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextBoxWithLabel: React.FC<TextBoxWithLabelProps> = ({ label, value, onChange, className }) => {
  return (
    <div className={`textbox-with-label ${className}`}>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
};

export default TextBoxWithLabel;