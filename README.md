# tinney.dev
> Personal website built with Gatsby.

[![Build Status](https://travis-ci.org/cdtinney/tinney.dev.svg?branch=develop)](https://travis-ci.org/cdtinney/tinney.dev)

## Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installing](#installing)
  - [Running](#running)
  - [Building](#building)
- [License](#license)

## Introduction

This website is built with:

* [GatsbyJS](gatsbyjs.org) for static website generation
* [Travis CI](https://travis-ci.org) for continuous integration
  and deployment to GitHub Pages

## Getting Started

Development is done on the `develop` branch.
  * All commits to `develop` are automatically deployed.
  * Development should be done on branches sourced from `develop`, NOT `master`.

Deployment (i.e. build output) is found on `master`.
  * This is because GitHub Pages User Pages must be deployed on `master`.

### Requirements

* Node.js - Latest LTS release

### Installing

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
