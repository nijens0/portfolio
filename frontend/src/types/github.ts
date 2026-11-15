export type ContributionDay = {
    date: string
    contributionCount: number
    contributionLevel: string
};

export type ContributionCalendar = {
    totalContributions: number
    weeks: {contributionDays: ContributionDay[]}[]
};

export type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';