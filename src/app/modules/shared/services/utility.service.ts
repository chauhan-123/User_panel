import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constant/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationModelComponent } from '../component/confirmation-model/confirmation-model.component';
import { SOMETHING_WENT_WRONG, POPUP_MESSAGES } from 'src/app/constant/message';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  public setAutoHide = true;
  public autoHide = 2000;
  public addExtraClass = false;
  public static loader = new BehaviorSubject<boolean>(false);

  constructor(private snackBar: MatSnackBar , private _dialog:MatDialog
    ) {
    }
  
  public snackBarConfig(successflag) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    if (!successflag) {
        config.panelClass = ['red-snackbar']
    }
    else {
        config.panelClass = this.addExtraClass ? ['party'] : undefined;
    }
    return config;
}

openSnackBar(message: string, successflag: boolean) {
    this.snackBar.open(message, undefined, this.snackBarConfig(successflag));
}

clearStorage() {
  localStorage.removeItem('login');
  localStorage.removeItem('_id');
  localStorage.removeItem('admin-name');
  localStorage.removeItem('admin-email');
}

  trim(data) {
    for (const item in data) {
        if (typeof data[item] === 'string') {
            data[item] = data[item].trim();
        }
    }
    return data;
}

openDialog(data) {
  const dialogRef = this._dialog.open(ConfirmationModelComponent, {
      width:'500px',
      data: data
  });
  return dialogRef.afterClosed();
}

errorAlert(error) {
  let data = {
      title: '',
      message: (error && error.error && error.error.message) ? (error.error.message) : SOMETHING_WENT_WRONG,
      yes: POPUP_MESSAGES.close,
      isHideCancel: true
  }
  this.openDialog(data).subscribe(success => {

  });
}
  getNameFormControl(required = true, maxLength = 'nameMaxLength') {
    let compose = [
        Validators.pattern(PATTERN.name),
        Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
        Validators.maxLength(VALIDATION_CRITERIA[maxLength]),
    ];
    if (required) {
        compose.splice(0, 0, Validators.required);
    }
    return ['', Validators.compose(
        compose
    )];
}

getPhoneFormControl(required = true, maxLength = 'phoneMaxLength') {
  let compose = [
      Validators.pattern(PATTERN.phone),
      Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
      Validators.maxLength(VALIDATION_CRITERIA[maxLength])
  ];
  if (required) {
      compose.splice(0, 0, Validators.required);
  }
  return ['', Validators.compose(
      compose
  )];
}

getPasswordFormControl() {
  return ['', Validators.compose([
      Validators.required,
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)]
  )];
}

getEmailFormControl() {
  return ['', Validators.compose([
      Validators.required,
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)]
  )];
}

getVerifyControl() {
  return ['' , Validators.compose([
      Validators.required
  ])]

  }
}
