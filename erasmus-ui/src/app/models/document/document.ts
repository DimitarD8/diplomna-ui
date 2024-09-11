
export interface DocumentRequest {
  fileName: string;
  data: File;
}

export interface DocumentResponse {
  id: number;
  fileName: string;
  data: string;
}

export interface DocumentMetadataDto {
  id: number;
  fileName: string;
}


export interface DocumentCreateDto {
  fileName: string;
  data: string; 
}

export interface DocumentRequestDto {
  id: number;
  fileName: string;
}

export interface DocumentUpdateDto {
  id: number;
  fileName: string;
  data: string; 
}