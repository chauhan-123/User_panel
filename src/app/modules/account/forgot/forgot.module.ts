import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { RouterModule , Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

const forgotRoute: Routes =[
  {path:'', component:ForgotComponent}
]

@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotRoute),
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class ForgotModule { }
