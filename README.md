# To-do list

Aplicación de lista de tareas hecha con React, TypeScript y Vite. Las tareas se guardan en el almacenamiento local del navegador y no requieren una API ni una base de datos.

## Desarrollo local

```powershell
cd frontend
npm ci
npm run dev
```

Para generar la versión de producción:

```powershell
npm run build
```

## Despliegue

El sitio puede desplegarse como frontend estático en Netlify. La configuración de `netlify.toml` define `frontend` como directorio base, ejecuta `npm run build` y publica `dist`. También incluye una regla para que React Router pueda cargar sus rutas directamente.

Las tareas se almacenan en el navegador donde se crean; no se sincronizan entre dispositivos o navegadores.
