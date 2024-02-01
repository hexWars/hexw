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
        <NavigationMenu className='bg-opacity-50'>
            <a href="/" className='font-bold italic'> HEXW</a>
            {/* FIXME: delete */}
            <p className='w-96'></p>
            <p className='w-96'></p>
            <p className='w-96'></p>
            <NavigationMenuList className=''>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/article/">
                            POST
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/tags/">
                            TAG
                        </a>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="ghost" className='text-base subpixel-antialiased font-medium'>
                        <a href="/about/">
                            ABOUT
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

