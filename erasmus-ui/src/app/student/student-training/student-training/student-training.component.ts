import { Component } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { DocumentsService } from '../../../service/document/documents.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MobilityResponseDto, MobilityUpdateDto } from '../../../models/mobility/mobility';
import { MatDialog } from '@angular/material/dialog';
import { MobilityService } from '../../../service/mobility/mobility.service';
import { MobilityCreateDialogComponent } from '../../../mobility/mobility-create-dialog/mobility-create-dialog.component';
import { MobilityUpdateDialogComponent } from '../../../mobility/mobility-update-dialog/mobility-update-dialog/mobility-update-dialog.component';
import { PermissionService } from '../../../service/permission/permission.service';

@Component({
  selector: 'app-student-training',
  standalone: true,
  imports: [NavigationComponent, CommonModule, MatIconModule, FormsModule],
  templateUrl: './student-training.component.html',
  styleUrl: './student-training.component.css'
})
export class StudentTrainingComponent {
  mobilities: MobilityResponseDto[] = [];
  isAdmin: boolean = false;

  constructor(private documentService: DocumentsService,
    private dialog: MatDialog,
    private mobilityService: MobilityService,
    private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.getMobilities();
    this.isAdmin = this.permissionService.isAdminAllowed();
  }

  getMobilities() {
    this.mobilityService.getAllStudentPractices().subscribe((result: MobilityResponseDto[]) => {
      this.mobilities = result;
    },
      (error) => {
        console.error('Error fetching mobilities', error);
      });
  }

  openMobilityDialog() {
    const dialogRef = this.dialog.open(MobilityCreateDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mobilityService.createMobility(result).subscribe(
          (response) => {
            console.log('Mobility request created successfully', response);
          },
          (error) => {
            console.error('Error creating mobility request', error);
          }
        );
      }
    });
  }

  onOpenDocument(documentId: number) {
    this.documentService.previewDocument(documentId);
  }

  openUpdateDialog(mobility: MobilityResponseDto): void {
    const mobilityUpdateDto: MobilityUpdateDto = this.transformToUpdateDto(mobility);

    const dialogRef = this.dialog.open(MobilityUpdateDialogComponent, {
      width: '600px',
      data: mobilityUpdateDto
    });

    dialogRef.afterClosed().subscribe((result: MobilityUpdateDto) => {
      if (result) {
        this.mobilityService.updateMobility(result).subscribe(
          (response) => {
            console.log('Mobility updated successfully', response);
          },
          (error) => {
            console.error('Error updating mobility', error);
          }
        );
      }
    });
  }

  transformToUpdateDto(responseDto: MobilityResponseDto): MobilityUpdateDto {
    return {
      id: responseDto.id,
      description: responseDto.description,
      userType: responseDto.userType,
      type: responseDto.type,
      documents: responseDto.documents.map(document => ({
        id: document.id,
        fileName: document.fileName,
        data: ''
      }))
    };
  }

  onDeleteMobility(mobilityId: number) {
    this.mobilityService.deleteMobility(mobilityId).subscribe(() => {
      this.getMobilities();
    });
  }

}
