import type {UseQueryResult} from "@tanstack/react-query";
import type {ContributionCalendar} from "../../../types/github.tsx";
import {Week} from "./Week.tsx";
import {Button} from "../../../components/ui/Button.tsx";

type ContributionCalendarProps = UseQueryResult<Pick<ContributionCalendar, 'weeks'>, Error>

export function ContributionCalendar(
    {data, isPending, isError, error}: ContributionCalendarProps
) {

    if (isPending) {

        return (
            <div className={'flex gap-0.75'}>
                {Array.from({length: 52}, (_, i) => (
                    <Week key={i} />
                ))}
            </div>
        )
    }

    if (isError) {

        return (
            <div className={'flex flex-col items-center tracking-normal gap-3 m-auto'}>
                <span
                    className={'font-mono text-[13px] leading-[20px] text-text-primary'}
                >
                    <strong className={'text-root mr-3'}>[  fail  ]</strong>GitHub не ответил
                </span>
                <p className={'text-sm text-text-secondary text-center max-w-110'}>
                    Не получилось загрузить календарь вкладов. Обычно это проходит
                    само за пару минут, а сам профиль всегда открыт на GitHub.
                </p>
                <div className={'flex gap-2 items-center'} role='group' aria-label='Решение проблемы'>
                    <Button
                        className={'text-[15px] leading-[20px] text-text-primary px-5 py-1.5 ' +
                            'border border-border border-border-hairline bg-background-raised ' +
                            'rounded-lg font-light'}
                    >
                        Повторить
                    </Button>
                    <a
                        className={'relative text-[15px] leading-[20px] text-text-secondary ' +
                            'hover:text-text-primary hover:opacity-100 duration-200 cursor-pointer ' +
                            'after:absolute after:content-[url("/assets/icons/arrow-up-right.svg")] ' +
                            'after:left-full after:top-0.25'}
                        href={'https://github.com/nijens0'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Открыть профиль
                    </a>
                </div>
                <span className={'text-root'}>{error.message}</span>
            </div>
        )
    }

    return (
        <div className={'flex gap-0.75'}>
            {Array.from({length: data.weeks.length}, (_, i) => (
                <Week key={i} week={data.weeks[i].contributionDays}/>
            ))}
        </div>
    )
}