---
title: "Paralysis By Analysis"
tags: ["productivity", "deep-dive", "knowledge", "accomplishment"]
description: "999"
author: "Igor Tatarinov"
date: "2020-10-12"
---

All too often during the course of creating new features for my app I am constantly confronted with the issue of multiple options to solve problems and their inherent tradeoffs. It was something I really struggled with in the beginning of my career as my knowledge base was quite small and anytime I asked experienced developers for advice I would often be left with more questions than answers.

A perfect example of this issue was when I began styling the front end of my app. As a backend specialist, creating the API, writing CRUD functions, user validation, data models, etc was familiar territory and I felt comfortable working on my own but the front end was another story. I felt uncomfortable fidgeting around with the HTML/CSS and always looked for work related to the server in order to avoid the client. "So what if it doesn't look good, the app still functions." If only everyone else felt the same way, wouldn't that be nice :)

Eventually though I began to consider different options available. A few people suggested using Tailwind, a low-level CSS framework which, among many other features, automatically removes any unused CSS during the production build meaning the CSS bundle is at the smallest possible size. I found this quite appealing because I always hated the idea of a bloated code base that complicates future iterations. The trade off here was the low-level nature of the framework painfully exposed the fact I knew very little about how to write custom CSS classes. I realized this option would take forever to implement by myself and I would have to end up getting some professional help in the end.

The next option was Bootstrap which comes with a lot of functionality out of the box. Bootstrap was appealing because it meant I didn't need to understand CSS at a fundamental level and I could begin using their features right away. Simply install the package and begin importing the features. Here the tradeoff was the exact opposite of Tailwind. After playing around with Bootstrap for a week I quickly realized that my codebase would grow substantially and I would end up with a lot of code I didn't actually use. Bootstrap felt clumsy and I was already clumsy when it came to styling the client. The utility was there but so was the baggage. I made good academic progress for about a week but it wasn't anything near production level.

So after several weeks of study a sense of despair was creeping in. I was learning a lot about CSS and the different frameworks available but nothing was getting done. The app was functional but painful to look at. I felt like the rabbit hole of self education had no bottom. As they say in the military indecision is a decision too. So I had to take off my engineering hat and put on the product owner hat instead. The front end needed to be built and it needed to be mobile friendly. I realized all this analysis was getting me nowhere so I outsourced the client design to a front-end developer. Together we ended up writing plain vanilla CSS which, considering all options available, was probably not the best choice but at least it was easy to understand and, most importantly, the front end was ready for production in three weeks.
