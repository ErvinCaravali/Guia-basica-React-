import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Experience = () => {
  const boxRef= useRef(null);
   console.log(boxRef);
   useFrame(() => {
    boxRef.current.rotation.x += 0.01;
   })
    return (
    
     <>
      <ambientLight />
      <directionalLight position={[10,10,5]} />
      <OrbitControls makeDefault/>
       <mesh ref={boxRef}>
         <boxGeometry args={[1,1,1]}/>
         <meshStandardMaterial color="purple"/>
       </mesh>
      
      </>
     
    );
      
   };
   export { Experience };