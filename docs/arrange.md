# `.arrange`

The main class used for arranging elements is `.arrange`. You can do things like:

- arrange children horizontally/vertically
- center children horizontally/vertically
- distribute children equally horizontally/vertically

## API

The arrange class has the following form, where `m` is a modifier:

`.arrange-[m1]-[m2]...[m]`

Possible modifier values are `sh`, `sv`, `ch`, `cv`, `dist`, and `wrap`:

- `sh`: stack horizontally, children next to each other
- `sv`: stack vertically, children stack on top up each other
- `c[h/v]`: `ch` or `cv`, center horizontally/vertically
- `dist`: distribute children equally
- `wrap`: distributes children horizontally and margin right and bottom and wraps around when the content can't fit

Modifiers are separated with a hyphen. Note that the order of the modifiers
doesn't matter. In other words, `.arrange-sv-ch` is the same as `.arange-ch-sv`

Below are the frequently used combinations:

**Stacking**

- `.arrange`: by default stacks children next to each other, same as `.arrange-sh`
- `.arrange-sv`: stacks children vertically

**Stacking and Centering**

- `.arrange-cv`: vertically center children, while stacked horizontally
- `.arrange-ch`: horizontally center children, while stacked horizontally
- `.arrange-ch-cv`: horizontally and vertically center children, while stacked horizontally

- `.arrange-sv-cv`: vertically center children, while stacked vertically
- `.arrange-sv-ch`: horizontally center children, while stacked vertically
- `.arrange-sv-ch-cv`: horizontally and vertically center children, while stacked vertically

**Distributing**

- `.arrange-dist`: distributes children equally, while stacked horizontally
- `.arrange-sh-dist`: same as `.arrange-dist`, default to horizontal stacking
- `.arrange-sv-dist`: distribute children equally, whilte stacked vertically
- `.arrange-wrap`: children stak horizontally and wrap around. There is also a gap between children that can be controlled with `-arrange-gap` property
