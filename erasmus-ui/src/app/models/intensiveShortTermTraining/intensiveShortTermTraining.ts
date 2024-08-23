export interface IntensiveShortTermTrainingRequest {
    description: string;
    doctoralMobilityId?: number; // Optional ID to associate with DoctoralMobility
}

export interface IntensiveShortTermTrainingResponse {
    id: number;
    description: string;
    doctoralMobilityId?: number; // ID of associated DoctoralMobility, if any
}