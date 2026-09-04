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
    title: 'Gospel & Evangelism',
    heroDesc: 'Proclaiming the good news of Jesus Christ and reaching people with the message of salvation.',
    scripture: '"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth." — Romans 1:16',
    aspects: [
      {
        icon: Megaphone,
        title: 'Public Preaching',
        desc: 'Boldly declaring the truth of God\'s Word in open spaces and community centers.'
      },
      {
        icon: Users2,
        title: 'Personal Witnessing',
        desc: 'Training believers to share their faith confidently in their daily lives.'
      },
      {
        icon: Globe,
        title: 'Tract Distribution',
        desc: 'Providing clear, written explanations of the Gospel to those we meet.'
      }
    ],
    ctaTitle: 'Join the Harvest',
    ctaDesc: 'Discover how you can be part of reaching our city with the Gospel.',
    ctaButton: 'Contact Us',
    ctaLink: '/contact'
  },
  'prayer-intercession': {
    title: 'Prayer & Intercession',
    heroDesc: 'Standing before God in prayer for individuals, families, churches, communities and nations.',
    scripture: '"I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men." — 1 Timothy 2:1',
    aspects: [
      {
        icon: Heart,
        title: 'Corporate Prayer',
        desc: 'Gathering together as a church family to seek the Lord in unity.'
      },
      {
        icon: ShieldCheck,
        title: 'Prayer Chains',
        desc: 'A dedicated team standing by to lift urgent requests up to the throne of grace.'
      },
      {
        icon: Flame,
        title: 'Fasting & Seeking',
        desc: 'Setting aside regular times for fasting and deep spiritual intercession.'
      }
    ],
    ctaTitle: 'Need Prayer?',
    ctaDesc: 'Our intercessors are ready to stand with you in faith.',
    ctaButton: 'Submit Request',
    ctaLink: '/prayer'
  },
  'revival-meetings': {
    title: 'Revival Meetings',
    heroDesc: 'Gathering believers and seekers together to worship God, hear His Word and seek spiritual renewal.',
    scripture: '"Wilt thou not revive us again: that thy people may rejoice in thee?" — Psalm 85:6',
    aspects: [
      {
        icon: Flame,
        title: 'Spiritual Awakening',
        desc: 'Praying and believing for a mighty move of the Holy Spirit in our generation.'
      },
      {
        icon: Church,
        title: 'Worship Nights',
        desc: 'Extended times of passionate worship and encountering the presence of God.'
      },
      {
        icon: HeartPulse,
        title: 'Altar Calls',
        desc: 'Providing dedicated time for repentance, rededication, and receiving prayer.'
      }
    ],
    ctaTitle: 'Experience Revival',
    ctaDesc: 'Join us at our next gathering and encounter God in a powerful way.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  },
  'healing-restoration': {
    title: 'Healing & Restoration',
    heroDesc: 'Ministering God\'s Word and praying with people who need healing, restoration, hope and encouragement.',
    scripture: '"He healeth the broken in heart, and bindeth up their wounds." — Psalm 147:3',
    aspects: [
      {
        icon: HeartPulse,
        title: 'Prayer for the Sick',
        desc: 'Believing in God\'s power to heal physical ailments according to His Word.'
      },
      {
        icon: HeartHandshake,
        title: 'Emotional Healing',
        desc: 'Walking alongside those who have experienced trauma, loss, or deep hurt.'
      },
      {
        icon: Users,
        title: 'Support Groups',
        desc: 'Providing safe environments for people to find freedom from addictions and strongholds.'
      }
    ],
    ctaTitle: 'Find Hope Today',
    ctaDesc: 'Reach out to us if you need prayer for healing or support through a difficult season.',
    ctaButton: 'Contact Us',
    ctaLink: '/contact'
  },
  'discipleship-teaching': {
    title: 'Discipleship & Teaching',
    heroDesc: 'Helping believers grow in faith and develop a deeper relationship with Jesus Christ through God\'s Word.',
    scripture: '"Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." — 2 Timothy 2:15',
    aspects: [
      {
        icon: BookOpen,
        title: 'Foundations Class',
        desc: 'Teaching essential biblical truths to new believers setting out on their journey.'
      },
      {
        icon: Users2,
        title: 'Small Groups',
        desc: 'Fostering close-knit communities where believers can learn and grow together.'
      },
      {
        icon: ShieldCheck,
        title: 'Leadership Training',
        desc: 'Equipping mature believers to lead and disciple others effectively.'
      }
    ],
    ctaTitle: 'Grow Deeper',
    ctaDesc: 'Connect with a discipleship group and strengthen your biblical foundation.',
    ctaButton: 'Get Involved',
    ctaLink: '/contact'
  },
  'missions-outreach': {
    title: 'Missions & Outreach',
    heroDesc: 'Taking the Gospel beyond familiar places and serving communities with the love of Christ.',
    scripture: '"Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest." — Luke 10:2',
    aspects: [
      {
        icon: Globe,
        title: 'Global Missions',
        desc: 'Supporting and sending workers to unreached nations across the world.'
      },
      {
        icon: HeartHandshake,
        title: 'Local Compassion',
        desc: 'Serving the poor, marginalized, and needy right in our own city.'
      },
      {
        icon: Accessibility,
        title: 'Short-term Trips',
        desc: 'Organizing opportunities for believers to experience the mission field firsthand.'
      }
    ],
    ctaTitle: 'Support the Mission',
    ctaDesc: 'Partner with us financially to send workers into the harvest.',
    ctaButton: 'Give Now',
    ctaLink: '/give'
  },
  'family-ministry': {
    title: 'Family Ministry',
    heroDesc: 'Strengthening families and helping them build their lives on biblical principles.',
    scripture: '"And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children." — Deuteronomy 6:6-7',
    aspects: [
      {
        icon: Users,
        title: 'Marriage Enrichment',
        desc: 'Providing counsel, retreats, and teaching to build strong, God-honoring marriages.'
      },
      {
        icon: Baby,
        title: 'Parenting Support',
        desc: 'Equipping parents with biblical wisdom to raise children in the fear of the Lord.'
      },
      {
        icon: Heart,
        title: 'Family Counseling',
        desc: 'Offering biblically-based guidance for families walking through challenging seasons.'
      }
    ],
    ctaTitle: 'Strengthen Your Family',
    ctaDesc: 'Discover resources and events designed to build up your home.',
    ctaButton: 'Contact Us',
    ctaLink: '/contact'
  },
  'youth-ministry': {
    title: 'Youth Ministry',
    heroDesc: 'Guiding young people to know Christ, grow in faith, and live out God\'s purpose.',
    scripture: '"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity." — 1 Timothy 4:12',
    aspects: [
      {
        icon: Sparkles,
        title: 'Youth Gatherings',
        desc: 'Dynamic services with passionate worship and relevant biblical teaching.'
      },
      {
        icon: Lightbulb,
        title: 'Mentorship',
        desc: 'Connecting teens with godly mentors who can guide them through critical years.'
      },
      {
        icon: Flame,
        title: 'Mission Opportunities',
        desc: 'Challenging young people to step out in faith and serve others.'
      }
    ],
    ctaTitle: 'Join the Youth',
    ctaDesc: 'Find out when our youth group meets and get plugged in.',
    ctaButton: 'View Meetings',
    ctaLink: '/meetings'
  },
  'bible-teaching': {
    title: 'Bible Teaching',
    heroDesc: 'Teaching God\'s Word faithfully to equip believers for life and ministry.',
    scripture: '"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." — 2 Timothy 3:16',
    aspects: [
      {
        icon: BookText,
        title: 'Expository Preaching',
        desc: 'Teaching verse-by-verse through the Bible to understand its full context.'
      },
      {
        icon: BookOpen,
        title: 'Bible Studies',
        desc: 'In-depth exploration of specific books, characters, or theological topics.'
      },
      {
        icon: ShieldCheck,
        title: 'Apologetics',
        desc: 'Equipping believers to understand and defend the truths of the Christian faith.'
      }
    ],
    ctaTitle: 'Hear the Word',
    ctaDesc: 'Listen to our latest teachings and sermons.',
    ctaButton: 'Watch Now',
    ctaLink: '/media'
  }
};
