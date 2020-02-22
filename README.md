<p align="center">
  <a href="https://klair.co"><img src="src/images/github-header.png" /></a>
 </p>
<h2 align="center">
  👔 Portfolio thingy, built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
</h2>
<p align="center">
  <a href="https://klair.co">klair.co</a>
</p>
<p align="center">
  <a href="https://github.com/perminder-klair/www.klair.co/actions"><img src="https://github.com/perminder-klair/www.klair.co/workflows/CI%2FCD%20Pipeline/badge.svg" /></a>
  <a href="https://codeclimate.com/github/perminder-klair/www.klair.co/maintainability"><img src="https://api.codeclimate.com/v1/badges/8f561ec93e0f8c6b15d9/maintainability" /></a>
  <a href="https://codeclimate.com/github/perminder-klair/www.klair.co/test_coverage"><img src="https://api.codeclimate.com/v1/badges/8f561ec93e0f8c6b15d9/test_coverage" /></a>
  <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/perminder-klair/www.klair.co.svg" /></a>
</p>

- [🎉 Features](#-features)
  - [⛵️ Lighthouse score](#️-lighthouse-score)
  - [🗂 JSON Resume](#-json-resume)
  - [💍 One data file to rule all pages](#-one-data-file-to-rule-all-pages)
  - [🐱 GitHub repositories](#-github-repositories)
  - [💅 Theme switcher](#-theme-switcher)
  - [🏆 SEO component](#-seo-component)
  - [📇 Client-side vCard creation](#-client-side-vcard-creation)
  - [💫 Page transitions](#-page-transitions)
  - [📈 Matomo (formerly Piwik) analytics tracking](#-matomo-formerly-piwik-analytics-tracking)
  - [🖼 Project images](#-project-images)
  - [💎 Importing SVG assets](#-importing-svg-assets)
  - [🍬 Typekit component](#-typekit-component)
- [✨ Development](#-development)
  - [🔮 Linting](#-linting)
  - [👩‍🔬 Testing](#-testing)
  - [🎈 Add a new project](#-add-a-new-project)
- [🚚 Deployment](#-deployment)
- [🏛 Licenses](#-licenses)

---

## 🎉 Features

The whole [portfolio](https://matthiaskretschmann.com) is a React-based single page app built with [Gatsby v2](https://www.gatsbyjs.org).

Most metadata is powered by one `resume.json` file based on [🗂 JSON Resume](#-json-resume), and one `projects.yml` file to [define the displayed projects](#-one-data-file-to-rule-all-pages).

### ⛵️ Lighthouse score

![Lighthouse scores](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

### 🗂 JSON Resume

Most site metadata and social profiles are defined in [`content/resume.json`](content/resume.json) based on the [JSON Resume](https://jsonresume.org) standard and used throughout the site as a custom React hook. Additionally, a resume page is created under `/resume`.

If you want to know how, have a look at the respective components:

- [`content/resume.json`](content/resume.json)
- [`src/pages/resume/index.jsx`](src/pages/resume/index.jsx)
- [`src/hooks/use-resume.js`](src/hooks/use-resume.js)

### 💍 One data file to rule all pages

All displayed project content is powered by one YAML file where all the portfolio's projects are defined. The project description itself is transformed from Markdown written inside the YAML file into HTML on build time.

Gatsby automatically creates pages from each item in that file utilizing the [`Project.jsx`](src/templates/Project.jsx) template.

- [`content/projects.yml`](content/projects.yml)
- [`gatsby-node.js`](gatsby-node.js)
- [`src/templates/Project.jsx`](src/templates/Project.jsx)

### 🐱 GitHub repositories

The open source section at the bottom of the front page shows selected GitHub repositories, sourced from GitHub.

On build time, all my public repositories are fetched from GitHub, then filtered against the ones defined in `content/repos.yml`, sorted by the last push date, and provided via the `pageContext` of the front page.

If you want to know how, have a look at the respective components:

- [`gatsby-node.js`](gatsby-node.js)
- [`content/repos.yml`](content/repos.yml)
- [`src/components/molecules/Repository.jsx`](src/components/molecules/Repository.jsx)

### 💅 Theme switcher

Includes a theme switcher which allows user to toggle between a light and a dark theme. Switching between them also happens automatically based on user's system preferences. If a visitor has set the theme manually that selection is remembered in `localStorage`, and is restored on next visit. All handled by [use-dark-mode](https://github.com/donavon/use-dark-mode)

If you want to know how, have a look at the respective components:

- [`src/components/molecules/ThemeSwitch.jsx`](src/components/molecules/ThemeSwitch.jsx)

### 🏆 SEO component

Includes a SEO component which automatically switches all required `meta` tags for search engines, Twitter Cards, and Facebook OpenGraph tags based on the browsed route/page.

If you want to know how, have a look at the respective component:

- [`src/components/atoms/SEO.jsx`](src/components/atoms/SEO.jsx)

### 📇 Client-side vCard creation

The _Add to addressbook_ link in the footer automatically creates a downloadable vCard file on the client-side, based on data defined in `content/meta.yml`.

If you want to know how, have a look at the respective component:

- [`src/components/atoms/Vcard.jsx`](src/components/atoms/Vcard.jsx)

### 💫 Page transitions

Includes mechanism for transitioning between route changes with full page transitions defined with [react-pose](https://popmotion.io/pose/). Mechanism ~~stolen~~ inspired by [gatsby-universal](https://github.com/fabe/gatsby-universal).

If you want to know how, have a look at the respective components:

- [`src/components/Layout.jsx`](src/components/Layout.jsx)
- [`src/helpers/wrapPageElement.jsx`](src/helpers/wrapPageElement.jsx)
- [`gatsby-browser.js`](gatsby-browser.js)
- [`gatsby-ssr.js`](gatsby-ssr.js)

### 📈 Matomo (formerly Piwik) analytics tracking

Site sends usage statistics to my own [Matomo](https://matomo.org) installation. To make this work in Gatsby, I created and open sourced a plugin, [gatsby-plugin-matomo](https://github.com/perminder-klair/gatsby-plugin-matomo), which is in use on this site.

- [gatsby-plugin-matomo](https://github.com/perminder-klair/gatsby-plugin-matomo)

### 🖼 Project images

All project images live under `content/images` and are automatically attached to each project based on the inclusion of the project's `slug` in their filenames.

All project images make use of the excellent [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) plugin, working in tandem with [gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp) and [gatsby-transformer-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp).

All together, Gatsby automatically generates all required image sizes for delivering responsible, responsive images to visitors, including lazy loading of all images. Also includes the [intersection-observer polyfill](https://github.com/w3c/IntersectionObserver) to make lazy loading work properly in Safari.

All project images use one single component where one main GraphQL query fragment is defined, which then gets used throughout other GraphQL queries.

- [`src/components/atoms/ProjectImage.jsx`](src/components/atoms/ProjectImage.jsx)

### 💎 Importing SVG assets

All SVG assets under `src/images/` will be converted to React components with the help of [gatsby-plugin-svgr](https://github.com/zabute/gatsby-plugin-svgr). Makes use of [SVGR](https://github.com/smooth-code/svgr) so SVG assets can be imported like so:

```js
import { ReactComponent as Logo } from './components/svg/Logo'

return <Logo />
```

### 🍬 Typekit component

Includes a component for adding the Typekit snippet.

If you want to know how, have a look at the respective component:

- [`src/components/atoms/Typekit.jsx`](src/components/atoms/Typekit.jsx)

## ✨ Development

You can simply use [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose/) or install and run dependencies on your local system.

```bash
git clone git@github.com:perminder-klair/www.klair.co.git
cd portfolio/

# GATSBY_GITHUB_TOKEN is required for some parts
cp .env.sample .env
vi .env

# use Docker
docker-compose up

# or go with local system
npm i
npm start
```

### 🔮 Linting

ESlint, Prettier, and Stylelint are setup for all linting purposes:

```bash
npm run lint
```

To automatically format all code files:

```bash
npm run format
npm run format:css
```

### 👩‍🔬 Testing

Test suite is setup with [Jest](https://jestjs.io) and [react-testing-library](https://github.com/kentcdodds/react-testing-library).

To run all tests, including all linting tests:

```bash
npm test
```

All test files live beside the respective component. Testing setup, fixtures, and mocks can be found in `./jest.config.js` and `./jest` folder.

### 🎈 Add a new project

To add a new project, run the following command. This adds a new item to the top of the `projects.yml` file, creating the title & slug from the argument:

```bash
npm run new -- "Hello"
```

Then continue modifying the new entry in [`content/projects.yml`](content/projects.yml).

Finally, add as many images as needed with the file name format and put into `content/images/`:

```text
SLUG-01.png
SLUG-02.png
SLUG-03.png
...
```

## 🚚 Deployment

Automatic deployments are triggered upon successful tests & builds via GitHub Actions:

- push to `master` initiates a live deployment
- any Pull Request, and subsequent pushes to it, initiates a beta deployment

The deploy command simply calls the [`scripts/deploy.sh`](scripts/deploy.sh) script, syncing the contents of the `public/` folder to S3:

```bash
npm run deploy
```

Upon live deployment, deploy script also purges the Cloudflare cache, and pings search engines. GitHub requires the following environment variables to be setup for successful deployments in the repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `CLOUDFLARE_EMAIL`
- `CLOUDFLARE_ZONE`
- `CLOUDFLARE_KEY`

## 🏛 Licenses

**© Copyright 2019 Matthias Kretschmann**

All images and projects are plain ol' copyright, most displayed projects are subject to the copyright of their respective owners.

Don't care if you fork & play with it, but you're not allowed to publish anything from it as a whole without my written permission. Also please be aware, the combination of typography, colors & layout makes up my brand identity. So please don't just clone everything, but rather do a remix!

All the rest, like all code and documentation, is under:

**The MIT License**

[Full MIT license text](LICENSE)
