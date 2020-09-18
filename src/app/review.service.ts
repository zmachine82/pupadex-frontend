import { NewReview } from './models/new-review';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addReview(review: NewReview) {
    return this.http.post(this.baseUrl + 'reviews/create', review);
  }
}
