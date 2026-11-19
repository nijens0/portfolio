import {Day} from "./Day.tsx";

export function ContributionCalendarFooter() {

    const colors: string[] = [
        'bg-contribution-0',
        'bg-contribution-1',
        'bg-contribution-2',
        'bg-contribution-3',
        'bg-contribution-4'
    ];

    return (
        <footer
            className={'flex items-center justify-between w-full text-xs tracking-normal font-mono text-text-muted'}
        >
            <a
                href={'https://github.com/nijens0'}
                target="_blank"
                rel="noopener noreferrer"
            >
                github.com/nijens0
            </a>
            <div
                className={'flex gap-0.75'}
            >
                <span>меньше</span>
                {Array.from({length: colors.length}).map((_, i) => (
                    <Day className={colors[i]} />
                ))}
                <span>больше</span>
            </div>
        </footer>
    )
}