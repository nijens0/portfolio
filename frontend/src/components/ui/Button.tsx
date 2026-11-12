import {twMerge} from "tailwind-merge";

interface ButtonProps {
    className?: string
    onClick?: () => void
    label?: string
}

export function Button({className, onClick, label}: ButtonProps) {

    return(
        <button
            type='button'
            className={twMerge('', className)}
            onClick={onClick}
        >
            {label}
        </button>
    )
}