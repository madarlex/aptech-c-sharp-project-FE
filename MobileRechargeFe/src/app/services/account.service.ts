import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Account } from '../entities/account.entity';

@Injectable()
export class AccountService {
  private BASE_URL: string = 'http://localhost:5136/api/account/';
  constructor(
    private httpClient: HttpClient
  ) //Khai bao doi tuong de lay duoc API
  {}
  async findAll() {
    var value = this.httpClient.get(this.BASE_URL + 'findall');
    return await lastValueFrom(value);
  }

  async find(accountId: number) {
    var value = this.httpClient.get(this.BASE_URL + 'find/' + accountId);
    return await lastValueFrom(value);
  }

  async edit(accountId: number) {
    var value = this.httpClient.get(this.BASE_URL + 'edit/' + accountId);
    return await lastValueFrom(value);
  }

  async update(account: Account) {
    var value = this.httpClient.post(this.BASE_URL + 'update', account);
    return await lastValueFrom(value);
  }

  async create(account: Account) {
    var value = this.httpClient.post(this.BASE_URL + 'add', account);
    return await lastValueFrom(value);
  }

  async active(email: string, token: string) {
    var value = this.httpClient.get(
      this.BASE_URL + 'active/' + email + '/' + token
    );
    return await lastValueFrom(value);
  }

  async forgot(email: string) {
    var value = this.httpClient.get(this.BASE_URL + 'forgot/' + email);
    return await lastValueFrom(value);
  }

  async changePass(email: string, token: string, password: string) {
    var value = this.httpClient.get(
      this.BASE_URL + 'changepass/' + email + '/' + token + '/' + password
    );
    return await lastValueFrom(value);
  }

  async login(email: string, password: string) {
    var value = this.httpClient.get(
      this.BASE_URL + 'login/' + email + '/' + password
    );
    return await lastValueFrom(value);
  }
}
