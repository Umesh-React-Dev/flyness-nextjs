"use client";

import { useRef, type ChangeEvent } from "react";
import Image from "next/image";
import iconUpload from "@/assets/images/help/icon-upload.svg";
import "./HelpForm.scss";

type HelpFileUploadProps = {
  title: string;
  dropzoneTitle: string;
  dropzoneHint: string;
  maxFiles: number;
  files: File[];
  onFilesChange: (files: File[]) => void;
  inputId?: string;
};

export default function HelpFileUpload({
  title,
  dropzoneTitle,
  dropzoneHint,
  maxFiles,
  files,
  onFilesChange,
  inputId = "help-file-upload",
}: HelpFileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    onFilesChange([...files, ...selected].slice(0, maxFiles));
    event.target.value = "";
  };

  return (
    <div className="helpForm__uploadSection">
      <h3 className="helpForm__uploadTitle">{title}</h3>
      <button
        type="button"
        className="helpForm__dropzone"
        onClick={() => fileInputRef.current?.click()}
      >
        <span className="helpForm__dropzoneIcon" aria-hidden="true">
          <Image src={iconUpload} alt="" width={16} height={16} />
        </span>
        <span className="helpForm__dropzoneTitle">{dropzoneTitle}</span>
        <span className="helpForm__dropzoneHint">{dropzoneHint}</span>
        <span className="helpForm__dropzoneCount">
          {files.length} of {maxFiles} files uploaded
        </span>
      </button>
      <input
        ref={fileInputRef}
        id={inputId}
        type="file"
        className="helpForm__fileInput"
        accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx,image/jpeg,image/png,image/webp,application/pdf"
        multiple
        onChange={handleFilesChange}
        aria-label="Upload supporting documents"
      />
      {files.length > 0 ? (
        <ul className="helpForm__fileList">
          {files.map((file) => (
            <li key={`${file.name}-${file.size}`}>{file.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
