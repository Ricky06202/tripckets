import { client } from '../lib/sanity';

export async function fetchSanityData() {
  try {
    const [
      siteSettings,
      hero,
      features,
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
      client.fetch(`*[_type == "siteSettings"][0]{navbarLinks, navbarCtaPrimary, navbarCtaSecondary, footerNewsletterText, footerColumns, socials, copyright}`),
      client.fetch(`*[_type == "hero"][0]{title, subtitle, badgeText, ctaButtons}`),
      client.fetch(`*[_type == "feature"] | order(order asc){icon, title, description}`),
      client.fetch(`*[_type == "problem"] | order(order asc){icon, text}`),
      client.fetch(`*[_type == "solution"][0]{title, description, bullets, ctaPrimary, ctaSecondary}`),
      client.fetch(`*[_type == "processStep"] | order(order asc){number, title, description}`),
      client.fetch(`*[_type == "personalization"][0]{title, description, buttonText, buttonUrl}`),
      client.fetch(`*[_type == "travelerType"] | order(order asc){title, description}`),
      client.fetch(`*[_type == "destination"][0]{title, subtitle, description, bullets, ctaPrimary, ctaSecondary}`),
      client.fetch(`*[_type == "earlyAccess"][0]{title, subtitle, placeholder, buttonText}`),
      client.fetch(`{"settings": *[_type == "expansion"][0]{preTitle, title, description, ctaPrimary, ctaSecondary}, "features": *[_type == "expansionFeature"] | order(order asc){icon, title, text}}`),
      client.fetch(`*[_type == "benefit"] | order(order asc){title, description, buttonText}`),
      client.fetch(`*[_type == "impact"] | order(order asc){icon, title, description}`),
      client.fetch(`*[_type == "testimonial"] | order(order asc){quote, author, location}`),
    ]);

    return {
      siteSettings,
      hero,
      features,
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
    };
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    return null;
  }
}
