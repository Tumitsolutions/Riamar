# Global Frozen Seafood Trading - Páginas de Productos

Este paquete contiene las páginas web de productos para el sitio de Global Frozen Seafood Trading.

## Archivos Incluidos

### Archivos CSS y JavaScript
- `styles.css` - Archivo de estilos centralizado para todas las páginas
- `script.js` - JavaScript reutilizable para funcionalidad común

### Páginas de Productos HTML
1. `calamar-gigante.html` - Calamar Gigante (Dosidicus gigas)
2. `calamar-illex.html` - Calamar Illex (Illex argentinus)
3. `pulpo.html` - Pulpo
4. `pejerrey.html` - Pejerrey
5. `jurel.html` - Jurel
6. `caballa-pacifico.html` - Caballa del Pacífico

## Estructura del Proyecto

```
/
├── styles.css                 (Estilos centralizados)
├── script.js                  (JavaScript común)
├── calamar-gigante.html
├── calamar-illex.html
├── pulpo.html
├── pejerrey.html
├── jurel.html
└── caballa-pacifico.html
```

## Características

### CSS Centralizado (styles.css)
- Variables CSS para fácil personalización de colores
- Diseño responsivo para móviles, tablets y desktop
- Animaciones suaves con fade-in
- Grid systems flexibles
- Estilos para:
  - Header y navegación
  - Hero sections
  - Especificaciones de productos
  - Tarjetas de calidad
  - Formularios de contacto
  - Footer

### JavaScript Común (script.js)
- Efecto de scroll en navbar
- Animaciones fade-in al hacer scroll
- Smooth scroll para enlaces internos
- Validación básica de formularios

### Páginas de Productos
Cada página incluye:
- **Hero Section**: Título, nombre científico y descripción
- **Especificaciones**: Detalles del producto en cards
- **Estándares de Calidad**: Certificaciones internacionales
- **Aplicaciones**: Usos del producto
- **Beneficios**: Por qué elegir el producto
- **Documentación**: Requisitos de cumplimiento
- **CTA Section**: Llamado a la acción
- **Formulario de Contacto**: Para solicitar cotizaciones
- **Footer**: Con enlaces y información de la empresa

## Instalación

1. Descarga todos los archivos en la misma carpeta
2. Asegúrate de tener la siguiente estructura:
   ```
   tu-carpeta/
   ├── styles.css
   ├── script.js
   └── [archivos HTML]
   ```
3. Abre cualquier archivo HTML en tu navegador

## Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #0A4D68;
    --accent-coral: #E74C3C;
    /* ... otras variables */
}
```

### Contenido
Cada página HTML puede ser editada independientemente. Los elementos principales están claramente comentados.

### Logo
Reemplaza el texto "Seafood Trading" en el navbar con tu logo:
```html
<div class="logo-container">
    <img src="assets/logo.jpg" alt="Logo" class="logo-img">
</div>
```

### Información de Contacto
Actualiza en cada archivo HTML:
- Email: `info@seafoodtrading.com`
- Teléfono: `+51 1 2345 6789`

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript (Vanilla)**: Sin dependencias externas
- **Google Fonts**: Montserrat y Lora

## Responsividad

Las páginas son completamente responsivas con breakpoints en:
- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## Soporte de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Notas

- Las páginas están preparadas para funcionar con `index.html` como página principal
- Los formularios tienen validación básica HTML5
- Se puede agregar procesamiento de formularios del lado del servidor
- Las imágenes de productos deben agregarse según necesidad

## Próximos Pasos Recomendados

1. Crear `index.html` (página principal)
2. Agregar imágenes de productos
3. Implementar procesamiento de formularios
4. Agregar sistema de búsqueda de productos
5. Implementar menú móvil responsive
6. Agregar meta tags para SEO
7. Optimizar imágenes para web

## Contacto y Soporte

Para preguntas o personalizaciones adicionales, contacta al desarrollador.

---

**Versión**: 1.0  
**Fecha**: Diciembre 2025  
**Desarrollado con**: Claude AI
