# tinney.dev
> A personal website.

## Contents

- [tinney.dev](#tinneydev)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Content](#content)
    - [Blog](#blog)
      - [Format](#format)
      - [Drafts](#drafts)
    - [Projects](#projects)
      - [Format](#format-1)
    - [About](#about)
  - [Usage](#usage)
  - [Developing](#developing)
    - [Requirements](#requirements)
    - [Command](#command)
  - [Deploying](#deploying)
    - [Google Analytics](#google-analytics)
  - [License](#license)

## Introduction

This website is built with Astro and React. Deployed via GitHub pages.

## Content

The website provides three primary forms of content:

* Blog posts
* Project cards
* 'About' information

### Blog

Blogging is done via creation of Markdown files located within the `data/posts` folder.

During builds, Astro creates pages for each post file.

#### Format

Post file format is as follows:

`YYYY-MM-DD-title.md`:

```
---
path: "/foo-bar
date: "YYYY-MM-DD"
title: "Foo Bar"
---

Excerpt content goes here (raw text only).

<!-- end -->

Body content goes here (Markdown).
```

Excerpts will be parsed from the end of the frontmatter section until `<!-- end -->`.

#### Drafts

Posts inside `posts/__drafts` will only be displayed in non-production environments
(i.e. `NODE_ENV !== production`).

### Projects

Projects are added via JSON in `data/projects/projects.json` and made available to the application
via GraphQL queries.

#### Format

Project file format is as follows:

`projects.json`:

```
{
  "projects": [
    // ... existing projects ...
    {
      // Project name
      "name": "foo",
      // Projects are displayed in ascending order
      "order": 1,
      // Short description of the project
      "shortDescription": "Spotify visualizer for your living room TV, inspired by Zune.",
      // List of technologies used
      "techStack": [
          "React", "Redux", "Node.js/Express", "Jest", "Heroku", "MongoDB"
      ],
      // Homepage for the project
      "homepageUrl": "https://spune.tinney.dev",
      // Link to source code
      "gitHubUrl": "https://github.com/cdtinney/spune"
    }
  ],
}
```

### About

Personal information must be written within `data/about/about.md`. This will
be rendered onto the 'About' page.

## Usage

If you want to make this website your own:

1) Fork the repository
2) Update `src/data/site-metadata` and the Google Analytics tracking ID in `gatsby-config.js` FIXME
3) Update the page `<title>` in `html.js`
4) Delete/update content in `data` and/or write your own,
    using the [content](#content) section as a guide

## Developing

Development is done on the `develop` branch.
  * All commits to `develop` are automatically deployed.
  * **Development must be done on branches off `develop`, NOT `master`.**
  * This means that pull requests should set `develop` as the base.

Deployment (i.e. build output) is found on `master`.
  * This is because GitHub Pages' User Pages must be deployed on `master`.

### Requirements

* Node.js - Latest LTS release

### Command

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Builds production site to `./dist/`              |
| `pnpm run preview`         | Preview build locally, before deploying          |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Deploying
FIXME

The website can be served via GitHub pages and built with GitHub actions.

The flow is as follows:

1) Code is pushed to a branch
2) The branch is built via the config
3) If the branch is `develop`, build output is pushed to `master`
4) GitHub Pages serves `master`

### Google Analytics

FIXME

Google Analytics support is built-in. Simply update the tracking ID
found in `gatsby-config.js` under the options for the `gatsby-plugin-google-analytics`
plugin.

## License

MIT
