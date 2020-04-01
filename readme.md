# modern.css

A modern CSS framework for modern browsers.

> Work In Progress, not ready for production.

## Install

- `yarn add @ajmey/modern.css` or `npm i @ajmey/modern.css -S`.
- Then, include the bundle located at `node_modules/@ajmey/modern.css/index.css`

## Docs

### Helper Layout Classes

- `flex`: sets display to flex
- `flex-col`: sets `display-direction` to column.
- `flex-row`: sets `display-direction` to row.
- `align-items-center` or `aic`: sets `align-items` to `center`.
- `justify-content-center` or `jcc`: sets `justify-content` to `center`.
- `h100`: sets height to 100%.
- `flexible-grid`: when set on a parent, it will create a grid with auto-fit set as repeat. The following custom properties can be set:
    - `--m-flexible-cell-min-width`, default: `17rem`;
    - `--m-flexible-row-height`, default: `15rem`;

## Examples

- If you want to vertically center children of a container, add `flex-row aic` classes on the parent container.


