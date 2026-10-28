# To-do list

Aplicación con frontend React/Vite, API Django REST y base de datos PostgreSQL.

## Despliegue

### 1. Crear la base de datos en Neon

1. Crea un proyecto en [Neon](https://neon.tech/) y una base de datos.
2. En **Connect**, copia la cadena de conexión PostgreSQL (la opción pooled es adecuada para este servicio). Conserva el valor como secreto; incluye `sslmode=require`.

### 2. Crear el sitio en Netlify

1. Crea un sitio nuevo importando este repositorio. Netlify detectará `netlify.toml`, que configura el directorio `frontend`, el comando `npm run build` y la publicación de `dist`.
2. Deja que termine el primer despliegue y copia el dominio asignado por Netlify, por ejemplo `https://mi-lista.netlify.app`. En este momento la API aún no estará conectada.

### 3. Desplegar la API en Render

1. En Render, crea un **Blueprint** desde este repositorio y acepta la configuración de `render.yaml`.
2. Cuando Render lo solicite, define `DATABASE_URL` con la cadena de Neon y `CORS_ALLOWED_ORIGINS` con el dominio Netlify (sin `/` al final).
3. Render genera `SECRET_KEY` y configura `DEBUG=false`. La compilación instala dependencias, aplica migraciones y prepara los archivos estáticos.
4. Espera al despliegue y copia la URL pública del servicio, por ejemplo `https://to-do-list-api.onrender.com`.

### 4. Conectar y volver a desplegar el frontend

En **Site configuration → Environment variables** de Netlify, agrega `VITE_API_URL` con la URL de Render más `/api`, por ejemplo `https://to-do-list-api.onrender.com/api`. Inicia un nuevo despliegue para que Vite incorpore la variable al bundle.

La regla de redirección de Netlify incluida permite que la aplicación React Router cargue correctamente al visitar o recargar sus rutas.

## Desarrollo local

### API

Desde `backend`, instala dependencias y ejecuta las migraciones y el servidor:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

Desde `frontend`, crea `.env` a partir de `.env.example`, instala dependencias y ejecuta Vite:

```powershell
npm ci
npm run dev
```

El backend usa SQLite localmente si `DATABASE_URL` no está definida. Para desplegar, configura las variables listadas en `backend/.env.example` en el entorno del servicio; nunca subas secretos ni archivos `.env`.
