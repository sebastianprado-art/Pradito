# 🚀 **Explorando el Futuro con Tecnología e IA - Actividad Práctica**

## 🎯 ¡Bienvenidos al Taller de Innovación Digital!

En esta parte del taller, cada estudiante creará y publicará su **primera página web** usando GitHub Codespaces y la ayuda de la **Inteligencia Artificial**.

### 📋 **¿Qué vamos a hacer?**

1. **Crear una página web personalizada** usando prompts de IA
2. **Publicarla en Internet** con GitHub Pages
3. **Compartir tu creación** con el mundo

### ⏱️ **Duración:** 40 minutos

---

## 🛠️ **Instrucciones Paso a Paso**

### **Paso 1: Preparar el entorno (5 min)**

1. **Crear cuenta en GitHub:**

   - Accede a [GitHub](https://github.com) y crea tu cuenta gratuita
   - Usa tu email personal y elige un nombre de usuario único

2. **Forkear este repositorio:**

   - Ve a la página principal de este repositorio (`InnovaSchoolsWorkshop`)
   - Haz clic en el botón **"Fork"** (arriba a la derecha)
   - Elige tu cuenta personal para crear una copia (fork) en tu perfil
   - Espera unos segundos a que se cree tu propio repositorio
   - ¡Listo! Ahora tienes una copia de este repositorio en tu cuenta para trabajar

3. **Abrir GitHub Codespaces:**

   - En tu repositorio forkeado, haz clic en el botón **"Code"** (verde)
   - Selecciona la pestaña **"Codespaces"**
   - Haz clic en **"Create codespace on main"**
   - Espera a que se cargue el entorno (1-2 minutos)

4. **Vincular VS Code con GitHub:**
   - Cuando se abra VS Code en el navegador, puede aparecer un mensaje para iniciar sesión
   - Haz clic en **"Sign in to GitHub"** si aparece
   - Autoriza los permisos para que VS Code pueda guardar tus archivos

### **💡 Tip para agregar imágenes:**

Si quieres usar imágenes en tu página, puedes:

- Ir a Google Images, buscar la imagen que quieras
- **Clic derecho → "Copiar enlace de la imagen"**
- Usa ese enlace en tu prompt: _"incluye esta imagen: [pegar enlace aquí]"_
- Copilot la colocará automáticamente donde corresponda

### **Paso 2: Crear tu página web (25 min)**

1. **Usar el Prompt Modular** que encontrarás más abajo
2. **Personalizar tu página** según tus intereses
3. **Importante:** Pide que el código se organice así:
   - `index.html` → En la raíz (carpeta principal)
   - `styles.css` y `script.js` → En una carpeta llamada `assets`
4. **Solicitar diseño atractivo:** Siempre agrega: _"Procura que el diseño sea bonito, limpio y moderno"_

### **Paso 3: Subir cambios a GitHub (5 min)**

1. **Una vez que tengas tu página lista**, pídele a Copilot que suba los cambios:
   - Escribe en el chat: _"Sube todos mis cambios a GitHub"_ o _"Haz commit y push de mis archivos"_
   - Copilot se encargará de hacer el commit y push automáticamente
   - ✅ **Verifica que aparezca "Changes pushed successfully" o similar**

### **Paso 4: Activar GitHub Pages (5 min)**

1. **Con tus archivos ya subidos al repositorio:**
2. **Activa GitHub Pages:**
   - Ve a **Settings** en tu repositorio forkeado
   - Scroll hacia abajo hasta **"Pages"**
   - En **"Source"** selecciona **"Deploy from a branch"**
   - Elige **"main"** branch y **"/ (root)"**
   - Click **"Save"**
3. **¡Tu página estará disponible en:** `https://tu-usuario.github.io/InnovaSchoolsWorkshop/`
4. Comparte tu URL con tus compañeros

---

## 🎨 **Prompt Modular para Crear tu Página Web**

### 📝 **Plantilla del Prompt**

Usa esta plantilla y completa cada sección según tus gustos e intereses:

```
Crea una página web moderna y atractiva usando Bootstrap con las siguientes características:

**TEMA DE LA PÁGINA:**
- Sobre: [Elige uno: Mi perfil personal / Mi hobby favorito / Un tema que me apasiona / Una causa social / Mi deporte favorito / Mi banda/artista favorito / Mi videojuego favorito / Mi carrera soñada / Otro: ____]

**ESTILO VISUAL:**
- Colores principales: [Elige 2-3 colores armoniosos, ej: Azul marino y dorado / Verde esmeralda y crema / Rosa coral y gris carbón / Púrpura y plata / Naranja y azul petróleo]
- Estilo de diseño: [Elige uno o varios: Moderno y minimalista / Colorido y divertido / Elegante y profesional / Creativo y artístico / Tecnológico futurista]
- Características visuales: [Opcional - elige las que te gusten: Innovador / Animado / Gradientes suaves / Sombras elegantes / Efectos hover / Tipografía moderna / Espacios en blanco / Bordes redondeados]

**CONTENIDO QUE DEBE INCLUIR:**
- Título principal llamativo
- Una breve descripción o introducción (2-3 oraciones)
- Al menos 3 secciones con información relevante organizadas con Bootstrap
- Una galería de imágenes o íconos usando componentes de Bootstrap
- Un formulario de contacto usando clases de Bootstrap
- Enlaces a redes sociales (opcional)

**FUNCIONALIDADES:**
- Usar Bootstrap 5 para el diseño responsivo
- Navegación con navbar de Bootstrap
- Cards o components de Bootstrap para organizar contenido
- Animaciones CSS suaves
- Botones con estilos de Bootstrap personalizados

**REQUISITOS TÉCNICOS:**
- Usar HTML5, CSS3, JavaScript y Bootstrap 5 CDN
- Diseño completamente responsivo con sistema de grillas de Bootstrap
- Incluir meta tags para SEO
- Código limpio y comentado
- Optimizado para GitHub Pages
- Compatible con todos los navegadores modernos

Por favor, genera el código completo HTML con Bootstrap y CSS personalizado listo para publicar en GitHub Pages.
```

---

## 🌟 **Ejemplos de Prompts Completados**

### **Ejemplo 1: Página sobre Gaming**

```
Crea una página web moderna y atractiva usando Bootstrap con las siguientes características:

**TEMA DE LA PÁGINA:**
- Sobre: Mi videojuego favorito - Minecraft

**ESTILO VISUAL:**
- Colores principales: Verde esmeralda, marrón tierra y azul cielo
- Estilo de diseño: Tecnológico futurista
- Características visuales: Innovador, Animado, Pixelado

**CONTENIDO QUE DEBE INCLUIR:**
- Título principal: "Mi Mundo en Minecraft"
- Introducción sobre por qué me gusta Minecraft y desde cuándo juego
- Sección 1: Mis construcciones favoritas (usando Bootstrap cards)
- Sección 2: Consejos para nuevos jugadores (con lista de Bootstrap)
- Sección 3: Mis mods y texturas preferidas (galería con Bootstrap)
- Formulario de contacto para otros jugadores usando Bootstrap forms
- Enlaces a mi canal de YouTube gaming

**FUNCIONALIDADES:**
- Usar Bootstrap 5 para diseño responsivo
- Navbar de Bootstrap con navegación suave
- Cards animadas con efectos hover
- Carousel de Bootstrap para capturas de pantalla
- Botones de Bootstrap con estilos personalizados

**REQUISITOS TÉCNICOS:**
- Usar HTML5, CSS3, JavaScript y Bootstrap 5 CDN
- Diseño completamente responsivo con sistema de grillas de Bootstrap
- Incluir meta tags para SEO
- Código limpio y comentado
- Optimizado para GitHub Pages
- Compatible con todos los navegadores modernos
```

### **Ejemplo 2: Página sobre Deportes**

```
Crea una página web moderna y atractiva usando Bootstrap con las siguientes características:

**TEMA DE LA PÁGINA:**
- Sobre: Mi deporte favorito - Fútbol

**ESTILO VISUAL:**
- Colores principales: Azul real, blanco y verde césped
- Estilo de diseño: Moderno y dinámico
- Características visuales: Animado, Gradientes suaves, Efectos hover

**CONTENIDO QUE DEBE INCLUIR:**
- Título principal: "Pasión por el Fútbol"
- Introducción sobre mi amor por este deporte y desde cuándo juego
- Sección 1: Mi equipo favorito y jugadores legendarios (usando Bootstrap cards)
- Sección 2: Mis posiciones preferidas y habilidades (con lista de Bootstrap)
- Sección 3: Estadios que quiero visitar (galería con Bootstrap)
- Formulario de contacto para otros fanáticos usando Bootstrap forms
- Enlaces a noticias deportivas y redes sociales

**FUNCIONALIDADES:**

- Usar Bootstrap 5 para diseño responsivo
- Navbar de Bootstrap con navegación suave
- Cards animadas con efectos hover
- Carousel de Bootstrap para fotos de partidos
- Botones de Bootstrap con estilos personalizados

**REQUISITOS TÉCNICOS:**

- Usar HTML5, CSS3, JavaScript y Bootstrap 5 CDN
- Diseño completamente responsivo con sistema de grillas de Bootstrap
- Incluir meta tags para SEO
- Código limpio y comentado
- Optimizado para GitHub Pages
- Compatible con todos los navegadores modernos

```

## 🖼️ **Cómo Agregar Imágenes**

### **Método fácil con enlaces web:**

1. Ve a [Google Images](https://images.google.com) o [Unsplash](https://unsplash.com)
2. Encuentra la imagen que quieras usar
3. **Clic derecho → "Copiar enlace de la imagen"**
4. En tu prompt agrega: _"Incluye esta imagen: [pegar enlace aquí]"_
5. Especifica dónde quieres la imagen: _"ponla como foto principal"_ o _"úsala en la galería"_

### **Ejemplo:**

```
"Incluye esta imagen como fondo del header:
https://images.unsplash.com/photo-1234567890/imagen-bonita.jpg"
```

---

## 🏆 **Consejos para Destacar**

### ✨ **Para crear la página más innovadora:**

- Sé **original** en tu elección de tema
- Usa **colores que reflejen tu personalidad**
- Incluye **contenido personal y auténtico**
- Piensa en **animaciones creativas**
- Agrega **elementos interactivos únicos**

### 💡 **Ideas de temas populares:**

- **Deportes:** Tu equipo favorito, tu deporte, estadísticas
- **Arte:** Tus obras, artistas favoritos, técnicas
- **Ciencia:** Experimentos, descubrimientos, proyectos
- **Viajes:** Lugares que quieres visitar, culturas que admiras
- **Tecnología:** Gadgets, apps, tendencias futuras
- **Medio Ambiente:** Proyectos eco-friendly, sostenibilidad
- **Emprendimiento:** Tu idea de negocio, productos innovadores

---

## 📚 **Recursos Adicionales**

- [Guía oficial de GitHub Pages](https://pages.github.com/)
- [Tutorial de HTML y CSS](https://www.w3schools.com/)
- [Inspiración de diseños web](https://dribbble.com/)
- [Paletas de colores](https://coolors.co/)
- [Íconos gratuitos](https://fontawesome.com/)

---

## 🤝 **¿Necesitas Ayuda?**

Si tienes alguna duda durante el proceso, no dudes en:

1. Levantar la mano para pedir ayuda
2. Preguntar a tus compañeros
3. Revisar los ejemplos proporcionados
4. ¡Experimentar y divertirte!

---

## 🌟 **¡Tu Futuro Digital Comienza Hoy!**

Recuerda que esta es solo tu primera página web. Con práctica y dedicación, podrías convertirte en:

- 💻 **Desarrollador Full-Stack**
- 🎨 **Diseñador UX/UI**
- 🤖 **Especialista en IA**
- 🔒 **Experto en Ciberseguridad**
- ☁️ **Arquitecto Cloud**
- 🎮 **Desarrollador de Videojuegos**

**¡El límite es tu imaginación! 🚀**
