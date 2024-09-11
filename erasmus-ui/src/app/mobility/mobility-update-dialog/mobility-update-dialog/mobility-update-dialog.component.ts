import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DocumentUpdateDto } from '../../../models/document/document';
import { MobilityUpdateDto } from '../../../models/mobility/mobility';

@Component({
  selector: 'app-mobility-update-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mobility-update-dialog.component.html',
  styleUrl: './mobility-update-dialog.component.css'
})
export class MobilityUpdateDialogComponent {
  mobilityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MobilityUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MobilityUpdateDto
  ) {
    this.mobilityForm = this.fb.group({
      id: [data.id],
      description: [data.description, Validators.required],
      userType: [data.userType, Validators.required],
      type: [data.type, Validators.required],
      documents: this.fb.array(this.initDocuments(data.documents))
    });
  }

  ngOnInit(): void {}

  initDocuments(documents: DocumentUpdateDto[]): FormGroup[] {
    return documents.map(document => this.fb.group({
      id: [document.id],
      fileName: [document.fileName, Validators.required],
      data: [document.data, Validators.required]
    }));
  }

  get documents(): FormArray {
    return this.mobilityForm.get('documents') as FormArray;
  }

  addDocument(): void {
    this.documents.push(this.fb.group({
      id: [null],
      fileName: ['', Validators.required],
      data: ['', Validators.required]
    }));
  }

  removeDocument(index: number): void {
    this.documents.removeAt(index);
  }

  onFileChange(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryString = reader.result as string;
        const base64String = btoa(binaryString); // Convert binary to base64 string
        this.documents.at(index).patchValue({ data: base64String });
      };
      reader.readAsBinaryString(file); // Read as binary string
    }
  }

  submit(): void {
    if (this.mobilityForm.valid) {
      this.dialogRef.close(this.mobilityForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
