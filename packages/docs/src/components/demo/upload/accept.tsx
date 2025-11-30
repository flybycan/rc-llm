import React from 'react';
import { Upload } from '@rc-llm/components';

const UploadAcceptDemo = () => {
  const handleSuccess = (response: unknown, file: File) => {
    console.log('Upload success:', response, file);
  };

  const handleError = (error: unknown, file: File) => {
    console.error('Upload error:', error, file);
  };

  const handleProgress = (percent: number, file: File) => {
    console.log('Upload progress:', percent, file);
  };

  const handleChange = (fileList: File[]) => {
    console.log('File list changed:', fileList);
  };

  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      accept=".png,.jpg,.jpeg"
      onSuccess={handleSuccess}
      onError={handleError}
      onProgress={handleProgress}
      onChange={handleChange}
    >
      <button>Upload Image Files (.png, .jpg, .jpeg)</button>
    </Upload>
  );
};

export default UploadAcceptDemo;
