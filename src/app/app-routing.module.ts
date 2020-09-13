import { DogprofileComponent } from './dogprofile/DogprofileComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuppylistComponent } from './puppylist/puppylist.component';
import { AddpuppyComponent } from './addpuppy/addpuppy.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'puppies', pathMatch: 'full'},
  {path: 'dogprofile/:id', component: DogprofileComponent},
  {path: 'puppies', component: PuppylistComponent},
  {path: 'addpuppy', component: AddpuppyComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
