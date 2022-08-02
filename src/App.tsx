import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Сounter/Counter";
import CounterSetting from "./components/CounterSetting/CounterSetting";


function App() {
    const [startCounter, setStartCounter] = useState<number>(2)
    const [counter, setCounter] = useState<number>(startCounter)
    const [maxCounter, setMaxCounter] = useState(6)
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false)
    const [displayEnter, setDisplayEnter] = useState('')

    const updateSettingCounter = (startCounter: number, maxCounter: number) => {
        setStartCounter(startCounter)
        setMaxCounter(maxCounter)
        setCounter(startCounter)
        setDisplayEnter('')
    }



    return (
        <div className="App">
            <CounterSetting
                startCount={startCounter}
                maxCounter={maxCounter}
                setMaxCounter={setMaxCounter}
                updateSettingCounter={updateSettingCounter}
                setErrorDisplay={setErrorDisplay}
                setDisplayEnter={setDisplayEnter}
            />

            <Counter
                counter={counter}
                startCount={startCounter}
                maxCounter={maxCounter}
                setCounter={setCounter}
                errorDisplay={errorDisplay}
                displayEnter={displayEnter}
            />

        </div>
    );
}

export default App;
