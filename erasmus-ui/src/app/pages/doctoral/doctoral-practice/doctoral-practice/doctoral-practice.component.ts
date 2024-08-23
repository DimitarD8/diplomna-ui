import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { PracticeResponse } from '../../../models/practice/practice';
import { DoctoralService } from '../../../service/doctoral/doctoral.service';
import { DoctoralMobilityResponse } from '../../../models/doctoral/doctoral';
import { CommonModule } from '@angular/common';
import { DocumentsService } from '../../../service/document/documents.service';
import { DocumentMetadataDto } from '../../../models/document/document';

@Component({
  selector: 'app-doctoral-practice',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './doctoral-practice.component.html',
  styleUrl: './doctoral-practice.component.css'
})
export class DoctoralPracticeComponent implements OnInit {
  doctoralPractice?: PracticeResponse[] = [];

  documents: DocumentMetadataDto[] = [];

  constructor(private doctoralService: DoctoralService, private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.doctoralService.getAllDoctoralMobilities().subscribe((response: DoctoralMobilityResponse[]) => {
      this.doctoralPractice = response
        .map(dr => dr.practice)  // Extract the PracticeResponse[] from each DoctoralMobilityResponse
        .reduce((acc, practices) => acc.concat(practices), []); // Flatten into a single array
    });

    const doctoralMobilityId = 1; // Replace with the actual teacherMobilityId or pass it dynamically
    this.documentService.getDocumentsByDoctoralMobilityId(doctoralMobilityId)
      .subscribe((result: DocumentMetadataDto[]) => {
        this.documents = result;
      });
  }

  openPdf(document: DocumentMetadataDto): void {
    this.documentService.previewDocument(document.id);
  }
}
