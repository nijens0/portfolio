export type ContributionDay = {
    date: string
    contributionCount: number
    contributionLevel: ContributionLevel
}

export type ContributionDays = {
    contributionDays: ContributionDay[]
}

export type ContributionCalendar = {
    totalContributions: number
    weeks: ContributionDays[]
};

export type ContributionLevel = 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';