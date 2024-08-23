import { PracticeRequest, PracticeResponse } from "../practice/practice";
import { TrainingRequest, TrainingResponse } from "../training/training";

export interface AdiministrativeMobilityRequest {
    description: string;
    practice: PracticeRequest[];
    training: TrainingRequest[];
}

export interface AdiministrativeMobilityResponse {
    id: number;
    description: string;
    practice: PracticeResponse[];
    training: TrainingResponse[];
}