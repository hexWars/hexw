import React, { useState } from 'react';
import { SITE } from '@/config';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { NAVMENU } from '@/config';




export function Navigation() {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuTouch = (menuId: any) => {
        setActiveMenu(menuId == activeMenu ? null : menuId);
    };
    return (
        <NavigationMenu className='w-1/2'>
            <NavigationMenuList className=''>
                {
                    NAVMENU
                        .sort(
                            (a, b) =>
                                parseInt(a.id) - parseInt(b.id),
                        )
                        .map((item) =>
                            <NavigationMenuItem key={item.id}>
                                <div className="text-base subpixel-antialiased font-medium  flex flex-col items-center" onMouseEnter={() => handleMenuTouch(item.id)} onMouseLeave={() => handleMenuTouch(0)}>
                                    <a href={item.url} className='px-2 py-2 hover:text-ring'>
                                        {item.name}
                                    </a>
                                    {
                                        item.next && <ul className={`absolute ${activeMenu == item.id ? 'block' : 'hidden'} mt-[9%] shadow-md py-1 rounded-xl text-nowrap`}>{item.next
                                            .sort((a: any, b: any) => (a.id - b.id))
                                            .map((subItem) => (<li>
                                                <a href={subItem.url} className="block px-4 mx-1 py-2 bg-background hover:bg-border rounded-md text-center">{subItem.name}</a>
                                            </li>))}</ul>
                                    }
                                </div>
                            </NavigationMenuItem>
                        )
                }

                {
                    SITE.lightAndDarkMode ? (<NavigationMenuItem><ModeToggle /></NavigationMenuItem>) : ""
                }

            </NavigationMenuList>
        </NavigationMenu >
    );
}

