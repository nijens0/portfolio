import {Hint} from "./Hint.tsx";

export function CommandsHints() {

    return (
        <div className={'flex gap-2 items-center flex-wrap'}>
            <span
                className={'text-[13px] leading-[20px] text-sans tracking-normal text-text-muted max-sm:sr-only'}
            >
                Попробуйте
            </span>
            <Hint>projects</Hint>
            <Hint>stack</Hint>
            <Hint>theme light</Hint>
            <Hint>export --json</Hint>
        </div>
    )
}