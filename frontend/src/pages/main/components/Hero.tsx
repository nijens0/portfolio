import {Intro} from "./ui/Intro.tsx";
import {Console} from "../../../features/console/components/Console.tsx";

export function Hero() {

    return (
        <section
            className={'flex items-center gap-12 py-24 max-sm:px-4 ' +
                'max-sm:py-10 max-xl:w-full max-lg:flex-col max-lg:w-auto'}
        >
            <Intro />
            <Console />
        </section>
    )
}