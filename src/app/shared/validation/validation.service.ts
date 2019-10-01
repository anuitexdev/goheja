import * as regExps from './regexps';


export default class ValidationService {

    public coachBasicInfoObject = {
        firstname: false,
        lastName: false,
        auth: false,
        phone: false,
        password: false,
        confirmPassword: false,
    }

    public validateEmail(email: string) {
        return regExps.mailReqExp.test(email);
    }

    public validateBasicInfoForm(data: any) {
        const validationObject = regExps.coachBasicInfoValidators;
        let resultObject: any = {};

        for (let key in data) {
            resultObject[key] = !validationObject[key].test(data[key]);
        }
        
        resultObject.confirmPassword = data.password !== data.confirmPassword || data.password === '' || data.confirmPassword === '';
        resultObject.formError = false;

        for (let key in resultObject) {
            resultObject.formError = resultObject.formError || resultObject[key];
        }

        return resultObject;
    }

    public signUpAthleteValidation(email: string, password: string, fname: string, lname: string, confirmPassword: string) {
        const validationObject = {
            mailError: !regExps.mailReqExp.test(email),
            passwordError: password == '',
            fNameError: !regExps.firstNameRegExp.test(fname),
            lNameError: !regExps.lastNameRegExp.test(lname),
            confPassError: password !== confirmPassword || password === '' || confirmPassword === '',
            formError: false,
        }


        for (let key in validationObject) {
            validationObject.formError = validationObject.formError || validationObject[key];
        }

        return validationObject;
    }
}
