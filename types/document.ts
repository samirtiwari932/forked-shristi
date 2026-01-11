// Types for the document API

export interface Document {
  id: string;
  fileName: string;
  fileSize: number;
  type: string;
  url: string;
  createdAt: string;
}

export interface DocumentUploadResponse {
  type: string;
  url: string | File | undefined;
  id: string;
}
