import { useCursor, RoundedBox, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import type { Group } from 'three';


type RoomSceneProps = {
    onMonitorClick?: () => void;
    onBookshelfClick?: () => void;
    onWindowClick?: () => void;
};


function RoomScene({ onMonitorClick, onBookshelfClick,
    onWindowClick, }: RoomSceneProps) {

    const monitorRef = useRef<Group>(null!);
    const [hovered, setHovered] = useState(false);
    const [hoveredBookshelf, setHoveredBookshelf] = useState(false);
    const [hoveredWindow, setHoveredWindow] = useState(false);

    useCursor(hovered)

    const [poster1Color, poster2Color, windowViewColor, xp, windowTexture] = useTexture(['/poster1.jpg', '/poster2.jpg', '/window_view.jpg', '/xp.jpg', '/window.png']);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (monitorRef.current) {

            monitorRef.current.rotation.y = Math.sin(t * 0.5) * 0.15
        }
    })

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[3, 6, 4]}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <hemisphereLight
                color={'#e5f2ff'}
                groundColor={'#1e293b'}
                intensity={1.0}
            />
            {/* Soft desk rim light */}
            <pointLight position={[0, 1.5, -0.5]} intensity={1.5} color="#38bdf8" distance={4} />

            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
                position={[0, -0.01, 0]} >
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#0f172a" roughness={0.8} metalness={0.1} />
            </mesh>


            {/* Back wall */}
            <mesh position={[0, 1.5, -3]} castShadow receiveShadow>
                <boxGeometry args={[8, 3, 0.2]} />
                <meshStandardMaterial color="#1e293b" roughness={0.9} metalness={0.1} />
            </mesh>

            {/* Wall Decorations */}
            <group position={[0, 0, -2.85]}>
                {/* Poster 1 */}
                <RoundedBox position={[-1.2, 1.8, 0]} args={[0.8, 1.0, 0.05]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#0f172a" roughness={0.8} />
                </RoundedBox>
                <mesh position={[-1.2, 1.8, 0.026]}>
                    <planeGeometry args={[0.7, 0.9]} />
                    <meshBasicMaterial map={poster1Color} />
                </mesh>

                {/* Poster 2 */}
                <RoundedBox position={[1.2, 1.9, 0]} args={[0.6, 0.8, 0.05]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#0f172a" roughness={0.8} />
                </RoundedBox>
                <mesh position={[1.2, 1.9, 0.026]}>
                    <planeGeometry args={[0.5, 0.7]} />
                    <meshBasicMaterial map={poster2Color} />
                </mesh>

                {/* Floating Shelf */}
                <RoundedBox position={[0, 2.2, 0.1]} args={[1.5, 0.05, 0.2]} radius={0.01} smoothness={4} castShadow>
                    <meshStandardMaterial color="#334155" roughness={0.6} />
                </RoundedBox>

                {/* Little plant on shelf */}
                <mesh position={[-0.5, 2.3, 0.1]} castShadow>
                    <cylinderGeometry args={[0.05, 0.08, 0.15]} />
                    <meshStandardMaterial color="#fb923c" roughness={0.8} />
                </mesh>
                <mesh position={[-0.5, 2.45, 0.1]} castShadow>
                    <sphereGeometry args={[0.12]} />
                    <meshStandardMaterial color="#4ade80" roughness={0.9} />
                </mesh>
                <mesh position={[-0.45, 2.38, 0.15]} castShadow>
                    <sphereGeometry args={[0.08]} />
                    <meshStandardMaterial color="#22c55e" roughness={0.9} />
                </mesh>

                {/* Glowing object on shelf */}
                <mesh position={[0.4, 2.28, 0.1]}>
                    <boxGeometry args={[0.1, 0.1, 0.1]} />
                    <meshBasicMaterial color="#38bdf8" />
                </mesh>
            </group>

            {/* Desk */}
            <RoundedBox position={[0, 0.8, -1]} args={[3, 0.15, 1.2]} radius={0.02} smoothness={4} castShadow receiveShadow>
                <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.2} />
            </RoundedBox>

            {/* Desk legs */}
            <RoundedBox position={[-1.3, 0.4, -1.4]} args={[0.12, 0.8, 0.12]} radius={0.02} smoothness={4} castShadow>
                <meshStandardMaterial color="#0f172a" roughness={0.5} metalness={0.5} />
            </RoundedBox>
            <RoundedBox position={[1.3, 0.4, -1.4]} args={[0.12, 0.8, 0.12]} radius={0.02} smoothness={4} castShadow>
                <meshStandardMaterial color="#0f172a" roughness={0.5} metalness={0.5} />
            </RoundedBox>

            {/* Monitor group */}
            <group ref={monitorRef} position={[0, 1.2, -0.8]} onClick={() => onMonitorClick?.()} onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true);
            }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    setHovered(false);
                }}>
                {/* Monitor screen frame */}
                <RoundedBox args={[1.6, 0.9, 0.08]} radius={0.03} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.6} />
                </RoundedBox>
                {/* XP Wallpaper (Screen) */}
                <mesh position={[0, 0, 0.041]}>
                    <planeGeometry args={[1.5, 0.8]} />
                    <meshBasicMaterial map={xp} toneMapped={false} color={hovered ? '#ffffff' : '#cbd5e1'} />
                </mesh>
                {/* Screen backlight glow */}
                <mesh position={[0, 0, -0.045]}>
                    <planeGeometry args={[1.5, 0.8]} />
                    <meshBasicMaterial color={hovered ? '#38bdf8' : '#0ea5e9'}
                        transparent
                        opacity={hovered ? 0.7 : 0.4} />
                </mesh>
                {/* Monitor stand */}
                <RoundedBox position={[0, -0.7, 0]} args={[0.12, 0.6, 0.12]} radius={0.02} smoothness={4}>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.6} />
                </RoundedBox>
            </group>


            {/* Bookshelf on left wall */}
            <group
                position={[-3.2, 1.6, -2.4]}
                onClick={() => onBookshelfClick?.()}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHoveredBookshelf(true);
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    setHoveredBookshelf(false);
                }}
            >
                {/* Shelf body */}
                <RoundedBox args={[0.3, 2, 1.2]} radius={0.02} smoothness={4} castShadow receiveShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.6} metalness={0.1} />
                </RoundedBox>

                {/* Shelves */}
                {[0.6, 0, -0.6].map((y, i) => (
                    <RoundedBox key={i} position={[0.18, y, 0]} args={[0.08, 0.02, 1.1]} radius={0.005} smoothness={4}>
                        <meshStandardMaterial color="#334155" roughness={0.6} metalness={0.1} />
                    </RoundedBox>
                ))}

                {/* Book decorations */}
                <group position={[0.2, 0, 0]}>
                    {/* Top Shelf (y=0.6) */}
                    {/* Standing books */}
                    <mesh position={[0, 0.6 + 0.15, 0.3]} castShadow>
                        <boxGeometry args={[0.06, 0.3, 0.18]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#f43f5e' : '#881337'} roughness={0.6} emissive={hoveredBookshelf ? '#f43f5e' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    <mesh position={[0, 0.6 + 0.12, 0.23]} castShadow>
                        <boxGeometry args={[0.05, 0.24, 0.16]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#3b82f6' : '#1e3a8a'} roughness={0.6} emissive={hoveredBookshelf ? '#3b82f6' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    <mesh position={[0, 0.6 + 0.14, 0.17]} castShadow>
                        <boxGeometry args={[0.04, 0.28, 0.15]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#10b981' : '#064e3b'} roughness={0.6} emissive={hoveredBookshelf ? '#10b981' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    {/* Leaning book */}
                    <mesh position={[0, 0.6 + 0.12, 0.05]} rotation={[0.2, 0, 0]} castShadow>
                        <boxGeometry args={[0.05, 0.26, 0.16]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#f59e0b' : '#78350f'} roughness={0.6} emissive={hoveredBookshelf ? '#f59e0b' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>

                    {/* Middle Shelf (y=0) */}
                    {/* Stacked books */}
                    <mesh position={[0, 0 + 0.03, -0.2]} castShadow>
                        <boxGeometry args={[0.15, 0.04, 0.22]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#8b5cf6' : '#4c1d95'} roughness={0.6} emissive={hoveredBookshelf ? '#8b5cf6' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    <mesh position={[0, 0 + 0.07, -0.21]} castShadow>
                        <boxGeometry args={[0.14, 0.04, 0.2]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#0ea5e9' : '#0c4a6e'} roughness={0.6} emissive={hoveredBookshelf ? '#0ea5e9' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    <mesh position={[0, 0 + 0.11, -0.22]} rotation={[0, 0.1, 0]} castShadow>
                        <boxGeometry args={[0.14, 0.03, 0.18]} />
                        <meshStandardMaterial color={hoveredBookshelf ? '#ec4899' : '#831843'} roughness={0.6} emissive={hoveredBookshelf ? '#ec4899' : '#000000'} emissiveIntensity={0.2} />
                    </mesh>
                    {/* Glowing geometric sculpture */}
                    <mesh position={[0, 0 + 0.15, 0.25]} rotation={[0.5, 0.5, 0]}>
                        <octahedronGeometry args={[0.1]} />
                        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={hoveredBookshelf ? 1.5 : 0.5} roughness={0.2} metalness={0.8} />
                    </mesh>
                    <mesh position={[0, 0 + 0.05, 0.25]} castShadow>
                        <cylinderGeometry args={[0.08, 0.1, 0.02]} />
                        <meshStandardMaterial color="#1e293b" />
                    </mesh>

                    {/* Bottom Shelf (y=-0.6) */}
                    {/* Row of books */}
                    {[-0.3, -0.24, -0.18, -0.12, -0.06, 0].map((z, i) => {
                        const colors = ['#94a3b8', '#64748b', '#475569', '#334155', '#cbd5e1', '#e2e8f0'];
                        const glowColors = ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#ffffff', '#ffffff'];
                        const heights = [0.28, 0.25, 0.29, 0.24, 0.22, 0.27];
                        return (
                            <mesh key={`bottom-book-${i}`} position={[0, -0.6 + heights[i]/2 + 0.01, z]} castShadow>
                                <boxGeometry args={[0.05, heights[i], 0.15]} />
                                <meshStandardMaterial 
                                    color={hoveredBookshelf ? glowColors[i] : colors[i]} 
                                    roughness={0.7} 
                                    emissive={hoveredBookshelf ? glowColors[i] : '#000000'} 
                                    emissiveIntensity={0.2} 
                                />
                            </mesh>
                        );
                    })}
                    {/* Small plant on bottom shelf */}
                    <mesh position={[0, -0.6 + 0.05, 0.3]} castShadow>
                        <cylinderGeometry args={[0.06, 0.04, 0.08]} />
                        <meshStandardMaterial color="#fb923c" roughness={0.8} />
                    </mesh>
                    <mesh position={[0, -0.6 + 0.12, 0.3]} castShadow>
                        <dodecahedronGeometry args={[0.08]} />
                        <meshStandardMaterial color="#34d399" roughness={0.9} />
                    </mesh>
                </group>
            </group>

            {/* Window on right wall */}
            <group
                position={[3.1, 1.6, -2.6]}
                onClick={() => onWindowClick?.()}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHoveredWindow(true);
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    setHoveredWindow(false);
                }}
            >
                {/* Window frame (Outer edges) */}
                <RoundedBox position={[0, 0.65, 0]} args={[1.6, 0.1, 0.1]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>
                <RoundedBox position={[0, -0.65, 0]} args={[1.6, 0.1, 0.1]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>
                <RoundedBox position={[-0.75, 0, 0]} args={[0.1, 1.2, 0.1]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>
                <RoundedBox position={[0.75, 0, 0]} args={[0.1, 1.2, 0.1]} radius={0.02} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>

                {/* Window Panes (Mullions) */}
                <RoundedBox position={[0, 0, -0.025]} args={[0.06, 1.2, 0.05]} radius={0.01} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>
                <RoundedBox position={[0, 0.1, -0.025]} args={[1.4, 0.06, 0.05]} radius={0.01} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.2} />
                </RoundedBox>

                {/* “Outside” window wallpaper */}
                <mesh position={[0, 0, -0.055]}>
                    <planeGeometry args={[1.5, 1.3]} />
                    <meshBasicMaterial map={windowTexture} toneMapped={false} color={hoveredWindow ? '#ffffff' : '#94a3b8'} />
                </mesh>
            </group>

            <RoundedBox position={[0, 1, -0.3]} args={[1.2, 0.06, 0.4]} radius={0.01} smoothness={4} castShadow>
                <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.1} />
            </RoundedBox>

            {/* Chair */}
            <RoundedBox position={[0, 0.5, 0.4]} args={[1, 0.1, 1]} radius={0.05} smoothness={4} castShadow>
                <meshStandardMaterial color="#334155" roughness={0.7} metalness={0.1} />
            </RoundedBox>
            <RoundedBox position={[0, 0.9, 0.5]} args={[1, 0.9, 0.12]} radius={0.05} smoothness={4} castShadow>
                <meshStandardMaterial color="#475569" roughness={0.7} metalness={0.1} />
            </RoundedBox>

            {/* Person sitting */}
            <group position={[0, 0, 0]}>
                {/* Head */}
                <RoundedBox position={[0, 1.25, 0.3]} args={[0.25, 0.25, 0.25]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
                </RoundedBox>
                {/* Torso (Hoodie) */}
                <RoundedBox position={[0, 0.85, 0.35]} args={[0.45, 0.5, 0.25]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#0ea5e9" roughness={0.8} />
                </RoundedBox>
                {/* Upper Arms */}
                <RoundedBox position={[-0.28, 0.85, 0.35]} args={[0.15, 0.4, 0.15]} radius={0.05} smoothness={4} castShadow rotation={[0.2, 0, 0]}>
                    <meshStandardMaterial color="#0ea5e9" roughness={0.8} />
                </RoundedBox>
                <RoundedBox position={[0.28, 0.85, 0.35]} args={[0.15, 0.4, 0.15]} radius={0.05} smoothness={4} castShadow rotation={[0.2, 0, 0]}>
                    <meshStandardMaterial color="#0ea5e9" roughness={0.8} />
                </RoundedBox>
                {/* Forearms (reaching to keyboard) */}
                <RoundedBox position={[-0.25, 0.65, 0.1]} args={[0.12, 0.12, 0.4]} radius={0.05} smoothness={4} castShadow rotation={[-0.2, 0.2, 0]}>
                    <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
                </RoundedBox>
                <RoundedBox position={[0.25, 0.65, 0.1]} args={[0.12, 0.12, 0.4]} radius={0.05} smoothness={4} castShadow rotation={[-0.2, -0.2, 0]}>
                    <meshStandardMaterial color="#cbd5e1" roughness={0.6} />
                </RoundedBox>
                {/* Thighs */}
                <RoundedBox position={[-0.12, 0.62, 0.15]} args={[0.18, 0.15, 0.35]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#334155" roughness={0.9} />
                </RoundedBox>
                <RoundedBox position={[0.12, 0.62, 0.15]} args={[0.18, 0.15, 0.35]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#334155" roughness={0.9} />
                </RoundedBox>
                {/* Calves */}
                <RoundedBox position={[-0.12, 0.3, -0.05]} args={[0.15, 0.5, 0.15]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#334155" roughness={0.9} />
                </RoundedBox>
                <RoundedBox position={[0.12, 0.3, -0.05]} args={[0.15, 0.5, 0.15]} radius={0.05} smoothness={4} castShadow>
                    <meshStandardMaterial color="#334155" roughness={0.9} />
                </RoundedBox>
            </group>

        </>
    )

}

export default RoomScene;