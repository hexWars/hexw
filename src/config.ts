import type { Site, SocialObject } from "@/types";
import { Github } from "lucide-react";

export const SITE: Site = {
    url: "https://example.com/",
    author: "hexWers",
    describe: "A minimal, responsive and SEO-friendly Astro blog theme.",
    title: "Sehnsucht",
    lightAndDarkMode: true,
    mail: "mail@example.com"
};

export const LOCALE = {
    lang: "zh",
    langTag: "zh-cn"
} as const;

export const NAVMENU = [
    {
        id: '1',
        name: 'POST',
        url: '/posts/',
    },
    {
        id: '2',
        name: 'CATEGORY',
        url: '/categories/',
    },
    {
        id: '3',
        name: 'TAG',
        url: '/tags/',
    },
    {
        id: '4',
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
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
];
