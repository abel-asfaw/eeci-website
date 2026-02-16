/**
 * Default site settings used as fallback when Contentful data is unavailable
 */
export const DEFAULT_SITE_SETTINGS = {
  giveLink: 'https://giving.myamplify.io/app/giving/setota',
  latestSermonUrl: 'https://www.youtube.com/embed/bngvT0n4ur0',
  sermonsPlaylist:
    'https://www.youtube.com/playlist?list=PL9E02JY5UQ6lney64LW31cxant-Ek_jvt',
  aboutText: `Emmanuel Evangelical Church International (EECI) is a vibrant, multi-generational church with a passion for Jesus, people, and our city. We are a community of believers dedicated to sharing the gospel and love of Christ. Our services are filled with heartfelt worship, practical teaching from the Bible, and a welcoming atmosphere for all. We believe in building strong families and a strong community, and we offer various ministries for all ages to get connected and grow in their faith. Come as you are and experience the warmth of our church family.`,
  beliefsText: `We are a Bible-believing church committed to the historic creeds of the Christian faith and the Gospel of Jesus Christ. Our mission is to inspire, equip, and create a space for living out our faith in community.`,
  facebookUrl:
    'https://www.facebook.com/people/Ethio-Emmanuel/pfbid07LJ4r13DdRn5MSNFCr7YjPLW95xyZD95ss5AR9s8WjUJX7hpk18rQFDV8CHMukhLl/',
  youtubeUrl: 'https://www.youtube.com/channel/UCljj-pkGW1Adn2ZOrib3RkA',
  tiktokUrl: 'https://www.tiktok.com/@eecimaryland',
};

/**
 * Navigation links used in Navbar and Footer
 */
export const NAVIGATION_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Visit', href: '/visit' },
];

/**
 * Church information constants
 */
export const CHURCH_INFO = {
  name: 'EECI',
  fullName: 'Emmanuel Evangelical Church International',
  address: '1010 Saters Ln, Timonium, MD 21093',
  mapsUrl: 'https://maps.app.goo.gl/AEq7Aw1tntVbsJ5dA',
  serviceTimes: '1 PM - 3 PM',
  copyrightYear: new Date().getFullYear(),
};

/**
 * Standardized error messages
 */
export const ERROR_MESSAGES = {
  generic: 'Unable to load content. Please try again later.',
  socialLinks: 'Unable to load social links.',
  sermon: 'Unable to load latest sermon. Please try again later.',
  values: 'Unable to load values. Please try again later.',
  verse: 'Unable to load verse of the day. Please try again later.',
};
