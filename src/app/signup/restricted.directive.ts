import { AbstractControl , ValidatorFn } from '@angular/forms';

export function FirstNameValidator() : ValidatorFn{
    return (control : AbstractControl) : {[key : string] : boolean} | null =>{

        if(control.value.trim() == "sam") {
            return {'NameNotAllowed' : true};
        }
        return null; 
    };
}