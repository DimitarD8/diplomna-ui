export interface NewsRequest {
    title: string;
    image: File;
    postedBy: string;
  }
  
  export interface NewsResponse {
    id: number;
    title: string;
    image: string; // This should be a Base64 encoded string
    postedBy: string;
    datePosted: string;
  }