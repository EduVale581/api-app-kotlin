# API App Kotlin

API REST desarrollada con Fastify y TypeScript para la gestión de archivos, diseñada específicamente para conectar con aplicaciones móviles en Kotlin.

## 🚀 Características

- ✅ Subida de archivos múltiples
- ✅ Servido de archivos estáticos
- ✅ API REST con endpoints documentados
- ✅ Servidor de desarrollo con hot reload
- ✅ TypeScript para mayor seguridad de tipos

## 🛠️ Tecnologías

- **[Fastify](https://www.fastify.io/)** - Framework web rápido y eficiente
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[@fastify/multipart](https://github.com/fastify/fastify-multipart)** - Manejo de archivos multipart
- **[@fastify/static](https://github.com/fastify/fastify-static)** - Servir archivos estáticos

## 📋 Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/EduVale581/api-app-kotlin.git
cd api-app-kotlin
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📚 API Endpoints

### Health Check

```http
GET /
```

**Respuesta:**

```json
{
  "message": "Ok"
}
```

### Subir Archivos

```http
POST /api/upload
```

**Content-Type:** `multipart/form-data`

**Parámetros:**

- `file` (archivo): Uno o más archivos a subir

**Respuesta exitosa:**

```json
{
  "message": "Archivos subidos correctamente",
  "files": [
    {
      "url": "http://localhost:3000/files/nombre-archivo.ext"
    }
  ]
}
```

### Acceder a Archivos

```http
GET /files/{nombre-archivo}
```

Los archivos subidos estarán disponibles en la ruta `/files/`

## 📁 Estructura del Proyecto

```
api-app-kotlin/
├── src/
│   ├── server.ts           # Servidor principal
│   ├── routes/
│   │   ├── index.routes.ts # Rutas principales
│   │   └── upload.routes.ts # Rutas de subida
│   └── utils/
│       └── fileUtils.ts    # Utilidades para archivos
├── uploads/                # Directorio de archivos subidos
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot reload
- `npm test` - Ejecuta las pruebas (pendiente de implementar)

## 🔗 Integración con Kotlin

Esta API está diseñada para ser consumida desde aplicaciones Android desarrolladas en Kotlin. Para integrarla:

1. **Retrofit/OkHttp** para realizar las peticiones HTTP
2. **Multipart requests** para la subida de archivos
3. **URL base:** `http://localhost:3000` (desarrollo) o tu dominio en producción

### Ejemplo de uso en Kotlin:

```kotlin
// Ejemplo básico de integración
val retrofit = Retrofit.Builder()
    .baseUrl("http://localhost:3000/")
    .addConverterFactory(GsonConverterFactory.create())
    .build()

interface ApiService {
    @Multipart
    @POST("api/upload")
    suspend fun uploadFile(@Part file: MultipartBody.Part): Response<UploadResponse>

    @GET("/")
    suspend fun healthCheck(): Response<HealthResponse>
}
```

## 📝 Licencia

ISC

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request
