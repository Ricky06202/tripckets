import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Tripckets CMS')
    .items([
      S.listItem()
        .title('Configuración del Sitio')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem().title('Hero').child(S.document().schemaType('hero').documentId('hero')),
      S.listItem()
        .title('Acceso Anticipado')
        .child(S.document().schemaType('earlyAccess').documentId('earlyAccess')),
      S.divider(),
      S.documentTypeListItem('problem').title('Problemas'),
      S.documentTypeListItem('solution').title('Solución'),
      S.documentTypeListItem('benefit').title('Beneficios'),
      S.documentTypeListItem('feature').title('Características'),
      S.documentTypeListItem('processStep').title('Pasos del Proceso'),
      S.divider(),
      S.documentTypeListItem('destination').title('Destinos'),
      S.documentTypeListItem('travelerType').title('Tipos de Viajero'),
      S.documentTypeListItem('personalization').title('Personalización'),
      S.divider(),
      S.documentTypeListItem('impact').title('Impacto'),
      S.documentTypeListItem('expansion').title('Expansión'),
      S.documentTypeListItem('expansionFeature').title('Features de Expansión'),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonios'),
    ])
