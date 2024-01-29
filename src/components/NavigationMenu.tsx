import React from 'react';
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



export function Navigation() {
    return (
        <NavigationMenu className='text-indigo-400'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="/">
                        index
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/article/">
                        article
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/tags/">
                        tag
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/about/">
                        about
                    </a>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    );
}