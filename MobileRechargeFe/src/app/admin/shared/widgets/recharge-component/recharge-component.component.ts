import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RechargeService } from 'src/app/admin/services/recharge.service';
import { Recharge } from 'src/app/entities/recharge.entity';
import { CreateRechagreComponent } from './create-rechagre/create-rechagre.component';
import { ViewRechargeHistoryComponent } from './view-recharge-history/view-recharge-history.component';

@Component({
  selector: 'app-widgets-recharge-component',
  templateUrl: './recharge-component.component.html',
  styleUrls: ['./recharge-component.component.css'],
})
export class RechargeComponentComponent implements OnInit {
  dataSource: MatTableDataSource<Recharge> = new MatTableDataSource<Recharge>();
  recharges: Recharge[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumn: string[] = [
    'id',
    'minutes',
    'data',
    'status',
    'description',
    'name',
    'price',
    'rechargeType.name',
    'actions',
  ];

  constructor(
    private rechargeService: RechargeService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.rechargeService.getRecharges().then(
      (success) => {
        this.recharges = success as Recharge[];
        this.dataSource = new MatTableDataSource<Recharge>(this.recharges);

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
      .open(CreateRechagreComponent, {
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
      .open(CreateRechagreComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.loadTable();
      });
  }

  viewHistory(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      accountId: id,
    };
    this.matDialog.open(ViewRechargeHistoryComponent, {
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
