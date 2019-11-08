import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loader:boolean = false;
  constructor( private _accountService : AccountService , private _router:Router ,
     private utility:UtilityService, private dialog: MatDialog) {
    this.signupForm = this._accountService.createSignUpForm();
   }

  ngOnInit() {
  }

  signup() {
    this.loader = true;
    if (this.signupForm.invalid) {
      return;
    }
    this._accountService.signup(this.signupForm.value).subscribe
    // (response =>{
    // this.utility.openSnackBar('you are successfully signup', true)
    //  this._router.navigate(['/user/verify-token' , response['result']._id ]);
    // }, error =>{
    // });
    
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

  againLoginPage(data){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '750px',
      height:'310px',
      data: data||''
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
