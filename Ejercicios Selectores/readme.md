# Demostración de Especificidad y Cascada en CSS

Este ejemplo muestra cómo funcionan las reglas de **especificidad** y **prioridad de selectores** en CSS.

---

## Selectores definidos

Los siguientes selectores están definidos (ordenados por especificidad):

1. **Selector de elemento** `p`  
   → Especificidad: 1

2. **Selector de clase** `.texto`  
   → Especificidad: 2

3. **Selector de ID** `#especial`  
   → Especificidad: 3

   Resultado: ID > .texto > p

---

## Elemento aplicado

```html
<p id="especial" class="texto">Teste</p>