import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Recharge } from 'src/app/entities/recharge.entity';
import { RechargeHistory } from 'src/app/entities/rechargeHistory.entity';
import { Result } from 'src/app/entities/result.entity';
import { RechargeService } from 'src/app/services/recharge.service';

@Component({
  selector: 'app-root',
  templateUrl: './codeConfirm.component.html',
})
export class CodeConfirmComponent implements OnInit {
  newRechargeHistory = JSON.parse(localStorage.getItem("newRechargeHistory"));
  confirmRechargeHistoryForm: FormGroup;
  updatedCode: string;

  constructor(
    private rechargeService: RechargeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.confirmRechargeHistoryForm = this.formBuilder.group({
      rechargeId: 4,
      accountId: 2,
      code: "",
      description: "",
      status: 0,
      date: new Date()

    });

    console.log(this.newRechargeHistory["code"]);
    console.log(this.newRechargeHistory);
  }

  updateRechargeHistory() {   
    console.log(this.updatedCode); 
    if (this.newRechargeHistory["code"] ==  this.updatedCode) {
      this.rechargeService.updateRechargeHistory(parseInt(this.updatedCode)).then(res => {
        console.log(res);
        var re: Result = res as Result;
        if (re.result) {
          console.log("OK");
          this.router.navigate(['/prepaid']);
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
