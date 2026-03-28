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
      name: 'megaMenuSections',
      title: 'Secciones del Mega Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título de Sección', type: 'string' },
          { 
            name: 'items', 
            title: 'Elementos', 
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'label', title: 'Etiqueta', type: 'string' },
                { name: 'description', title: 'Descripción', type: 'string' },
                { name: 'iconName', title: 'Nombre del Icono', type: 'string' },
                { name: 'url', title: 'URL', type: 'string' }
              ]
            }]
          }
        ]
      }]
    },
    {
      name: 'megaMenuFeatured',
      title: 'Recursos Destacados del Mega Menu',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'string' },
          { name: 'linkText', title: 'Texto del Enlace', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
          { name: 'image', title: 'Imagen', type: 'image' }
        ]
      }]
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
