import { client } from './sanity'

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      logo,
      navbarLinks,
      navbarCtaPrimary,
      navbarCtaSecondary,
      footerNewsletterText,
      footerColumns,
      socials,
      copyright
    }
  `)
}

export async function getHero() {
  return client.fetch(`
    *[_type == "hero"][0] {
      title,
      subtitle,
      badgeText,
      ctaButtons,
      image
    }
  `)
}

export async function getFeatures() {
  return client.fetch(`
    *[_type == "feature"] | order(order asc) {
      icon,
      title,
      description
    }
  `)
}

export async function getCoreValueTitle() {
  return client.fetch(`
    *[_type == "coreValue"][0] {
      title,
      subtitle
    }
  `)
}

export async function getProblems() {
  return client.fetch(`
    *[_type == "problem"] | order(order asc) {
      icon,
      text
    }
  `)
}

export async function getSolution() {
  return client.fetch(`
    *[_type == "solution"][0] {
      title,
      description,
      bullets,
      image,
      ctaPrimary,
      ctaSecondary
    }
  `)
}

export async function getProcessSteps() {
  return client.fetch(`
    *[_type == "processStep"] | order(order asc) {
      number,
      title,
      description
    }
  `)
}

export async function getPersonalization() {
  return client.fetch(`
    *[_type == "personalization"][0] {
      title,
      description,
      buttonText,
      buttonUrl,
      image
    }
  `)
}

export async function getTravelerTypes() {
  return client.fetch(`
    *[_type == "travelerType"] | order(order asc) {
      title,
      description,
      image
    }
  `)
}

export async function getDestination() {
  return client.fetch(`
    *[_type == "destination"][0] {
      title,
      subtitle,
      description,
      bullets,
      image,
      ctaPrimary,
      ctaSecondary
    }
  `)
}

export async function getEarlyAccess() {
  return client.fetch(`
    *[_type == "earlyAccess"][0] {
      title,
      subtitle,
      placeholder,
      buttonText
    }
  `)
}

export async function getExpansionData() {
  return client.fetch(`
    {
      "settings": *[_type == "expansion"][0] {
        preTitle,
        title,
        description,
        ctaPrimary,
        ctaSecondary
      },
      "features": *[_type == "expansionFeature"] | order(order asc) {
        icon,
        title,
        text
      }
    }
  `)
}

export async function getBenefits() {
  return client.fetch(`
    *[_type == "benefit"] | order(order asc) {
      title,
      description,
      buttonText
    }
  `)
}

export async function getImpacts() {
  return client.fetch(`
    *[_type == "impact"] | order(order asc) {
      icon,
      title,
      description
    }
  `)
}

export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      quote,
      author,
      location
    }
  `)
}

export async function getAllPageData() {
  const [
    siteSettings,
    hero,
    features,
    coreValue,
    problems,
    solution,
    processSteps,
    personalization,
    travelerTypes,
    destination,
    earlyAccess,
    expansionData,
    benefits,
    impacts,
    testimonials,
  ] = await Promise.all([
    getSiteSettings(),
    getHero(),
    getFeatures(),
    getCoreValueTitle(),
    getProblems(),
    getSolution(),
    getProcessSteps(),
    getPersonalization(),
    getTravelerTypes(),
    getDestination(),
    getEarlyAccess(),
    getExpansionData(),
    getBenefits(),
    getImpacts(),
    getTestimonials(),
  ])

  return {
    siteSettings,
    hero,
    features,
    coreValue,
    problems,
    solution,
    processSteps,
    personalization,
    travelerTypes,
    destination,
    earlyAccess,
    expansionData,
    benefits,
    impacts,
    testimonials,
  }
}
