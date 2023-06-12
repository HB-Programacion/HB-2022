import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import esTranslation from '../locales/es.json';
import enTranslation from '../locales/en.json';

i18n.use(initReactI18next).init({
   lng: 'en', // Idioma predeterminado
   fallbackLng: 'es', // Idioma de respaldo si no se encuentra una traducción
   
   resources: {
      es: {
         translation: esTranslation,
      },
      en: {
         translation: enTranslation,
      },
      // Agrega más idiomas según tus necesidades
   },

   interpolation: {
      escapeValue: false, // No escapar caracteres especiales en las traducciones
   },
});

export default i18n;