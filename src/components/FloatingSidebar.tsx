import { Facebook, Twitter, Instagram, Bell, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingSidebar() {
  const links = [
    { id: 'facebook',  icon: Facebook,      label: 'Facebook',  href: '#', bg: 'bg-[#3b5998]', hover: 'hover:bg-[#2d4373]' },
    { id: 'twitter',   icon: Twitter,       label: 'Twitter',   href: '#', bg: 'bg-[#1da1f2]', hover: 'hover:bg-[#0c85d0]' },
    { id: 'instagram', icon: Instagram,     label: 'Instagram', href: '#', bg: 'bg-[#e1306c]', hover: 'hover:bg-[#c1205c]' },
    { id: 'alerts',    icon: Bell,          label: 'Alerts',    href: '/meetings', bg: 'bg-[#0084ff]', hover: 'hover:bg-[#006bce]' },
    { id: 'email',     icon: Mail,          label: 'Contact',   href: '/contact', bg: 'bg-[#33475b]', hover: 'hover:bg-[#253342]' },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col shadow-2xl rounded-r-md overflow-hidden">
      {links.map((link) => {
        const Icon = link.icon;
        const isExternal = link.href.startsWith('#') || link.href.startsWith('http');
        
        const content = (
          <div className={`w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center text-white transition-all duration-300 ease-in-out ${link.bg} ${link.hover} cursor-pointer group hover:w-32 md:hover:w-40 border-b border-white/10 last:border-b-0`}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
              <Icon className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
            </div>
            <span className="whitespace-nowrap font-medium text-xs md:text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {link.label}
            </span>
          </div>
        );

        if (isExternal) {
          return (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          );
        }

        return (
          <Link key={link.id} to={link.href} className="block">
            {content}
          </Link>
        );
      })}
    </div>
  );
}
