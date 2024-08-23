import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsRequest, NewsResponse } from '../../../models/news/news';

@Component({
  selector: 'app-edit-news-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-news-modal.component.html',
  styleUrl: './edit-news-modal.component.css'
})
export class EditNewsModalComponent {
  @Input() selectedNews: NewsResponse | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<NewsRequest>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.editForm = this.fb.group({
      title: [''],
      image: [null],
      postedBy: ['']
    });
  }

  ngOnInit(): void {
    if (this.selectedNews) {
      this.editForm.patchValue({
        title: this.selectedNews.title,
        postedBy: this.selectedNews.postedBy
        // Image will be selected by the user if they want to update it
      });
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.editForm.patchValue({ image: file });
    }
  }

  submit(): void {
    if (this.editForm.valid) {
      this.saveChanges.emit(this.editForm.value);
    }
  }

  close(): void {
    this.closeModal.emit();
  }
}
