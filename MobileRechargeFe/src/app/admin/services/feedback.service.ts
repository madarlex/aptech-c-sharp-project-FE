import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recharge } from 'src/app/entities/recharge.entity';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  BASE_URL: string = 'http://localhost:5136/api/admin/feedback/';
  constructor(private httpClient: HttpClient) {}

  async getFeedbacks() {
    var value = this.httpClient.get(this.BASE_URL + 'getFeedbacks');
    return await lastValueFrom(value);
  }

  async getFeedbackById(id: number) {
    var value = this.httpClient.get(this.BASE_URL + 'getFeedbackById/' + id);
    return await lastValueFrom(value);
  }
}
