# robinson-gestational-age
[![NpmLicense](https://img.shields.io/npm/l/robinson-gestational-age.svg?style=popout)](https://github.com/MathRobin/robinson-gestational-age/blob/master/LICENSE) [![Build Status](https://travis-ci.org/MathRobin/robinson-gestational-age.svg?branch=master)](https://travis-ci.org/MathRobin/robinson-gestational-age)

Calculate gestational age using Robinson curve. Based on the crown-rump length.

*Français : Détermine l’âge gestationnel en fonction de la longueur cranio-caudale du fœtus. Utilise la courbe de Robinson.*

![crown-rump length](https://github.com/MathRobin/robinson-gestational-age/blob/master/2.png?raw=true)

## Setup

```shell
npm i -S robinson-gestational-age
```
or yarn
```shell
yarn add robinson-gestational-age
```

## Usage

Get gestational age in days.

```javascript
var robinsonCurve = require('robinson-gestational-age');

robinsonCurve.getGestationalAge(24); // 63.177
```

## License

MIT
