import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AuthGuard } from './guard/guard/auth.guard';

const routes: Routes = [

  {path:'', redirectTo:'login',pathMatch:'full'},
  
  {path:'login', component:LoginComponent},
  

  // When the user will visit admin route then only load this mainfiles
  // at the time time of bootstrap otherwise we are not going to this mainfiles
  // it makes the Application more fast

  {
    path:'admin', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./MainFile/admin/admin.module').then((m) => m.AdminModule)},

  {path:'**', component:NotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




