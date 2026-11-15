import {queryOptions} from '@tanstack/react-query'
import {api} from './client'
import type {ContributionCalendar} from "../types/github.ts";

export const gitHubApi = {
    getContributionCalendar: () =>
        api<ContributionCalendar>('git-hub-api/contribution-calendar')
};

export const contributionCalendarQuery = () =>
    queryOptions({
        queryKey: ['github', 'contribution-calendar'],
        queryFn: gitHubApi.getContributionCalendar
    });