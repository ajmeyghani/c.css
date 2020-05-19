# Color System

The whole color system is defined with CSS custom properties on the `body`. As
long as you stick to the provided custom properties, you can control all
the colors for all elements and components by only changing a couple of custom
properties.

## API

The base theme colors are defined as:

- `--primary`
- `--secondary`
- `--warning`
- `--info`
- `--success`
- `--danger`
- `--gray`

Each theme color has 4 different variations: `dark`, `light`, `lighter`, and
`lightest`. For example, for the primary color we have:

- `--primary-dark`
- `--primary`
- `--primary-light`
- `--primary-lighter`
- `--primary-lightest`

In addition, each color component is defined as custom properties as well. That
way, we have a lot of control on dynamically changing colors globally.
Each color is defined as hsl components, for example, for the primary color
we have:

- `--primary-h`: hue
- `--primary-s`: saturation
- `--primary-l`: lightness

All the color variations are defined in terms of hsl values, so in order to
change the primary hue color, all you have to do is to change the `primary-s`
value, and all the variations will change dynamically. In addition, there are
also global controls for hsl values:

- `--global-darkness-inc`: 15%
- `--global-light1-inc`: 15%
- `--global-light2-inc`: 30%
- `--global-light3-inc`: 45%

Each property can obviously be overwritten per color, and if you look at the
success color for example, you can see that some of the values have been
overwritten.

In addition to the colors mentioned above, there are some contextual colors
that apply for inverting light and dark colors (whites and blacks). These
colors are defined as:

- `--fg`: foreground
- `--bg`: background

In normal mode, the `--fg` value is a dark color (black), and the `--bg` color
is a light color (white). In inverted mode (`body.inverted-colors`), `--fg` and
`--bg` colors are inverted allowing to create dark mode. If you look at the
available elements and components, you can see that for example border colors
are defined as `--fg` colors. That's because in inverted mode, you can control
how the borders should look like. The same principle also applies to background
color values, you just have to be aware and stick to `--fg` and `--bg` colors
values if you want you components to be dark-mode ready.





