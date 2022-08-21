import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CarsComponent } from './pages/cars/cars.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'users/update/:userId ', component: UserComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cars', component: CarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
