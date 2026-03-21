export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
    },
    {
      name: 'badgeText',
      title: 'Texto del Badge',
      type: 'string',
    },
    {
      name: 'ctaButtons',
      title: 'Botones CTA',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Texto', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
          { name: 'style', title: 'Estilo', type: 'string', options: { list: ['primary', 'secondary'] } }
        ]
      }]
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
