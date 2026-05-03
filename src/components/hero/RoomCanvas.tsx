import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import RoomScene from './RoomScene';



function RoomCanvas() {

    return <Canvas camera={{ position: [4, 4, 6], fov: 45 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['#020617']} />
        <Suspense fallback={null} >
            <RoomScene />
        </Suspense>
        <OrbitControls enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.1} />
    </Canvas>

}


export default RoomCanvas;