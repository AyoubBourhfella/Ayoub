import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
import particlesConfig from "../configs/particlesConfig";
const CustomParticles = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
     
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
    };
  
  

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: -1,
          }}
          
          options={particlesConfig}
        />
      )}
    </>
  );
};

export default CustomParticles;
