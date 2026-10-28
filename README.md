# To-do list

Aplicación con frontend React/Vite, API Django REST y base de datos PostgreSQL.

## Despliegue

### 1. Crear la base de datos en Neon

1. Crea un proyecto en [Neon](https://neon.tech/) y una base de datos.
2. En **Connect**, copia la cadena de conexión PostgreSQL (la opción pooled es adecuada para este servicio). Conserva el valor como secreto; incluye `sslmode=require`.

### 2. Crear el sitio en Netlify

1. Crea un sitio nuevo importando este repositorio. Netlify detectará `netlify.toml`, que configura el directorio `frontend`, el comando `npm run build` y la publicación de `dist`.
2. Deja que termine el primer despliegue y copia el dominio asignado por Netlify, por ejemplo `https://mi-lista.netlify.app`. En este momento la API aún no estará conectada.

### 3. Desplegar la API en Vercel

1. Importa el mismo repositorio en [Vercel](https://vercel.com/new).
2. En la configuración del proyecto, establece **Root Directory** en `backend`. Vercel detectará Django a partir de `manage.py` y usará Python 3.13.
3. Antes de desplegar, agrega estas variables para **Production**:
   - `SECRET_KEY`: una clave secreta nueva y aleatoria.
   - `DEBUG`: `false`.
   - `DATABASE_URL`: la cadena de conexión PostgreSQL de Neon. La conexión pooled sirve para las solicitudes de la API.
   - `CORS_ALLOWED_ORIGINS`: el dominio Netlify, sin `/` al final.
4. En la configuración de variables de entorno, habilita **System Environment Variables** para que Django pueda reconocer el dominio asignado por Vercel.
5. Despliega y copia el dominio de producción del proyecto Vercel, por ejemplo `https://mi-api.vercel.app`.

El plan Hobby de Vercel es gratuito para proyectos personales no comerciales y tiene límites de uso. La API se ejecuta como una función serverless; no mantiene un proceso permanente.

### 4. Aplicar las migraciones a Neon

Las migraciones deben ejecutarse una vez contra la base de datos de Neon. En PowerShell, desde `backend`, configura temporalmente las variables y ejecuta Django. Para esta operación usa la URL **directa** de Neon (sin `-pooler` en el host):

```powershell
$env:DATABASE_URL = "PEGA_AQUI_LA_URL_DIRECTA_DE_NEON"
$env:SECRET_KEY = "LA_MISMA_CLAVE_CONFIGURADA_EN_VERCEL"
$env:DEBUG = "false"
python manage.py migrate --noinput
```

Al terminar, cierra esa terminal para quitar las variables temporales.

### 5. Conectar y volver a desplegar el frontend

En **Site configuration → Environment variables** de Netlify, agrega `VITE_API_URL` con la URL de Vercel más `/api`, por ejemplo `https://mi-api.vercel.app/api`. Inicia un nuevo despliegue para que Vite incorpore la variable al bundle.

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
