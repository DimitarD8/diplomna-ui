import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../../../../navigation/navigation/navigation.component";
import {PracticeResponse} from "../../../../models/practice/practice";
import {DocumentMetadataDto} from "../../../../models/document/document";
import {AdministrativeService} from "../../../../service/administrative/administrative.service";
import {DocumentsService} from "../../../../service/document/documents.service";
import {AdiministrativeMobilityResponse} from "../../../../models/administrative/administrative";


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
