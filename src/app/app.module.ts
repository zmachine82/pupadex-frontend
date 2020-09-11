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
<<<<<<< HEAD
import { DogprofileComponent } from './dogprofile/dogprofile.component';
=======
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
>>>>>>> 69af8baa5d24b2ba542a984daf5c05785a47b0d7

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PuppylistComponent,
<<<<<<< HEAD
    DogprofileComponent,
=======
    DogprofileComponent
>>>>>>> 69af8baa5d24b2ba542a984daf5c05785a47b0d7
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
