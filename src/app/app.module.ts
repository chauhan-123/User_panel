import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './modules/shared/services/http.service';
import { AccountService } from './modules/account/account.service';
import { SharedModule } from './modules/shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './modules/layout/layout parts/header/header.component';
import { MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { LoginComponent } from './modules/account/login/login.component';
import { SignupComponent } from './modules/account/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
    
  ],
  providers: [HttpService, AccountService ,HeaderComponent],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent, SignupComponent]
})
export class AppModule { }
