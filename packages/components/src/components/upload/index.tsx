import React, { useRef, useState } from 'react';
import './style.css';

export interface UploadProps {
  /** 上传地址 */
  action: string;
  /** 接受的文件类型 */
  accept?: string;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 上传成功回调 */
  onSuccess?: (response: any, file: File) => void;
  /** 上传失败回调 */
  onError?: (error: any, file: File) => void;
  /** 上传中回调 */
  onProgress?: (percent: number, file: File) => void;
  /** 文件改变回调 */
  onChange?: (fileList: File[]) => void;
  /** 自定义上传按钮 */
  children?: React.ReactNode;
}

export const Upload: React.FC<UploadProps> = ({
  action,
  accept,
  multiple = false,
  onSuccess,
  onError,
  onProgress,
  onChange,
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setFileList((prevList) => [...prevList, ...newFiles]);
    onChange?.([...fileList, ...newFiles]);

    newFiles.forEach((file) => {
      const formData = new FormData();
      formData.append('file', file);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', action, true);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = (e.loaded / e.total) * 100;
          onProgress?.(percent, file);
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess?.(JSON.parse(xhr.responseText), file);
        } else {
          onError?.(new Error(xhr.statusText), file);
        }
      };

      xhr.onerror = () => {
        onError?.(new Error('Upload failed'), file);
      };

      xhr.send(formData);
    });

    // Clear the input value to allow re-uploading the same file
    event.target.value = '';
  };

  return (
    <div className="rc-llm-upload">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
        style={{ display: 'none' }}
      />
      <div onClick={handleClick}>
        {children || <button className="rc-llm-upload-button">Upload</button>}
      </div>
      <ul className="rc-llm-upload-list">
        {fileList.map((file, index) => (
          <li key={index} className="rc-llm-upload-list-item">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Upload.displayName = 'Upload';
