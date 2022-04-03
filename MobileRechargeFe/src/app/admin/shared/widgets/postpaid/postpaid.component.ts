import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostpaidService } from 'src/app/admin/services/postpaid.service';
import { PostPaid } from 'src/app/entities/postpaid.entity';
import { CreatePostpaidComponent } from './create-postpaid/create-postpaid.component';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css'],
})
export class PostpaidComponent implements OnInit {
  dataSource: MatTableDataSource<PostPaid> = new MatTableDataSource<PostPaid>();
  postpaids: PostPaid[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumn: string[] = ['id', 'status', 'name', 'price'];

  constructor(
    private postpaidService: PostpaidService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.postpaidService.getPostpaids().then(
      (success) => {
        this.postpaids = success as PostPaid[];
        this.dataSource = new MatTableDataSource<PostPaid>(this.postpaids);

        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }

        if (this.sort) {
          this.dataSource.sort = this.sort;
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

  openEdit(id: number) {
    this.matDialog
      .open(CreatePostpaidComponent, {
        autoFocus: true,
        disableClose: true,
        width: '60%',
        data: {
          id: id,
        },
      })
      .afterClosed()
      .subscribe(() => this.loadTable());
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.matDialog
      .open(CreatePostpaidComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.loadTable();
      });
  }
}
