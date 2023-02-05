import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'de', // ?lang=de
        detection: {
            order: ['querystring', 'navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            lookupQuerystring: 'lang',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
        },
        resources: {
            de: {
                translation: {
                    language: 'Deutsch',
                    changeLanguage: 'Sprache ändern',
                },
            en: {
                translation: {
                    language: 'English',
                    changeLanguage: 'Change language',
                }
            }

            }
        }
    });

export default function (app: any) {
    app.use(I18NextVue, { i18next })
    return app
}