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
            className={twMerge('cursor-pointer duration-200 hover:opacity-70 ' +
                'active:opacity-50 focus-visible:outline focus-visible:outline-1 ' +
                'focus-visible:outline-white focus-visible:outline-offset-4', className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}