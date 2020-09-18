import { LocalStorageService } from './../local-storage.service';
import { ReviewService } from './../review.service';
import { NewReview } from './../models/new-review';
import { PuppyService } from './../puppy.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {

  puppyId: number;
  newReview: NewReview = new NewReview();

  constructor(private route: ActivatedRoute, private reviewService: ReviewService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.puppyId = params.id;
      }
    });
  }

  addReview() {
    this.newReview.puppy_id = this.puppyId;
    this.newReview.user_id = this.localStorageService.currentUser.getValue().id;
    this.reviewService.addReview(this.newReview).subscribe(data => {

      console.log(data);
    });
  }

}
