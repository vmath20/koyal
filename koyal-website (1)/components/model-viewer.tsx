"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from "three"

function Model({ url, autoRotate = true }) {
  const gltf = useGLTF(url)
  const modelRef = useRef()

  // Auto-rotation
  useFrame((state, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5 // Adjust rotation speed here
    }
  })

  // Center and scale the model
  useEffect(() => {
    if (modelRef.current) {
      // Create a bounding box for the model
      const box = new THREE.Box3().setFromObject(modelRef.current)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      // Reset position to center
      modelRef.current.position.x = -center.x
      modelRef.current.position.y = -center.y
      modelRef.current.position.z = -center.z

      // Scale to reasonable size
      const maxDim = Math.max(size.x, size.y, size.z)
      if (maxDim > 2) {
        const scale = 2 / maxDim
        modelRef.current.scale.set(scale, scale, scale)
      }
    }
  }, [])

  return <primitive ref={modelRef} object={gltf.scene} dispose={null} />
}

export default function ModelViewer({ modelUrl }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full h-[70vh] relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <div className="text-lg">Loading 3D Model...</div>
        </div>
      )}
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null} onLoad={() => setIsLoading(false)}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Model url={modelUrl} autoRotate={true} />
          <Environment preset="city" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false} // We're handling rotation in the Model component
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model to avoid waterfall loading
useGLTF.preload("/model.glb")

