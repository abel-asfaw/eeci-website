import contentfulClient from '../clients';

function optimizeContentfulImage(url, { quality, width, height } = {}) {
  if (!url) return url;
  const params = ['fm=webp', `q=${quality ?? 50}`];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.join('&')}`;
}

function normalizeCard(card) {
  const f = card.fields;
  return {
    id: card.sys.id,
    title: f.title,
    subtitle: f.subtitle,
    description: f.description,
    image: optimizeContentfulImage(
      (f.image ?? f.backgroundImage)?.fields?.file?.url,
    ),
    titleIcon: optimizeContentfulImage(f.titleIcon?.fields?.file?.url),
  };
}

function normalizeCarousel(carousel) {
  const f = carousel.fields;
  return {
    id: carousel.sys.id,
    name: f.name ?? f.title,
    items: (f.items ?? f.cards)?.map(normalizeCard) ?? [],
  };
}

function normalizeSection(entry) {
  const type = entry.sys.contentType.sys.id;
  const fields = entry.fields;
  const base = { sectionId: fields.sectionId, type };

  switch (type) {
    case 'textSection':
      return {
        ...base,
        title: fields.title,
        label: fields.label,
        body: fields.body,
      };
    case 'embedSection':
      return {
        ...base,
        title: fields.title,
        label: fields.label,
        embedUrl: fields.embedUrl,
      };
    case 'carouselSection':
      return {
        ...base,
        title: fields.title,
        label: fields.label,
        body: fields.body,
        carousels: fields.carousels?.map(normalizeCarousel) ?? [],
      };
    case 'ctaSection':
      return {
        ...base,
        title: fields.title,
        label: fields.label,
        body: fields.body,
        ctaLabel: fields.ctaLabel,
        ctaLink: fields.ctaLink,
      };
    default:
      return base;
  }
}

function normalizePage(entry) {
  const fields = entry.fields;
  return {
    slug: fields.slug,
    hero: {
      title: fields.heroTitle,
      subtitle: fields.heroSubtitle,
      backgroundImage: optimizeContentfulImage(
        fields.heroBackgroundImage?.fields?.file?.url,
      ),
      ctaLabel: fields.heroCtaLabel,
      ctaLink: fields.heroCtaLink,
    },
    seo: {
      title: fields.seoTitle,
      description: fields.seoDescription,
      keywords: fields.seoKeywords,
    },
    sections: fields.sections?.map(normalizeSection) ?? [],
  };
}

export async function fetchSiteConfig(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'siteConfig',
    limit: 1,
    locale,
  });

  if (!response || response.items.length === 0) {
    console.warn('[Contentful] No siteConfig entry found');
    return {};
  }

  const fields = response.items[0].fields;
  return {
    churchName: fields.churchName,
    fullName: fields.fullName,
    address: fields.address,
    serviceTimes: fields.serviceTimes,
    mapsUrl: fields.mapsUrl,
    logo: optimizeContentfulImage(fields.logo?.fields?.file?.url, {
      width: 200,
      height: 200,
    }),
    giveLink: fields.giveLink,
    facebookUrl: fields.facebookUrl,
    instagramUrl: fields.instagramUrl,
    youtubeUrl: fields.youtubeUrl,
    tiktokUrl: fields.tiktokUrl,
  };
}

export async function fetchPage(slug, locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    include: 3,
    limit: 1,
    locale,
  });

  if (!response || response.items.length === 0) {
    throw new Error(`Page "${slug}" not found`);
  }

  return normalizePage(response.items[0]);
}

export async function fetchContactSettings() {
  const response = await contentfulClient.getEntries({
    content_type: 'contactSettings',
    limit: 1,
  });

  if (!response) {
    throw new Error('Failed to fetch contact settings');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No contactSettings entries found');
    return {};
  }

  const contactSettings = response.items[0].fields;

  return {
    contactPage: contactSettings.contactPage,
    connectWithChurchMessage:
      contactSettings.connectWithChurchMessage,
  };
}
