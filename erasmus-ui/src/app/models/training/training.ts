export interface TrainingRequest {
    description: string;
    doctoralMobilityId?: number; // Optional ID to associate with DoctoralMobility
    studentMobilityId?: number; // Optional ID to associate with StudentMobility
    teacherMobilityId?: number; // Optional ID to associate with TeacherMobility
}

export interface TrainingResponse {
    id: number;
    description: string;
    doctoralMobilityId?: number; // ID of associated DoctoralMobility, if any
    studentMobilityId?: number; // ID of associated StudentMobility, if any
    teacherMobilityId?: number; // ID of associated TeacherMobility, if any
}