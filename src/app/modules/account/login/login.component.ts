import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor( private _accountService : AccountService , private dialog:MatDialog) {
    this.loginForm = this._accountService.createLoginForm();
   }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this._accountService.login(this.loginForm.value);
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  signUp(data){
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '750px',
      height:'310px',
      data: data||''
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
