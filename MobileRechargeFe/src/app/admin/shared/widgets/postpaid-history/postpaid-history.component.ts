import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostPaidHistory } from 'src/app/entities/postpaid-history.entity';
import { AccountService } from 'src/app/admin/services/account.service';
import { ViewAccountPostpaidHistoryComponent } from '../account/view-postpaid-history/view-postpaid-history.component';
import { PostpaidService } from 'src/app/admin/services/postpaid.service';

@Component({
  selector: 'app-postpaid-history',
  templateUrl: './postpaid-history.component.html',
  styleUrls: ['./postpaid-history.component.css'],
})
export class PostpaidHistoryComponent implements OnInit {
  dataSource: MatTableDataSource<PostPaidHistory> = new MatTableDataSource();
  postPaidHistory: PostPaidHistory[];
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  postpaidHistory: PostPaidHistory;
  displayedColumn: string[] = [
    'id',
    'postpaidId',
    'accountId',
    'code',
    'description',
    'status',
    'date',
    'phone',
  ];
  constructor(
    private accountService: AccountService,
    private postpaidService: PostpaidService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.postpaidService.getPostpaidHistories().then(
      (res) => {
        this.postPaidHistory = res as PostPaidHistory[];
        this.dataSource = new MatTableDataSource<PostPaidHistory>(
          this.postPaidHistory
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
}
