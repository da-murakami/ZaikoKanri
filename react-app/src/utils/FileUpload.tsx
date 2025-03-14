import React from 'react';

interface FileUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  return (
    <div>
      <input type="file" onChange={onFileChange}/>
      <div>ファイルを選択してください</div>
    </div>
  );
};

export default FileUpload;