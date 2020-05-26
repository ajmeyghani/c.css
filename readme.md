# c.css

## `Work In Progress!`

Writing raw css feels like writing assembly, you have to know a lot of
specific details to get things to work. This library provides
just enough abstractions to help simplify creating layouts, defining color systems, styling elements, and more.

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

## Docs

The API documentation is available in the [docs](./docs) folder.

## TODO

- [ ] Content Mode, add .content to the body and get margins on h1..h6, and content elements
- [ ] Define style hooks (interfaces) for components
- [ ] Define color system
- [ ] Define hook for vertical rhythm
- [ ] Showcase examples, demonstrating possibilities
- [ ] Add docs for creating different bundles
- [ ] Add guides and tutorials
- [ ] Hooks for creating more complex custom components
- [ ] Hooks for creating buttons out there? size system etc ...
- [ ] Move the doc examples to one page for starters
- [ ] Rethink docs generation, 11ty?
