---
title: "Deploying A Gatsby Site To GitHub Pages"
tags: ["gh-pages", "gatsby", "devops"]
description: "How to deploy a site with Github Pages"
author: "Igor Tatarinov"
date: "2021-02-20"
---

Not long ago, I created this personal site with a gatsby starter template which can be installed with:
`gatsby new gatsby-personal-site-template https://github.com/surudhb/gatsby-personal-site-template`

I'd like to briefly outline the process of deploying my site to github-pages and the different options that were available. You can read about GitHub Pages [here](https://pages.github.com/) but basically it takes your remote repository and builds a static directory on a separate branch from which the files are then served. There are three options for getting this done:

1. Publish to a path like `username.github.io/reponame/`
2. Publish to your subdomian like `username.github.io`
3. Publish to your root subdomain at `username.github.io` and then point it to a custom domain name

I went with option 1. After installing github-pages with

```
npm install gh-pages --save-dev
```

You need to add the following into your gatsby-config.js file

```
module.exports = {
  pathPrefix: "/personal-site",
}
```

`personal-site` is the name of my repo on Github. (creative name right?)

At this time, you also need to create new branch called gh-pages and push to your remote repo. You can do this in two commands:

```
git checkout -b gh-pages
git push -u origin gh-pages
```

In your Github repository settings, scroll down until you see the GitHub Pages section. Make sure `gh-pages` is selected and set as the root source. Usually this is done automatically but sometimes the `master` branch may persist as the source.

After this is done head back to you local repo and add the following in package.json:

```
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```

Now you're ready to deploy the site. Simply run:

```
npm run deploy
```

and this will create a static version of your website inside the `public` folder and push it to your `gh-pages` branch which will then be deployed at `username.github.io/reponame/`. For me, the site deployed without any problems but I was confused on how to push new updates. Since nothing in the gh-pages branch should be edited I couldn't understand how this branch would pull in new changes. It took me a while to realize that new updates can simply be made on the master branch and then re-running 'npm run deploy`. This will rebuild your public folder based on your local repo and you can see the updates in 10-15 minutes at your domain.

While making new updates, I ran into a bunch of strange errors. Errors that had nothing to do with the updates I made. Turns out Gatsby does not clear the public folder each time there is a new build so I had some caching and build errors. The fix here was to simply delete the `.cache` and `public` folders before re-running `npm run deploy`. You can delete these folders with `gatsby clean` but sometimes I had to delete mine manually.

Another issue was blurred images from the GraphQL query. The code found in the starter template is similar to the below:

```
edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
```

Notice that `width` is the only argument passed to childImageSharp. By default Gatsby does not return the full image resolution so the image rendered on your site may look blurred and not clear. To get around this problem, you can pass `quality` as the second argument:

```
edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
```

This will ensure a full resolution of the image is returned.

At the time of this writing I am still in the process of modifying the site and there is lots more to do. I'll continue to make updates for any new issues after they are resolved. One step at a time :)

In the end, I think github-pages is an excellent tool for deploying portfolio sites, landing pages and any sites that contain a lot of static content. The process is simple and documentation is available for most errors. Free hosting at its best.
