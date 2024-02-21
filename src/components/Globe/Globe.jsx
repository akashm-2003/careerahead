// import { Application } from "@splinetool/runtime";

// const canvas = document.getElementById("canvas3d");
// const app = new Application(canvas);
// app.load("https://prod.spline.design/VrCiHslCl-fXoSrw/scene.splinecode");

import React, { useRef, useEffect } from "react";
import { Application } from "@splinetool/runtime";

const SplineGlobe = ({ sceneUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);
    app.load(sceneUrl);

    return () => {
      // Clean up code (if necessary) when component unmounts
      // For example: app.destroy();
    };
  }, [sceneUrl]);

  return <canvas  id="canvas3d" ref={canvasRef} />;
};

export default SplineGlobe;

// import React, { useRef, useEffect } from "react";
// import { Application } from "@splinetool/runtime";

// const SplineGlobe = ({ sceneUrl, canvasHeight }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const app = new Application(canvasRef.current);
//     app.load(sceneUrl);

//     return () => {
//       // Clean up code (if necessary) when component unmounts
//       // For example: app.destroy();
//     };
//   }, [sceneUrl]);

//   return (
//     <canvas
//     //   className="min-w-full"
//       id="canvas3d"
//       ref={canvasRef}
//       style={{ height: canvasHeight }} // Set the height dynamically
//     />
//   );
// };

// export default SplineGlobe;

