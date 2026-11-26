import {useQuery} from "@tanstack/react-query";
import {contributionHistoryQuery} from "../../../api/github.ts";
import * as React from "react";
import {contributionHistorySvgs} from "../../../types/github.tsx";
import {Button} from "../../../components/ui/Button.tsx";
import {twMerge} from "tailwind-merge";
import {ContributionHistoryMonth} from "./ContributionHistoryMonth.tsx";

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
}

function Wrapper({children, className}: WrapperProps) {

    return (
        <div className={twMerge('flex flex-col gap-10 my-auto min-w-h-full overflow-y-scroll',
            'border-l border-border border-border-hairline pl-8 pr-2 min-w-75 h-full', className)}>
                {children}
        </div>
    )
}

export function ContributionHistory() {

    const to = new Date().toISOString().slice(0, 10);
    const from = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0, 10);


    const {data, isPending, isError, error} = useQuery({
        ...contributionHistoryQuery(from, to),
        select: (res) => res.user.contributionsCollection,
    });

    console.log(data)

    if (isPending) {

        const date = new Date();
        const month = date.toLocaleDateString('ru-RU', {month: 'long'});
        const prev = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        const previousMonth = prev.toLocaleDateString('ru-RU', {month: 'long'});
        const label = (month: string) => {
            return month[0].toUpperCase() + month.slice(1) + ' ' + date.getFullYear()
        };

        return (
            <Wrapper>
                <h2 className={'text-sm tracking-normal text-text-secondary'}>
                    {label(month)}
                </h2>
                <div className={'flex flex-col gap-5 border-b border-border border-border-hairline pb-4'}>
                    {Array.from({length: 3}, (_, i) => (
                        <div
                            key={i}
                            className={'flex gap-3'}
                        >
                            {contributionHistorySvgs[i]}
                            <div className={'flex flex-col gap-5 w-full'}>
                                <h3 className={'animate-pulse h-3.5 bg-background-raised rounded-lg'}></h3>
                                <div
                                    className={'animate-pulse [animation-delay:200ms] h-3 bg-background-raised w-3/4 rounded-lg'}></div>
                                <div
                                    className={'animate-pulse [animation-delay:200ms] h-3 bg-background-raised w-3/4 rounded-lg'}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex flex-col gap-4'}>
                    <h2 className={'text-sm tracking-normal text-text-secondary'}>
                        {label(previousMonth)}
                    </h2>
                    <div
                        className={'animate-pulse [animation-delay:200ms] h-3 bg-background-raised rounded-lg'}></div>
                </div>
            </Wrapper>
        )
    }

    if (isError) {

        return (
            <Wrapper className={'items-center justify-center'}>
                <span
                    className={'font-mono text-[13px] leading-[20px] text-text-primary'}
                >
                    <strong className={'text-root mr-3'}>[  fail  ]</strong>GitHub не ответил
                </span>
                    <p className={'text-sm text-text-secondary text-center max-w-110'}>
                        Не получилось загрузить историю вкладов. Обычно это проходит
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
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <ContributionHistoryMonth data={data}/>
        </Wrapper>
    )
}

{/*{!query.isError && (*/
}
{/*    <Button*/
}
{/*        className={'border border-border border-border-secondary px-3 py-1.25 ' +*/
}
{/*            'text-sm tracking-normal text-text-secondary'}*/
}
{/*    >*/
}
{/*        Показать ещё*/
}
{/*    </Button>*/
}
{/*)}*/
}