import { useState } from 'react';

import Controls from './Components/Controls/Controls';
import Pad from './Components/Pad/Pad';

import audios1 from './consts/audios';

import {FaFreeCodeCamp} from 'react-icons/fa';

import './App.css';

function App() {
  let [drumMachineState,setDrumMachineState]= useState({
    power : false,
    pads : audios1,
    volume : 50,
    displayValue : ''
  });

  let changePower = () =>{
    setDrumMachineState({
        ...drumMachineState,
        power: !drumMachineState.power,
        displayValue : 'Welcome'
      })
  };

  let changeVolumePlus = () =>{
    if(drumMachineState.power && drumMachineState.volume < 100 ){
      setDrumMachineState({
            ...drumMachineState,
            volume : drumMachineState.volume + 1
      })
    }
  };

  let changeVolumeMinus = () =>{
    if(drumMachineState.power && drumMachineState.volume > 0){
       setDrumMachineState({
        ...drumMachineState,
        volume : drumMachineState.volume - 1
       })
    }
  };

  let changeDisplayValue = (value) => {
    setDrumMachineState({
      ...drumMachineState,
      displayValue : value
    })
  };



  let padsResult = drumMachineState.pads.map((pad)=>{
    return <Pad  volume={drumMachineState.volume}
                 power={drumMachineState.power}
                 key={pad.key}
                 id={pad.key}
                 name={pad.name}
                 src={pad.src}
                 changeDisplayValue={changeDisplayValue}
           />
  });

  return (
    <div className='wrapper_app'>
      <div className='wrapper_app__container' id='drum-machine'>
        <header className='app__header'>
          <div>
            <h2>Drum machine</h2>
          </div>
          <div className='icons'>
            <h2>FFC</h2>
            <FaFreeCodeCamp />
          </div>
        </header>
        <div className='container__content'>
          <Controls power={drumMachineState.power}
                    changePower={changePower}
                    volume={drumMachineState.volume}
                    changeVolumePlus={changeVolumePlus}
                    changeVolumeMinus={changeVolumeMinus}
                    displayValue={drumMachineState.displayValue}
          />
          <div className='pad-bank'>
            {padsResult}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
