import { createRoot } from 'react-dom/client';
import { Experience } from './ Experience.jsx';
import './styles.css'
import { Canvas } from '@react-three/fiber';
const root = createRoot(document.getElementById('root'));

const ContainerRoot = () => (
    <Canvas
     camera={
        {
            position:[2,0,5 ]
        }
     }
    >

    <Experience />
    </Canvas>
    
);

root.render(<ContainerRoot />);
