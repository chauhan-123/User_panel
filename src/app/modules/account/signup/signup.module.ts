import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule , Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 
 const signupRoute: Routes = [
   {path:'', component: SignupComponent}
 ]
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(signupRoute),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule

  
  
    
  ]
})
export class SignupModule { }
