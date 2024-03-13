
REACT-THREE-FIBER: Es un renderizador de react para Three.js, este contiene  un gran ecosistema de funcionalidades como convertir modelos 3D .gLTF en componentes de .jsx.

 
 Camaras: 
   camara primera persona: no te vez en cuerpo completo, vez al  rededor en una vista sercana los 180 grados.(como jegos de disparos).
   camara de vista cenital: la camara se ubica desde arriba  de tal forma que  se ve al personaje y todo a su alrededor, se ve la cabeza del  personaje.
   camara lateral 2d: la que permite visualizar al personajes como si  estuviera a t lado, (como mario bros).
    
   camara en tersera persona(la que programaremos en  el projecto): Esta camara se coloca por detras del personaje y lo mantienen siempre dentro del encuadre (la camaera camina con  usted pero por detras).
   
   La camara Frustum: lo que la camara toma se renderiza lo  que no se toma, pues no se renderiza.
   near clip plane:que tan cerca la camara podra renderizar.
   far clip plane:que tan lejos la camara podra renderizar.
   fov: es el angulo de vicion.(en el projecto sera de 60 gasos)
   
   
proyeccion de la camara
   
  *(importante para el projecto) Perspectiva: los objectoles lejanos los vemos pequeños y objetos cernanos los vemos grandes relativamente.lo que toma la camara sera un rectangulo que se movera 
   
   Ortografica: los bojectos se veran igual inependientemente de su lejania o cercania. 
   
   Isometrica: es una vicion desde  las cooordenadas x,y,z  
   
Escena: es donde ocurre la accion de un juego y donde se colocan y organizan todos los elementos como modelos 3D,personajes, efectos visuales,luces ,camaras , etc.

en una escena nececitamos:
1 camara
2 mesh o cuerpo(maya poligonal triangular) necescita un material
3 luz 


Me quede en 2:49:04 horas. 


CREAR NUESTRA PRIMERA ESCENA EN REACT THREE FIBER

1. npm install three @types/three @react-three/fiber: instalamos las dependiencias de three.js y de R3F.
2.para hacer  una escena con los elementos, esta necesita un canvas. En html existe un elemento llamado canvas en el que se  puede colocar:elementos 3D etc.
  creo atributo canvas  en  el index.js : 

import { createRoot } from 'react-dom/client';
import { Experience } from './ Experience.jsx';
import './styles.css'
import { Canvas } from '@react-three/fiber';
const root = createRoot(document.getElementById('root'));

const ContainerRoot = () => (
    <Canvas>
    <Experience />
    </Canvas>
    
);

root.render(<ContainerRoot />);
Nota. los elementos 2D se implementan fuera del canvas

CREAR mesh: el mesh se crea dentro del return de Experience,el cual sera un box y tendra un material llamado meshBasicMaterial que no necesita de luz para ser visto.

const Experience = () => {
    return (
     <mesh>
      <boxGeometry args={[1,1,1]}/> son las dimeciones o volumen del objeto
      <meshBasicMaterial color="purple"/>
     </mesh>
    );
      
   };
   export { Experience };

se  configura el archivo styles.css para visualiza a nuestro grusto la fiura geometrica.
html,

body,

#root{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

}

canvas{
    touch-action: none;
}

VISUALIZAR FIGURA COMO 3D: Drento del canvas de index.js ponemos un atribuo camera y lo configuramos.
import { createRoot } from 'react-dom/client';
import { Experience } from './ Experience.jsx';
import './styles.css'
import { Canvas } from '@react-three/fiber';
const root = createRoot(document.getElementById('root'));

const ContainerRoot = () => (
    <Canvas
     camera={
        {
            position:[2,0,5 ] 2.profundidad ;0.arriba o abajo;
        }
     }
    >

    <Experience />
    </Canvas>
    
);

root.render(<ContainerRoot />);

SE LE  AGREGA AL MESH UNA FUENTE DE LUZ :  <ambientLight />
      <directionalLight position={[10,10,5]} />
      
      
 USO DE DREI
 uno de los ecoisitemas de R3F ,este contiene una grna variadad de helper  como <Helper/> hook useHook(), de los cuales encontraremos su documentacion oficial:
 https://github.com/pmndrs/drei   
 
 Instalar dependencias de drei:
 npm install @react-three/drei
 
importmos la funcion OrbitControls de drei en Experience.jsx : import { OrbitControls } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";
const Experience = () => {
    return (

     <>
      <ambientLight />
      <directionalLight position={[10,10,5]} />
      <OrbitControls makeDefault/>
       <mesh>
         <boxGeometry args={[1,1,1]}/>
         <meshStandardMaterial color="purple"/>
       </mesh>
      
      </>
     
    );
      aplicamos una referencia al canvas:
      import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
const Experience = () => {
  const boxRef= useRef(null);
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
   
   