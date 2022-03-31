import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './entities/account.entity';
import { Result } from './entities/result.entity';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private accountService: AccountService,) { }
  ngOnInit() {
  }
}
