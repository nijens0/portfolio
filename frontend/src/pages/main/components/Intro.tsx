import {twMerge} from "tailwind-merge";
import {Button} from "../../../components/ui/Button.tsx";

interface IntroProps {
    className?: string;
}

export function Intro({className}: IntroProps) {

    return (
        <section className={twMerge('w-132', className)}>
            <hgroup className='pb-6'>
                <h1 className='text-[72px] text-text-primary leading-[74px] tracking-[-0.03em] pb-6'>
                    Программист.
                </h1>
                <p className='text-lg text-text-secondary tracking-normal '>
                    Студент третьего курса ТПУ, программная инженерия. Веб,
                    бэкенд и десктоп.
                </p>
            </hgroup>
            <div className={'flex gap-3'}>
                <Button
                    className={'bg-background-inverse text-[15px] leading-[22px] tracking-normal ' +
                               'text-text-on-inverse px-5 py-2.75 rounded-lg'}
                    onClick={() => {}}
                >
                    Смотреть проекты
                </Button>
                <Button
                    className={'bg-background-raised text-[15px] leading-[22px] tracking-normal' +
                               ' text-text-primary px-5 py-2.5 rounded-lg border-border border border-border-hairline'}
                    onClick={() => {}}
                >
                    Экспорт в JSON
                </Button>
            </div>
        </section>
    )
}