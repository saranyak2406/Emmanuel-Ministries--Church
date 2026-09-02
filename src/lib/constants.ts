export const MINISTRY = {
  name: 'Emmanuel Gospel Ministries',
  shortName: 'Emmanuel',
  tagline: 'Proclaiming Christ \u2022 Reaching Souls \u2022 Advancing God\u2019s Kingdom',
  heroMessage: 'Proclaiming Jesus Christ. Reaching Souls. Raising Disciples. Advancing God’s Kingdom',
  leader: 'Evangelist Emmanuel Abraham',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'EmmanuelGospelMinistries@gmail.com',
} as const;

// Simplified nav — Home, About, Ministries, Prayer, Give, Contact
export const NAV_LINKS = [
  { label: 'Home',       href: '/'             },
  { label: 'About',      href: '/about'        },
  { label: 'Ministries', href: '/ministries'   },
  { label: 'Prayer',     href: '/prayer'       },
  { label: 'Give',       href: '/give'         },
  { label: 'Contact',    href: '/contact'      },
] as const;

export const SOCIAL_LINKS = [
  { label: 'YouTube',   href: '#', icon: 'youtube'   },
  { label: 'Facebook',  href: '#', icon: 'facebook'  },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'WhatsApp',  href: '#', icon: 'whatsapp'  },
] as const;

export const PRAYER_CATEGORIES = [
  'Salvation',
  'Family',
  'Healing',
  'Guidance',
  'Provision',
  'Deliverance',
  'Ministry',
  'Other',
] as const;
