import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatDividerModule, MatListModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

const homeRoute:Routes = [
  {path:'',component:HomeComponent},
  {path:'books_details/:bookId', component: BooksDetailsComponent}
]
@NgModule({
  declarations: [HomeComponent , BooksDetailsComponent, BuyNowComponent] ,
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule
  ],
  entryComponents:[BuyNowComponent]
})
export class HomeModule { }
