import {
    IconBrandGithub,
    IconMail,
    IconBrandTelegram,
    IconRss,
    IconBrandYoutube,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandWechat,
} from "@tabler/icons-react";

// https://github.com/tabler/tabler-icons

export const SocialIcons = () => {
    return <div className="flex">
        <a href="">
            <IconMail
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconBrandYoutube
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconBrandGithub
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconBrandTwitter
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconBrandInstagram
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>

        <a href="">
            <IconBrandTelegram
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconBrandWechat
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
        <a href="">
            <IconRss
                className="hover:rotate-12 transition delay-0 ease-in-out hover:stroke-ring stroke-[2px] h-6 w-6"
            />
        </a>
    </div>
}
