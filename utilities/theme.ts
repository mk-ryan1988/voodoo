export const useTheme = () => {
  enum Themes {
      light = 'light',
      dark = 'dark',
  }
  const setInitialTheme = () => {
    if (process.browser && document) {
      let body = document.querySelector('html');

      if (localStorage.color_theme === 'dark' || (!('color_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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

      // Whenever the user explicitly chooses to respect the OS preference
      // localStorage.removeItem('theme')

      return setInitialTheme();
  }

  return {
    setInitialTheme,
    toggleLocalTheme
  };
};

export default useTheme;
