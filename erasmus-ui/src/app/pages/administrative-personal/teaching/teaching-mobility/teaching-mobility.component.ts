import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { PracticeResponse } from '../../../models/practice/practice';
import { AdministrativeService } from '../../../service/administrative/administrative.service';
import { AdiministrativeMobilityResponse } from '../../../models/administrative/administrative';
import { DocumentsService } from '../../../service/document/documents.service';
import { DocumentMetadataDto } from '../../../models/document/document';

@Component({
  selector: 'app-teaching-mobility',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './teaching-mobility.component.html',
  styleUrl: './teaching-mobility.component.css'
})
export class TeachingMobilityComponent implements OnInit {
  administrativePractices?: PracticeResponse[] = [];
  documents: DocumentMetadataDto[] = [];

  constructor(private adiministrativeService: AdministrativeService, private documentService: DocumentsService) { }

  ngOnInit(): void {
    this.adiministrativeService.getAllAdiministrativeMobilities().subscribe((result: AdiministrativeMobilityResponse[]) => {
      this.administrativePractices = result
        .map(adm => adm.practice)
        .reduce((acc, practices) => acc.concat(practices, []));
    });

    const teacherMobilityId = 1; // Replace with the actual teacherMobilityId or pass it dynamically
    this.documentService.getDocumentsByTeacherMobilityId(teacherMobilityId)
      .subscribe((result: DocumentMetadataDto[]) => {
        this.documents = result;
      });
  }

  openPdf(document: DocumentMetadataDto): void {
    this.documentService.previewDocument(document.id);

  }

}
