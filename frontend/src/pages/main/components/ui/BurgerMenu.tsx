import BurgerMenuIcon from '../../../../assets/icons/burger-button.svg?react';
import {Navigation} from './Navigation.tsx';
import {twMerge} from "tailwind-merge";

interface BurgerMenuProps {
    className?: string
    isOpen: boolean
    onClick: () => void
}

export function BurgerMenu({className, isOpen, onClick}: BurgerMenuProps) {

    return (
        <div className={twMerge('relative flex items-center', className)}>
            <button
                type='button'
                onClick={onClick}
                className='cursor-pointer'
                aria-label='Меню'
                aria-expanded={isOpen}
            >
                <BurgerMenuIcon/>
            </button>
            {isOpen && (
                <div className='absolute top-full translate-y-2 right-0 bg-background-secondary p-4 rounded-lg border-border border border-border-primary'>
                    <Navigation vertical={true}/>
                </div>
            )}
        </div>
    )
}