import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Recharge } from 'src/app/entities/recharge.entity';
import { RechargeHistory } from 'src/app/entities/rechargeHistory.entity';
import { Result } from 'src/app/entities/result.entity';
import { RechargeService } from 'src/app/services/recharge.service';

@Component({
  selector: 'app-root',
  templateUrl: './prepaid.component.html',
})
export class PrepaidComponent implements OnInit {

  normalRecharges: Recharge[];
  specialRecharges: Recharge[];
  choosenPrice: number;
  choosenRechargeId: number;
  addRechargeHistoryForm: FormGroup;
  accountId = localStorage.getItem('accountId');


  constructor(
    private rechargeService: RechargeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rechargeService.findNormalRecharge().then(
      res =>  {
        this.normalRecharges = res as Recharge[];
      },
      err => {
        console.log(err);
      }
    );
    
    this.rechargeService.findSpecialRecharge().then(
      res =>  {
        this.specialRecharges = res as Recharge[];
      },
      err => {
        console.log(err);
      }
    );

    this.addRechargeHistoryForm = this.formBuilder.group({
      rechargeId: 4,
      accountId: this.accountId,
      code: "",
      description: "",
      status: 0,
      date: new Date(),
      phone: ""
    });

    console.log(this.accountId);
  }

  createRechargeHistory() {
    var newRechargeHistory: RechargeHistory = this.addRechargeHistoryForm.value;
    newRechargeHistory.code = (Math.floor(100000 + Math.random() * 900000)).toString();
    newRechargeHistory.status = 0;    
    console.log(newRechargeHistory.rechargeId);
    console.log(newRechargeHistory.phone);
    localStorage.setItem("newRechargeHistory", JSON.stringify(newRechargeHistory));
    this.rechargeService.createRechargeHistory(newRechargeHistory).then(res => {
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
    console.log(newRechargeHistory);
  }
}
