import React from 'react';

interface TextAreaWithLabelProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const TextAreaWithLabel: React.FC<TextAreaWithLabelProps> = ({ label, value, onChange, className }) => {
  return (
    <div className={`textarea-with-label ${className}`}>
      <label>{label}</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};

export default TextAreaWithLabel;