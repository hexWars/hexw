import type { Site, Locale, NavMenu, MdConfig } from "@/types";
import { Github } from "lucide-react";

export const SITE: Site = {
    url: "https://example.com/",
    author: "hexWers",
    describe: "A minimal, responsive and SEO-friendly Astro blog theme.",
    title: "Sehnsucht",
    lightAndDarkMode: true,
    mail: "mail@example.com"
};

export const LOCALE: Locale = {
    lang: "zh",
    langTag: "zh-cn"
} as const;

export const MDCONFIG: MdConfig = {
    show: true,
    max: 1,
    min: 3,
}

export const NAVMENU: NavMenu[] = [
    {
        id: '1',
        name: 'POST',
        url: '/posts/',
    },
    {
        id: '2',
        name: 'CATEGORY',
        url: '/categories/',
        next: [

            {
                id: '1',
                name: 'fdsaf',
                url: '/category/fdsaf',
            },
            {
                id: '2',
                name: '434',
                url: '/category/434',
            },
        ]
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

