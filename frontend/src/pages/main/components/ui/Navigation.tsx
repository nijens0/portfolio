import type {NavId} from '../../../../constatns/navigation.ts';
import {twMerge} from 'tailwind-merge';

interface NavigationProps {
    className?: string
    vertical?: boolean
}

interface NavLink {
    label: string
    id: NavId
}

export function Navigation({className, vertical}: NavigationProps) {

    const links: NavLink[] = [
        {label: 'Проекты', id: 'projects'},
        {label: 'Активность', id: 'activity'},
        {label: 'Стек', id: 'stack'},
        {label: 'Контакты', id: 'contacts'}
    ];

    return(
        <nav className={className}>
            <ul className={twMerge('flex text-sm gap-6 leading-none text-text-secondary', vertical && 'flex-col')}>
                {Array.from(links).map((link, i) => (
                    <li key={i}>
                        <a href={`#${link.id}`}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}