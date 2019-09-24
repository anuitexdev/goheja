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

        resultObject.confirmPassword = data.password !== data.confirmPassword;
        resultObject.formError = false;

        for (let key in resultObject) {
            resultObject.formError = resultObject.formError && resultObject[key];
        }

        return resultObject;
    }
}
