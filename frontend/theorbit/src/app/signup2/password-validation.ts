import {FormControl, FormGroup} from '@angular/forms';


export class matchOtherValidator {
    static validate(signupForm: FormGroup) {
        let Password = signupForm.controls.Password.value;
        let Password_Confirm = signupForm.controls.Password_Confirm.value;
 
        if (Password_Confirm.length <= 0) {
            return null;
        }
 
        if (Password_Confirm !== Password) {
            console.log('correct')
            return {
                doesMatchPassword: true
                
            };
        }
 
        return null;
 
    }
}