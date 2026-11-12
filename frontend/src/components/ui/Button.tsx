import {twMerge} from "tailwind-merge";
import * as React from "react";

interface ButtonProps {
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

export function Button({className, onClick, children}: ButtonProps) {

    return(
        <button
            type='button'
            className={twMerge('cursor-pointer', className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}