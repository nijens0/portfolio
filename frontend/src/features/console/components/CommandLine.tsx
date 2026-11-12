export function CommandLine() {

    return (
        <form className={'flex w-full gap-2'}>
            <label>
                <span className={'max-sm:sr-only'}>dmitry@portfolio:</span>
                <span>~<span className={'text-green'}>$</span></span>
            </label>
            <input
                className={'w-full outline-none'}
                type='text'
                aria-label='Командная строка терминала'
                placeholder='введите команду или help'
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
            />
        </form>
    )
}