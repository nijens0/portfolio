import type {NavId} from '../../../constatns/navigation';

interface NavigationProps {
    className?: string
}

interface NavLink {
    label: string
    id: NavId
}

export function Navigation({className}: NavigationProps) {

    const links: NavLink[] = [
        {label: 'Проекты', id: 'projects'},
        {label: 'Активность', id: 'activity'},
        {label: 'Стек', id: 'stack'},
        {label: 'Контакты', id: 'contacts'}
    ];

    return(
        <nav className={className}>
            <ul className='flex text-sm gap-6 leading-none text-text-secondary'>
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