import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const accountRoute: Routes = [
  {path :'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'signup', loadChildren:'./signup/signup.module#SignupModule'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoute),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
