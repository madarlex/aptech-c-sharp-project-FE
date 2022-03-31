import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeedbackService } from 'src/app/admin/services/feedback.service';
import { FeedBack } from 'src/app/entities/feedback.entity';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  dataSource: MatTableDataSource<FeedBack> = new MatTableDataSource<FeedBack>();
  feedbacks: FeedBack[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumn: string[] = ['id', 'status', 'description', 'name'];

  constructor(
    private feedbackService: FeedbackService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.feedbackService.getFeedbacks().then(
      (success) => {
        this.feedbacks = success as FeedBack[];
        this.dataSource = new MatTableDataSource<FeedBack>(this.feedbacks);

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
      .open(ViewFeedbackComponent, {
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
}
