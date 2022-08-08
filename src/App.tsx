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
        sessionStorage.setItem('startCounter', JSON.stringify(startCounter))
        sessionStorage.setItem('maxCounter', JSON.stringify(maxCounter))
    }

    const getLocalStorage = () => {
        let startCounter = sessionStorage.getItem('startCounter')
        let maxCounter = sessionStorage.getItem('maxCounter')
        if (startCounter) {
            let newStartCounter = JSON.parse(startCounter)
            setStartCounter(newStartCounter)
            setCounter(newStartCounter)
        }
        if (maxCounter) {
            let newMaxCounter = JSON.parse(maxCounter)
            setMaxCounter (newMaxCounter)
        }
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
            <button onClick={getLocalStorage}>GET LOCAL STORAGE</button>
            <div>startCounter: {startCounter}</div>
            <div>maxCounter: {maxCounter}</div>
        </div>
    );
}

export default App;
