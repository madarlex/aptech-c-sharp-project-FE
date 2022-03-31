import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/admin/services/notification.service';
import { RechargeTypeService } from 'src/app/admin/services/recharge-type.service';
import { RechargeService } from 'src/app/admin/services/recharge.service';
import { RechargeType } from 'src/app/entities/recharge-type.entity';
import { Recharge } from 'src/app/entities/recharge.entity';

@Component({
  selector: 'app-create-rechagre',
  templateUrl: './create-rechagre.component.html',
  styleUrls: ['./create-rechagre.component.css'],
})
export class CreateRechagreComponent implements OnInit {
  createForm: FormGroup = new FormGroup({});
  recharge: Recharge;
  selected: number;
  rechargeTypes: RechargeType[] = [];

  constructor(
    private rechargeService: RechargeService,
    private rechargeTypeService: RechargeTypeService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CreateRechagreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initializeRechargeType();
    this.form();
  }

  form() {
    if (this.data) {
      this.rechargeService.getRechargeById(this.data.id).then(
        (success) => {
          this.recharge = success as Recharge;

          this.rechargeTypeService.getAllRechargeTypes().then(
            (success) => {
              this.rechargeTypes = success as RechargeType[];
              this.createForm = this.formBuilder.group({
                id: this.recharge.id,
                minutes: this.recharge.minutes,
                data: this.recharge.data,
                status: this.recharge.status,
                description: this.recharge.description,
                name: this.recharge.name,
                price: this.recharge.price,
                rechargeTypeId: this.recharge.rechargeTypeId,
              });
            },
            (err) => {
              console.log(err);
            }
          );
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
      minutes: '',
      data: '',
      status: '',
      description: '',
      name: '',
      price: '',
      rechargeTypeId: 1,
    });
    this.initializeRechargeType();
  }

  initializeRechargeType() {
    this.rechargeTypeService.getAllRechargeTypes().then(
      (success) => {
        this.rechargeTypes = success as RechargeType[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onClear() {
    this.createForm.reset();
    this.initializeFormGroup();
    this.notificationService.success('Submitted successfully');
  }

  onSubmit() {
    if (this.createForm.valid) {
      var createRecharge: Recharge = this.createForm.value;

      if (!this.createForm.get('id').value) {
        createRecharge.id = 0;
        this.rechargeService.create(createRecharge).then(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        console.log(createRecharge);
      } else {
        this.rechargeService.update(this.data.id, createRecharge).then(
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
