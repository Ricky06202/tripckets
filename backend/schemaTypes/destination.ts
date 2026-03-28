export default {
  name: 'destination',
  title: 'Destino',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'bullets',
      title: 'Puntos',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
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
