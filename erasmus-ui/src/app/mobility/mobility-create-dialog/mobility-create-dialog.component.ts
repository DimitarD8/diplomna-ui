import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-mobility-create-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mobility-create-dialog.component.html',
  styleUrl: './mobility-create-dialog.component.css'
})
export class MobilityCreateDialogComponent {

  mobilityForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<MobilityCreateDialogComponent>) {
    this.mobilityForm = this.fb.group({
      description: ['', Validators.required],
      userType: ['', Validators.required],
      type: ['', Validators.required],
      documents: this.fb.array([this.createDocument()])
    });
  }

  get documents() {
    return this.mobilityForm.get('documents') as FormArray;
  }

  createDocument(): FormGroup {
    return this.fb.group({
      fileName: ['', Validators.required],
      data: [null, Validators.required]
    });
  }

  addDocument() {
    this.documents.push(this.createDocument());
  }

  removeDocument(index: number) {
    this.documents.removeAt(index);
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const binaryString = reader.result as string;
            const base64String = btoa(binaryString); 
            this.documents.at(index).patchValue({ data: base64String });
        };
        reader.readAsBinaryString(file);
    }
}

  submit() {
    if (this.mobilityForm.valid) {
      this.dialogRef.close(this.mobilityForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
