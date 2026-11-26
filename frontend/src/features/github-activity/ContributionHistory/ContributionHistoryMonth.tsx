import type {ContributionsHistoryCollection} from "../../../types/github.tsx";
import CommitIcon from "../../../assets/icons/commit.svg?react";
import PullRequestIcon from "../../../assets/icons/pull-request.svg?react";
import RepoIcon from "../../../assets/icons/repo.svg?react";
import {plural} from "../../../types/utility/plural.ts";
import {twMerge} from "tailwind-merge";
import * as React from "react";

interface ContributionHistoryMonthProps {
    data: ContributionsHistoryCollection;
}

const commitsForms = {
    one: 'коммит',
    few: 'коммитов',
    many: 'коммитов',
    other: 'коммита',
    zero: 'коммитов', two: 'коммита'
};

const reposForms = {
    one: 'репозитории',
    few: 'репозиториях',
    many: 'репозиториях',
    other: 'репозиториях',
    zero: 'репозиториев', two: 'репозиториях'
};

const headerClass = 'text-sm tracking-normal text-text-primary';

interface ContributionLineProps {
    repository: string;
    count: number;
    totalCount: number;
}

function ContributionLine({repository, count, totalCount}: ContributionLineProps) {

    const fill = totalCount > 0
        ? Math.min(100, Math.max(0, Math.round((count / totalCount) * 100)))
        : 0;

    return (
        <div className={'flex gap-3 items-center justify-between text-xs tracking-normal text-text-secondary font-mono'}>
            <span className={'break-words'}>{repository}</span>
            <span
                style={{ '--fill': `${fill}%` } as React.CSSProperties}
                className={twMerge('relative w-16 h-1.5 bg-background-raised rounded-[3px]',
                    'before:absolute before:bg-contribution-3 before:left-0 before:h-full before:w-(--fill)',
                    'overflow-hidden shrink-0'
                )}
            ></span>
            <span>{count}</span>
        </div>
    )
}

export function ContributionHistoryMonth({data}: ContributionHistoryMonthProps) {

    const totalCommits = data.totalCommitContributions;
    const totalRepos = data.totalRepositoriesWithContributedCommits;

    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'flex flex-col gap-5 border-b border-border border-border-hairline pb-4'}>
                    <div className={'flex gap-3'}>
                        <CommitIcon/>
                        <div className={'flex flex-col gap-5 w-full'}>
                            <h3
                                className={headerClass}
                            >
                                {`${totalCommits} ${plural(totalCommits, commitsForms)} в ${totalRepos} ${plural(totalRepos, reposForms)}`}
                            </h3>
                            {Array.from({length: data.commitContributionsByRepository.length}).map((_, i) => {
                                const cur = data.commitContributionsByRepository[i];

                                return (<ContributionLine
                                    key={i}
                                    repository={cur.repository.nameWithOwner}
                                    count={cur.contributions.totalCount}
                                    totalCount={totalCommits}
                                />
                                )
                            })}
                        </div>
                    </div>
                    <div className={'flex gap-3'}>
                        <PullRequestIcon/>
                        <div className={'flex flex-col gap-5 w-full'}>
                            <h3 className={headerClass}></h3>
                            <div className={''}></div>
                            <div className={''}></div>
                        </div>
                    </div>
                    <div className={'flex gap-3'}>
                        <RepoIcon/>
                        <div className={'flex flex-col gap-5 w-full'}>
                            <h3 className={headerClass}></h3>
                            <div className={''}></div>
                            <div className={''}></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}