const htmlPages = [
  {
    title: "c.css",
    filename: "public/index.html",
    template: "pages/index.tpl.html",
    chunks: ["c", "docs"],
  },
  {
    title: "c.css - arrange",
    filename: "public/arrange.html",
    template: "pages/arrange.tpl.html",
    chunks: ["core", "lists", "typography", "layout", "docs"],
  },
  {
    title: "c.css - space",
    filename: "public/space.html",
    template: "pages/space.tpl.html",
    chunks: ["core", "typography", "layout", "docs"],
  },
  {
    title: "c.css - content-mode",
    filename: "public/content-mode.html",
    template: "pages/content-mode.tpl.html",
    chunks: ["core", "typography", "layout", "modes", "docs"],
  },
  {
    title: "c.css - lists",
    filename: "public/lists.html",
    template: "pages/lists.tpl.html",
    chunks: ["core", "typography", "layout", "lists", "docs"],
  },
  {
    title: "c.css - typography",
    filename: "public/typography.html",
    template: "pages/typography.tpl.html",
    chunks: ["core", "typography", "modes", "buttons", "layout", "docs"],
  },
  {
    title: "c.css - Login Page Example",
    filename: "public/login.html",
    template: "pages/login.tpl.html",
    chunks: ["core", "typography", "buttons", "layout", "forms", "docs"],
  },
  {
    title: "c.css - properties",
    filename: "public/properties.html",
    template: "pages/properties.tpl.html",
    chunks: ["core", "typography", "lists", "layout", "docs"],
  },
  {
    title: "c.css - tables",
    filename: "public/tables.html",
    template: "pages/tables.tpl.html",
    chunks: ["core", "typography", "visual", "layout", "elements", "docs"],
  },
  {
    title: "c.css - buttons",
    filename: "public/buttons.html",
    template: "pages/buttons.tpl.html",
    chunks: ["core", "typography", "layout", "buttons", "docs"],
  },
  {
    title: "c.css - forms",
    filename: "public/forms.html",
    template: "pages/forms.tpl.html",
    chunks: ["core", "typography", "visual", "layout", "elements", "docs"],
  },
];

module.exports = htmlPages;
