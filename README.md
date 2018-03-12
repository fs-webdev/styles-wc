# \<styles-wc\>

[![Code Climate](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/gpa.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Test Coverage](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/coverage.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/coverage) [![Issue Count](https://codeclimate.com/repos/5890c169bdfc83513e00108d/badges/30a5d02d4d98cd2c3809/issue_count.svg)](https://codeclimate.com/repos/5890c169bdfc83513e00108d/feed) [![Build Status](https://travis-ci.org/fs-webdev/styles-wc.svg?branch=master)](https://travis-ci.org/fs-webdev/styles-wc)

## Intro

This repository houses a number of Polymer-based components that are implementations of the FamilySearch style guide.

Steven Lambert likely has a few choice words about this, and we will likely be moving toward a styleguide-owned web component implementation.

## Docs

FamilySearch component catalog entry: [styles-wc](https://beta.familysearch.org/frontier/elements/elements/styles-wc).

## Running the Component

1. (Once) Install or update the [Polymer CLI](https://www.npmjs.com/package/polymer-cli): ```npm i -g polymer-cli```
1. (Once) Install the [frontier-cli](https://github.com/fs-webdev/frontier-cli): ```npm i -g https://github.com/fs-webdev/frontier-cli```
1. Run `bower install` to load all of the dependencies.
1. Run `polymer analyze > analysis.json` to initialize the docs page.
1. Run `npm install` if you plan on contributing to install development plugins. See [Development Standards Enforcement](#development-standards-enforcement)

This component's auto-generated documentation is viewable by running:

```bash
frontier element serve
```

> NOTE: If you attempt to `frontier element serve` on a clean install, you will get an error, stating that the analysis.json file (used to populate the documentation page) does not exist. You can fix this by either running `frontier element serve -a`, or by auto-loading the demo page via:

```bash
frontier element serve -d
```

This component's demo page is viewable by running the above command.

## Online Docs & Demo

The FamilySearch Element Catalog is located at: [https://www.familysearch.org/frontier/elements/](https://www.familysearch.org/frontier/elements/), with access granted to members of the `fs-webdev` GitHub organization. You can browse through each shared element's docs and demo

## Submodules for Common Files

The `tree-common-build-scripts` folder is a Git submodule, made to house build-related code common across multiple repositories. In order to update, run:

```bash
git pull --recurse-submodules; git submodule update --remote --recursive
```

## Automatic Releases

Releases are automatically be created after successful builds of `master` when bower/package.json versions change by manually calling the [Frontier Github Automator](https://github.com/fs-webdev/github-automator) via the shared [create_release.js](https://github.com/fs-webdev/tree-common-build-scripts/blob/master/bin/create_release.js) node script.

## Special Plugins

In order for the **`size-limit`** WCT plugin to run, you need to globally install it:

```bash
npm install -g fs-webdev/size-limit
```

### Development Standards Enforcement

> FamilySearch components are developed in compliance with ESLint and CSSLint common standards. Standards checking is run as part of an npm-based husky pre-push hook, and can also be explicitly run via the **`npm test`**, **`npm run standard`**, and **`npm run-standard-fix`** commands. Currently needs an **`npm install`** before everything will work.
>
> EXPLANATION: The **pre-push** hook will run standards with autofix enabled, and if there are no errors, append any associated changes made to the current commit. This means that if you have any local uncommitted changes, they will be automatically included in any commit. Prior to committing, revert local changes. TODO: Try to use the stashandappend npm script in concert with a prepush

In order for **`semistandard`** to run, you need to globally install it:

```bash
npm install -g semistandard
npm install -g eslint-plugin-html
npm install -g snazzy
```

which will enable the node scripts to run:

```bash
semistandard --verbose '**/*.html' '**/*.js' --fix | snazzy
```

for a report of JS standards infractions and to automatically fix the easy infractions _(mostly whitespace, commas, quotes, and semicolons)_. Customizations should be added to a `semistandard` section of package.json.

In order for **`stylelint`** to run, you need to globally install it:

```bash
npm install -g stylelint
npm install -g stylelint-config-standard
```

which will enable the node scripts to run:

```bash
stylelint '**/*.html' '**/*.css' --fix
```

for a report of CSS standards infractions and to automatically fix the easy infractions _(mostly whitespace)_. Customizations should be added to a `stylelint` section of package.json.

> NOTE: You can run `standard` functionally on a repo with the module just globally installed, but `stylelint 8.4.0` currently needs a local npm install in the target repository, otherwise it can't find its dependencies correctly.

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
npm test
```

which will run the standards checks through `semistandard` and `stylelint`, and then the unit tests via `wct`.

> NOTE: Do not run the `npm test` command on Travis CI, unless you want to run semistandard & stylelint, which would require them to be globally installed, first.

or

```bash
wct --skip-plugin sauce
```

If you need to debug locally (keeping the browser open), run:

```bash
wct --skip-plugin sauce -p
```

or

```bash
polymer test --skip-plugin sauce --local chrome -p
```

If you want to run the full suite of SauceLabs browser tests, run:

```bash
wct test/index.html --configFile wct.conf.json  --sauce-username {USERNAME} --sauce-access-key {ACCESS_KEY}
```
