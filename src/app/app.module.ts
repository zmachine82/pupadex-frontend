  import { AuthInterceptor } from './auth.interceptor';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddPuppyComponent } from './add-puppy/add-puppy.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PuppylistCardComponent } from './puppylist-card/puppylist-card.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PuppylistComponent,
    DogprofileComponent,
    SignUpComponent,
    SignInComponent,
    AddPuppyComponent,
    NewReviewComponent,
    UserProfileComponent,
    PuppylistCardComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
