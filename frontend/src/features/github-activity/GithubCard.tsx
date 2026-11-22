import {ContributionCalendar} from "./ContributionCalendar/ContributionCalendar.tsx";
import {ContributionHistory} from "./ContributionHistory/ContributionHistory.tsx";
import {ContributionCalendarHeader} from "./ContributionCalendar/ContributionCalendarHeader.tsx";
import {useQuery} from "@tanstack/react-query";
import {contributionCalendarQuery} from "../../api/github.ts";
import {ContributionCalendarFooter} from "./ContributionCalendar/ContributionCalendarFooter.tsx";

export function GithubCard() {

    const query = useQuery({
        ...contributionCalendarQuery(),
        select: (res) => res.user.contributionsCollection.contributionCalendar,
    });

    return (
        <section className={'flex w-304 h-106.75 p-6 bg-background-secondary border ' +
            'border-border border-border-hairline rounded-2xl gap-10'}>
            <div className={'flex flex-col gap-5'}>
                <ContributionCalendarHeader {...query} />
                <ContributionCalendar {...query}/>
                <ContributionCalendarFooter isError={query.isError} />
            </div>
            <ContributionHistory />
        </section>
    )
}