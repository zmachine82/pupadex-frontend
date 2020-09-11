import { DogprofileComponent } from './dogprofile/DogprofileComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuppylistComponent } from './puppylist/puppylist.component';
import { DogprofileComponent } from './dogprofile/dogprofile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
<<<<<<< HEAD
  {path: 'puppies', component: PuppylistComponent},
  {path: 'dogprofile', component: DogprofileComponent},
=======
  {path: 'dogprofile/:id', component: DogprofileComponent},
  {path: 'puppies', component: PuppylistComponent}
>>>>>>> 69af8baa5d24b2ba542a984daf5c05785a47b0d7
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
