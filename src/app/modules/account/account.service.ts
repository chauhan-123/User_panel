import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { UtilityService } from '../shared/services/utility.service';
import { HttpClient } from '@angular/common/http';
import { POPUP_MESSAGES } from 'src/app/constant/message';
import { HttpService } from '../shared/services/http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "http://localhost:3000/";

  constructor(private _formBuilder: FormBuilder , private _utilityService: UtilityService, private http:HttpService,
    private router:Router) { }

    /* 
      Method For Creating Registration Form
  */
 createSignUpForm() {
  return this._formBuilder.group(
    {
      phone: this._utilityService.getPhoneFormControl(),
    },
  );
}

  /* 
      Method For Creating Login Form
  */
 createLoginForm() {
  return this._formBuilder.group(
    {
      email: this._utilityService.getEmailFormControl(),
      password: this._utilityService.getPasswordFormControl(),
    }
  )
}
//  create forgot form
createForgotForm() {
  return this._formBuilder.group(
    {
      email: this._utilityService.getEmailFormControl()
    }
  )
}

// reset password form
createResetForm() {
  return this._formBuilder.group(
    {
      password: this._utilityService.getPasswordFormControl(),
      confirmPassword: this._utilityService.getPasswordFormControl()
    },
    {
      validator: this.matchPassword
    }
  )
}


  // Method for create token form
  createVerifyTokenForm() {
    return this._formBuilder.group(
      {
        otp: this._utilityService.getVerifyControl()
      }
    )
  }

signup(data) {
  data = this._utilityService.trim(data);
  data.role = 'user';
  return this.http.post(`${this.baseUrl}registration`, data); 
}

 /*  
       Method For Login
   */
  login(data) {
    data = this._utilityService.trim(data);
    data.role = 'user';
    this.http.post(`${this.baseUrl}login`, data).subscribe(response => {
      if (response['statusCode'] === 200) {
        localStorage.setItem('login', response['result']['token']);
        localStorage.setItem('_id', response['result']['_id']);
        localStorage.setItem('admin-name', response['result']['firstName']);
        localStorage.setItem('admin-email', response['result']['email']);
         this.router.navigate(['/Users'])
         this._utilityService.openSnackBar('you are successfully login', true);
      }
    },
      error => {  
      }
    );
  };

  
  // forgot password 
  checkEmail(data) {
    data = this._utilityService.trim(data);
    this.http.post(`${this.baseUrl}forgot-password`, data).subscribe(
      response =>{
        if(response['statusCode']===200) {
          let data = {
            title: POPUP_MESSAGES.passwordResetTitle ,
            message: POPUP_MESSAGES.passwordResetLink,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
         this._utilityService.openDialog(data).subscribe(success => {
            this.router.navigate(['/user/login']);
          });
        }
      },error => {
        }
    )

  }

   // method for reset password
   resetPassword(data) {
    data = this._utilityService.trim(data);
    /* this method is used for decoded the token
      let jwtData = data['token'].split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let isAdmin = decodedJwtData.admin
    */
    this.http.post(`${this.baseUrl}reset-password`, data).subscribe(
      response => {
        if (response['statusCode'] === 200) {
          let data = {
            title: POPUP_MESSAGES.passwordResetTitle ,
            message: POPUP_MESSAGES.passwordChanged,
            yes: POPUP_MESSAGES.close,
            isHideCancel:true,
            successIcon:true
          }
          this._utilityService.openDialog(data).subscribe(success => {
            this.router.navigate(['/user/login']);
          });
        }
      }, error => {
        this.router.navigate(['/user/login']);
        if (error.error.statusCode === 400 && error.error.responseType === 'INVALID_TOKEN') {
          this.router.navigate(['link-expired']);
        }
      }
    )
  }

  // method for verify token

  verify(data, sendtoken) {
    var sendToken = {
      data: data,
      sendtoken: sendtoken
    }
    return this.http.post(`${this.baseUrl}verify-otp`, sendToken);
  }

    //  password match function 
    matchPassword(form: AbstractControl) {
  
      let password = form.get('password').value;
      let confirmPassword = form.get('confirmPassword').value;
      if (password !== confirmPassword) {
        form.get('confirmPassword').setErrors({ matchPassword: true })
      } else {
        if (password === confirmPassword) {
          // delete form.get('confirmPassword').errors['matchPassword'];
          let keys = Object.keys(form.get('confirmPassword').errors);
          if (keys.length === 0) {
            form.get('confirmPassword').setErrors(null);
          }
        }
      }
    }

getValidationError(control: FormControl, name) {
  return ''
}
}
