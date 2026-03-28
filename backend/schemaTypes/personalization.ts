export default {
  name: 'personalization',
  title: 'Personalización',
  type: 'document',
  fields: [
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
      name: 'buttonText',
      title: 'Texto del Botón',
      type: 'string',
    },
    {
      name: 'buttonUrl',
      title: 'URL del Botón',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
