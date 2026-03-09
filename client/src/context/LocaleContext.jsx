import { useState } from 'react';
import { LocaleContext } from './locale';

const LOCALE_KEY = 'preferred-locale';
const AMHARIC = 'de-DE';
const ENGLISH = 'en-US';

function getInitialLocale() {
  const stored = localStorage.getItem(LOCALE_KEY);
  return stored === AMHARIC ? AMHARIC : ENGLISH;
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === AMHARIC ? ENGLISH : AMHARIC;
      localStorage.setItem(LOCALE_KEY, next);
      if (window.gtag) {
        window.gtag('event', 'language_toggle', {
          language_selected: next === AMHARIC ? 'amharic' : 'english',
        });
      }
      return next;
    });
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
