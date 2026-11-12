import {ConsoleHeader} from "./ConsoleHeader.tsx";
import {CommandLine} from "./CommandLine.tsx";
import {CommandsHints} from "./CommandsHints.tsx";

export function Console() {

    return (
        <div className={'flex flex-col gap-4.5 w-160 h-93.5 max-xl:w-full'}>
            <div className={'h-full bg-background-console ' +
                'rounded-[14px] border-border border border-border-console font-mono ' +
                'text-[13px] leading-[20px] tracking-normal text-text-secondary'}>
                <ConsoleHeader/>
                <div className={'flex flex-col w-full overflow-y-auto px-5 py-6'}>
                    <CommandLine/>
                </div>
            </div>
            <CommandsHints/>
        </div>
    )
}