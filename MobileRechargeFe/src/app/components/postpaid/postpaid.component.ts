import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPaid } from 'src/app/entities/postpaid.entity';
import { PostPaidHistory } from 'src/app/entities/postPaidHistory.entity';
import { Result } from 'src/app/entities/result.entity';
import { PostPaidService } from 'src/app/services/postpaid.service';

@Component({
  templateUrl: './postpaid.component.html',
})
export class PostPaidComponent implements OnInit {
  postPaids: PostPaid[];
  addPostPaidHistoryForm: FormGroup;
  accountId = localStorage.getItem('accountId');

  constructor(
    private postPaidService: PostPaidService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postPaidService.findAll().then(
      res =>  {
        this.postPaids = res as PostPaid[];
      },
      err => {
        console.log(err);
      }
    );

    this.addPostPaidHistoryForm = this.formBuilder.group({
      postPaidId: 1,
      accountId: this.accountId,
      code: "",
      description: "",
      status: 0,
      date: new Date(), 
      phone: ""
    });
  }

  createPostPaidHistory() {
    var newPostPaidHistory: PostPaidHistory = this.addPostPaidHistoryForm.value;
    newPostPaidHistory.code = (Math.floor(100000 + Math.random() * 900000)).toString();
    newPostPaidHistory.status = 0;    
    console.log(newPostPaidHistory.postPaidId);
    console.log(newPostPaidHistory.phone);
    localStorage.setItem("newPostPaidHistory", JSON.stringify(newPostPaidHistory));
    this.postPaidService.createPostPaidHistory(newPostPaidHistory).then(res => {
      console.log(res);
      var re: Result = res as Result;
      if (re.result) {
        console.log("OK");
        this.router.navigate(['/confirm']);
        
      } else {
        console.log("Failed");
      }
    },
    err => {
      console.log(err);
    });
    console.log(newPostPaidHistory);
  }
}
