# \<styles-wc\>

[![Code Climate](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/gpa.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Test Coverage](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/coverage.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/coverage) [![Issue Count](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/issue_count.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Build Status](https://travis-ci.org/fs-webdev/styles-wc.svg?branch=master)](https://travis-ci.org/fs-webdev/styles-wc)

## Intro

This repository houses a number of Polymer-based components that are implementations of the FamilySearch style guide.

Steven Lambert likely has a few choice words about this, and we will likely be moving toward a styleguide-owned web component implementation.

## Docs

FamilySearch component catalog entry: [styles-wc](https://beta.familysearch.org/frontier/elements/elements/styles-wc).

## Running the component

1. (Once) Install or update the [Polymer CLI](https://www.npmjs.com/package/polymer-cli): ```npm i -g polymer-cli```
1. (Once) Install the [frontier-cli](https://github.com/fs-webdev/frontier-cli): ```npm i -g https://github.com/fs-webdev/frontier-cli```
1. Run `bower i` to load all of the dependencies.
1. Run `polymer analyze > analysis.json` to set up docs/demo pages.

This component's auto-generated documentation and associated demo pages are viewable by running:

```bash
frontier element serve
```

## Submodules for Common Files

The `tree-common-build-scripts` folder is a Git submodule, made to house build-related code common across multiple repositories. In order to update, run:

```bash
git pull --recurse-submodules; git submodule update --remote --recursive
```

## Running Tests

This component is set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester).

In order to run the `wct` command, you need to globally install web-component-tester:

> NOTE OF WARNING: This component is using a [patcharound](https://github.com/thedeeno/web-component-tester-istanbul/issues/38#issuecomment-287544522) in order to incorporate code coverage reporting. In order to be able to run unit tests locally, (as of 2017-05-18) you must install the *patched* versions of web-component-tester and web-component-tester-istanbul. (You may need to uninstall other versions, first)

```bash
npm install -g t2ym/web-component-tester#6.0.0-wct6-plugin.1
npm install -g t2ym/web-component-tester-istanbul#0.10.1-wct6.11
```

To run tests locally, run:

```bash
wct --skip-plugin sauce
```

If you need to debug locally (keeping the browser open), run:

```bash
polymer test --skip-plugin sauce --local chrome -p
```

If you want to run the full suite of SauceLabs browser tests, run:

```bash
wct test/index.html --configFile wct.conf.json  --sauce-username {USERNAME} --sauce-access-key {ACCESS_KEY}
```
