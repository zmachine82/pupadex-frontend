import { Review } from './../models/review';
import { LocalStorageService } from './../local-storage.service';
import { PuppyService } from './../puppy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puppy } from '../models/puppy';

@Component({
    selector: 'app-dogprofile',
    templateUrl: './dogprofile.component.html',
    styleUrls: ['./dogprofile.component.scss']
})
export class DogprofileComponent implements OnInit {
    puppy: Puppy = null;
    reviews: Review[] = [];
    averageRating: number = null;
    constructor(private route: ActivatedRoute, private puppyService: PuppyService, private localStorageService: LocalStorageService ) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.puppyService.getAPuppy(params.id).subscribe(puppyData => {
                    console.log(puppyData);
                    this.puppy = puppyData.puppy
                    this.reviews = puppyData.reviews
                    this.averageRating = puppyData.averageRating
                });
            }
        })
    }

    loggedIn() {
        return this.localStorageService.isLoggedIn();
    }
}
