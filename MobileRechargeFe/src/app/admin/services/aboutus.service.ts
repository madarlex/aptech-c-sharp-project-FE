import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AboutUs } from 'src/app/entities/aboutus.entity';
import { Recharge } from 'src/app/entities/recharge.entity';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  BASE_URL: string = 'http://localhost:5136/api/admin/aboutus/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}

  async getRecharges() {
    var value = this.httpClient.get(this.BASE_URL + 'getRecharges');
    return await lastValueFrom(value);
  }

  async getRechargeById(id: number) {
    var value = this.httpClient.get(this.BASE_URL + 'getRechargeById/' + id);
    return await lastValueFrom(value);
  }

  async create(aboutus: AboutUs) {
    var value = this.httpClient.post(
      this.BASE_URL + 'create',
      aboutus,
      this.httpOptions
    );
    return await lastValueFrom(value);
  }
}
