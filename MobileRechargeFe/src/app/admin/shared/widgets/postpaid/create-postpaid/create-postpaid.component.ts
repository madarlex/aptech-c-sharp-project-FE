import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/admin/services/notification.service';
import { PostpaidService } from 'src/app/admin/services/postpaid.service';
import { Postpaid } from 'src/app/entities/postpaid.entity';

@Component({
  selector: 'app-create-postpaid',
  templateUrl: './create-postpaid.component.html',
  styleUrls: ['./create-postpaid.component.css'],
})
export class CreatePostpaidComponent implements OnInit {
  createForm: FormGroup = new FormGroup({});
  postpaid: Postpaid;
  byPassHTMLString: string;

  constructor(
    private postpaidService: PostpaidService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CreatePostpaidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form();
  }

  form() {
    if (this.data) {
      this.postpaidService.getPostpaidById(this.data.id).then(
        (success) => {
          this.postpaid = success as Postpaid;
          this.byPassHTMLString = this.postpaid.description;
          this.createForm = this.formBuilder.group({
            id: this.postpaid.id,
            status: this.postpaid.status,
            description: this.postpaid.description,
            name: this.postpaid.name,
            price: this.postpaid.price,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.createForm = this.formBuilder.group({
      id: '',
      status: '',
      description: '',
      name: '',
      price: '',
    });
  }

  onClear() {
    this.createForm.reset();
    this.initializeFormGroup();
    this.notificationService.success('Submitted successfully');
  }

  onSubmit() {
    if (this.createForm.valid) {
      var createPostpaid: Postpaid = this.createForm.value;

      if (!this.createForm.get('id').value) {
        createPostpaid.id = 0;
        this.postpaidService.create(createPostpaid).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        console.log(createPostpaid);
      } else {
        this.postpaidService.update(this.data.id, createPostpaid).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      this.createForm.reset();
      this.initializeFormGroup();
      this.notificationService.success('Submitted successfully');
      this.onClose();
    }
  }
  onClose() {
    this.createForm.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }
}
