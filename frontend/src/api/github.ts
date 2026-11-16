import {queryOptions} from '@tanstack/react-query'
import {api} from './client'
import type {ContributionCalendarResponse} from "../types/github.ts";

export const gitHubApi = {
    getContributionCalendar: () =>
        api<ContributionCalendarResponse>('git-hub-api/contribution-calendar')
};

export const contributionCalendarQuery = () =>
    queryOptions({
        queryKey: ['github', 'contribution-calendar'],
        queryFn: gitHubApi.getContributionCalendar
    });