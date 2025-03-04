import Header from "@/components/header"
import ModelViewer from "@/components/model-viewer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-8">Welcome to Koyal</h1>
        <ModelViewer modelUrl="/model.glb" />
      </div>
    </main>
  )
}

