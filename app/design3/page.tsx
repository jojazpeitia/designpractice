'use client'
import { Canvas, Vector3, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from 'three'

function Cube({ position, color }: { position: Vector3, color: string | number }) {
    return (
        <mesh position={position}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshPhongMaterial attach="material" color={color} />
        </mesh>
    )
}

function Background() {
    const { scene } = useThree();
    let bgMesh;

    const loader = new TextureLoader();
    const texture = loader.load(
        "https://threejsfundamentals.org/threejs/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg"
    );
    texture.magFilter = THREE.LinearFilter; // what the flip is this?
    texture.minFilter = THREE.LinearFilter; // what the flip is this?

    const shader = THREE.ShaderLib.equirect;

    const material = new THREE.ShaderMaterial({
        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });
    
    material.uniforms.tEquirect.value = texture;
    const plane = new THREE.SphereGeometry(20, 20, 20);

    bgMesh = new THREE.Mesh(plane, material);
    scene.add(bgMesh);

    // scene.background = texture;
    return null;
}


export default function Design3() {
    return (
        <div>
            <h1 className="justify-center items-center flex mt-36">
                panorama1
            </h1>
            <div className="mx-32 h-96 justify-center items-center flex">
                <Canvas camera={{ position: [0, 0, 3], fov: 75, aspect: 2, near: 0.1, far:100}}>
                    <OrbitControls/>
                    <Background />
                    <ambientLight intensity={0.5}/>
                    <spotLight intensity={400} position={[0, 5, 10]} angle={0.3} />
                    {/* <Cube position={[0, 0, 0]} color={0x44aa88} /> */}
                    {/* <Cube position={[-2, 0, 0]} color={0x8844aa} /> */}
                    {/* <Cube position={[2, 0, 0]} color={0xaa8844} /> */}
                </Canvas>
            </div>
        </div>
    );
}