import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'logo_branco.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'projeto_kuzola.png',
    title: 'Kuzola Mona',
    info: '',
    info2: '',
    url: 'https://www.kuzolamona.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projeto_indice.png',
    title: 'Indice Empresarial',
    info: '',
    info2: '',
    url: 'https://www.indicempresarial.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projeto_rlz.png',
    title: 'RLZ Empreendimentos',
    info: '',
    info2: '',
    url: 'https://www.rlzempreendimentos.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/indicempresarial/',
    },
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://www.facebook.com/indicempresarial/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/mesquita09/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
