import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PostPaid } from 'src/app/entities/postpaid.entity';

@Injectable({
  providedIn: 'root',
})
export class PostpaidService {
  BASE_URL: string = 'http://localhost:5136/api/admin/postpaid/';
  constructor(private httpClient: HttpClient) {}

  async getPostpaids() {
    var value = this.httpClient.get(this.BASE_URL + 'getPostpaids');
    return await lastValueFrom(value);
  }

  async getPostpaidById(id: number) {
    var value = this.httpClient.get(this.BASE_URL + 'getPostpaidById/' + id);
    return await lastValueFrom(value);
  }

  async create(postpaid: PostPaid) {
    var value = this.httpClient.post(this.BASE_URL + 'create', postpaid);
    return await lastValueFrom(value);
  }

  async update(id: number, postpaid: PostPaid) {
    var value = this.httpClient.put(this.BASE_URL + 'update/' + id, postpaid);
    return await lastValueFrom(value);
  }

  async getPostpaidHistories() {
    var value = this.httpClient.get(this.BASE_URL + 'getPostpaidHistories');
    return await lastValueFrom(value);
  }

  async GetPostpaidHistoriesByPostpaidId(postpaidId: number) {
    var value = this.httpClient.get(
      this.BASE_URL + 'getPostpaidHistoriesByPostpaidId/' + postpaidId
    );
    return await lastValueFrom(value);
  }
}
