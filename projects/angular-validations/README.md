# Angular Inputs Validation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.

Client-side Validation should be simple and clean.
Don't let Client-side Validation dirty your controller.

Setup your Validation on config phase by using some rules (example)
If you prefer schema over html attributes , try AngularInputsValidation (Demo)
And add Validation in your view only.

angularjs 11.1.x support to version AngularInputsValidation 0.0.2
angularjs 12.3.x support after version AngularInputsValidation 0.0.2


## Requirement

Angular 11.0.9 (for AngularInputsValidation 0.0.2)
Angular 12.0.9 (for AngularInputsValidation 0.0.2)



## DEMO

````
Stackblitz link : https://stackblitz.com/edit/angular-11-new-kie4nc?file=src%2Fapp%2Fapp.component.ts

````

This is  [Stackblitz link](https://stackblitz.com/edit/angular-11-new-kie4nc?file=src%2Fapp%2Fapp.component.ts).

````
GitHub link:
````


## Installation

`npm i angular-inputs-validations`


## Using Angular-inputs-validation

#### 1. Import Angular-inputs-validation Service
In the module where you want to use the  Angular-inputs-validation, import the  Angular-inputs-validation as follows:

 ````
import {AngularValidationsService} from "angular-validations-services"

````


#### 2. Configuration
To configure the validation messages, you need to perform the following steps:


##### Step 2.1:
import your component:

````

constructor(public validateService: AngularValidationsService) {  }

````



##### Step 2.2: Define Validation Messages

import your component:

````
import {AngularValidationsService} from "angular-validations-services"

constructor(public validateService: AngularValidationsService) {  }

 this.validateService.confirmPasswordValidators("password123", "password234");

 this.validateService.emailValidation("email@gmail.com");

 this.validateService.nameFieldCheck("Name");

 this.validateService.passwordValidation("password@123");

 this.validateService.numberValidation(863567272);

````



There are two ways we can use this. The first way involves sending a function call from an input field in the template HTML to the TypeScript file. At that time, we call this function and pass the value to validate it. Another way is to use this function in the FormGroup validation. Inside the FormGroup, a particular FormControl calls the function and passes the data for validation. If there's any error, the function returns an error object; if there's no error, the function returns null.



#### way 1
````
  
 this.validateService.confirmPasswordValidators("password123", "password234");

 this.validateService.emailValidation("email@gmail.com");

 this.validateService.nameFieldCheck("Name");

 this.validateService.passwordValidation("password@123");

 this.validateService.numberValidation(863567272);

````

#### Way 2
````

 this.signupForm = this.fb.group({
     fullName: ['', [Validators.required,this.validateService.nameFieldCheck(this)]],})


````

 ## 3. Usage in templates

Now, in your component's template, you can use the ValidationMessagesComponent to display the validation messages. 

#### way 1
````

 <input type="text" placeholder="name" (input)="checkvalidation($event)">


````

#### way 2

````
 <div class="text-danger" *ngIf="form['fullName'].invalid && (form['fullName'].dirty || form['fullName'].touched)">
  <small class="required-field " *ngIf="form['fullName'].errors?.['required']">Name is required.</small></div>
````

 ## Message  

 Regex pattern used 
   ^[^\s$&*!#^@]+@[^\s@]+\.([^\s@]{2,3})+$
Message key will throw an error  if  there is an Regex Error in the entered EmailID.

| Propert | Definition    |                
| :---:   | :---: | 
| nameFieldCheck | This function alidates name fields, ensuring that the first character is not a whitespace and validate special character. (example:nameFieldCheck(value))    |  
| emailValidation |This function validates a valid email using regex. (example:emailValidation(value)) | 
| numberValidation |This function checks a number field for minimum and maximum length. (example:numberValidation(value))   |  
| passwordValidation | This function validates strong passwords, ensuring there are no whitespace characters, and checks for both minimum and maximum password lengths. Additionally, it uses regex to verify the strength of the password. (example:passwordValidation(value))   |   
| confirmPasswordValidators | This function checks whether the new password and the confirm password values are the same.  (example:confirmPasswordValidators(value1,value2))  | 
| value | The parameter type for this function is now set to 'any' for the value  (example:passwordValidation(value))  |  
| value1,value2 | Two values are present: value1 represents the new password, and value2 represents the confirm password.(example:confirmPasswordValidators(value1,value2))  |    








 ## Regex  



| Regex | Definition    | 
| :---:   | :---: | 
|name field  | This regex validates the presence of special characters in a name field.  (example: var pattern ) | 
| email pattern | This regex validates the correct email pattern. (example:emailPattern)   | 
| Specialcharacter| This regex checks for a strong password in password fields.(example:specialcharacterreg)   | 



## Code scaffolding

Run `ng generate component component-name --project angular-inputs-validation` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-inputs-validation`.
> Note: Don't forget to add `--project angular-inputs-validation` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-inputs-validation` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-inputs-validation`, go to the dist folder `cd dist/angular-inputs-validation` and run `npm publish`.

## Running unit tests

Run `ng test angular-inputs-validation` to execute the unit tests via [Karma](https://karma-runner.github.io).

