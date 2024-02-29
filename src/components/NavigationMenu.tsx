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
import { ModeToggle } from "@/components/ModeToggle";
import { NAVMENU } from '@/config';




export function Navigation() {
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
                                <div className="text-base subpixel-antialiased font-medium">
                                    <a href={item.url} className='px-2 py-2 hover:text-ring' data-astro-prefetch="viewport">
                                        {item.name}
                                    </a>
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

