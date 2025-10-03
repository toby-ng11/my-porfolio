import { NavLinks } from './nav-links';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Header() {
    return (
        <div className="bg-background flex flex-row items-center justify-between p-4">
            <div className="flex flex-row items-center gap-2">
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>TN</AvatarFallback>
                </Avatar>
                <p className="font-bold">TOBY</p>
            </div>
            <NavLinks />
        </div>
    );
}
