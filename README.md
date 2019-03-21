# tinney.dev
> A personal website.

[![Build Status](https://travis-ci.org/cdtinney/tinney.dev.svg?branch=develop)](https://travis-ci.org/cdtinney/tinney.dev)

## Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Content](#content)
  - [Blog](#blog)
    - [Format](#format)
  - [Projects](#projects)
    - [Format](#format-1)
  - [About](#about)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)
  - [Installing](#installing)
  - [Running](#running)
  - [Building](#building)
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

Markdown content goes here.
```

### Projects

Projects are added via JSON files in `data/projects` and made available to the application
via GraphQL queries.

#### Format

Project file format is as follows:

`project.json`:

```
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
  * Development should be done on branches sourced from `develop`, NOT `master`.

Deployment (i.e. build output) is found on `master`.
  * This is because GitHub Pages User Pages must be deployed on `master`.

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

## License

MIT
