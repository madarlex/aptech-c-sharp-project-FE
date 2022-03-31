import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  BASE_URL: string = 'http://localhost:5136/api/admin/account/';
  constructor(private httpClient: HttpClient) {}

  async getAllAccount() {
    var value = this.httpClient.get(this.BASE_URL + 'getAllAccounts');
    return await lastValueFrom(value);
  }

  async getAccount(id: number) {
    var value = this.httpClient.get(
      this.BASE_URL + 'getAccountById/' + id + '/'
    );

    return await lastValueFrom(value);
  }

  async GetRechargeHistoryList(accountId: number) {
    var value = this.httpClient.get(
      this.BASE_URL + 'getRechargeHistory/' + accountId + '/'
    );

    return await lastValueFrom(value);
  }

  async GetPostPaidHistoryList(accountId: number) {
    var value = this.httpClient.get(
      this.BASE_URL + 'getPostpaidHistoryList/' + accountId + '/'
    );

    return await lastValueFrom(value);
  }
}
