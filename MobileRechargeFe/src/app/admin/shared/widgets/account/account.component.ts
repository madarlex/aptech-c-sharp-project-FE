import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/admin/services/account.service';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/entities/account.entity';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/admin/services/notification.service';
import { ViewAccountRechargeHistoryComponent } from './view-recharge-history/view-recharge-history.component';
import { Height } from '@material-ui/icons';
import { ViewAccountPostpaidHistoryComponent } from './view-postpaid-history/view-postpaid-history.component';

@Component({
  selector: 'app-widgets-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  dataSource: MatTableDataSource<Account> = new MatTableDataSource<Account>();
  accounts: Account[] = [];
  displayedColumns: string[] = [
    'id',
    'accountTypeId',
    'name',
    'address',
    'phone',
    'email',
    'gender',
    'dob',
    'identityCard',
    'actions',
  ];
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  clickedRows = new Account();

  constructor(
    private accountService: AccountService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.accountService.getAllAccount().then(
      (successResponse) => {
        this.accounts = successResponse as Account[];
        this.dataSource = new MatTableDataSource<Account>(this.accounts);

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      accountId: id,
    };
    this.dialog.open(DialogContentExampleDialog, {
      autoFocus: true,
      disableClose: true,
      width: '40%',
      data: {
        id: id,
      },
    });
  }

  viewHistory(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      accountId: id,
    };
    this.dialog.open(ViewAccountRechargeHistoryComponent, {
      autoFocus: true,
      disableClose: true,
      width: '60%',
      height: '80%',
      data: {
        id: id,
      },
    });
  }

  viewPostPaidHistory(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      accountId: id,
    };
    this.dialog.open(ViewAccountPostpaidHistoryComponent, {
      autoFocus: true,
      disableClose: true,
      width: '60%',
      height: '80%',
      data: {
        id: id,
      },
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-account-detail-dialog.html',
  styleUrls: ['./account.component.css'],
})
export class DialogContentExampleDialog implements OnInit {
  account: Account;
  accountId: number;

  constructor(
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.accountService.getAccount(this.data.id).then(
      (success) => {
        this.account = success as Account;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onClose() {
    this.notificationService.success('! close successful');
  }
}
