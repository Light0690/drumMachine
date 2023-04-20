import { useEffect, useRef } from 'react';

import './Pad.css';

const Pad = (
    {   
        power,
        volume,
        id,
        name,
        src,
        changeDisplayValue
    }) =>{

    let ref = useRef();

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyPress);
        return ()=>{
            document.removeEventListener('keydown',handleKeyPress)
        }
    },[power]);

    let playAudio = (name) => {
        if(power){
            let audio = ref.current;

            let parent = audio.parentNode;
            parent.classList.add('pad_active');
            setInterval(()=>{
                parent.classList.remove('pad_active')
            },150)

            changeDisplayValue(name)


            audio.volume = volume / 100;
            audio.currentTime = 0;
            audio.play();
        }
      };

    let handleKeyPress = (e) =>{
        if(e.key.toLowerCase() === id.toLowerCase()){
            playAudio(name);
        }
    }

    return (
        <button className="drum-pad"
                onClick={()=>playAudio(name)}
        >
            <audio ref={ref} 
                   src={src}
                   className='clip'
                   id={id}
            />
            {id}
        </button>
    )
}

export default Pad;
