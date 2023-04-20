import {AiOutlinePoweroff} from 'react-icons/ai';

import './Controls.css'

const Controls = (
    {
        power,
        changePower,
        volume,
        changeVolumePlus,
        changeVolumeMinus,
        displayValue
    }) =>{


    return(
        <div className='controls-container' >
            <div className='volume'>
                {power 
                && <span>Vol : {volume}%</span>
                }
               
            </div>
            <div className='buttons'>
            <div className='buttons_power'>
                <button onClick={changePower}>
                    <AiOutlinePoweroff 
                        className={power 
                            ? 'power_on'
                            : 'power_off'
                        }
                    />
                </button>
                <span >Power</span>
            </div>
            <div className='buttons_vol_minus'>
                <button onClick={changeVolumeMinus}></button>
                <span>Vol-</span>
            </div>
            <div className='buttons_vol_plus'>
                <button onMouseDown={changeVolumePlus}></button>
                <span>Vol+</span>
            </div>
            </div>
            <div className={power 
                            ? 'drum-display drum-display_active'
                            : 'drum-display'}
                 id='display'
            >
                {power && displayValue}
            </div>
            <div className='annotation'>
                <span>Freecodecamp project:</span><br />
                <span>Build a Drum Machine</span><br />
                <span>made by <a target='_blank' href="https://codepen.io/light0690">Minoru</a></span>
            </div>
        </div>
  )
}

export default Controls;
