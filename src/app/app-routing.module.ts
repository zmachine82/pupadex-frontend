import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AuthGuard } from './auth.guard';
import { AddPuppyComponent } from './add-puppy/add-puppy.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DogprofileComponent } from './dogprofile/DogprofileComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuppylistComponent } from './puppylist/puppylist.component';
import { DogprofileComponent } from './dogprofile/dogprofile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'puppies', pathMatch: 'full'},
  {path: 'dogprofile/:id', component: DogprofileComponent},
  {path: 'puppies', component: PuppylistComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'add-puppy', component: AddPuppyComponent, canActivate: [AuthGuard]},
  {path: 'dogprofile/:id/new-review', component: NewReviewComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserProfileComponent, canActivate: [AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
