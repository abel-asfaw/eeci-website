import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa6';

export function buildSocialLinks(siteSettings) {
  return [
    { href: siteSettings?.youtubeUrl, icon: FaYoutube, label: 'YouTube' },
    { href: siteSettings?.facebookUrl, icon: FaFacebook, label: 'Facebook' },
    {
      href: siteSettings?.instagramUrl,
      icon: FaInstagram,
      label: 'Instagram',
    },
    { href: siteSettings?.tiktokUrl, icon: FaTiktok, label: 'TikTok' },
  ];
}
