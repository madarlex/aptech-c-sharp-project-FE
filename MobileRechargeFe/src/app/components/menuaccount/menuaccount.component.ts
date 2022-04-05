import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { Account } from 'src/app/entities/account.entity';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'menu-account',
  templateUrl: './menuaccount.component.html',
})
export class MenuAccountComponent implements OnInit {
  name: string;
  public get login_status() {
    var accountId = localStorage.getItem('accountId');
    if (accountId != null) {
      return true;
    } else {
      return false;
    }
  }
  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }
  ngOnInit() {
  }
  onLogout() {
    localStorage.removeItem('accountId');
    localStorage.removeItem('accountType');
    this.router.navigate(['/login']);
  }
}
