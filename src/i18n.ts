import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en', // ?lang=de
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
                    language: 'Deutsch (Deutschland)',
                    settings: 'Einstellungen - Nachrichten Filter',
                    changeLanguage: 'Sprache ändern',
                    changeCountry: 'Land ändern',
                    changeTopic: 'Thema ändern',
                    resetFilter: 'Filter zurücksetzen',
                    search: 'Suche',
                }
            },
            en: {
                translation: {
                    language: 'English (United States)',
                    settings: 'Settings - News Filter',
                    changeLanguage: 'Change language',
                    changeCountry: 'Change country',
                    changeTopic: 'Change topic',
                    resetFilter: 'Reset filter',
                    search: 'Search',
                },
            },
            es: {
                translation: {
                    language: 'Español (España)',
                    settings: 'Ajustes - Filtro de noticias',
                    changeLanguage: 'Cambiar idioma',
                    changeCountry: 'Cambiar país',
                    changeTopic: 'Cambiar tema',
                    resetFilter: 'Restablecer filtro',
                    search: 'Buscar',
                }
            },
            fr: {
                translation: {
                    language: 'Français (France)',
                    settings: 'Paramètres - Filtre de nouvelles',
                    changeLanguage: 'Changer de langue',
                    changeCountry: 'Changer de pays',
                    changeTopic: 'Changer de sujet',
                    resetFilter: 'Réinitialiser le filtre',
                    search: 'Chercher',
                }
            },
            ru: {
                translation: {
                    language: 'Русский (Россия)',
                    settings: 'Настройки - Фильтр новостей',
                    changeLanguage: 'Изменить язык',
                    changeCountry: 'Изменить страну',
                    changeTopic: 'Изменить тему',
                    resetFilter: 'Сбросить фильтр',
                    search: 'Поиск',

                }
            },
            zh: {
                translation: {
                    language: '中文 (中国)',
                    settings: '设置 - 新闻过滤器',
                    changeLanguage: '改变语言',
                    changeCountry: '改变国家',
                    changeTopic: '改变主题',
                    resetFilter: '重置过滤器',
                    search: '搜索',

                }
            },
            it: {
                translation: {
                    language: 'Italiano (Italia)',
                    settings: 'Impostazioni - Filtro notizie',
                    changeLanguage: 'Cambia lingua',
                    changeCountry: 'Cambia nazione',
                    changeTopic: 'Cambia argomento',
                    resetFilter: 'Resetta filtro',
                    search: 'Cerca',
                }
            }


        }
    });

export default function (app: any) {
    app.use(I18NextVue, { i18next })
    return app
}