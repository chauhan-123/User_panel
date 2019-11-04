import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule , Routes } from '@angular/router';
import { HeaderComponent } from './layout parts/header/header.component';

const routes: Routes = [
  {path :'', redirectTo:'home', pathMatch:'full'},
  {path:'home', loadChildren:'./home/home.module#HomeModule'}
];

@NgModule({
  declarations: [LayoutComponent , HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }
