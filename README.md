# COVID19-US-Tracker
## Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/02e88872-1e43-4ab0-936e-7fb3a71f9aa4/deploy-status)](https://app.netlify.com/sites/covid19-us-tracker/deploys)

This is an app I made to track the spread of COVID19 in the US. I used a tutorial from [Colby Fayock](https://github.com/colbyfayock/gatsby-starter-leaflet) to bootstrap the app. Then I used an API from John Hopkins to pull in info by county.

The app creates a map that shows the spread of COVID19 around the US by county, via visual & statistical information.

The following is pulled from colbyfayock's README, with the change of my repo instead of his.

## What This Includes
* [Yarn](https://yarnpkg.com/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Sass](https://sass-lang.com)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Resolve Src](https://github.com/alampros/gatsby-plugin-resolve-src)
* [Leaflet](https://leafletjs.com/)
* [React Leaflet](https://react-leaflet.js.org)

# Getting Started

## Requirements
* [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
* [Yarn](https://yarnpkg.com/en/)

## Quick Start
Run the following in your favorite terminal:
```
gatsby new [directory] https://github.com/crc8109/COVID19-World-Tracker
```

## Starting from Scratch
* Set up Yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable)[https://yarnpkg.com/lang/en/docs/install/
* Install the Gatsby CLI globally:
```
yarn global add gatsby-cli
```
* Inside the directory of your choice, scaffold a new Gatsby site:
```
gatsby new [directory] https://github.com/crc8109/COVID19-World-Tracker
```
For example, if I want my installation in `~/Code/new-gatsby-site`, I would navigate to `~/Code` and run:
```
gatsby new new-gatsby-site https://github.com/crc8109/COVID19-World-Tracker
```
* Navigate to your new directory and run:
```
yarn develop
```
* The web app should now run locally

## Troubleshooting

Personal note: Some people have had trouble when cloning this repo. If that's you, try the following commands within your terminal while in the directory of the cloned repo:

```
rm yarn.lock
yarn
gatsby develop
```
