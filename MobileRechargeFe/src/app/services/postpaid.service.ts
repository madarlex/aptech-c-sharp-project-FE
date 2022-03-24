import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { PostPaidHistory } from "../entities/postPaidHistory.entity";


@Injectable()
export class PostPaidService {

    private BASE_URL: string = 'http://localhost:5136/api/postpaid/';

    constructor(
        private httpClient: HttpClient
    ){}

    async findAll() {
        var value = this.httpClient.get(this.BASE_URL + 'findpostpaid');
        return await lastValueFrom(value);
    }

    async createPostPaidHistory(postPaidHistory: PostPaidHistory) {
        var value = this.httpClient.post(this.BASE_URL + 'createPostPaidHistory', postPaidHistory);
        return await lastValueFrom(value);
    }

    async updatePostPaidHistory(id: number) {
        var value = this.httpClient.put(this.BASE_URL + 'updatePostPaidHistory/' + id, NaN);
        return await lastValueFrom(value);
    }
}
