import {queryOptions} from '@tanstack/react-query'
import {api} from './client'
import type {ContributionCalendarResponse, ContributionHistoryResponse} from "../types/github.ts";

export const gitHubContributionCalendar = {
    getContributionCalendar: () =>
        api<ContributionCalendarResponse>('git-hub-api/contribution-calendar')
};

export const gitHubContributionHistory = {
    getContributionHistory: () =>
        api<ContributionHistoryResponse>('git-hub-api/contribution-history')
}

export const contributionCalendarQuery = () =>
    queryOptions({
        queryKey: ['github', 'contribution-calendar'],
        queryFn: gitHubContributionCalendar.getContributionCalendar
    });

export const contributionHistoryQuery = () =>
    queryOptions({
        queryKey: ['github', 'contribution-history'],
        queryFn: gitHubContributionHistory.getContributionHistory
    })