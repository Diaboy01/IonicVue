import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: true, //TODO siehe 1 runter
        fallbackLng: 'de', // ?lng=de
        detection: {
            order: ['querystring', 'navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
        },
        resources: {
            en: {
                translation: {
                    test: 'eng',
                    welcome: 'Welcome to Your Vue.js App',
                }
            },
            de: {
                translation: {
                    test: 'de',
                    welcome: 'Willkommen zu Deiner Vue.js App',
                }
            }
        }
    });

export default function (app: any) {
    app.use(I18NextVue, { i18next })
    return app
}