export default {
  name: 'feature',
  title: 'Características',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icono (heroicons)',
      type: 'string',
      description: 'Nombre del icono de heroicons (ej: briefcase, map, sparkles)'
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
