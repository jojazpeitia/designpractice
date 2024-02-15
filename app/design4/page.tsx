'use client'
import { OrbitControls } from "@react-three/drei";
import { Canvas, Vector3, useThree, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

export default function design4() {

    function Controls (props: any) {
        const { camera, gl } = useThree();
        const ref = useRef<{ update: () => void } | null>(null);

        useFrame(() => {
            if (!ref.current) {
              return;
            }

            ref.current.update()
        });

        return <OrbitControls ref={ref} target={[0,0,0]} {...props} args={[camera, gl.domElement]} />
    }

    function Dome() {
        const texture = useLoader(THREE.TextureLoader, '/2294472375_24a3b8ef46_o.jpg')
        return (
            <mesh>
                <sphereGeometry attach="geometry" args={[500, 60, 40]} />
                <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
            </mesh>
        )
    }

    return(
        <div>
            <h1 className="justify-center items-center flex mt-36">
                panorama2
            </h1>
            <div className="mx-32 h-96 justify-center items-center flex">
                <Canvas camera={{ position: [0,0,0.1] }}>
                    {/* <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.5} autoRotate rotateSpeed={-0.5} /> */}
                    <OrbitControls autoRotate rotateSpeed={-0.5}/>
                    <Dome />
                </Canvas>
            </div>
        </div>
    )
}