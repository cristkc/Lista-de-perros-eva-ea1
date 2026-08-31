# Lista de perros 🐶

La idea de este proyecto es dar un pequeño repaso sobre conexiones a una API y sobre eventos. Es una pequeña aplicación web que muestra imágenes de perros aleatorias (obtenidas desde [dog.ceo](https://github.com/Saitraru/Lista-de-perros-eva-ea1)) y permite marcarlas como "me gusta" o "no me gusta".

Este repositorio es la **base de trabajo** para la Evaluación Parcial N°1 de Ingeniería DevOps (DOY0101).

---

## 🚀 Cómo levantar el proyecto localmente

No requiere instalación de dependencias. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático simple, por ejemplo:

```bash
npx serve .
```

---

## 🌳 Estrategia de ramificación

Para el desarrollo del proyecto se utilizó una estrategia GitFlow simplificada.

La rama `main` se utilizó para mantener la versión estable del proyecto. La rama `develop` se utilizó para integrar los cambios antes de llevarlos a la versión principal.

Las funcionalidades nuevas se desarrollaron en ramas `feature/*`, creadas desde `develop`. Las ramas utilizadas fueron:

```text
feature/mostrar-raza
feature/contador-preferencias
```

También se creó una rama de corrección urgente:

```text
hotfix/manejo-error-imagen
```

La rama `hotfix/manejo-error-imagen` se creó para corregir el problema que ocurría cuando no se podía cargar una imagen de perro. Después, el cambio fue integrado a `main` mediante Pull Request y sincronizado con `develop`.

Se eligió GitFlow simplificado porque permitió separar la versión estable del proyecto de los cambios que se encontraban en desarrollo. Aunque el proyecto fue realizado solo por mi "Cristhian llontop de la cruz", el uso de ramas y Pull Requests ayudó a mantener el historial ordenado, revisar los cambios antes del merge y simular un flujo de trabajo colaborativo.

---

## 📝 Convenciones de commits

Para los commits se utilizó el siguiente formato:

```text
tipo: descripción breve
```

Los tipos principales utilizados fueron:

- `feat`: agrega una funcionalidad nueva.
- `fix`: corrige un error.
- `ci`: agrega o modifica la automatización de integración continua.
- `docs`: modifica la documentación.
- `chore`: realiza tareas de mantenimiento.

Ejemplos de commits utilizados en el proyecto:

```text
feat: muestra la raza del perro actual
feat: agrega contadores de preferencias
fix: maneja error al cargar imagen
ci: agrega validacion automatica del frontend
docs: completa documentacion del flujo devops
```

Se eligió este formato porque permite identificar rápidamente el propósito de cada cambio al revisar el historial de commits.

---

## 🔀 Convenciones de naming de ramas

Para nombrar las ramas se utilizó minúsculas y guiones para separar palabras.

Los formatos utilizados fueron:

```text
main
develop
feature/nombre-descriptivo
hotfix/nombre-descriptivo
```

Ramas creadas durante el desarrollo:

```text
feature/mostrar-raza
feature/contador-preferencias
hotfix/manejo-error-imagen
```

Este criterio permite reconocer fácilmente el tipo de cambio que contiene cada rama y facilita la organización del repositorio.

---

## 🔍 Estrategia de revisión (Pull Requests)

Cada funcionalidad o corrección se desarrolló en una rama independiente. Cuando el cambio estuvo terminado, se realizó un `push` de la rama a GitHub y se creó un Pull Request.

Las ramas `feature/*` se integraron hacia `develop`. La rama `hotfix/manejo-error-imagen` se integró hacia `main`.

Antes de fusionar un Pull Request se revisó lo siguiente:

- Que el título describiera claramente el cambio realizado.
- Que los archivos modificados correspondieran a la funcionalidad o corrección solicitada.
- Que no existieran conflictos con la rama de destino.
- Que la aplicación funcionara correctamente al abrirla en el navegador.
- Que las validaciones configuradas en GitHub Actions terminaran correctamente.

No se realizaron cambios directamente sobre la rama `main`. Las integraciones se realizaron mediante Pull Requests.

---

## ⚙️ Automatización (CI/CD)

Se configuró un workflow de GitHub Actions en el archivo:

```text
.github/workflows/ci.yml
```

El workflow se ejecuta cuando ocurre alguno de los siguientes eventos:

- Se realiza un `push` a la rama `develop`.
- Se crea o actualiza un Pull Request dirigido hacia la rama `main`.

La automatización realiza las siguientes validaciones:

- Descarga el código del repositorio.
- Comprueba que existan los archivos `index.html`, `index.js` y `style.css`.
- Valida la sintaxis del archivo JavaScript mediante el comando:

```bash
node --check index.js
```

Esta automatización corresponde a una etapa básica de Integración Continua (CI), ya que permite detectar errores simples antes de fusionar cambios y ayuda a mantener las ramas `develop` y `main` en un estado más confiable.

No se configuró un despliegue automático, por lo tanto el proyecto implementa CI básica y no un proceso de CD completo.

---

## 📁 Estructura de carpetas

```text
Lista-de-perros-eva-ea1/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── index.html
├── index.js
├── style.css
└── README.md
```

- `index.html`: contiene la estructura de la página web.
- `index.js`: contiene la lógica, eventos y conexión con la API de perros.
- `style.css`: contiene los estilos visuales de la aplicación.
- `.github/workflows/ci.yml`: contiene la automatización de GitHub Actions.
- `.gitignore`: contiene los archivos o carpetas que Git debe ignorar.
- `README.md`: contiene la documentación del proyecto.

---

## 👥 Autores

- Cristhian Llontop de la Cruz — Desarrollo de la aplicación, gestión de ramas, Pull Requests y automatización CI.

*Proyecto original: repaso de conexión a API y manejo de eventos en JavaScript. Adaptado como base para la Evaluación Parcial N°1, DOY0101 — Ingeniería DevOps.*