import i18n from 'i18next'
import Backend from 'i18next-chained-backend'
import XHR from 'i18next-xhr-backend' // fallback xhr load
import Cache from 'i18next-localstorage-cache'
import LocalStorageBackend from 'i18next-localstorage-backend' // primary use cache
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
.use(initReactI18next)
.use(Backend)
.use(Cache)
.use(LanguageDetector)
.init({
  backend: {
    backends: [
      LocalStorageBackend,
      XHR
    ],
    backendOptions: [{}, {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }]
  },
  detection: {
     // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    // excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    // cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
  },
  fallbackLng: 'en',
  // ns: ['translations'],
  // defaultNS: 'translations',
  // keySeparator: false,
  debug: false,// process.env.NODE_ENV === 'dev',
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true
  }
})

export default i18n

