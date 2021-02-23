---
title: "Deploying A Gatsby Site To GitHub Pages"
tags: ["gh-pages", "gatsby", "devops"]
description: "How to deploy a site with Github Pages"
author: "Igor Tatarinov"
date: "2021-02-20"
---

When it comes to deploying your website or webapp online the options seem endless: Heroku, AWS, Digital Ocean, Linode and the list goes on. These options can be overwhelming and excessive in the features they offer. I had heard horror stories of companies being hit with a \$20,000 bill from AWS because they spun up an extra service without realizing it and then forgot to shut it down. I used AWS myself intially to deploy my app and their ecosystem was overwhelming. Every feature had 6 other features behind it and trying to understand how one service worked would lead me down an obsucre rabbit hole of abstraction that would never answer the initial question. Eventually I moved my deployment operations to Linode which was much easier to understand and, as an inevitable tradeoff, has way less options to offer than AWS. Fine by me.
But what about hosting a simple website like a personal portfolio? In my opinion, GitHub pages is an choice. For one, it's quite simple if compared with a similar service like Linode. No database setup, no server configuration. Just download a few packages, run a few commands and the site will be built directly from your project's Github repositroy. I chose this option for my personal site (creatively titled 'personal-site') and found the process straightforward.
I used Gatsby to build my personal site because there were many good reviews about it. To be honest, I do not have a lot of static site development experience so it's hard to make comparisons. But Gatsby did have a lot of features that saved me from redundant work. For example Gatsby has a starter template you can use to build your own site. To install the template on your local machine you need to run:
`gatsby new gatsby-personal-site-template https://github.com/surudhb/gatsby-personal-site-template`
This gave me a default template with pre-built pages like Blog, About and Resume that I could customize to my own portfolio. So far so good.
When the site was ready to be deployed I wanted to use GitHub pages for hosting for reasons mentioned above. The entire deployment process is summarized below

1. npm install gh-pages --save-dev
2. Add the following to your gatsby-config.js file:
   `module.exports = { pathPrefix: "/reponame", }`
3. Add the following to your package.json script:
   `{ "scripts": { "deploy": "gatsby build --prefix-paths && gh-pages -d public" } }`

The command `npm run deploy` will move all contents of your public folder into a branch called gh-pages on your repository. You need to make sure gh-pages is set as the default branch.

Here I ran into some issues during the build process. I kept getting `ENOENT: no such file or directory` and other similar errors. After a little research, it turns out that Gatsby does not clear the cache and public folder at the start of every new `npm run deploy` command. You can run `gatsby clean`, which is supposed to delete these folder but it does not always work. Anyway, deleting the cache and public folder helped me clear the errors during the build stage.
