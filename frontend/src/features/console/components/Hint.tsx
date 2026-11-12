import {Button} from "../../../components/ui/Button.tsx";
import * as React from "react";
import {twMerge} from "tailwind-merge";

interface HintProps {
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export function Hint({className, onClick, children}: HintProps) {

    return (
        <Button
            onClick={onClick}
            className={twMerge('font-mono text-[13px] leading-[20px] tracking-normal ' +
                'text-text-secondary px-3 py-1.25 border border-border border-border-hairline ' +
                'rounded-md bg-background-raised', className)}
        >
            {children}
        </Button>
    )
}