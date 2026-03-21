export default {
  name: 'benefit',
  title: 'Beneficio',
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
      name: 'order',
      title: 'Orden',
      type: 'number',
    }
  ]
}
