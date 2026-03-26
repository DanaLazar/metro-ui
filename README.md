# Metro UI Library

## Descriere
`metro-ui` este o librărie de componente React reutilizabile, construită cu TypeScript și SASS modules. Librăria oferă componente UI modulare, tipate și gata de folosit în orice aplicație React.  

Componente incluse în prezent in metro-calc:
- `Button` – suportă variante, dimensiuni, states (disabled, loading)
- `Input` – suportă variante, dimensiuni, states (disabled)
- `Modal` – generic, utilizabil pentru conținut custom
- `Keypad` – tastatură numerică + operații
- Alte componente: Select, InputWithActions, Form Field, Spinner

Scop: oferirea unui set de componente reutilizabile pentru aplicații multiple.

---

## Instalare

```
git clone https://github.com/DanaLazar/metro-ui.git
cd metro-ui
npm install
npm run storybook
```

## Decizii arhitecturale
- TypeScript pentru tipare stricte și siguranță în folosirea componentelor
- SASS modules pentru control si independenta
- Stories cu Storybook pentru vizualizare și test manual
- Componente independente, fără dependențe inutile
- States suportate: disabled, loading, error (unde este relevant)
- Înainte de build se rulează automat:
✅ ESLint → cod curat
🎨 Prettier → format consistent
🔍 TypeScript check → fără erori
🧪 Vitest → testele trec
