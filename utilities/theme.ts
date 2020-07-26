import tailwindConfig from '~/tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

interface ThemeTypes {
    body:    string;
    copy:    string;
    heading: string,
    card:    string;
};

export const useTheme = () => {
  const {theme} = resolveConfig(tailwindConfig);
  const {colors, boxShadow} = theme;

  const lightTheme: ThemeTypes = {
      body:    colors.gray['100'],
      copy:    colors.gray['500'],
      heading: colors.black,
      card:    colors.white,
  };

  const darkTheme: ThemeTypes = {
      body:    colors.gray['700'],
      copy:    colors.gray['300'],
      heading: colors.white,
      card:    colors.gray['900'],
  };

  const setCssVariables = (colorMode : string) => {
    if (process.browser) {
      let root = document.documentElement;
      let activeTheme = (colorMode === 'light' ? lightTheme : darkTheme);

      for (let key in activeTheme) {
        let value = '';
        if (hasKey(activeTheme, key)) {
          value = activeTheme[key];
        }
        root.style.setProperty('--'+ key, value);
      };
    }
  };

  const setInitialTheme = () => {
    if (process.browser) {
      const getLocalTheme = localStorage.getItem('color_theme');
      let theme: string = '';

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
      if (typeof getLocalTheme === 'string') theme = getLocalTheme;

      setCssVariables(theme);
    }
  }

  return {
    setCssVariables,
    setInitialTheme
  };
};

export default useTheme;
