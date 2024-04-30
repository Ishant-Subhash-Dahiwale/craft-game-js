import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"

export const Player = ()=>{


    const JUMP_CONS = 3;

    const actions = useKeyboard();
    console.log('actions',Object.entries(actions).filter(([k,v])=>v));
    const {camera} = useThree()
    const [ref,api] = useSphere(()=>({
        mass:1,
        type:'Dynamic',
        position:[0,1,10]
    }))

    const vel = useRef([0,0,0]);
    useEffect(()=>{
    api.velocity.subscribe((p)=>{
    vel.current = p;
    }) //connecting sphere to ref camera
    },[api.velocity]);



const position = useRef([0,0,0]);
useEffect(()=>{
api.position.subscribe((p)=>{
position.current = p;
}) //connecting sphere to ref camera
},[api.position])


useFrame(()=>{
    camera.position.copy(new Vector3(position.current[0],position.current[1],position.current[2]))
    
    


    if(actions.jump && Math.abs(vel.current[1]<0.05) ){
    api.velocity.set(vel.current[0],JUMP_CONS,vel.current[2])
    }
})


    return (
        <mesh ref={ref}></mesh>
    )
}