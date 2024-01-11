import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularValidationsService {

  constructor() { }

  /** this function for validation name fields*/
 nameFieldCheck(value:any) {

  var pattern = /^[A-Za-z' \-.]+$/;
  // var pattern =/^[a-zA-Z ]+(?:\s+[a-zA-Z ]+)*.$/;


      const inputValue = value || '';

      if (inputValue?.toString().length >= 1) {

          if (inputValue.trim() == "sam") {
              return { 'nameCheck': true };
          }
          if (inputValue[0] == " ") {
              return { 'emptynotAllowed': true }
          }
          if (!pattern.test(inputValue)) {
              return { 'specialCharacter': true }
          }
      }

      return null;
  

}

/** this function for email validtion*/
emailValidation(value:any) {

  var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      const emailValue = value || '';

      if (emailValue?.toString().length >= 1) {
          if (emailValue[0] == " ") {
              console.log("inside mail")
              return { 'emptynotAllowed': true }
          }
          if (!emailPattern.test(emailValue)) {
              return { 'notvalidemail': true };
          }
      }

      return null;
  
}

/** mobile number field validation*/
numberValidation(value:any) {

      const check_value = value || '';

      if (check_value?.toString().length >= 1) {
          if (check_value?.toString().length < 3) {
              return { "minimumLength": true }
          }
          if (check_value?.toString().length < 10) {
              return { "phoneNumberDigit": true }
          }
      }

      return null;
  

}


/**password field validation */
passwordValidation(value:any){


      const passValue = value || '';
      if (passValue?.toString().length >= 1) {
          if (passValue[0] == " ") {
              return { "emptynotallowed": true }
          }
          if (passValue.length < 7) {
              return { 'minimumcharacter': true }
          }
          if (passValue.length > 50) {
              return { 'maximumCharacter': true }
          }
          // var specialcharacterreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          // var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          // var specialcharacterreg =  /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

          var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/;

          if (passValue?.toString().length >= 1) {
              if (!specialcharacterreg.test(passValue)) {
                  return { "strongPassword": true };
              }
          }
      }

      return null;
  
}



/**confirm password validation */
confirmPasswordValidators(value:any,value2:any) {


      /**                            condtion  (ternay operator)           ?  true : false; */     
      return value == value2 ? null : { "passwordmismatch": true };

      // if (control.value.password != control.value.cpass) {
      //     console.log('contr !== alue.cpass',control.value.password != control.value.cpass)
      //     return { "passwordmismatch": true };
      // }
      // return null;

  }
}


/**strong password validation */ 
export function strongPasswordValidation(value:any){

      const passValue = value || '';
      var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/;
      if (passValue?.toString().length >= 1) {
          if (!specialcharacterreg.test(passValue)) {
              return { "strongPassword": true };
          }
      }

      return null;
  

}



/**future date restriction */
export function futureDaterestrict(value:any) {

      const dateValue = value || '';
      if (dateValue?.toString().length >= 1) {
          const currentDate = new Date();

          /** Parse the input date*/ 
          const parsedInputDate = new Date(dateValue);
          if (parsedInputDate > currentDate) {
              return { "futureDate": true }
          }

      }

      return null;

}

