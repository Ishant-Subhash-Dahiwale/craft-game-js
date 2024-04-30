import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './elements/ground';
import { Player } from './elements/player';

function App() {
  return (
    <><div>
      <Canvas  style={{height:'525px'}} >
<Sky sunPosition={[100,100,20]} ></Sky>
<ambientLight  intensity={0.5}/>
<Physics>
  <Player></Player>
<Ground/>
</Physics>
   </Canvas>
   </div>
    </>
  );
}

export default App;
