import type {ContributionCalendar} from "../../../types/github.ts";
import type {UseQueryResult} from "@tanstack/react-query";
import {plural} from "../../../types/utility/plural.ts";


export function ContributionCalendarHeader(
    {data, isPending, isError}: UseQueryResult<Pick<ContributionCalendar, 'totalContributions'>, Error>
) {

    const contributionForms = {
        one: 'вклад',
        few: 'вклада',
        many: 'вкладов',
        other: 'вклада',
        zero: 'вклад', two: 'вклада'
    };

    if (isPending) {

        return (
            <h2 className={'tracking-normal'}>
            <span
                className={'text-md text-text-primary animate-pulse mr-1'}
            >
                Ещё не знаю
                </span>
                <span
                    className={'text-[15px] leading-[22px] text-text-secondary'}
                >
                     сколько за последний месяц
            </span>
            </h2>
        )
    }

    if (isError) {

        return (
            <h2 className={'tracking-normal'}>
            <span
                className={'text-md text-root animate-pulse mr-1'}
            >
                Уже не узнаю...
                </span>
                <span
                    className={'text-[15px] leading-[22px] text-text-secondary'}
                >
                     сколько за последний месяц
            </span>
            </h2>
        )
    }

    return (
        <h2 className={'tracking-normal'}>
            <span
                className={'text-[32px] leading-[32px] text-text-primary'}
            >
                    {data.totalContributions}
                </span>
            <span
                className={'text-[15px] leading-[22px] text-text-secondary'}
            >
                    <span>{plural(data.totalContributions, contributionForms)}</span>  за последний месяц
            </span>
        </h2>
    )
}