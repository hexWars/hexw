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
        <NavigationMenu className='text-light-green'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="/">
                        <NavigationMenuLink>
                            index
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/article/">
                        <NavigationMenuLink>
                            article
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/tags/">
                        <NavigationMenuLink>
                            tag
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/about/">
                        <NavigationMenuLink>
                            about
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    );
}