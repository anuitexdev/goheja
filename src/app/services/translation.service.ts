
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import { I18nManager } from 'react-native';
import * as RNLocalize from "react-native-localize";
import BaseTranslateService from "../shared/helpers/basicTranslate.service";
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';


export default class TranslateService extends BaseTranslateService {

    private authService = new AuthService();
    public currentLanguage: any;

    constructor() {
        super();
        this.setI18nConfig('Eng'); // set initial config
        this.getLanguageList();  
        
        BaseTranslateService.getCurrentLanguage().subscribe(language => { this.currentLanguage = language });
    }

    public $currentLanguage = new BehaviorSubject({language: 'English'});

    public getCurrentLanguage =() =>{ return this.$currentLanguage; }    

    private getLanguageList = async () => {
        const res = await this.authService.getAllLanguages();
        BaseTranslateService.languagesList = res.data;
        this.getTranslationKey(BaseTranslateService.languagesList);
    }

    private getTranslationKey = (languageObject: any) => {
        let currentLanguage: { language: string } = { language: 'Eng' };
        BaseTranslateService.getCurrentLanguage().subscribe(language => { 
            currentLanguage = language;
            const translationKey = Object.keys(languageObject).filter(function (key) { return languageObject[key] === currentLanguage.language })[0];           
            this.setI18nConfig(translationKey);
            this.$translateMethod.next(this.translate)
            this.$currentLanguage.next(currentLanguage);

        });
    }

    public translationGetters = {
        Heb: () => require('../translations/ar.json'),
        Ger: () => require('../translations/ge.json'),
        Eng: () => require("../translations/en.json"),
    };

    public translate: any = memoize(
        (key: any, config: any) => i18n.t(key, config),
        (key, config) => (config ? key + JSON.stringify(config) : key)
    );

    public getTranslateMethod = () => {
        return this.$translateMethod;
    }

    public setI18nConfig = (tag: string) => {

        const fallback = { languageTag: tag, isRTL: false };

        const { languageTag, isRTL } = // TO-DO
            RNLocalize.findBestAvailableLanguage(Object.keys(this.translationGetters)) ||
            fallback;

        // clear translation cache
        this.translate.cache.clear();
        // update layout direction
        I18nManager.forceRTL(isRTL);
        // set i18n-js config
        i18n.translations = { [languageTag]: this.translationGetters[languageTag]() };
        i18n.locale = languageTag;
    };
    public $translateMethod = new BehaviorSubject(this.translate);

}
