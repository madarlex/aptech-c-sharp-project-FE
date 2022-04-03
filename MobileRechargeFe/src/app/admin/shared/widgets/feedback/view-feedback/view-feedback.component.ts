import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/admin/services/notification.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css'],
})
export class ViewFeedbackComponent implements OnInit {
  description: number;
  name: string;

  constructor(
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ViewFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.description = this.data.description;
    this.name = this.data.name;
  }
  onClose() {
    this.dialogRef.close();
  }
}
