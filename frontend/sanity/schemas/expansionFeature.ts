export default {
  name: 'expansionFeature',
  title: 'Feature de Expansión',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icono (heroicons)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Texto',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    }
  ]
}
