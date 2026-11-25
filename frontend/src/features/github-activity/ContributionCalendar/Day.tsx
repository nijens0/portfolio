import type {ContributionDay, ContributionLevel} from "../../../types/github.tsx";
import {twMerge} from "tailwind-merge";

interface DayProps {
    day?: ContributionDay
    className?: string
}

const levelClasses: Record<ContributionLevel, string> = {
    NONE: 'bg-contribution-0',
    FIRST_QUARTILE: 'bg-contribution-1',
    SECOND_QUARTILE: 'bg-contribution-2',
    THIRD_QUARTILE: 'bg-contribution-3',
    FOURTH_QUARTILE: 'bg-contribution-4',
};

export function Day(
    {day, className}: DayProps
) {

    return (
        <div
            className={twMerge('group relative size-3 rounded-xs bg-contribution-0',
                className, day && levelClasses[day.contributionLevel])}
        >
            {day && (
                <div className={'pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 ' +
                    '-translate-x-1/2 whitespace-nowrap px-2 py-1 text-[10px] text-text-primary ' +
                    'invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 ' +
                    'bg-background-raised rounded-md'}>
                    {day.contributionCount} contributions on {day.date}
                </div>
            )}
        </div>
    )
}