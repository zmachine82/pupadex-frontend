import { DogprofileComponent } from './dogprofile/DogprofileComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PuppylistComponent } from './puppylist/puppylist.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { AddpuppyComponent } from './addpuppy/addpuppy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PuppylistComponent,
    DogprofileComponent,
    AddpuppyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
