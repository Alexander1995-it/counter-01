import React from 'react';
import MyButton from "../../../lib/MyButton/MyButton";
import s from './CounterButton.module.css'

type CounterButtonsPropsType = {
    setCounter: (counter: number) => void
    counter: number
    maxCounter: number
    startCount: number
}

const CounterButtons: React.FC<CounterButtonsPropsType> = (props) => {
    const onClickIncHandler = () => {
        props.counter < props.maxCounter && props.setCounter(props.counter + 1)
    }
    const onClickResetHandler = () => {
        props.setCounter(props.startCount)
    }

    return (
        <div className={s.counterButtons__block}>
            <div className={s.counterButtons__wrapper}>
                <div className={s.buttonInc}>
                    <MyButton
                        children='inc'
                        onClick={onClickIncHandler}
                        disabled={props.counter === props.maxCounter}
                    />
                </div>
                <MyButton
                    children='reset'
                    onClick={onClickResetHandler}
                    disabled={props.counter === props.startCount}
                />
            </div>
        </div>
    );
};

export default CounterButtons;