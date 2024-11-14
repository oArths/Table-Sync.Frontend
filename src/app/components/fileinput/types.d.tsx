import { DropzoneState } from "react-dropzone";

export interface InputProps {
  dropzone: DropzoneState;
}

export interface HasFileProps {
  file?: File;
  removeFile: () => void;
  sendFile: (file: File) => void;
  progress: number;
}

export interface IFileInput {
  FileSelect: (file: File | null) => void;
  progress: number;
}
