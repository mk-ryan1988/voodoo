interface TechObj {
    title:        string;
    logo:         string;
    url:          string;
    avatarRound : boolean;
    color: string;
}

export const technologies: TechObj[] = [
    {
      title: 'html',
      logo: require('assets/logos/html.svg'),
      url: '',
      avatarRound: false,
      color: '#dd4c26',
    },
    {
      title: 'css',
      logo: require('assets/logos/css.svg'),
      url: '',
      avatarRound: false,
      color: '#026db5'
    },
    {
      title: 'javascript',
      logo: require('assets/logos/javascript.svg'),
      url: '',
      avatarRound: false,
      color: '#eed81a',
    },
    {
      title: 'laravel',
      logo: require('assets/logos/laravel.svg'),
      url: 'https://laravel.com/',
      avatarRound: false,
      color: '#f92b1f',
    },
    {
      title: 'vue.js',
      logo: require('assets/logos/vuejs.svg'),
      url: 'https://vuejs.org/',
      avatarRound: false,
      color: '#40b37f',
    },
    {
      title: 'tailwind css',
      logo: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
      url: 'https://tailwindcss.com/',
      avatarRound: true,
      color: '#38b2ab',
    },
  ];


