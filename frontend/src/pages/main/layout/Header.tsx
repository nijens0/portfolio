import {Navigation} from '../components/ui/Navigation.tsx'
import {BurgerMenu} from "../components/ui/BurgerMenu.tsx";
import {useState} from "react";

export function Header() {

    const [isMenuOpen, seIsMenuOpen] = useState(false)

    return (
        <header
            className={'sticky flex px-8 w-full min-w-60 xl:gap-188.5 ' +
            'h-16 xl:justify-center justify-between items-center ' +
            'border-border border-b border-border-primary'}
        >
            <a className='text-base text-text-primary leading-none text-nowrap' href="/">Дмитрий Монголин</a>
            <Navigation className='max-md:hidden' />
            <BurgerMenu
                className='md:hidden'
                isOpen={isMenuOpen}
                onClick={() => seIsMenuOpen(prev => !prev)}
            />
        </header>
    )
}