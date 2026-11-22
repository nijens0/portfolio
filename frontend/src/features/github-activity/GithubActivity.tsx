import {GithubActivityHeader} from "./GithubActivityHeader.tsx";
import {GithubCard} from "./GithubCard.tsx";
import type {NavId} from "../../constatns/navigation.ts"

const id: NavId = 'activity';

export function GithubActivity() {

    return (
        <section className={'flex flex-col gap-4 w-304 max-xl:w-full'} id={id}>
            <GithubActivityHeader />
            <GithubCard />
        </section>
    )
}