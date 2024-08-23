export interface DocumentRequest {
  fileName: string;
  data: File; // File object for file upload
  doctoralMobilityId?: number; // Optional ID to associate with DoctoralMobility
  studentMobilityId?: number; // Optional ID to associate with StudentMobility
  teacherMobilityId?: number; // Optional ID to associate with TeacherMobility
}

export interface DocumentResponse {
  id: number;
  fileName: string;
  data: string; // Base64 string representation of the file
  doctoralMobilityId?: number; // ID of associated DoctoralMobility, if any
  studentMobilityId?: number; // ID of associated StudentMobility, if any
  teacherMobilityId?: number; // ID of associated TeacherMobility, if any
}

export interface DocumentMetadataDto {
  id: number;
  fileName: string;
}