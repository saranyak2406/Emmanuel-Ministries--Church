import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomIcons = {
  Prayer: () => (
    <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
      <path d="M32 10l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="#FFF" opacity="0.8"/>
      <path d="M18 18l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5L18 18z" fill="#FFF" opacity="0.6"/>
      <path d="M46 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#FFF" opacity="0.6"/>
      <g transform="translate(0, 6)">
        <path d="M28 44l-6 10-6-4 8-12c2-3 4-2 6 0l-2 6z" fill="#8B5CF6"/>
        <path d="M36 44l6 10 6-4-8-12c-2-3-4-2-6 0l2 6z" fill="#8B5CF6"/>
        <path d="M32 16c-3 0-5 3-4 8l2 12h4l2-12c1-5-1-8-4-8z" fill="#FCD34D"/>
        <path d="M30 18c-2 0-3 2-2 6l2 8h4l2-8c1-4-1-6-2-6h-4z" fill="#FBBF24"/>
        <path d="M34 16c-3 0-5 3-4 8l2 12h4l2-12c1-5-1-8-4-8z" fill="#FCD34D"/>
        <path d="M27 24l-3 4 5 10h1l-1-10c0-2 0-3-2-4z" fill="#FCD34D"/>
        <path d="M37 24l3 4-5 10h-1l1-10c0-2 0-3 2-4z" fill="#FCD34D"/>
        <path d="M32 20v24" stroke="#D97706" strokeWidth="1" opacity="0.3"/>
      </g>
    </svg>
  ),
  Bible: () => (
    <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
      <path d="M12 24c0-4 8-6 18-6v28c-10 0-18 2-18 6V24z" fill="#60A5FA"/>
      <path d="M52 24c0-4-8-6-18-6v28c10 0 18 2 18 6V24z" fill="#3B82F6"/>
      <path d="M14 22c0-3 7-5 16-5v28c-9 0-16 2-16 5V22z" fill="#FFFFFF"/>
      <path d="M50 22c0-3-7-5-16-5v28c9 0 16 2 16 5V22z" fill="#F3F4F6"/>
      <path d="M34 26h4v3h-4v8h-3v-8h-4v-3h4v-4h3v4z" fill="#F59E0B"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
      <rect x="14" y="20" width="36" height="32" rx="4" fill="#F3F4F6"/>
      <path d="M14 24c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v8H14v-8z" fill="#3B82F6"/>
      <circle cx="24" cy="18" r="3" fill="#D1D5DB"/>
      <circle cx="40" cy="18" r="3" fill="#D1D5DB"/>
      <rect x="18" y="36" width="4" height="4" fill="#9CA3AF"/>
      <rect x="26" y="36" width="4" height="4" fill="#9CA3AF"/>
      <rect x="34" y="36" width="4" height="4" fill="#9CA3AF"/>
      <rect x="42" y="36" width="4" height="4" fill="#9CA3AF"/>
      <rect x="18" y="44" width="4" height="4" fill="#9CA3AF"/>
      <rect x="26" y="44" width="4" height="4" fill="#9CA3AF"/>
      <circle cx="44" cy="46" r="10" fill="#F59E0B"/>
      <path d="M44 40v6l4 3" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
      <path d="M32 54C32 54 12 40 12 26c0-7 6-12 12-12 4.4 0 8.2 2.6 10 6.4 1.8-3.8 5.6-6.4 10-6.4 6 0 12 5 12 12 0 14-20 28-20 28z" fill="#F43F5E"/>
      <path d="M33 26h4v3h-4v7h-3v-7h-4v-3h4v-4h3v4z" fill="#FFFFFF"/>
    </svg>
  )
};

const quickLinks = [
  {
    title: 'PRAYER REQUEST',
    icon: CustomIcons.Prayer,
    path: '/prayer',
    isPrimary: true,
  },
  {
    title: 'KNOW JESUS',
    icon: CustomIcons.Bible,
    path: '/about',
    isPrimary: false,
  },
  {
    title: 'UPCOMING MEETINGS',
    icon: CustomIcons.Calendar,
    path: '/meetings',
    isPrimary: false,
  },
  {
    title: 'SUPPORT THE MINISTRY',
    icon: CustomIcons.Heart,
    path: '/give',
    isPrimary: false,
  },
];

export default function QuickLinks() {
  return (
    <div className="w-full relative z-20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 max-w-6xl mx-auto">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link 
                key={index} 
                to={link.path}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div 
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center border-2 border-[#e8bb3c]
                    transition-all duration-300 ease-out
                    group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(232,187,60,0.5)]
                    ${link.isPrimary 
                      ? 'bg-[#d6a524] shadow-[0_0_15px_rgba(214,165,36,0.5)] border-[#f9df88]' 
                      : 'bg-[#0f1f40] shadow-sm'}
                  `}
                >
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 
                  className={`mt-4 mb-2 font-bold uppercase text-[13px] tracking-widest leading-snug w-4/5
                    ${link.isPrimary ? 'text-[#f6e19b]' : 'text-white'}
                  `}
                >
                  {link.title}
                </h3>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-[#e8bb3c] transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
