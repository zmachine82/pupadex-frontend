import { LocalStorageService } from './local-storage.service';
import { PuppyData } from './models/puppy-data';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Puppy } from './models/puppy';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {
  baseUrl: string = environment.baseUrl;
  currentUser: User;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { 
    this.localStorageService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  getAllPuppies(): Observable<PuppyData>{
    return this.http.get<PuppyData>(this.baseUrl + "puppies/index");
  }

  getAPuppy(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "puppies/show?id=" + id);
  }

  addPuppy(puppy: Puppy) {
    return this.http.post(this.baseUrl + 'puppies/create', puppy);
  }

  toggleFavoriteOnPuppy(puppy: Puppy) {
    return this.http.post(this.baseUrl + 'puppies/favorite', {puppy_id: puppy.id, user_id: this.localStorageService.currentUser.value.id})
  }
}
