import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recharge } from 'src/app/entities/recharge.entity';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  BASE_URL: string = 'http://localhost:5136/api/admin/recharges/';
  constructor(private httpClient: HttpClient) {}

  async getRecharges() {
    var value = this.httpClient.get(this.BASE_URL + 'getRecharges');
    return await lastValueFrom(value);
  }

  async getRechargeById(id: number) {
    var value = this.httpClient.get(this.BASE_URL + 'getRechargeById/' + id);
    return await lastValueFrom(value);
  }

  async create(recharge: Recharge) {
    var value = this.httpClient.post(this.BASE_URL + 'create', recharge);
    return await lastValueFrom(value);
  }

  async update(id: number, rechagre: Recharge) {
    var value = this.httpClient.put(this.BASE_URL + 'update/' + id, rechagre);
    return await lastValueFrom(value);
  }

  async GetRechargeHistoryByRechargeId(rechargeId: number) {
    var value = this.httpClient.get(
      this.BASE_URL + 'getRechargeHistoryByRechargeId/' + rechargeId
    );
    return await lastValueFrom(value);
  }

  async getRechargeHistories() {
    var value = this.httpClient.get(this.BASE_URL + 'getRechargeHistories');
    return await lastValueFrom(value);
  }
}
