import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RechargeService } from 'src/app/admin/services/recharge.service';
import { RechargeHistory } from 'src/app/entities/recharge-history.entity';
import { Recharge } from 'src/app/entities/recharge.entity';
import { ViewRechargeHistoryComponent } from '../recharge-component/view-recharge-history/view-recharge-history.component';

@Component({
  selector: 'app-recharge-history',
  templateUrl: './recharge-history.component.html',
  styleUrls: ['./recharge-history.component.css'],
})
export class RechargeHistoryComponent implements OnInit {
  recharge: Recharge;
  rechargeHistories: RechargeHistory[] = [];
  dataSource: MatTableDataSource<RechargeHistory> = new MatTableDataSource();
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
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
  constructor(private rechargeService: RechargeService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.rechargeService.getRechargeHistories().then(
      (success) => {
        this.rechargeHistories = success as RechargeHistory[];
        this.dataSource = new MatTableDataSource<RechargeHistory>(
          this.rechargeHistories
        );

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
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
