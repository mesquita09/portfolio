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
  paragraphOne:
    'Desenvolvemos estratégias e soluções ágeis para sua empresa através de Websites e Marketing digital.',
  paragraphTwo:
    'Somos uma empresa digital 100% remota. Isso significa que por exemplo, o cliente não precisará se deslocar para reuniões e tudo pode ser resolvido através de chamadas rápidas e objetivas, conferindo agilidade no desenvolvimento e economia do seu tempo.',
  paragraphThree:
    'Atendemos clientes de diversos portes e áreas de atuação, nacionais e internacionais. Nossos projetos são baseados nos aspectos relevantes as suas necessidades!',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'projeto_kuzola.png',
    title: 'Kuzola Mona',
    info:
      'Clinica localizada em Angola que presta suporte terapêutico, com ênfase na identificação e tratamento das alterações no desenvolvimento das crianças, desde a primeira infância',
    info2:
      'Proposta: desenvolvimento, armazenagem e manutenção do site, e-mails, domínio e marketing digital.',
    testemonial: '',
    url: 'https://www.kuzolamona.com',
    repo: 'http://instagram.com/kuzolamona', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projeto_indice.png',
    title: 'Indice Empresarial',
    info:
      'Escritório virtual que viabiliza negócios por meio de estruturas compartilhadas de escritório corporativo',
    info2: 'Proposta: desenvolvimento e manutenção do site e marketing digital.',
    testemonial: '',
    url: 'https://www.indicempresarial.com',
    repo: 'https://www.instagram.com/indicempresarial/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projeto_rlz.png',
    title: 'RLZ Empreendimentos',
    info:
      'Empresa de engenharia que atua no mercado angolano da construção civil e infraestruturas, nos segmentos de projetos arquitetônicos e urbanísticos, fiscalização técnica, gestão e execução de obras e desminagem.',
    info2: 'Proposta: Desenvolvimento e manutenção do site',
    testemonial: '',
    url: 'https://www.rlzempreendimentos.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projeto_fornepan.png',
    title: 'Panificadora Fornepan',
    info: 'Padaria com mais de 60 anos de atuação no mercado baiano',
    info2: 'Proposta: Site em desenvolvimento',
    testemonial: '',
    url: 'https://www.fornepan.com.br',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'desenvolvimento.png',
    title: 'Behrens Odontologia',
    info: 'Centro odontologico de grande destaque',
    info2: 'Proposta: Site em desenvolvimento',
    testemonial: '',
    url: 'https://www.behrensodontologia.com.br',
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
