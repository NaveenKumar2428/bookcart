import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './Elements/admindashboard/admindashboard.component';
import { CartComponent } from './Elements/cart/cart.component';
import { HomeComponent } from './Elements/home/home.component';


const routes: Routes = [
  
  {path:'',  title:"bookshop",  component:AdmindashboardComponent, 

   children: [

    {path:'home', component:HomeComponent},
    {path:'cart', title:"cart", component:CartComponent},
    {path:'', redirectTo:'/admin/home',pathMatch:'full'},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
