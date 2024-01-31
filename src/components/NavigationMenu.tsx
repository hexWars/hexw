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
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";




export function Navigation() {
    return (
        <NavigationMenu className='text-dark-purple-text-nav font-mono'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/" >
                            index
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/article/">
                            article
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/tags/">
                            tag
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/about/">
                            about
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}