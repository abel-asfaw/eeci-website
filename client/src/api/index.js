/**
 * YouTube API service for fetching playlist and video data
 */

import contentfulClient from '../clients';

function optimizeContentfulImage(url, { quality, width, height } = {}) {
  if (!url) return url;
  const params = ['fm=webp', `q=${quality ?? 50}`];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.join('&')}`;
}

export async function fetchSiteSettings(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'siteSettings',
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch site settings');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No siteSettings entries found, using defaults');
    return {};
  }

  const siteSettings = response.items[0].fields;
  // Contentful media assets have nested structure: asset.fields.file.url
  const backgroundImageUrl = siteSettings.backgroundImage?.fields?.file?.url;
  const logoImageUrl = siteSettings.logoImage?.fields?.file?.url;

  return {
    giveLink: siteSettings.giveLink,
    sermonsPlaylist: siteSettings.sermonsPlaylist,
    aboutText: siteSettings.aboutText,
    beliefsText: siteSettings.beliefsText,
    facebookUrl: siteSettings.facebookUrl,
    instagramUrl: siteSettings.instagramUrl,
    youtubeUrl: siteSettings.youtubeUrl,
    tiktokUrl: siteSettings.tiktokUrl,
    missionTagline: siteSettings.missionTagline,
    historyText: siteSettings.historyText,
    visionStatement: siteSettings.visionStatement,
    ourValues: siteSettings.ourValues,
    teachingStatement: siteSettings.teachingStatement,
    backgroundImage: optimizeContentfulImage(backgroundImageUrl),
    logoImage: optimizeContentfulImage(logoImageUrl, {
      width: 200,
      height: 200,
    }),
  };
}

export async function fetchServiceCarousels(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'carousel',
    'fields.type': 'services',
    order: 'fields.order',
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch service carousels');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No serviceCarousel entries found');
    return [];
  }

  return response.items.map((carousel) => ({
    id: carousel.sys.id,
    title: carousel.fields.title,
    order: carousel.fields.order,
    cards:
      carousel.fields.cards?.map((card) => ({
        id: card.sys.id,
        title: card.fields.title,
        subtitle: card.fields.subtitle,
        description: card.fields.description,
        backgroundImage: optimizeContentfulImage(
          card.fields.backgroundImage?.fields?.file?.url,
        ),
      })) ?? [],
  }));
}

export async function fetchTeamCarousel(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'carousel',
    'fields.type': 'team',
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch team carousel');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No team carousel entry found');
    return [];
  }

  const carousel = response.items[0];
  return (
    carousel.fields.cards?.map((card) => ({
      name: card.fields.title,
      role: card.fields.subtitle,
      photo: optimizeContentfulImage(
        card.fields.backgroundImage?.fields?.file?.url,
      ),
    })) ?? []
  );
}

export async function fetchVisionCarousel(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'carousel',
    'fields.type': 'our-vision',
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch vision carousel');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No vision carousel entry found');
    return [];
  }

  const carousel = response.items[0];
  return (
    carousel.fields.cards?.map((card) => ({
      title: card.fields.title,
      description: card.fields.description,
    })) ?? []
  );
}

export async function fetchTeachingsCarousel(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'carousel',
    'fields.type': 'teachings',
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch teachings carousel');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No teachings carousel entry found');
    return [];
  }

  const carousel = response.items[0];
  return (
    carousel.fields.cards?.map((card) => ({
      title: card.fields.title,
      description: card.fields.description,
    })) ?? []
  );
}

export async function fetchVisitSettings(locale) {
  const response = await contentfulClient.getEntries({
    content_type: 'visitSettings',
    limit: 1,
    locale,
  });

  if (!response) {
    throw new Error('Failed to fetch visit settings');
  }

  if (response.items.length === 0) {
    console.warn('[Contentful] No visitSettings entries found, using defaults');
    return {};
  }

  const visitSettings = response.items[0].fields;

  // Contentful media assets have nested structure: asset.fields.file.url
  const backgroundImageUrl = visitSettings.backgroundImage?.fields?.file?.url;

  const churchImageUrl = visitSettings.churchImage?.fields?.file?.url;

  return {
    directionsLink: visitSettings.directionsLink,
    directionsEmbedLink: visitSettings.directionsEmbedLink,
    locationTimesText: visitSettings.locationTimesText,
    churchImage: optimizeContentfulImage(churchImageUrl),
    backgroundImage: optimizeContentfulImage(backgroundImageUrl),
  };
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