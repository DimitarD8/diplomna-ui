import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation/navigation.component';
import { NewsService } from '../service/news/news.service';
import { NewsRequest, NewsResponse } from '../models/news/news';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditNewsModalComponent } from './edit-news/edit-news-modal/edit-news-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { PermissionService } from '../service/permission/permission.service';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [NavigationComponent, CommonModule, ReactiveFormsModule, EditNewsModalComponent, MatIconModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent implements OnInit {
  newsList: NewsResponse[] = [];
  newsForm: FormGroup;
  selectedNews: NewsResponse | null = null;
  isEditModalOpen = false;
  isAdmin: boolean = false;

  constructor(private newsService: NewsService, private fb: FormBuilder, private permissionService: PermissionService) {
    this.newsForm = this.fb.group({
      title: [''],
      image: [null],
      postedBy: ['']
    });
  }

  ngOnInit(): void {
    this.isAdmin = this.permissionService.isAdminAllowed();
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.newsList = data.reverse();
      },
      (error) => {
        console.error('Failed to load news', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newsForm.patchValue({ image: file });
    }
  }

  createOrUpdateNews(): void {
    const newsRequest: NewsRequest = this.newsForm.value;

    if (this.selectedNews) {

      this.newsService.updateNews(this.selectedNews.id, newsRequest).subscribe(
        (updatedNews) => {
          this.loadNews();
          this.newsForm.reset();
          this.selectedNews = null;
        },
        (error) => {
          console.error('Failed to update news', error);
        }
      );
    } else {

      this.newsService.createNews(newsRequest).subscribe(
        (newNews) => {
          this.loadNews();
          this.newsForm.reset();
        },
        (error) => {
          console.error('Failed to create news', error);
        }
      );
    }
  }

  editNews(news: NewsResponse): void {
    this.selectedNews = news;
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedNews = null;
  }

  saveEdit(newsRequest: NewsRequest): void {
    if (this.selectedNews) {
      this.newsService.updateNews(this.selectedNews.id, newsRequest).subscribe(
        (updatedNews) => {
          this.loadNews();
          this.closeEditModal();
        },
        (error) => {
          console.error('Failed to update news', error);
        }
      );
    }
  }

  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe(
      () => {
        this.loadNews();
      },
      (error) => {
        console.error('Failed to delete news', error);
      }
    );
  }

  clearForm(): void {
    this.newsForm.reset();
    this.selectedNews = null;
  }
}
