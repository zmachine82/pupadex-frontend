import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuppylistComponent } from './puppylist/puppylist.component';
import { DogprofileComponent } from './dogprofile/dogprofile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'puppies', component: PuppylistComponent},
  {path: 'dogprofile', component: DogprofileComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
