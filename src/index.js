import { createRoot } from 'react-dom/client';
import { Experience } from './ Experience.jsx';
import './styles.css'
const root = createRoot(document.getElementById('root'));

const ContainerRoot = () => (
    <Experience 
    title="squid-games"
    subtitle="Ervin"
    />
);

root.render(<ContainerRoot />);
