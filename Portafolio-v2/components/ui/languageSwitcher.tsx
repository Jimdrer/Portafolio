import * as React from "react"

import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation('common');
  
  const changeLanguage = (locale: 'es' | 'en'): void => {
    i18n.changeLanguage(locale);
  };
  
  const currentLocale = i18n.language as 'es' | 'en';
  
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded-md transition-all ${currentLocale === 'es' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md transition-all ${currentLocale === 'en' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
      >
        EN
      </button>
    </div>
  );
};

export {LanguageSwitcher};