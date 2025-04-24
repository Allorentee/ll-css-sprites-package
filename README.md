# ll-css-sprites

Un componente React moderno y ligero para manejar CSS Sprites de manera eficiente.

## 🚀 Características

- ✨ Totalmente tipado con TypeScript
- 🎯 Optimizado para rendimiento
- 📦 Tamaño mínimo
- 🛠️ Fácil de usar

## 📦 Instalación

```bash
npm install ll-css-sprites
# o
yarn add ll-css-sprites
# o
pnpm add ll-css-sprites
```

## 🎯 Uso

```tsx
import { CssSprite } from 'll-css-sprites';

function App() {
  return (
    <CssSprite
      spriteUrl="/path/to/your/sprite.png"
      position={{ x: 0, y: 0 }}
      size={{ width: 32, height: 32 }}
      alt="Descripción del sprite"
    />
  );
}
```

## 📝 Props

| Prop       | Tipo                                 | Descripción                      | Requerido  |
|------------|--------------------------------------|----------------------------------|----------- |
| `image`    | string | URL de la imagen del sprite | Sí                               |            |
| `position` | { x: number, y: number }             | Posición del sprite en la imagen | Sí         |


## 🎨 Ejemplos

### Sprite Básico
```tsx
<CssSprite
  spriteUrl="/sprites/game-icons.png"
  position={{ x: 0, y: 0 }}
/>
```


```

## 🔧 Configuración

El componente está diseñado para ser simple y directo, pero puedes personalizarlo usando las props de estilo y className.

## 📚 Mejores Prácticas

1. **Optimización de Sprites**
   - Mantén tus sprites organizados y bien estructurados
   - Usa herramientas como TexturePacker para optimizar tus sprites
   - Considera el tamaño total de la imagen del sprite

2. **Accesibilidad**
   - Siempre proporciona un texto alternativo significativo
   - Considera el contraste y la visibilidad

3. **Rendimiento**
   - Precarga tus sprites cuando sea posible
   - Usa CDN para servir tus imágenes
   - Considera el uso de lazy loading para sprites grandes

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar.

## 📄 Licencia

ISC © 2025 Alvaro Llorente