export default {
  name: 'travelerType',
  title: 'Tipo de Viajero',
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
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    }
  ]
}
