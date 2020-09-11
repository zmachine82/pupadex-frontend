import { PuppyData } from './models/puppy-data';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Puppy } from './models/puppy';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllPuppies(): Observable<PuppyData>{
    return this.http.get<PuppyData>(this.baseUrl + "puppies/index");
  }
}
