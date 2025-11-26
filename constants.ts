import { Article, Pillar, TimelineEvent, ContactInfo } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Introdução à Inteligência Artificial',
    description: 'Breve resumo sobre os conceitos básicos de IA e como ela está moldando o futuro.',
    author: 'Sectin',
    date: '1 dia atrás',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQ43RQ5zNe-3PInJX_vAncAoyAYR6N_P7RlXQaaNmADHlUxE6Mi_S1qH53Ejz6CrGOq1GBBtOgr4hFBEV-7VWxKgapB5K4rnefH7dHSMCEwuuTlQO79kFhA84zNv3pF1ue0jcQ5jiM2QwllxTKb88OGVjh0sjWHPactCn_TC0ujnMwUiYw5zd92ZP7JR-ogYtVssaephLQdzcvD0Svxtwv7Dt2MQ_UhRwVHl-R_tPQ5aM3ESiCvtuTaBbnxmYZHutZhY3BMrh9x0t',
    imageAlt: 'Imagem de um cérebro digital com circuitos brilhantes.'
  },
  {
    id: '2',
    title: 'Segurança Cibernética para Cidadãos',
    description: 'Dicas essenciais para se proteger online e manter seus dados seguros.',
    author: 'Sectin',
    date: '3 dias atrás',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAFO_GEIKAlu1A8JkQF6dDvNo19eAeOIOaG2UEDsH14zxEvMlg9uyl0cr12DX7aNRFLngc0z1zWWbdVNuLbh_7O2NehRgyeijSF2IjaL8hC7sVYHHzQJ7YoR9ZqUqRK6YAv1W7rX_y7WMlZlruETSiT1GyFyXJuUA69w2tS9F_hPf1FfFSK748XPv1Sbnfe-peEA5GGW8R0yRSMq6o9zIR4DrHlgV_q3BXTf6_UdUXPrCeLt5yakmonTTx8UJ5WWAhe0mqZLRnKTNy',
    imageAlt: 'Imagem de um cadeado digital sobreposto a um fundo de código binário.'
  },
  {
    id: '3',
    title: 'O Futuro da Conectividade: 5G em Cabedelo',
    description: 'Explicação sobre o que a tecnologia 5G mudará na infraestrutura local.',
    author: 'Sectin',
    date: '1 semana atrás',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQHOs8b5hCGIpPuoTnpmMdd-77VfTLTxnlnAb5sOfUwy0C7Zy9XF_61C4H0ukQdspgSqjQyElg8ReUpeK6hkWHo-SsnFBfBFbUk9rh69DqTlHqg6ZJTnBMw8vb9vQgaDITNOwb40GKGY4AoeqA1DAe_PObkkBCovHag99qrLEjNveAjVWHHsO0wlnrmdF-LgOPhhG12kfN3nGpUd_CkHOZdLjNfE1hP-HLnAHRye9mXXcQ6mivFCCdLGxb7Y8FCacbGnUyXSdJbuoO',
    imageAlt: 'Foto de uma antena de celular 5G com um céu azul ao fundo.'
  },
];

export const PILLARS: Pillar[] = [
  {
    id: 'mission',
    title: 'Nossa Missão',
    description: 'Promover a transformação digital na gestão pública de Cabedelo, otimizando serviços e aproximando o governo dos cidadãos.',
    icon: 'rocket'
  },
  {
    id: 'vision',
    title: 'Nossa Visão',
    description: 'Ser referência em governo digital, transparência e inovação no estado, construindo uma cidade mais conectada e inteligente.',
    icon: 'eye'
  },
  {
    id: 'values',
    title: 'Nossos Valores',
    description: 'Compromisso, ética, inovação, colaboração e foco no cidadão são os pilares que guiam nossas ações diárias.',
    icon: 'heart'
  }
];

export const HISTORY: TimelineEvent[] = [
  {
    year: '2021',
    title: 'Fundação',
    description: 'A Sectin foi criada com o objetivo de centralizar e modernizar a infraestrutura de TI da prefeitura.'
  },
  {
    year: '2022',
    title: 'Lançamento do Portal',
    description: 'Implementação do novo portal da cidade, oferecendo serviços online e maior transparência.'
  },
  {
    year: '2023',
    title: 'Digitalização de Processos',
    description: 'Início do projeto de digitalização de processos internos, reduzindo o uso de papel e agilizando serviços.'
  }
];

export const CONTACT: ContactInfo = {
  address: 'R. Aderbal Piragibe, 123 - Centro',
  city: 'Cabedelo, PB, 58100-000',
  phone: '(83) 3210-4567',
  hours: 'Seg a Sex, 08h às 17h',
  email: 'contato.sectin@cabedelo.pb.gov.br'
};