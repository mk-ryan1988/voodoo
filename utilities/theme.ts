export const useTheme = () => {
  enum Themes {
      light = 'light',
      dark = 'dark',
  }

  const getInitialColorMode = () : string => {
    const persistedColorPreference = window.localStorage.getItem('color-theme');
    if (typeof persistedColorPreference === 'string') {
      return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    return 'light';
  }

  const setInitialTheme = () => {
    if (process.browser && document) {
      let body = document.querySelector('html');

      if (getInitialColorMode() === 'dark') {
        if (body) {
          body.classList.add('dark');
        }
      } else {
        if (body) {
          body.classList.remove('dark');
        }
      }
    }
  }

  const toggleLocalTheme = (theme: Themes | String): void => {
      localStorage.color_theme = theme;
      return setInitialTheme();
  }

  return {
    setInitialTheme,
    toggleLocalTheme
  };
};

export default useTheme;
