# \<styles-wc\>

[![Code Climate](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/gpa.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Test Coverage](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/coverage.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/coverage) [![Issue Count](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/issue_count.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Build Status](https://travis-ci.org/fs-webdev/styles-wc.svg?branch=master)](https://travis-ci.org/fs-webdev/styles-wc)

## Intro

This repository houses a number of Polymer-based components that are implementations of the FamilySearch style guide.

Steven Lambert likely has a few choice words about this, and we will likely be moving toward a styleguide-owned web component implementation.

## Docs

FamilySearch component catalog entry: [styles-wc](https://beta.familysearch.org/frontier/elements/elements/styles-wc).

## Running the component

1. (Once) Install the [Polymer CLI](https://www.npmjs.com/package/polymer-cli): ```npm i -g polymer-cli```
1. (Once) Install the [frontier-cli](https://github.com/fs-webdev/frontier-cli): ```npm i -g https://github.com/fs-webdev/frontier-cli```
1. Run `bower i` to load all of the dependencies.

This component's auto-generated documentation and associated demo pages are viewable by running:

```bash
frontier element serve
```

## Running Tests

This component is set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests locally, run:

```bash
wct --skip-plugin sauce
```

If you need to debug locally, run:

```bash
polymer test --skip-plugin sauce --local chrome -p
```
