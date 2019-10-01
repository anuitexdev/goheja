
import { BehaviorSubject } from 'rxjs';


export default class BaseTranslateService {

    public static  languagesList = [];

    public static $currentLanguage =  new BehaviorSubject({ language: 'English' });

    public static setCurrentLanguage = (language: {language: string}) => {       
        return BaseTranslateService.$currentLanguage.next(language);
    }

    public static getCurrentLanguage = () => {
        return BaseTranslateService.$currentLanguage;
    }



}
