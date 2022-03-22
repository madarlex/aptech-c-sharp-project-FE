import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private myhttp:HttpClient) { }

  feedbackUrl:string='http://localhost:5136/api/FeedBacks';
  listFeedback: Feedback[] = [];

  feedbackData: Feedback = new Feedback();

  saveFeedback() {
    return this.myhttp.post(this.feedbackUrl, this.feedbackData);
  }

  updateFeedback() {
    return this.myhttp.put(`${this.feedbackUrl}/${this.feedbackData.id}`, this.feedbackData);
  }

  getFeedback(): Observable<Feedback[]> {
      return this.myhttp.get<Feedback[]>(this.feedbackUrl);
  }

  deleteFeedback(id:number) {
    return this.myhttp.delete(`${this.feedbackUrl}/${id}`);
  }
}
