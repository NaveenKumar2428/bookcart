import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './Elements/admindashboard/admindashboard.component';
import { HomeComponent } from './Elements/home/home.component';
import { TopnavComponent } from './Elements/topnav/topnav.component';
import { SidenavComponent } from './Elements/sidenav/sidenav.component';
import { CartComponent } from './Elements/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './Elements/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';





@NgModule({

  declarations: [
    AdmindashboardComponent,
    HomeComponent,
    TopnavComponent,
    SidenavComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  
  ]
  

})

export class AdminModule { 
  
}
