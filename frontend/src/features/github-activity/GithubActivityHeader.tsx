export function GithubActivityHeader() {

    return (
        <header className={'flex w-full m-auto justify-between items-center'}>
            <span
                className={'text-xl text-text-primary tracking-normal'}
            >
                Активность на GitHub
            </span>
            <span
                className={'relative text-xs text-text-muted tracking-normal before:absolute ' +
                    'before:rounded-full before:bg-green before:size-1.5 before:top-1/2 ' +
                    'before:-translate-y-1/2 before:left-0 pl-4 font-mono'}
            >
                обновлено x мин назад
            </span>
        </header>
    )
}