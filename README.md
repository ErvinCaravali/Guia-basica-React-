
# Configuración de proyecto React

## Instalación de dependencias

1. **Inicializar el proyecto:**  
   Para crear un archivo `package.json` con los metadatos descriptivos y funcionales del proyecto, ejecuta el siguiente comando en tu terminal:

    ```bash
    npm init -y
    ```

2. **Configurar script de desarrollo:**  
   En el archivo `package.json`, agrega el siguiente script bajo la clave `"scripts"` para iniciar el servidor de desarrollo:

    ```json
    "scripts": {
      "dev": "react-scripts start"
    }
    ```

    Este script nos permite iniciar el servidor de desarrollo con el comando `npm run dev`.

## Estructura de archivos

1. **Crear carpeta `public`:**  
   En esta carpeta se alojan todos los archivos estáticos esenciales, como imágenes, modelos tridimensionales, archivos de video y páginas web.

    - **index.html:** Dentro de la carpeta `public`, crea un archivo `index.html` con la estructura básica de HTML5:

        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Título de tu página</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>
        ```

        El elemento `<div id="root"></div>` será el punto de montaje de la aplicación React.

2. **Crear carpeta `src`:**  
   Este directorio contiene el código fuente de la aplicación.

    - **index.js:** Dentro de la carpeta `src`, crea un archivo `index.js`, que será el punto de entrada de la aplicación:

        ```javascript
        import { createRoot } from "react-dom/client";
        import React from "react";

        const root = createRoot(document.getElementById('root'));

        root.render(
          <h1>Hola, mundo!</h1>
        );
        ```
## Instalación de dependencias de React

Ejecuta el siguiente comando para instalar React, React-DOM y React Scripts:

```bash
npm install react react-dom react-scripts
```                                 

                                       
- **Experience.jsx:** Crear un componente de función llamado `Experience.jsx` en la carpeta `src`, que será el controlador principal encargado de la creación del entorno virtual 3D y el inicio del juego. El componente puede verse así:

  ```jsx
        import React from 'react';

        const Experience = () => {
          return (
            <>
              <h1>squid-games</h1>
              <h1>ervin</h1>
            </>
          );
        };

        export { Experience };
        ```

## Uso de Props

3. **Crear Props:** Las funciones componentes pueden recibir props, que son como mensajes que un componente puede recibir de otro componente. En `Experience.jsx`, vamos a usar props para el título y el subtítulo:

    ```jsx
    import React from 'react';

    const Experience = (Props) => {
      return (
        <>
          <h1>{Props.title}</h1>
          <h1>{Props.subtitle}</h1>
        </>
      );
    };

    export { Experience };
    ```

    Y en `index.js`, podemos pasar estas props al componente `Experience`:

    ```javascript
    import { createRoot } from 'react-dom';
    import { Experience } from './Experience.jsx';

    const root = createRoot(document.getElementById('root'));

    const ContainerRoot = () => (
        <Experience 
          title="squid-games"
          subtitle="Ervin"
        />
    );

    root.render(<ContainerRoot />);
    ```

## Destructuring

4. **Destructuring:** Podemos utilizar destructuring en los props para simplificar el acceso a sus valores en `Experience.jsx`:

    ```jsx
    import React from 'react';

    const Experience = ({ title, subtitle }) => {
      return (
        <>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
        </>
      );
    };

    export { Experience };
    ```

    Y la importación en `index.js` se mantiene igual.

## CSS

5. **CSS:** Podemos crear estilos visuales utilizando hojas de estilo CSS. Crea un archivo llamado `styles.css` en la carpeta `css`, y luego impórtalo en `index.js`:

    ```css
    /* styles.css */
    .title {
      color: blue;
    }
    ```

    Luego, aplica estos estilos en `Experience.jsx`:

    ```jsx
    import React from 'react';
    import './styles.css';

    const Experience = ({ title, subtitle }) => {
      return (
        <>
          <h1 className="title">{title}</h1>
          <h1>{subtitle}</h1>
        </>
      );
    };
    export { Experience };
    ```





