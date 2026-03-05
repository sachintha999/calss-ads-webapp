// components/SubHeader.tsx
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function SubHeader() {
  return (
    <div className="w-full border-b bg-white py-2">
      <div className="container mx-auto flex justify-center px-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            
            <NavigationMenuItem>
              <Link href="/all-ads" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Ads
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/my-ads" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  My Ads
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}