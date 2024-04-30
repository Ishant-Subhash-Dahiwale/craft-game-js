import { usePlane } from "@react-three/cannon";
import { groundtexture } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";
export const  Ground = ()=>{
const [ref]  = usePlane(()=>({
    rotation :[-Math.PI/2,0,0],position:[0,0,0]
}));
groundtexture.magFilter = NearestFilter;
groundtexture.wrapS = RepeatWrapping;
groundtexture.wrapT = RepeatWrapping;
groundtexture.repeat.set(100,100);

return (
    <mesh ref={ref}>
        <planeGeometry attach='geometry' args={[100,100]}/>
        <meshStandardMaterial attach='material' map={groundtexture} ></meshStandardMaterial>
    </mesh>
)
}