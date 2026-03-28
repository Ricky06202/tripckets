export default {
  name: 'expansion',
  title: 'Expansión',
  type: 'document',
  fields: [
    {
      name: 'preTitle',
      title: 'Pre-título',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'ctaPrimary',
      title: 'Botón Primario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'url', title: 'URL', type: 'string' }
      ]
    },
    {
      name: 'ctaSecondary',
      title: 'Botón Secundario',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'url', title: 'URL', type: 'string' }
      ]
    }
  ]
}
