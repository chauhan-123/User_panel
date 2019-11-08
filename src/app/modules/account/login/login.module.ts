import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

const loginRoute : Routes = [
  {path :'', component:LoginComponent}
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
  RouterModule.forChild(loginRoute),
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  ReactiveFormsModule,
  SharedModule,
  MatSlideToggleModule,
]

})
export class LoginModule { }
