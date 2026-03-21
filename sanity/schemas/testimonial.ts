export default {
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Cita',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    }
  ]
}
