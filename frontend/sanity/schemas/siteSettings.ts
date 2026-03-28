export default {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'navbarLinks',
      title: 'Enlaces del Navbar',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' }
        ]
      }]
    },
    {
      name: 'navbarCtaPrimary',
      title: 'Navbar CTA Primario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'url', title: 'URL', type: 'string' }
      ]
    },
    {
      name: 'navbarCtaSecondary',
      title: 'Navbar CTA Secundario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'url', title: 'URL', type: 'string' }
      ]
    },
    {
      name: 'footerNewsletterText',
      title: 'Texto del Newsletter',
      type: 'string',
    },
    {
      name: 'footerColumns',
      title: 'Columnas del Footer',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { 
            name: 'links', 
            title: 'Enlaces', 
            type: 'array',
            of: [{ type: 'string' }]
          }
        ]
      }]
    },
    {
      name: 'socials',
      title: 'Redes Sociales',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' }
        ]
      }]
    },
    {
      name: 'copyright',
      title: 'Texto de Copyright',
      type: 'string',
    }
  ]
}
