# Instrucciones para GitHub Copilot - Taller Innova Schools

## Resumen del Proyecto

Este es un taller educativo donde estudiantes de secundaria crean su primera página web usando Bootstrap 5 y GitHub Codespaces. El objetivo es generar páginas web modernas, atractivas y completamente funcionales que reflejen los intereses personales de cada estudiante.

## Contexto del Usuario

- **Audiencia:** Estudiantes de 14-17 años sin experiencia previa en programación
- **Duración:** 40 minutos de actividad práctica
- **Objetivo:** Crear y publicar una página web personal en GitHub Pages
- **Nivel:** Principiante absoluto

## Estructura de Archivos Requerida

**OBLIGATORIO:** Organizar el código de la siguiente manera:

- `index.html` → En la carpeta raíz del repositorio
- `css/styles.css` → Archivo CSS en carpeta separada
- `js/script.js` → Archivo JavaScript en carpeta separada
- Todos los archivos deben estar vinculados correctamente en el HTML

## Tecnologías y Frameworks

### Tecnologías Principales:

- **HTML5** semántico y accesible
- **CSS3** con variables personalizadas y animaciones suaves
- **JavaScript ES6+** vanilla (sin librerías externas complicadas)
- **Bootstrap 5.3.0** CDN obligatorio para diseño responsivo

### CDNs Requeridos:

```html
<!-- Bootstrap CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet" />

<!-- Bootstrap Icons -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
  rel="stylesheet" />

<!-- Google Fonts (opcional) -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
  rel="stylesheet" />

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## Estándares de Código

### HTML:

- Usar HTML5 semántico (`<header>`, `<main>`, `<section>`, `<footer>`)
- Incluir meta tags básicos para SEO y viewport
- Todos los elementos deben tener atributos alt en imágenes
- IDs únicos y clases descriptivas
- Comentarios explicativos en español

### CSS:

- Usar variables CSS para colores principales
- Mobile-first design approach
- Animaciones suaves (max 0.3s duration)
- Usar nomenclatura BEM cuando sea apropiado
- Comentarios en español explicando secciones importantes

### JavaScript:

- Usar const/let, nunca var
- Funciones de flecha para callbacks
- Event listeners con sintaxis moderna
- Comentarios explicativos en español
- Validación básica de formularios

## Componentes Obligatorios de Bootstrap

Cada página DEBE incluir mínimo:

1. **Navbar responsivo** con navegación suave
2. **Hero section** llamativo
3. **Cards** para organizar contenido
4. **Formulario** con validación
5. **Sistema de grillas** responsivo
6. **Footer** informativo

## Paletas de Colores Recomendadas

**Usar solo combinaciones armoniosas:**

- Ocean Breeze: `#1e40af`, `#06b6d4`, `#f8fafc`
- Sunset Glow: `#ea580c`, `#fb923c`, `#fef3c7`
- Forest Zen: `#065f46`, `#10b981`, `#f0fdf4`
- Royal Purple: `#7c3aed`, `#a78bfa`, `#f3f4f6`
- Rose Gold: `#be185d`, `#f472b6`, `#fdf2f8`

## Directrices de Diseño UI/UX

### Principios de Diseño:

- **Limpio y moderno:** Espacios en blanco generosos
- **Responsivo:** Perfecto en móvil, tablet y desktop
- **Accesible:** Contraste adecuado, navegación por teclado
- **Consistente:** Mismos estilos de botones, tipografía y espaciado
- **Profesional:** Evitar colores muy saturados o combinaciones estridentes

### Elementos Visuales:

- Bordes redondeados suaves (`border-radius: 10px`)
- Sombras sutiles para profundidad
- Transiciones suaves en hover
- Tipografía clara y legible (min 16px)
- Iconos de Bootstrap Icons para consistencia

## Funcionalidades Requeridas

### Interactividad Básica:

- Navegación suave entre secciones
- Efectos hover en botones y cards
- Formulario con validación client-side
- Carousel funcional (si se incluye)
- Navbar que responda al scroll

### JavaScript Funcional:

```javascript
// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
```

## Optimización para GitHub Pages

- Rutas relativas únicamente
- Sin dependencias de servidor
- Meta tags completos para SEO
- Favicon incluido
- Compatible con todos los navegadores modernos

## Instrucciones Específicas para Respuestas

### SIEMPRE Incluir:

1. **Código completo** y funcional, no fragmentos
2. **Comentarios en español** explicando secciones importantes
3. **Responsive design** probado para móvil
4. **Meta description** personalizada según el tema
5. **Estructura semántica** correcta

### NUNCA Incluir:

- Librerías adicionales no mencionadas
- Código jQuery (solo vanilla JS)
- Imágenes locales (solo URLs externas)
- Funcionalidades que requieran servidor
- CSS frameworks adicionales (solo Bootstrap)

## Mensajes de Respuesta

Al generar código, SIEMPRE comenzar con:

> "He creado una página web moderna y responsiva usando Bootstrap 5. El código está organizado con index.html en la raíz y los archivos CSS/JS en carpetas separadas para mantener un proyecto limpio y profesional."

Y terminar con:

> "La página está lista para GitHub Pages. Simplemente sube los archivos a tu repositorio y activa GitHub Pages en la configuración."

## Validación de Calidad

Antes de entregar cualquier código, verificar:

- [ ] HTML válido y semántico
- [ ] Responsive en móvil, tablet y desktop
- [ ] Colores armoniosos y accesibles
- [ ] Todas las funcionalidades de Bootstrap funcionan
- [ ] JavaScript sin errores en consola
- [ ] Comentarios explicativos en español
- [ ] Estructura de archivos correcta

## Temas Populares de los Estudiantes

Estar preparado para generar páginas sobre:

- Videojuegos (Minecraft, Fortnite, League of Legends)
- Deportes (Fútbol, Basketball, Gaming profesional)
- Música (Bandas favoritas, géneros, instrumentos)
- Hobbies (Arte, fotografía, cocina, viajes)
- Mascotas y animales
- Tecnología y aplicaciones
- Medio ambiente y sostenibilidad
- Emprendimiento e ideas de negocio

Cada tema debe tratarse con el mismo nivel de profesionalismo y calidad técnica.
