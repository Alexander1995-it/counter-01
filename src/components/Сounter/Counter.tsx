import React from 'react';
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import CounterButtons from "./CounterButtons/CounterButtons";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    startCount: number
    maxCounter: number
    setCounter: (counter: number) => void
    errorDisplay: boolean
    displayEnter: string
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.app_counter__block}>
            <CounterDisplay
                counter={props.counter}
                startCount={props.startCount}
                maxCounter={props.maxCounter}
                errorDisplay={props.errorDisplay}
                displayEnter={props.displayEnter}
            />
            <CounterButtons
                counter={props.counter}
                setCounter={props.setCounter}
                startCount={props.startCount}
                maxCounter={props.maxCounter}
            />
        </div>
    );
};

export default Counter;