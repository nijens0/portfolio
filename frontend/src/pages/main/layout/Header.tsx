import {Navigation} from '../components/Navigation'

export function Header() {

    return(
        <header className='flex w-full bg-background-primary border-b border-border px-8'>
            <div className='flex m-auto w-320 h-16 justify-between items-center'>
                <a className='text-base text-text-primary leading-none' href="/">Дмитрий Монголин</a>
                <Navigation />
            </div>
        </header>
    )
}