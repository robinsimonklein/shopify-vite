<div align="center">
  <img src="https://user-images.githubusercontent.com/36634414/163683259-924c58d7-6b99-42ef-9b83-72b4896ecb0a.png" />
  <h1>Shopify + Vite theme starter</h1>
</div>

This template is a blank theme starter for Shopify using [Vite](https://vitejs.dev/) for assets bundling. This unlocks the ability to easily use modern development methods like SCSS, npm packages, entry chunks...

It also uses [Stimulus](https://stimulus.hotwired.dev/) for the javascript code to augment the templates DOM with just enough behavior to make it shine.
  
> **Warning**
> This is a strict minimum blank theme, you will need to code all the templates content, style & features to get a production ready theme.

## Getting started

First, [create a repo from this template on GitHub.](https://github.com/robinsimonklein/shopify-vite/generate)

### Installation

#### 1. Install project dependencies
```shell
yarn install
```

#### 2. Authenticate with Shopify CLI
You will first need to install the Shopify CLI. Go to the [shopify's docs](https://shopify.dev/themes/tools/cli) to learn more.

Then, login into your store
```shell
shopify login --store johns-apparel.myshopify.com
```

### Development

Build `css` and `javascript` assets in watch mode during development :
```shell
yarn watch
```

And serve the theme with Shopify CLI to see the perview and edit theme 
```shell
shopify theme serve
```

<!-- TODO: Add folder structure explanation -->

## Continuous Integration and Deployment

### Github Actions
This theme starter uses [GitHub Actions](https://github.com/features/actions) to maintain the quality of the theme.

#### Shopify/theme-check-action
The theme runs **Shopify Theme Check** on every commit via [Shopify/theme-check-action](https://github.com/Shopify/theme-check-action).

### Deploy to shopify

You can deploy the theme for production by publishing a new **release**, or by manually running the `CI/CD` *GitHub Action* with the *deploy theme* option checked.

The deployment is automatically done on an orphan branch named "shopify". You don't need to create this branch, it will be created automatically if it doesn't exist yet.

The `shopify` branch is cleaned of all files not needed for Shopify and respects the required theme [directory structure](https://shopify.dev/themes/architecture#directory-structure-and-component-types). 
The `assets` folder contains the assets that are compiled and ready for production.

Publish this theme to Shopify via the **GitHub Integration** and selecting the `shopify` branch. The `main` branch can be used for a development/pre-production environment.
