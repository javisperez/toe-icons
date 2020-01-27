# Toe Icons

A very minimalist linear icons pack https://javisperez.github.io/toe-icons

## About

This is a *monorepo* package of icons that includes svg icons and js components (e.g. Vue Components).

There are currently *two* packages being published from this repository:

`@toe-icons/icons` // contains the svg icons and a few helper json files with info and content

`@toe-icons/vue` // contains the icons vue components

## Installing

You can install any of the wanted packages from npm:

### Icons

```
npm install @toe-icons/icons
```

This will install the svg icons along with some util json files:

```
@toe-icons/
  ./dist
    icon-tags.json
    icon-content.json
    icon-info.json
    ./svg
      /[icon].svg
```
you can then import it like:

```
import search from '@toe-icon/icons/dist/svg/search.svg
```

### Vue components
```
npm install @toe-icons/vue
```

Then you can import it with:
```
import { TiArrowDown } from "@toe-icons/vue"
```
or use the plugin version:

```
import Vue from "vue"
import Ti from "@toe-icons/vue"

Vue.use(Ti, {
  size: 24
})
...

<ti icon="arrow-left" />

```

#### Plugin Options
The Vue plugin version accept the following options:

|  Option  |  Default value  |  Description  |
| -------- | --------------- | ------------- |
|  size  |  24  |  Sets the default size for the given icons.  |
|  spin  |  false  |  Make the icon spin. Useful for things like loading spinners.  |
|  stroke  |  0  |  Width of the stroke  |
|  color  |  currentColor  |  Fill color  |
|  strokeColor  |  currentColor  |  Stroke color  |

About me
I'm no designer, I'm a frontend developer, I just need some specific icons that i decided to do myself for learning purpose mostly :)
