import { IntensiveShortTermTrainingRequest, IntensiveShortTermTrainingResponse } from "../intensiveShortTermTraining/intensiveShortTermTraining";
import { PracticeRequest, PracticeResponse } from "../practice/practice";
import { TrainingRequest, TrainingResponse } from "../training/training";

export interface DoctoralMobilityRequest {
    description: string;
    practice: PracticeRequest[];
    training: TrainingRequest[];
    intensiveShortTermTraining: IntensiveShortTermTrainingRequest[];
}

export interface DoctoralMobilityResponse {
    id: number;
    description: string;
    practice: PracticeResponse[];
    training: TrainingResponse[];
    intensiveShortTermTraining: IntensiveShortTermTrainingResponse[];
}