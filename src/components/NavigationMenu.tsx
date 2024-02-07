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
import { NAVMENU } from '@/config';




export function Navigation() {
    return (
        <NavigationMenu className='bg-opacity-50 w-1/2'>
            <NavigationMenuList className=''>
                {
                    NAVMENU.map((item) =>
                        <NavigationMenuItem>
                            <Button variant="ghost" className='text-base subpixel-antialiased font-medium border-2 border-transparent hover:border-ring'>
                                <a href={item.url}>
                                    {item.name}
                                </a>
                            </Button>
                        </NavigationMenuItem>
                    )
                }
                
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}

