import {GithubActivityHeader} from "./GithubActivityHeader.tsx";
import {GithubCard} from "./GithubCard.tsx";

export function GithubActivity() {

    return (
        <section className={'flex flex-col gap-4 w-304 max-xl:w-full'}>
            <GithubActivityHeader />
            <GithubCard />
        </section>
    )
}