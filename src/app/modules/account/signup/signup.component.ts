import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { AccountService } from '../account.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup;

  constructor( private _accountService : AccountService) {
    this.signForm = this._accountService.createSignUpForm();
   }

  ngOnInit() {
  }

  signup() {
    if (this.signForm.invalid) {
      return;
    }
    this._accountService.signup(this.signForm.value).subscribe();
    // (response =>{
    //   this.utility.openSnackBar('you are successfully signup', true)
    //   this._router.navigate(['/account/verify-token' , response['result']._id ]);
    // }, error =>{
    // });
    
  }

  getValidationError(control, name) {
    return this._accountService.getValidationError(control, name);
  }

}
