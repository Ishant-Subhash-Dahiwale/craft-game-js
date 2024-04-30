import { useCallback, useEffect,useState } from "react"

function actionbykey(key){
    const keyactionmap = {
        KeyW:'moveForward',
        KeyS:'moveBackward',
        KeyA:'moveLeft',
        KeyD:'moveRight',
        Space:'jump',
        Digit1:'dirt',
        Digit2:'grass',
        Digit3:'glass',
        Digit4:'wood',
        Digit5:'log',
    }
    return keyactionmap[key];
}



export const useKeyboard = ()=>{
    const [movement,setMovement] = useState({
        moveforward:false,
        movebackward:false,
        moveleft:false,
        moveright:false,
        jump:false,
        texture1:false,
        texture2:false,
        texture3:false,
        texture4:false,
        texture5:false,
    }) ;


    const handleKeyup =useCallback((e)=>{
        const action = actionbykey(e.code);
            if(action){
                setMovement((prev)=>{
                        return({
                            ...prev,
                            [action]:true
                        })
                })
            }


    },[]);
    const handleKeydown =useCallback((e)=>{
        const action = actionbykey(e.code);
            if(action){
                setMovement((prev)=>{
                        return({
                            ...prev,
                            [action]:false
                        })
                })
            }

    },[]);

    useEffect(()=>{
        document.addEventListener('keydown',handleKeydown);
        document.addEventListener('keyup',handleKeyup);
        return ()=>{
            document.removeEventListener('keydown',handleKeydown);
            document.removeEventListener('keyup',handleKeyup);
         
        };
    },[handleKeydown,handleKeyup]);
    return movement;
}