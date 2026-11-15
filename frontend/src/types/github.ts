export type ContributionDay = {
    date: string
    contributionCount: number
    contributionLevel: string
};

export type ContributionCalendar = {
    totalContributions: number
    weeks: {contributionDays: ContributionDay[]}[]
};