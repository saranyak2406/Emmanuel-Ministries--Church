import {
  Megaphone, Home, Hand, Users, Heart, Handshake,
  Globe, BookOpen, Sparkles, MapPin, Tent, MessageCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MissionDetail {
  title: string;
  heroDesc: string;
  scripture: string | null;
  aspects: {
    icon: LucideIcon;
    title: string;
    desc: string;
  }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaLink: string;
}

export const MISSION_DETAILS: Record<string, MissionDetail> = {
  'gospel-evangelism': {
    title: 'Gospel Evangelism',
    heroDesc: 'Sharing the message of Jesus Christ in cities, towns, villages and communities across India and beyond.',
    scripture: '"How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?" — Romans 10:14',
    aspects: [
      {
        icon: Megaphone,
        title: 'Open Air Preaching',
        desc: 'Proclaiming the Gospel in public squares and marketplaces where people gather.'
      },
      {
        icon: BookOpen,
        title: 'Literature Distribution',
        desc: 'Handing out tracts, Gospels, and New Testaments in local languages.'
      },
      {
        icon: MessageCircle,
        title: 'Personal Evangelism',
        desc: 'Equipping believers to share their testimony and the Gospel one-on-one.'
      }
    ],
    ctaTitle: 'Help Us Reach the Lost',
    ctaDesc: 'Partner with our evangelism teams to bring the light of the Gospel to those in darkness.',
    ctaButton: 'Support Evangelism',
    ctaLink: '/give'
  },
  'village-outreach': {
    title: 'Village Outreach',
    heroDesc: 'Reaching rural communities with the Gospel and prayer — carrying the hope of Christ to those who need it most.',
    scripture: '"And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom..." — Matthew 9:35',
    aspects: [
      {
        icon: Home,
        title: 'Rural Evangelism',
        desc: 'Traveling to remote villages where the Gospel has never been preached.'
      },
      {
        icon: Tent,
        title: 'Village Crusades',
        desc: 'Hosting open-air Gospel meetings in rural communities to reach the masses.'
      },
      {
        icon: Heart,
        title: 'Medical & Compassion Camps',
        desc: 'Serving physical needs while sharing the spiritual healing found in Christ.'
      }
    ],
    ctaTitle: 'Send Us to the Villages',
    ctaDesc: 'Your partnership helps us travel to unreached villages and host impactful outreach events.',
    ctaButton: 'Partner With Us',
    ctaLink: '/partnership'
  },
  'prayer-missions': {
    title: 'Prayer Missions',
    heroDesc: 'Standing in prayer for communities and nations through dedicated seasons of intercession and fasting.',
    scripture: '"If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land." — 2 Chronicles 7:14',
    aspects: [
      {
        icon: Hand,
        title: 'Intercessory Gatherings',
        desc: 'Dedicating extended times of prayer specifically for unreached people groups.'
      },
      {
        icon: MapPin,
        title: 'Prayer Walks',
        desc: 'Walking through cities and villages, claiming the territory for the Kingdom of God.'
      },
      {
        icon: Sparkles,
        title: 'Fasting Campaigns',
        desc: 'Calling the church into seasons of fasting for breakthrough in difficult mission fields.'
      }
    ],
    ctaTitle: 'Join the Prayer Force',
    ctaDesc: 'We need committed intercessors to back our front-line workers in prayer.',
    ctaButton: 'Request Prayer Focus',
    ctaLink: '/prayer'
  },
  'gospel-meetings': {
    title: 'Gospel Meetings',
    heroDesc: 'Organizing and participating in evangelistic gatherings for worship, the Word and responding to the Gospel.',
    scripture: '"Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching." — Hebrews 10:25',
    aspects: [
      {
        icon: Users,
        title: 'Evangelistic Crusades',
        desc: 'Large-scale gatherings designed specifically to present the Gospel clearly.'
      },
      {
        icon: Tent,
        title: 'Revival Meetings',
        desc: 'Stirring up the local church to a renewed passion for God and His mission.'
      },
      {
        icon: Heart,
        title: 'Healing Services',
        desc: 'Special meetings dedicated to praying for the sick and believing for miracles.'
      }
    ],
    ctaTitle: 'Attend a Meeting',
    ctaDesc: 'Find out when and where our next Gospel Meeting is taking place.',
    ctaButton: 'View Schedule',
    ctaLink: '/meetings'
  },
  'community-outreach': {
    title: 'Community Outreach',
    heroDesc: 'Serving people with compassion and practical support, demonstrating the love of Christ in action.',
    scripture: '"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven." — Matthew 5:16',
    aspects: [
      {
        icon: Heart,
        title: 'Feeding Programs',
        desc: 'Providing nutritious meals to the hungry and destitute in our communities.'
      },
      {
        icon: Users,
        title: 'Widows & Orphans',
        desc: 'Offering practical assistance, care, and dignity to the most vulnerable.'
      },
      {
        icon: BookOpen,
        title: 'Educational Support',
        desc: 'Supplying school materials and support for children in impoverished areas.'
      }
    ],
    ctaTitle: 'Show Compassion',
    ctaDesc: 'Your giving allows us to be the hands and feet of Jesus to those in desperate need.',
    ctaButton: 'Give Now',
    ctaLink: '/give'
  },
  'mission-partnerships': {
    title: 'Mission Partnerships',
    heroDesc: 'Working together with believers and ministries to advance the Gospel and strengthen Kingdom work.',
    scripture: '"For we are labourers together with God: ye are God\'s husbandry, ye are God\'s building." — 1 Corinthians 3:9',
    aspects: [
      {
        icon: Handshake,
        title: 'Church Planting',
        desc: 'Partnering with local pastors to establish new churches in unreached areas.'
      },
      {
        icon: Users,
        title: 'Ministerial Network',
        desc: 'Connecting and encouraging independent Gospel workers and evangelists.'
      },
      {
        icon: Globe,
        title: 'Resource Sharing',
        desc: 'Providing Bibles, literature, and training materials to rural pastors.'
      }
    ],
    ctaTitle: 'Partner With Us',
    ctaDesc: 'Together, we can accomplish more for the Kingdom of God. Join hands with us today.',
    ctaButton: 'Become a Partner',
    ctaLink: '/partnership'
  }
};
