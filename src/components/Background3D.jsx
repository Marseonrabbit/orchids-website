import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FluidOrb = ({ color, position, size, speed, factor }) => {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = position[0] + Math.sin(t * speed * 0.5) * factor;
      ref.current.position.y = position[1] + Math.cos(t * speed * 0.7) * factor;
      ref.current.rotation.z = t * 0.05;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }
  });

    return (
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshTransmissionMaterial 
          samples={4} 
          thickness={size * 0.5} 

        chromaticAberration={0.05} 
        anisotropy={0.2} 
        distortion={0.3} 
        distortionScale={0.5} 
        temporalDistortion={0.1} 
        color={color}
        transparent
        opacity={0.1}
        transmission={1}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic field using Math.sin/cos instead of Math.random
      const radius = 5 + (Math.sin(i * 0.1) * 0.5 + 0.5) * 10;
      const theta = i * 0.1;
      const phi = Math.acos((Math.cos(i * 0.2) * 2) - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  const pointsRef = useRef();
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://res.cloudinary.com/dvw6as9ov/image/upload/v1675850123/noise_vymx2a.png')]" />
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0a_0%,#000000_100%)]" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#fff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#333" />
        
        <ParticleField />
        
        <group>
          <FluidOrb color="#ffffff" position={[0, 0, -5]} size={6} speed={0.4} factor={2} />
          <FluidOrb color="#ffffff" position={[-8, 4, -3]} size={3} speed={0.6} factor={1.5} />
          <FluidOrb color="#ffffff" position={[8, -4, -2]} size={2.5} speed={0.5} factor={1.2} />
          <FluidOrb color="#ffffff" position={[-4, -6, -4]} size={4} speed={0.3} factor={1.8} />
          <FluidOrb color="#ffffff" position={[6, 6, -3]} size={2} speed={0.7} factor={1} />
        </group>

        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Background3D;
