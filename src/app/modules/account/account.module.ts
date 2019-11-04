import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const accountRoute: Routes = [
  {path :'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'signup', loadChildren:'./signup/signup.module#SignupModule'},
  {path:'forgot', loadChildren:'./forgot/forgot.module#ForgotModule'},
  { path: 'reset-password', loadChildren: './reset/reset.module#ResetModule' }, 
  {path :'verify-token/:_id', loadChildren:'./verify/verify.module#VerifyModule'},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute),
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class AccountModule { }
