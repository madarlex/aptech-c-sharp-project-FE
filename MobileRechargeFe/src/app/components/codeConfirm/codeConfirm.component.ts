import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/entities/result.entity';
import { PostPaidService } from 'src/app/services/postpaid.service';
import { RechargeService } from 'src/app/services/recharge.service';

@Component({
  selector: 'app-root',
  templateUrl: './codeConfirm.component.html',
})
export class CodeConfirmComponent implements OnInit {
  newRechargeHistory = JSON.parse(localStorage.getItem("newRechargeHistory")) ? JSON.parse(localStorage.getItem("newRechargeHistory")) : {"code": "null"};
  newPostPaidHistory = JSON.parse(localStorage.getItem("newPostPaidHistory")) ? JSON.parse(localStorage.getItem("newPostPaidHistory")) : {"code": "null"};
  updatedCode: string;

  constructor(
    private rechargeService: RechargeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private postPaidService: PostPaidService
  ) {}

  ngOnInit(): void {
    console.log(this.newRechargeHistory["code"]);
    console.log(this.newRechargeHistory["accountId"]);
    console.log(this.newRechargeHistory.accountId);
    console.log(this.newRechargeHistory);
    console.log(this.newPostPaidHistory["code"]);
    console.log(this.newPostPaidHistory["accountId"]);
    console.log(this.newPostPaidHistory.accountId);
    console.log(this.newPostPaidHistory);
  }

  updateRechargeHistory() {   
    console.log(this.updatedCode); 
    if (this.newRechargeHistory["code"] ===  this.updatedCode) {      
      this.rechargeService.updateRechargeHistory(parseInt(this.newRechargeHistory.accountId)).then(res => {
        console.log(res);
        var re: Result = res as Result;
        if (re.result) {
          console.log("OK");
          this.router.navigate(['/prepaid']);
          localStorage.removeItem("newRechargeHistory");
        } else {
          console.log("Failed");
        }
      },
      err => {
        console.log(err);
      });
    
    }    
  }  
  
  updatePostPaidHistory() {   
    console.log(this.updatedCode); 
    if (this.newPostPaidHistory["code"] ==  this.updatedCode) {      
      this.postPaidService.updatePostPaidHistory(parseInt(this.newPostPaidHistory.accountId)).then(res => {
        console.log(res);
        var re: Result = res as Result;
        if (re.result) {
          console.log("OK");
          this.router.navigate(['/postpaid']);
          localStorage.removeItem("newPostPaidHistory");
        } else {
          console.log("Failed");
        }
      },
      err => {
        console.log(err);
      });
    }    
  }
}
