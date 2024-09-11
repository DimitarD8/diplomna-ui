export interface NewsRequest {
    title: string;
    image: File;
    postedBy: string;
  }
  
  export interface NewsResponse {
    id: number;
    title: string;
    image: string;
    postedBy: string;
    datePosted: string;
  }