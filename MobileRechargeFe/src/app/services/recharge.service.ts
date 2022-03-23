import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { RechargeHistory } from "../entities/rechargeHistory.entity";

@Injectable()
export class RechargeService {

    private BASE_URL: string = 'http://localhost:5136/api/recharge/';

    constructor(
        private httpClient: HttpClient
    ){}

    async findAll() {
        var value = this.httpClient.get(this.BASE_URL + 'findall');
        return await lastValueFrom(value);
    }

    async findNormalRecharge() {
        var value = this.httpClient.get(this.BASE_URL + 'findnormalrecharge');
        return await lastValueFrom(value);
    }

    async findSpecialRecharge() {
        var value = this.httpClient.get(this.BASE_URL + 'findspecialrecharge');
        return await lastValueFrom(value);
    }

    async createRechargeHistory(rechargeHistory: RechargeHistory) {
        var value = this.httpClient.post(this.BASE_URL + 'createRechargeHistory', rechargeHistory);
        return await lastValueFrom(value);
    }

    async updateRechargeHistory(code: number) {
        var value = this.httpClient.put(this.BASE_URL + 'updateRechargeHistory/' + code, NaN);
        return await lastValueFrom(value);
    }
}
