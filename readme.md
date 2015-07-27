# robinson-gestational-age

Calculate gestational age using Robinson curve. Based on the crown-rump length.

*Français : Détermine l'age gestationnel en fonction de la longueur cranio-caudale du foetus. Utilise la courbe de Robinson.*

## Setup

```
npm i -S robinson-gestational-age
```

## Usage

Get gestational age in days.

```javascript
var robinsonCurve = require('robinson-gestational-age');

robinsonCurve.getGestationalAge(24); // 63.177
```

## License

MIT
