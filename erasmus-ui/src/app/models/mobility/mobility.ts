import { DocumentCreateDto, DocumentRequestDto, DocumentUpdateDto } from "../document/document";

export interface MobilityRequestDto {
    description: string;
    userType: string;
    type: string;
    documents: DocumentCreateDto[];
}

export interface MobilityResponseDto {
    id: number;
    description: string;
    userType: string;
    type: string;
    documents: DocumentRequestDto[];
}

export interface MobilityUpdateDto {
    id: number;
    description: string;
    userType: string;
    type: string;
    documents: DocumentUpdateDto[];
}