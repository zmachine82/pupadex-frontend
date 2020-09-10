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

  getAllPuppies(): Observable<Puppy[]>{
    return this.http.get<Puppy[]>(this.baseUrl + "puppies/index");
  }
}
