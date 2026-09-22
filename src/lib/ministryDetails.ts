import {
  Megaphone, Heart, Flame, HeartPulse, BookOpen, Globe, Users, Sparkles, BookText,
  Church, Users2, ShieldCheck, HeartHandshake, Baby, Accessibility, Lightbulb
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface MinistryDetail {
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

export const MINISTRY_DETAILS: Record<string, MinistryDetail> = {
  'gospel-evangelism': {
    title: 'Gospel Evangelism',
    heroDesc: 'Taking the message of Jesus Christ to villages, cities, remote areas and communities.',
    scripture: '"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth." — Romans 1:16',
    aspects: [
      {
        icon: Megaphone,
        title: 'Village Ministry',
        desc: 'Reaching unreached villages with the Good News.'
      },
      {
        icon: Globe,
        title: 'City Outreach',
        desc: 'Proclaiming Christ in urban centers and communities.'
      },
      {
        icon: Users2,
        title: 'Personal Evangelism',
        desc: 'Equipping believers to share their faith.'
      }
    ],
    ctaTitle: 'Join the Harvest',
    ctaDesc: 'Discover how you can be part of reaching our communities with the Gospel.',
    ctaButton: 'Contact Us',
    ctaLink: '/contact'
  },
  'prayer-ministry': {
    title: 'Prayer Ministry',
    heroDesc: 'Standing with individuals and families in prayer for their spiritual, personal and family needs.',
    scripture: '"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not." — Jeremiah 33:3',
    aspects: [
      {
        icon: Heart,
        title: 'Intercessory Prayer',
        desc: 'Standing in the gap for those who need a touch from God.'
      },
      {
        icon: ShieldCheck,
        title: 'Prayer Requests',
        desc: 'Receiving and praying over specific needs of individuals.'
      },
      {
        icon: Users,
        title: 'Corporate Prayer',
        desc: 'Gathering together to seek God\'s face.'
      }
    ],
    ctaTitle: 'Need Prayer?',
    ctaDesc: 'Our intercessors are ready to stand with you in faith.',
    ctaButton: 'Submit Request',
    ctaLink: '/prayer'
  },
  'fasting-prayer': {
    title: 'Fasting Prayer',
    heroDesc: 'Special seasons of fasting and prayer seeking God for revival, families, churches and communities.',
    scripture: '"Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free..." — Isaiah 58:6',
    aspects: [
      {
        icon: Flame,
        title: 'Spiritual Breakthrough',
        desc: 'Seeking God\'s intervention through fasting and prayer.'
      },
      {
        icon: Church,
        title: 'Special Meetings',
        desc: 'Dedicated times set apart for fasting prayer gatherings.'
      },
      {
        icon: HeartPulse,
        title: 'National Revival',
        desc: 'Praying for our nation and its leaders.'
      }
    ],
    ctaTitle: 'Join Our Fast',
    ctaDesc: 'Check our schedule for upcoming fasting prayer meetings.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  },
  'revival-meetings': {
    title: 'Revival Meetings',
    heroDesc: 'Gospel and revival meetings focused on bringing people together to hear God\'s Word, worship and seek God.',
    scripture: '"Wilt thou not revive us again: that thy people may rejoice in thee?" — Psalm 85:6',
    aspects: [
      {
        icon: Flame,
        title: 'Spiritual Awakening',
        desc: 'Believing for a mighty move of the Holy Spirit.'
      },
      {
        icon: Church,
        title: 'Worship Nights',
        desc: 'Extended times of passionate worship.'
      },
      {
        icon: BookOpen,
        title: 'Word of God',
        desc: 'Powerful preaching that stirs the heart.'
      }
    ],
    ctaTitle: 'Experience Revival',
    ctaDesc: 'Join us at our next gathering and encounter God in a powerful way.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  },
  'prophetic-prayer-meetings': {
    title: 'Prophetic Prayer Meetings',
    heroDesc: 'Prayer gatherings centered on the Word of God, prayer, encouragement and spiritual strengthening.',
    scripture: '"He that prophesieth speaketh unto men to edification, and exhortation, and comfort." — 1 Corinthians 14:3',
    aspects: [
      {
        icon: Lightbulb,
        title: 'Encouragement',
        desc: 'Lifting up believers through the prophetic Word.'
      },
      {
        icon: Sparkles,
        title: 'Spiritual Gifts',
        desc: 'Flowing in the gifts of the Holy Spirit.'
      },
      {
        icon: ShieldCheck,
        title: 'Strengthening',
        desc: 'Building up the church for the work of the ministry.'
      }
    ],
    ctaTitle: 'Be Strengthened',
    ctaDesc: 'Attend our next prophetic prayer gathering.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  },
  'family-ministry': {
    title: 'Family Ministry',
    heroDesc: 'Praying for marriages, children, families and household blessings.',
    scripture: '"And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children." — Deuteronomy 6:6-7',
    aspects: [
      {
        icon: Users,
        title: 'Marriage Blessing',
        desc: 'Praying for strong, God-honoring marriages.'
      },
      {
        icon: Baby,
        title: 'Children & Youth',
        desc: 'Praying for the next generation.'
      },
      {
        icon: Heart,
        title: 'Household Peace',
        desc: 'Seeking God\'s peace and blessing over every home.'
      }
    ],
    ctaTitle: 'Family Blessing',
    ctaDesc: 'Submit a prayer request for your family.',
    ctaButton: 'Prayer Request',
    ctaLink: '/prayer'
  },
  'healing-deliverance-prayer': {
    title: 'Healing & Deliverance Prayer',
    heroDesc: 'Praying with people who are seeking God\'s intervention, freedom and restoration.',
    scripture: '"He sent his word, and healed them, and delivered them from their destructions." — Psalm 107:20',
    aspects: [
      {
        icon: HeartPulse,
        title: 'Physical Healing',
        desc: 'Believing in God\'s power to heal the sick.'
      },
      {
        icon: HeartHandshake,
        title: 'Freedom',
        desc: 'Praying for deliverance from addictions and spiritual bondage.'
      },
      {
        icon: Sparkles,
        title: 'Restoration',
        desc: 'Seeking complete wholeness in Christ.'
      }
    ],
    ctaTitle: 'Receive Prayer',
    ctaDesc: 'Reach out to us if you need prayer for healing or deliverance.',
    ctaButton: 'Contact Us',
    ctaLink: '/contact'
  },
  'youth-ministry': {
    title: 'Youth Ministry',
    heroDesc: 'Encouraging young people to know Christ, grow in God\'s Word and serve His Kingdom.',
    scripture: '"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity." — 1 Timothy 4:12',
    aspects: [
      {
        icon: Sparkles,
        title: 'Youth Gatherings',
        desc: 'Dynamic services with passionate worship.'
      },
      {
        icon: Lightbulb,
        title: 'Mentorship',
        desc: 'Guiding teens in their walk with Christ.'
      },
      {
        icon: Flame,
        title: 'Kingdom Service',
        desc: 'Challenging young people to serve God.'
      }
    ],
    ctaTitle: 'Join the Youth',
    ctaDesc: 'Find out when our youth group meets and get plugged in.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  }
};
