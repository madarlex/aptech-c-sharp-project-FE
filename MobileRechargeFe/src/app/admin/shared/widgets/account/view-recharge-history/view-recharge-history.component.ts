import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RechargeHistory } from 'src/app/entities/recharge-history.entity';
import { AccountService } from 'src/app/admin/services/account.service';

@Component({
  selector: 'app-view-recharge-history',
  templateUrl: './view-recharge-history.component.html',
  styleUrls: ['./view-recharge-history.component.css'],
})
export class ViewAccountRechargeHistoryComponent implements OnInit {
  dataSource: MatTableDataSource<RechargeHistory> = new MatTableDataSource();
  rechargeHistoryList: RechargeHistory[];
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  rechargeHistory: RechargeHistory;
  displayedColumn: string[] = [
    'id',
    'rechargeId',
    'account',
    'code',
    'description',
    'status',
    'date',
    'phone',
  ];
  constructor(
    private accountService: AccountService,
    public dialogRef: MatDialogRef<ViewAccountRechargeHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.accountService.GetRechargeHistoryList(this.data.id).then(
      (res) => {
        this.rechargeHistoryList = res as RechargeHistory[];
        this.dataSource = new MatTableDataSource<RechargeHistory>(
          this.rechargeHistoryList
        );

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

  openDialog(id: number) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
