import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RechargeTypeService {
  BASE_URL: string = 'http://localhost:5136/api/admin/recharges/';
  constructor(private httpClient: HttpClient) {}

  async getAllRechargeTypes() {
    var value = this.httpClient.get(this.BASE_URL + 'getRechargeTypes');
    return await lastValueFrom(value);
  }
}
