import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
   {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
