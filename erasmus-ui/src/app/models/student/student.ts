import { PracticeRequest, PracticeResponse } from "../practice/practice";
import { TrainingRequest, TrainingResponse } from "../training/training";

export interface StudentMobilityRequest {
    description: string;
    practice: PracticeRequest[];
    training: TrainingRequest[];
}

export interface StudentMobilityResponse {
    id: number;
    description: string;
    practice: PracticeResponse[];
    training: TrainingResponse[];
}