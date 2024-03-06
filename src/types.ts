
export type Site = {
    url: string;
    author: string;
    describe: string;
    title: string;
    lightAndDarkMode: boolean;
    mail: string;
};

export type Locale = {
    lang: string;
    langTag: string;
}

export type MdConfig = {
    show: boolean;
    max: number;
    min: number;
}

export type NavMenu = {
    id: string;
    name: string;
    url: string;
    prefetch?: boolean;
    next?: NavMenu[];
}
