import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Account } from "../entities/account.entity";
import { Feedback } from "../entities/feedback.entity";


@Injectable()
export class FeedbackService {
    private BASE_URL: string = 'http://localhost:5136/api/feedback/';
    constructor(
        private httpClient: HttpClient
        //Khai bao doi tuong de lay duoc API
    ) { }
    async create(feedback: Feedback) {
        var value = this.httpClient.post(this.BASE_URL + 'add', feedback);
        return await lastValueFrom(value);
    }
}