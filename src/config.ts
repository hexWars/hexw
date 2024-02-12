import type { Site, SocialObject } from "@/types";

export const SITE: Site = {
    url: "https://blog.sehnsucht.top/",
    author: "hexWers",
    describe: "A minimal, responsive and SEO-friendly Astro blog theme.",
    title: "Sehnsucht",
    lightAndDarkMode: true,
};

export const LOCALE = {
    lang: "zh",
} as const;

export const NAVMENU = [
    {
        id: '1',
        name: 'POST',
        url: '/posts/',
    },
    {
        id: '2',
        name: 'TAG',
        url: '/tags/',
    },
    {
        id: '3',
        name: 'ABOUT',
        url: '/about/',
    },
]

export const SOCIALS: SocialObject = [
    {
        name: "Github",
        href: "https://github.com/hexWars/hexw",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "Discord",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Discord`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
    {
        name: "Facebook",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Facebook`,
        active: false,
    },
    {
        name: "Instagram",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Instagram`,
        active: false,
    },
    {
        name: "LinkedIn",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: false,
    },
    {
        name: "Twitter",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Twitter`,
        active: false,
    },
    {
        name: "Twitch",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Twitch`,
        active: false,
    },
    {
        name: "YouTube",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on YouTube`,
        active: false,
    },
    {
        name: "WhatsApp",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on WhatsApp`,
        active: false,
    },
    {
        name: "Snapchat",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Snapchat`,
        active: false,
    },
    {
        name: "Pinterest",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Pinterest`,
        active: false,
    },
    {
        name: "TikTok",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on TikTok`,
        active: false,
    },
    {
        name: "CodePen",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on CodePen`,
        active: false,
    },
    {
        name: "GitLab",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on GitLab`,
        active: false,
    },
    {
        name: "Reddit",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Reddit`,
        active: false,
    },
    {
        name: "Skype",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Skype`,
        active: false,
    },
    {
        name: "Steam",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Steam`,
        active: false,
    },
    {
        name: "Telegram",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Telegram`,
        active: false,
    },
    {
        name: "Mastodon",
        href: "https://github.com/hexWars/hexw",
        linkTitle: `${SITE.title} on Mastodon`,
        active: false,
    },
];
