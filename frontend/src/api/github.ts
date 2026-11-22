import {queryOptions} from '@tanstack/react-query'
import {api} from './client'
import type {ContributionCalendarResponse, ContributionHistoryResponse} from "../types/github.ts";

export const gitHubContributionCalendar = {
    getContributionCalendar: () =>
        api<ContributionCalendarResponse>('git-hub-api/contribution-calendar')
};

export const gitHubContributionHistory = {
    getContributionHistory: (from: string, to: string) =>
        api<ContributionHistoryResponse>(`git-hub-api/contribution-history?from=${from}&to=${to}`)
}

export const contributionCalendarQuery = () =>
    queryOptions({
        queryKey: ['github', 'contribution-calendar'],
        queryFn: gitHubContributionCalendar.getContributionCalendar
    });

export const contributionHistoryQuery = (from: string, to: string) =>
    queryOptions({
        queryKey: ['github', 'contribution-history', from, to],
        queryFn: () => gitHubContributionHistory.getContributionHistory(from, to)
    })