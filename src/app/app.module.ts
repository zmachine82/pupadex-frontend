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
<<<<<<< HEAD
>>>>>>> 69af8baa5d24b2ba542a984daf5c05785a47b0d7
=======
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
>>>>>>> 094d943d3cd369713f2a519db285c60937a12444

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PuppylistComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    DogprofileComponent,
=======
    DogprofileComponent
>>>>>>> 69af8baa5d24b2ba542a984daf5c05785a47b0d7
=======
    DogprofileComponent,
    SignUpComponent,
    SignInComponent
>>>>>>> 094d943d3cd369713f2a519db285c60937a12444
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
