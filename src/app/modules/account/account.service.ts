import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UtilityService } from '../shared/services/utility.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "http://localhost:3000/"
  constructor(private _formBuilder: FormBuilder , private _utilityService: UtilityService, private httpClient:HttpClient) { }

    /* 
      Method For Creating Registration Form
  */
 createSignUpForm() {
  return this._formBuilder.group(
    {
      firstName: this._utilityService.getNameFormControl(),
      email: this._utilityService.getEmailFormControl(),
      phone: this._utilityService.getPhoneFormControl(),
      password: this._utilityService.getPasswordFormControl(),
    },
    {
    }
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


signup(data) {
  data = this._utilityService.trim(data);

  return this.httpClient.post(`${this.baseUrl}registration`, data);
}

 /*  
       Method For Login
   */
  login(data) {
    data = this._utilityService.trim(data);
    this.httpClient.post(`${this.baseUrl}login`, data).subscribe(response => {
      // if (response['statusCode'] === 200) {
      //   localStorage.setItem('login', response['result']['token']);
      //   localStorage.setItem('_id', response['result']['_id']);
      //   localStorage.setItem('admin-name', response['result']['firstName']);
      //   localStorage.setItem('admin-email', response['result']['email']);
      //   this.router.navigate(['/admin/home'])
      //   this._utilityService.openSnackBar('you are successfully login', true);
      // }
    },
      error => {  
      }
    );
  };

getValidationError(control: FormControl, name) {
  return ''
}
}
