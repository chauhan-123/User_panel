import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify.component';
import { RouterModule , Routes } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
const verifyRoute:Routes = [
  {path:'', component:VerifyComponent}
]

@NgModule({
  declarations: [VerifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(verifyRoute),
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class VerifyModule { }
