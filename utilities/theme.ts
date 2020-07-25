// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '~/tailwind.config.js'

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
  // const fullConfig = resolveConfig(tailwindConfig)
  // const lightTheme: themeTypes = {
  //     body: fullConfig.theme.colors.gray['100'],
  //     copy: fullConfig.theme.colors.gray['900'],
  //     card: fullConfig.theme.colors.white,
  // };

  const lightTheme: ThemeTypes = {
      body:    '#f8f8f9',
      copy:    '#4a5568',
      heading: '#000',
      card:    "#fff",
  };
  const darkTheme: ThemeTypes = {
      body:    '#131316',
      copy:    '#A6A6A7',
      heading: '#fff',
      card:    '#0A0A0B',
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
