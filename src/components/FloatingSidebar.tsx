import { Facebook, Instagram, Bell, Mail, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

export default function FloatingSidebar() {
  const links = [
    { id: 'facebook',  icon: Facebook,      label: 'Facebook',  href: 'https://www.facebook.com/share/1HtSqsGZUk/', bg: 'bg-[#3b5998]', hover: 'hover:bg-[#2d4373]' },
    { id: 'youtube',   icon: Youtube,       label: 'YouTube',   href: 'https://youtube.com/@evangelistemmanuelabraham?si=LxICF6iC7paZajYr', bg: 'bg-[#ff0000]', hover: 'hover:bg-[#cc0000]' },
    { id: 'instagram', icon: Instagram,     label: 'Instagram', href: 'https://www.instagram.com/mariya.dass3?utm_source=qr&igsi=MWtzcTNtOXdtNDNlNQ==', bg: 'bg-[#e1306c]', hover: 'hover:bg-[#c1205c]' },
    { id: 'whatsapp',  icon: WhatsAppIcon,  label: 'WhatsApp',  href: 'https://wa.me/919949667712', bg: 'bg-[#25D366]', hover: 'hover:bg-[#128C7E]' },
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
