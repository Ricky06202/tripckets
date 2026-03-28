export const defaultData = {
  siteSettings: {
    navbarLinks: [
      { title: 'Inicio', url: '/' },
      { title: 'Ejemplo de Tripcket', url: '/ejemplo' },
      { title: 'Blog', url: '/blog' },
      { title: 'Destinos', url: '/destinos' },
      { title: 'Experiencias', url: '/experiencias' },
      { title: 'Empresa', url: '/empresa' },
      { title: 'Contacto', url: '/contacto' },
    ],
    navbarCtaPrimary: { text: 'Ingresar', url: '/ingresar' },
    navbarCtaSecondary: { text: 'Crear', url: '/crear' },
    footerNewsletterText: 'Suscríbete a nuestro boletín',
    footerColumns: [
      {
        title: 'Explorar',
        links: [
          { title: 'Destinos', url: '/destinos' },
          { title: 'Experiencias', url: '/experiencias' },
          { title: 'Guías locales', url: '/guias' },
          { title: 'Blog', url: '/blog' }
        ]
      },
      {
        title: 'Empresa',
        links: [
          { title: 'Nosotros', url: '/empresa' },
          { title: 'Carreras', url: '/carreras' },
          { title: 'Prensa', url: '/prensa' },
          { title: 'Contacto', url: '/contacto' }
        ]
      },
      {
        title: 'Síguenos',
        links: []
      }
    ],
    socials: [
      { name: 'Facebook', url: 'https://facebook.com' },
      { name: 'Instagram', url: 'https://instagram.com' },
      { name: 'X', url: 'https://x.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'YouTube', url: 'https://youtube.com' },
    ],
    copyright: '© 2026 Tripcket. Todos los derechos reservados.',
  },

  hero: {
    title: 'Tu boleto para descubrir experiencias auténticas',
    subtitle: 'Tripcket te conecta con viajes únicos diseñados por locales, eliminando intermediarios y creando memorias genuinas.',
    badgeText: 'Un boleto, infinitas posibilidades',
    ctaButtons: [
      { text: 'Crear', url: '/crear', style: 'primary' },
      { text: 'Explorar', url: '/explorar', style: 'secondary' },
    ],
  },

  coreValue: {
    title: 'Lo que Tripckets hace por ti',
  },

  features: [
    { icon: 'briefcase', title: 'Experiencias únicas', description: 'Descubre lugares auténticos que solo los locales conocen.' },
    { icon: 'map', title: 'Gastronomía local', description: 'Saborea la verdadera cocina tradicional de cada destino.' },
    { icon: 'sparkles', title: 'Aventura guiada', description: 'Explora con expertos que conocen cada rincón del lugar.' },
  ],

  problems: [
    { icon: 'briefcase', text: 'Dificultad para encontrar experiencias auténticas' },
    { icon: 'banknotes', text: 'Precios inflados por intermediarios' },
    { icon: 'user-group', text: 'Falta de conexión real con la cultura local' },
  ],

  solution: {
    title: 'Todo en un solo boleto personalizado',
    description: 'Con Tripcket, cada detalle de tu viaje está cuidado. Desde la llegada hasta la partida, tienes todo programado y reservado en un solo lugar.',
    bullets: [
      'Un solo boleto para todo tu viaje',
      'Experiencias curadas por locales',
      'Sin intermediarios, sin sorpresas',
    ],
    ctaPrimary: { text: 'Explorar', url: '/explorar' },
    ctaSecondary: { text: 'Más', url: '/mas' },
  },

  processSteps: [
    { number: 'Uno', title: 'Elige tu destino', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { number: 'Dos', title: 'Personaliza tu experiencia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { number: 'Tres', title: 'Recibe tu boleto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { number: 'Cuatro', title: '¡Disfruta!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
  ],

  personalization: {
    title: 'Construye el viaje que siempre quisiste',
    description: 'Olvídate de las búsquedas interminables. Con Tripcket, diseñas exactamente el viaje que deseas, desde actividades hasta alojamiento, todo en un solo lugar.',
    buttonText: 'Personalizar',
    buttonUrl: '/personalizar',
  },

  travelerTypes: [
    { title: 'Aventura en la naturaleza', description: 'Explora senderos y paisajes únicos.' },
    { title: 'Escape cultural', description: 'Sumérgete en historia y tradiciones.' },
    { title: 'Relax playero', description: 'Disfruta de las mejores playas.' },
    { title: 'Gastronomía local', description: 'Saborea platos típicos auténticos.' },
  ],

  destination: {
    title: 'Boquete, Panamá te espera',
    subtitle: 'Panamá',
    description: 'Descubre Boquete, un paraíso escondido en las tierras altas de Panamá. Con su clima perfecto, paisajes espectaculares y comunidad acogedora, es el destino ideal para tu próximo Tripcket.',
    bullets: [
      'Playas pristine y arrecifes de coral',
      'Selva tropical con biodiversidad única',
      'Cultura guna y tradiciones ancestrales',
    ],
    ctaPrimary: { text: 'Descubrir', url: '/descubrir' },
    ctaSecondary: { text: 'Más', url: '/mas' },
  },

  earlyAccess: {
    title: 'Tu viaje comienza aquí',
    subtitle: 'Ingresa tu número y sé el primero en descubrir experiencias únicas.',
    placeholder: 'Tu número',
    buttonText: 'Entrar',
  },

  expansion: {
    preTitle: 'Expansión',
    title: 'Panamá entera en tu próximo viaje',
    description: 'Boquete es donde comenzamos, pero el país entero nos llama. Tripckets crecerá hacia cada rincón de Panamá, conectando viajeros con historias que merecen ser vividas en cada región.',
    ctaPrimary: { text: 'Explorar', url: '/explorar' },
    ctaSecondary: { text: 'Más', url: '/mas' },
  },

  expansionFeatures: [
    { icon: 'map', title: 'Archipiélagos y playas sin fin', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { icon: 'sparkles', title: 'Selva profunda y aventura real', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { icon: 'home', title: 'Tradiciones Guna vivas', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { icon: 'briefcase', title: 'Pueblos de montaña y café', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
  ],

  benefits: [
    { title: 'Ahorro garantizado', description: 'Sin intermediarios significa mejores precios para ti.', buttonText: 'Comenzar' },
    { title: 'Experiencias auténticas', description: 'Conecta con la cultura local de verdad.', buttonText: 'Unirse' },
    { title: 'Soporte 24/7', description: 'Siempre estamos aquí para ayudarte.', buttonText: 'Comenzar' },
  ],

  impacts: [
    { icon: 'heart', title: 'Impacto económico local', description: 'Cada viaje beneficia directamente a las comunidades locales.' },
    { icon: 'user-group', title: 'Conservación cultural', description: 'Apoyamos tradiciones y artesanos locales.' },
    { icon: 'shield-check', title: 'Turismo sostenible', description: 'Practicas responsables con el medio ambiente.' },
  ],

  testimonials: [
    { quote: 'Mi experiencia con Tripcket fue increíble. Descubrí lugares que nunca habría encontrado por mi cuenta.', author: 'María García', location: 'Viajera desde Madrid' },
    { quote: 'La mejor forma de explorar un nuevo destino. Todo estaba perfectamente organizado.', author: 'Carlos López', location: 'Viajero desde Ciudad de México' },
    { quote: 'Gracias a Tripcket viví una aventura auténtica. Recomendado 100%.', author: 'Ana Martínez', location: 'Viajera desde Buenos Aires' },
  ],
}
