import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatIconModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatPaginatorModule, MatListModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout parts/header/header.component';
import { HomeService } from './home/home.service';
import { LayoutRoutingModule } from './layout.routing';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
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
    MatIconModule,
    LayoutRoutingModule

  ] , 
  providers:[HomeService]
})
export class LayoutModule { }
