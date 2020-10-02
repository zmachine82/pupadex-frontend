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
    favorited: boolean = false;
    constructor(private route: ActivatedRoute, private puppyService: PuppyService, private localStorageService: LocalStorageService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.puppyService.getAPuppy(params.id).subscribe(puppyData => {
                    this.puppy = puppyData
                    this.reviews = puppyData.reviews
                    this.averageRating = puppyData.average_rating
                    this.favorited = puppyData.users.filter(user => user.user_id === this.localStorageService.currentUser.getValue().id).length > 0
                    
                });
            }
        });

    }

    loggedIn() {
        return this.localStorageService.isLoggedIn();
    }

    toggleFavorite() {
        this.puppyService.toggleFavoriteOnPuppy(this.puppy).subscribe((data: any) => {
            this.favorited = data.favorite
        });
    }
}
