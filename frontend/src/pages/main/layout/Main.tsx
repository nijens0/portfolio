import {Hero} from "../components/Hero.tsx";
import {GithubActivity} from "../../../features/github-activity/GithubActivity.tsx";

export function Main() {

    return (
        <main className={'flex flex-col px-8 items-center'}>
            <Hero />
            <GithubActivity />
        </main>
    )
}