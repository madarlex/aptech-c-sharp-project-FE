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

@Component({
  selector: 'app-view-postpaid-history',
  templateUrl: './view-postpaid-history.component.html',
  styleUrls: ['./view-postpaid-history.component.css'],
})
export class ViewAccountPostpaidHistoryComponent implements OnInit {
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
    private matDialog: MatDialog,
    public dialogRef: MatDialogRef<ViewAccountPostpaidHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.accountService.GetPostPaidHistoryList(this.data.id).then(
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

  onClose() {
    this.dialogRef.close();
  }
}
