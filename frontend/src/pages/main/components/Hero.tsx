import {Intro} from "./ui/Intro.tsx";
import {Console} from "../../../features/console/components/Console.tsx";

export function Hero() {

    return (
        <section className={'flex items-center gap-12 m-auto px-8 py-24 max-sm:px-4 max-sm:py-10 max-lg:flex-col'}>
            <Intro />
            <Console />
        </section>
    )
}