import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

function RoomScene() {

    const monitorRef = useRef<Group>(null!);
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (monitorRef.current) {

            monitorRef.current.rotation.y = Math.sin(t * 0.5) * 0.15
        }
    })

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.1} />
            <directionalLight position={[4, 8, 4]} intensity={1.2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />


            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
                position={[0, -0.01, 0]} >
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#020617" />
            </mesh>


            {/* Back wall */}
            <mesh position={[0, 1.5, -3]} castShadow receiveShadow>
                <boxGeometry args={[8, 3, 0.2]} />
                <meshStandardMaterial color="#020617" />
            </mesh>

            {/* Desk */}

            <mesh position={[0, 0.8, -1]} castShadow receiveShadow>
                <boxGeometry args={[3, 0.15, 1.2]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>


            {/* Desk legs */}

            <mesh position={[-1.3, 0.4, -1.4]} castShadow>
                <boxGeometry args={[0.12, 0.8, 0.12]} />
                <meshStandardMaterial color="#020617" />
            </mesh>
            <mesh position={[1.3, 0.4, -1.4]} castShadow>
                <boxGeometry args={[0.12, 0.8, 0.12]} />
                <meshStandardMaterial color="#020617" />
            </mesh>

            {/* Monitor group */}
            <group ref={monitorRef} position={[0, 1.2, -0.8]}>
                {/* Monitor screen */}
                <mesh castShadow>
                    <boxGeometry args={[1.6, 0.9, 0.08]} />
                    <meshStandardMaterial color="#020617" />
                </mesh>
                {/* Screen glow */}
                <mesh position={[0, 0, -0.045]}>
                    <planeGeometry args={[1.5, 0.8]} />
                    <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
                </mesh>
                {/* Monitor stand */}
                <mesh position={[0, -0.7, 0]}>
                    <boxGeometry args={[0.12, 0.6, 0.12]} />
                    <meshStandardMaterial color="#020617" />
                </mesh>
            </group>

            <mesh position={[0, 1, -0.3]} castShadow>
                <boxGeometry args={[1.2, 0.06, 0.4]} />
                <meshStandardMaterial color="#0b1120" />
            </mesh>

            {/* Chair */}
            <mesh position={[0, 0.5, 0.4]} castShadow>
                <boxGeometry args={[1, 0.1, 1]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            <mesh position={[0, 0.9, 0.4]} castShadow>
                <boxGeometry args={[1, 0.9, 0.12]} />
                <meshStandardMaterial color="#1f2937" />
            </mesh>

        </>
    )

}

export default RoomScene;