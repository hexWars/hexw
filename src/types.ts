import type socialIcons from "@/assets/socialIcons";

export type Site = {
    url: string;
    author: string;
    describe: string;
    title: string;
    lightAndDarkMode: boolean;
    mail: string;
};

export type SocialObject = {
    name: keyof typeof socialIcons;
    href: string;
    active: boolean;
    linkTitle: string;
}[];
