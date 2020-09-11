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
    constructor(private route: ActivatedRoute, private puppyService: PuppyService ) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.puppyService.getAPuppy(params.id).subscribe(puppyData => {
                    console.log(puppyData);
                    this.puppy = puppyData.puppy
                });
            }
        })
    }
}
