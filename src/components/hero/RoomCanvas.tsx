import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { Suspense } from 'react';
import RoomScene from './RoomScene';

type RoomCanvasProps = {
    onMonitorClick?: () => void;
    onBookshelfClick?: () => void;
    onWindowClick?: () => void;
}

function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-800 border-t-sky-500"></div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    {progress.toFixed(0)}%
                </p>
            </div>
        </Html>
    );
}

function RoomCanvas({ onMonitorClick, onBookshelfClick,
    onWindowClick, }: RoomCanvasProps) {

    return <Canvas camera={{ position: [4, 4, 6], fov: 45 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['#020617']} />
        <Suspense fallback={<CanvasLoader />} >
            <RoomScene onMonitorClick={onMonitorClick} onBookshelfClick={onBookshelfClick}
                onWindowClick={onWindowClick} />
        </Suspense>
        <OrbitControls enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.1} />
    </Canvas>

}


export default RoomCanvas;