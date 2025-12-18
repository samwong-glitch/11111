
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Overlay from './components/Overlay';

const App: React.FC = () => {
  const [isFormed, setIsFormed] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#020202] overflow-hidden">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center h-full text-white/30 tracking-[0.5em] text-[10px] animate-pulse uppercase">
          <div className="w-12 h-12 border-2 border-white/10 border-t-white/40 rounded-full animate-spin mb-4"></div>
          Calibrating Light Field
        </div>
      }>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ 
            antialias: false, 
            stencil: false, 
            alpha: false, 
            depth: true,
            powerPreference: "high-performance"
          }}
        >
          <Experience isFormed={isFormed} />
        </Canvas>
      </Suspense>

      <Overlay isFormed={isFormed} onToggle={() => setIsFormed(!isFormed)} />
      
      {/* Cinematic Vignette Overlays */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] z-20"></div>
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default App;
