import React, {ChangeEvent, useState} from 'react';
import MyButton from "../../lib/MyButton/MyButton";
import s from './CounterSetting.module.css'
import MyInput from "../../lib/MyInput/MyInput";

type CounterSettingPropsType = {
    startCount: number
    maxCounter: number
    setMaxCounter: (maxCounter: number) => void
    updateSettingCounter: (startCounter: number, maxCounter: number) => void
    setErrorDisplay: (errorDisplay: boolean) => void
    setDisplayEnter: (displayEnter: string) => void
}


const CounterSetting = (props: CounterSettingPropsType) => {
    const [localValue, setLocalValue] = useState({
        maxCounter: props.maxCounter,
        startCount: props.startCount
    })
    const [disabledButtonSetting, setDisabledButtonSetting] = useState(false)
    let errorInputMaxValue = false
    let errorInputStartValue = false


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue({...localValue, maxCounter: +(e.currentTarget.value)})
        props.setErrorDisplay(false)
        props.setDisplayEnter("enter values and press 'set'")
        setDisabledButtonSetting(false)

    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue({...localValue, startCount: +(e.currentTarget.value)})
        props.setErrorDisplay(false)
        props.setDisplayEnter("enter values and press 'set'")
        setDisabledButtonSetting(false)
    }
    const onClickHandler = () => {
        props.updateSettingCounter(localValue.startCount, localValue.maxCounter)
        setDisabledButtonSetting(true)

    }


    if (localValue.maxCounter <= localValue.startCount) {
        errorInputMaxValue = true
        errorInputStartValue = true
        props.setErrorDisplay(true)
    }

    if (localValue.startCount < 0) {
        errorInputStartValue = true
        props.setErrorDisplay(true)
    }
    if (localValue.maxCounter < 0) {
        errorInputMaxValue = true
        props.setErrorDisplay(true)
    }
    // if (localValue.maxCounter === props.maxCounter && localValue.startCount === props.startCount) {
    //     disabledButtonSetting = true
    //
    // }

    return (
        <div className={s.counter_setting__block}>
            <div className={s.counter_setting__display}>
                <div>
                    <span className={s.title_value}>Max value</span>
                    <MyInput
                        onChange={maxValueHandler}
                        type={'number'}
                        value={localValue.maxCounter}
                        errorInput={errorInputMaxValue}
                    />

                </div>
                <div>
                    <span className={s.title_value}>Start value</span>
                    <MyInput
                        onChange={startValueHandler}
                        type={'number'}
                        value={localValue.startCount}
                        errorInput={errorInputStartValue}
                    />

                </div>
            </div>

            <div className={s.counter_setting__button}>
                <MyButton disabled={disabledButtonSetting} onClick={onClickHandler}>Set</MyButton>
            </div>
        </div>
    );
};

export default CounterSetting;