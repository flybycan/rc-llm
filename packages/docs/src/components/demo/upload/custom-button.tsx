import React from 'react';
import { Upload, Button } from '@rc-llm/components';

const UploadCustomButtonDemo = () => {
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
      onSuccess={handleSuccess}
      onError={handleError}
      onProgress={handleProgress}
      onChange={handleChange}
    >
      <Button type="primary">Custom Upload Button</Button>
    </Upload>
  );
};

export default UploadCustomButtonDemo;
