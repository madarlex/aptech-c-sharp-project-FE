import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBack } from 'src/app/entities/feedback.entity';
import { Result } from 'src/app/entities/result.entity';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent implements OnInit {
  addFeedbackForm: FormGroup;
  constructor(
    private feedbackService: FeedbackService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  ngOnInit() {
    this.addFeedbackForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: 0,
    });
  }
  create() {
    var feedback: FeedBack = this.addFeedbackForm.value;
    this.feedbackService.create(feedback).then(
      res => {
        var re: Result = res as Result;
        if (re.result) {
          this.router.navigate(['/successfulfeedback']);
        } else {
          alert("You need to enter the full content");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
