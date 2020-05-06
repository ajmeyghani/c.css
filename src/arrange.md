# c.css

Writing raw css feels like writing assembly, you have to know a lot of
specific details to get things to work. This library provides
just enough abstractions to simplify creating layouts, defining color systems,
styling elements, and more.

## Install

`yarn add @ajmey/c.css`

## Import

```html
<link rel="stylesheet" href="/node_modules/@ajmey/c.css/c.min.css">
```

or import if you are using a bundler like Webpack:

```js
@import "@ajmey/c.css";
```

## Usage

### Layout

#### Arranging Elements

The main class used for arranging elements is `.arrange`. You can do things like:

- arrange children horizontally/vertically
- center children horizontally/vertically
- distribute children equally horizontally/vertically

##### API

The arrange class has the following form, where `m` is a modifier:

`.arrange--[m1]-[m2]...[m]`

Possible modifier values are `sh`, `sv`, `ch`, `cv`, and `dist`:

- `sh`: stack horizontally, children next to each other
- `sv`: stack vertically, children stack on top up each other
- `c[h/v]`: `ch` or `cv`, center horizontally/vertically
- `dist`: distribute children equally

Modifiers are separated with a hyphen. Note that the order of the modifiers
doesn't matter. In other words, `.arrange--sv-ch` is the same as `.arange--ch-sv`.

Below are the frequently used combinations:

**Stacking**

- `.arrange`: by default stacks children next to each other, same as `.arrange--sh`
- `.arrange--sv`: stacks children vertically

**Stacking and Centering**

- `.arrange--cv`: vertically center children, while stacked horizontally
- `.arrange--ch`: horizontally center children, while stacked horizontally
- `.arrange--ch--cv`: horizontally and vertically center children, while stacked horizontally

- `.arrange--sv-cv`: vertically center children, while stacked vertically
- `.arrange--sv-ch`: horizontally center children, while stacked vertically
- `.arrange--sv-ch-cv`: horizontally and vertically center children, while stacked vertically

