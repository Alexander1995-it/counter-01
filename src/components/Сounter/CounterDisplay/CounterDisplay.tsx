import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counter: number
    startCount: number
    maxCounter: number
    errorDisplay: boolean
    displayEnter: string

}

const CounterDisplay: React.FC<CounterDisplayPropsType> = (
    {counter, maxCounter, errorDisplay, displayEnter, startCount}) => {

    const styleCounterText = `${s.counter} ${counter === maxCounter ? s.counterDisabled : s.counterDefault}`

    return (
        <div className={s.counterDisplay__block}>
            <div className={s.counterDisplay__block_wrapper}>
                {errorDisplay
                    ? <span className={s.errorSpan}>Incorrect value!</span>
                    : displayEnter && <span>{displayEnter}</span> || <span className={styleCounterText}>{counter}</span>
                }
            </div>
        </div>
    );
};

export default CounterDisplay;