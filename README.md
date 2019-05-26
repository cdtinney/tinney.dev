# tinney.dev
> A personal website.

[![Build Status](https://travis-ci.org/cdtinney/tinney.dev.svg?branch=develop)](https://travis-ci.org/cdtinney/tinney.dev)

## Contents

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
  - [Installing](#installing)
  - [Running](#running)
  - [Building](#building)
- [Deploying](#deploying)
  - [Travis CI](#travis-ci)
  - [Google Analytics](#google-analytics)
- [License](#license)

## Introduction

This website is built with:

* [GatsbyJS](https://gatsbyjs.org) - Static website generation using React
* [Travis CI](https://travis-ci.org) - Continuous integration
  and deployment to GitHub Pages

## Content

The website provides three primary forms of content:

* Blog posts
* Project cards
* 'About' information

### Blog

Blogging is done via creation of Markdown files located within the `data/posts` folder.

During builds, Gatsby creates pages for each post file.

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
2) Update `siteMetadata` and the Google Analytics tracking ID in `gatsby-config.js`
3) Update the page `<title>` in `html.js`
4) Delete/update content in `data` and/or write your own,
    using the [content](#content) section as a guide

## Developing

Development is done on the `develop` branch.
  * All commits to `develop` are automatically deployed.
  * **Development must be done on branches off `develop`, NOT `master`.**
  * This means that pull requests should set `develop` as the base.

Deployment (i.e. build output) is found on `master`.
  * This is because GitHub Pages User Pages must be deployed on `master`.
  * **Travis CI is solely responsible for deploying builds to `master`.**

### Requirements

* Node.js - Latest LTS release

### Installing

First, clone the repository.

To install dependencies:

```
$ npm install
```

### Running

To run a development server with live-reload (and linting):

```
$ npm run develop
```

### Building

To build the website for production:

```
$ npm run build
```

Build output is located within the `public` folder.

## Deploying

### Travis CI

The website can be served via GitHub pages after being built by Travis CI.

The configuration file is found at `.travis.yml`; the `GITHUB_TOKEN` environment
variable must be set.

The flow is as follows:

1) Code is pushed to a branch
2) The branch is built via the config
3) If the branch is `develop`, build output is pushed to `master`
4) GitHub Pages serves `master`

### Google Analytics

Google Analytics support is built-in. Simply update the tracking ID
found in `gatsby-config.js` under the options for the `gatsby-plugin-google-analytics`
plugin.

## License

MIT
