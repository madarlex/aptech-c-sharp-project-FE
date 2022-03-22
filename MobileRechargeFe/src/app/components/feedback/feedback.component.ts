import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Feedback } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Component({
  
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public feedbackService: FeedbackService, public toast: ToastrService) {}

  ngOnInit(): void {
           
  }

  submit(form:NgForm) {
    if(this.feedbackService.feedbackData.id == 0)
      this.insertFeedback(form);
    else
      this.updateFeedback(form);
  }

  insertFeedback(myForm: NgForm) {
    this.feedbackService.saveFeedback().subscribe(d => {
      this.resetForm(myForm);
      this.refereshData();
      this.toast.success('Thank you for your feedback' , 'Done!');    
    });
  }

  updateFeedback(myForm: NgForm) {
    this.feedbackService.updateFeedback().subscribe(d => {
      this.resetForm(myForm);
      this.refereshData();
      this.toast.warning('Thank you for your feedback.' , 'Done!');
     // console.log("Update Success"); 
    });
  }

  resetForm(myForm:NgForm) {
    myForm.form.reset();
    this.feedbackService.feedbackData = new Feedback();
  }

  refereshData() {
    this.feedbackService.getFeedback().subscribe(res => {
      this.feedbackService.listFeedback = res;
    });
  }
}
