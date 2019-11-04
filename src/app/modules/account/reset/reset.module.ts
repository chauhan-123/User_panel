import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset.component';
import { RouterModule , Routes } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
const resetRoute:Routes =[
  {path:'', component:ResetComponent}
]
@NgModule({
  declarations: [ResetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(resetRoute),
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ResetModule { }
