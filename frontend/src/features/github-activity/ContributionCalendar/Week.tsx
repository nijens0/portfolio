import {Day} from "./Day.tsx";
import type {ContributionDay} from "../../../types/github.tsx";
import {twMerge} from "tailwind-merge";

interface WeekProps {
    week?: ContributionDay[]
    className?: string
}

export function Week(
    {week, className}: WeekProps
) {

    if (!week) {

        const delays = [
            '[animation-delay:0ms]',
            '[animation-delay:300ms]',
            '[animation-delay:600ms]',
            '[animation-delay:900ms]',
            '[animation-delay:1200ms]'
        ];

        return (
            <div className={twMerge('flex flex-col gap-0.75', className)}>
                {Array.from({length: 7}, (_, i) => (
                    <Day key={i} className={twMerge('animate-pulse',
                        delays[Math.floor(Math.random() * delays.length)])}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className={twMerge('flex flex-col gap-0.75', className)}>
            {Array.from({length: week.length}, (_, i) => (
                <Day key={i} day={week[i]}/>
            ))}
        </div>
    )
}