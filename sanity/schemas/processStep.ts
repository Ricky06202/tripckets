export default {
  name: 'processStep',
  title: 'Paso del Proceso',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Número (Uno, Dos, etc)',
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
