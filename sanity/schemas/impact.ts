export default {
  name: 'impact',
  title: 'Impacto',
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
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    }
  ]
}
