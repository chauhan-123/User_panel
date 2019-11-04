import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constant/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  trim(data) {
    for (const item in data) {
        if (typeof data[item] === 'string') {
            data[item] = data[item].trim();
        }
    }
    return data;
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
}
