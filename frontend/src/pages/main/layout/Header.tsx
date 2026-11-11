import {Navigation} from '../components/Navigation'

export function Header() {

    return (
        <header
            className='sticky flex px-8 w-full gap-188.5 h-16 justify-center
                       items-center border-border border-b border-border-primary'
        >
            <a className='text-base text-text-primary leading-none' href="/">Дмитрий Монголин</a>
            <Navigation/>
        </header>
    )
}