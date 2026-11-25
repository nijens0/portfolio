import CommitIcon from "../assets/icons/commit.svg?react";
import PullRequestIcon from "../assets/icons/pull-request.svg?react";
import RepoIcon from "../assets/icons/repo.svg?react";

export type ContributionDay = {
    date: string
    contributionCount: number
    contributionLevel: ContributionLevel
}

export type Contributions = {
    totalCount: number
}

export type PrimaryLanguage = {
    name: string
}

export type Repository = {
    nameWithOwner: string
    primaryLanguage: PrimaryLanguage
}

export type Nodes = {
    repository: Repository
}

export type CommitContributionByRepository = {
    contributions: Contributions
    repository: Repository
}

export type PullRequestContributionsByRepository = {
    contribution: Contributions
    repository: Repository
}

export type RepositoryContributions = {
    totalCount: number
    nodes: Nodes
}

export type ContributionDays = {
    contributionDays: ContributionDay[]
}

export type ContributionCalendar = {
    totalContributions: number
    weeks: ContributionDays[]
}

export type ContributionsCalendarCollection = {
    contributionCalendar: ContributionCalendar
}

export type ContributionsHistoryCollection = {
    commitContributionsByRepository: CommitContributionByRepository
    totalCommitContributions: number
    totalRepositoriesWithContributedCommits: number
    pullRequestContributionsByRepository: PullRequestContributionsByRepository
    repositoryContributions: RepositoryContributions
}

export type UserCalendar = {
    contributionsCollection: ContributionsCalendarCollection
}

export type UserHistory = {
    contributionsCollection: ContributionsHistoryCollection
}

export type ContributionCalendarResponse = {
    user: UserCalendar
}

export type ContributionHistoryResponse = {
    user: UserHistory
}

export type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';

export const contributionHistorySvgs = [<CommitIcon/>, <PullRequestIcon/>, <RepoIcon/>];