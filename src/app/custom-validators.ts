import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';

export class CustomValidators {
  constructor() {}

 static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if the control value is empty return no error.
        console.log("no error");
      }

      // test the value of the control against the regexp supplied.
      const valid = regex.test(control.value);

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return {mobile: "message"} 
    };
}
    static MatchValidator(control: AbstractControl) {
    const password: string = control.get("password")!.value; // get password from our password form control
    const confirmpassword: string = control.get("confirmpassword")!.value; // get password from our confirmPassword form control
    
    // if the confirmPassword value is null or empty, don't return an error.
    if (!confirmpassword?.length) {
      return null;
    }

    // if the confirmPassword length is < 8, set the minLength error.
    if (confirmpassword.length < 8) {
      control.get('confirmpassword')!.setErrors({ minLength: true });
    } else {
      // compare the passwords and see if they match.
      if (password !== confirmpassword) {
        control.get("confirmpassword")!.setErrors({ mismatch: true });
      } else {
        // if passwords match, don't return an error.
        return null;
      }
    }
  }
}