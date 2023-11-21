---
layout: "layouts/_case-study.njk"
title: "Rewatch"
seoTitle: "Rewatch x Mike Stilling: Designing for growth"
seoDescription: "See how Mike designed and built everything marketing related for Rewatch"
ogTitle: "Rewatch x Mike Stilling: Designing for growth"
ogDesc: "See how Mike designed and built everything marketing related for Rewatch"
ogImage: "/assets/images/og/rewatch.jpg"
ogImageAlt: "A screenshot of Rewatch's homepage hero section that Mike designed"
role: "Sr. Web Designer"
headline: Meet less. <span class="space:nowrap">Build more.</span>
subhead: Rewatch saves, summarizes, and shares your company's <span class="sm:space:nowrap">meetings and</span> screen recordings <span class="space:nowrap">in a collaborative format.</span>
closing: Oof, that was a lot. <span class="space:nowrap">Thanks for reading!</span>
gradient: radial-gradient(100% 100% at 50% 0%, rgba(43, 114, 253, 0.2) 0%, rgba(32, 107, 255, 0) 100%)
---

## While moving from product to sales-led growth strategies and back again, with a fluctuating customer profile, and an ever-changing product — Mike was responsibile for finding ways to drive revenue through marketing, brand, and web design <span class="space:nowrap">at Rewatch.</span>

As the sole designer focused on marketing, this meant Mike <span class="space:nowrap">had to balance</span> efficiency and quality, while prioritizing impact.

### <span class="font:serif italic">on</span> Efficiency

[Rewatch](https://rewatch.com/) generally has around ~20 employees and targets medium to enterprise sized businesses—making it important <span class="space:nowrap">to swing-up</span> and look more reliable <span class="space:nowrap">and established.</span>

Mike's technical background and familiarity with just about every design tool, made it possible to build a lot, fast, so that Rewatch could look as such and compete with <span class="space:nowrap">larger competitors.</span>

The challenge was shaping the brand in a way that allowed assets to be designed quickly, while still looking great, and being flexible enough to change with <span class="space:nowrap">the business.</span>

<figure class="relative w:100p my:64 sm:my:72 md:my:96 text:center">
    <img
        src="/assets/images/graphics/rewatch-blog-collection.webp"
        alt="a collection of blog graphics Mike made for Rewatch"
        width="1920" height="1160"
        class="relative w:100p h:auto max-w:none z:1"
        loading="lazy"
        decoding="async"
    />
    <figcaption class="mt:24 mb:n32">
        Some of the 100 or so blog and OpenGraph <span class="space:nowrap">images Mike has created for Rewatch</span>
    </figcaption>
</figure>

#### Building&nbsp; <span class="font:serif italic">fast</span>

At any given moment, "good" SaaS branding is fairly predictable. Strapped on time and striving for growth, reinventing this wasn't feasible or conducive to the business goals. Instead, Mike opted to borrow and build upon bits and pieces of what currently works for industry leading teams targetting <span class="space:nowrap">a similar audience.</span>

Rewatch's CEO is a fantastic product designer. Running with pieces of his previous work toward the brand also helped shape aspects of what it is today. On the marketing side, feedback centered around making the brand more approachable than it's initial state of being dark and developer focused. Outside of that, most of the team's early feedback was like, <span class="space:nowrap">"we like Apple..." 😅</span>

<mark>Mike reached for what was quickly achievable and balanced between the different stakeholders: clean typography and lots of white space. By removing the "dark mode" first approach to the brand, everything felt a bit friendlier and easier to digest.</mark>

For the final touches, Mike looked toward the product for direction. Thankfully, Rewatch's product design team is top notch. To increase uniformity, Mike pulled the primary color, grayscale, button stylings, and font-family from the product.

<figure class="relative w:100p mt:32 sm:mt:48 mb:64 sm:mb:56 text:center">
    <img
        src="/assets/images/graphics/rewatch-home-hero.webp"
        alt="a screenshot of the Rewatch.com homepage"
        width="1400" height="896"
        class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
        loading="lazy"
        decoding="async"
    />
    <figcaption class="mt:12 sm:mt:24 mb:n32">
        Rewatch's homepage hero section
    </figcaption>
</figure>

<div class="flex flex:col sm:flex:row gap:28 sm:gap:48 mb:64 sm:mb:72 md:mb:96">
    <figure class="relative w:100p text:center mb:40 sm:mb:0">
        <img
            src="/assets/images/graphics/rewatch-slide-title.webp"
            alt="title slide from Rewatch's sales deck"
            width="1152" height="648"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mt:12 sm:mt:24 mb:n32">
            Title slide from the Rewatch sales deck
        </figcaption>
    </figure>
    <figure class="relative w:100p text:center">
        <img
            src="/assets/images/graphics/rewatch-slide-overview.webp"
            alt="overview slide from Rewatch's sales deck"
            width="1152" height="648"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mt:12 sm:mt:24 mb:n32">
            Overview slide from the Rewatch sales deck
        </figcaption>
    </figure>
</div>

#### <span class="font:serif italic">under</span> the hood

<mark>Mike also designed, built, and managed Rewatch's marketing website.</mark> He chose tools that made building quick and flexible, while straightforward enough for the product folks to dive into, <span class="space:nowrap">if help</span> was <span class="space:nowrap">ever needed.</span>

To accomplish this, he used [Eleventy](http://11ty.dev) as an SSG, with [Nunjucks](https://mozilla.github.io/nunjucks/) for templating, and [UniformCSS](https://uniformcss.com/) as a utility framework; resulting in markup that was nearly identical to the product's front-end. This enabled collaboration from the product team along with the ability to design in code — which saves the team a lot of time during the page creation process.

```html
<!-- Website: 24px paragraph tag that's blue -->
<p class="font:2xl color:blue-md">
    No light/dark mode = more color variations.
</p>
<!-- Product: 24px paragraph tag that's blue -->
<p class="font:2xl color:blue">
    The web app used CSS variables for color theming.
</p>
```

Since CMS's often promote over-templatization, Mike and the team opted to only rollout CMS functionality in places where it was absolutely needed, such as the blog and changelog. Mike used Netlify CMS (now [Decap](https://decapcms.org/docs/intro/)), as a minimalist solution. Being Git-based and writing to markdown, this CMS fit well with the existing content format too.

<figure class="relative w:100p mt:32 sm:mt:36 md:mt:48 mb:64 sm:mb:72 md:mb:96 text:center">
    <img
        src="/assets/images/graphics/rewatch-blog-styling.webp"
        alt="a collection of blog graphics Mike made for Rewatch"
        width="1260" height="720"
        class="relative w:100p h:auto max-w:none z:1 radius:xl overflow:hidden"
        loading="lazy"
        decoding="async"
    />
    <figcaption class="mt:24 mb:n32">
        Rewatch blog content styling
    </figcaption>
</figure>

### <span class="font:serif italic">on</span> Quality

Moving extremely fast with limited resources will lead to sloppiness. It's inevitable. At some point, there will be work that is not as great as it could be. At Rewatch, Mike tried to minimize this by taking a thoughtful approach <span class="space:nowrap">to visual direction.</span>

Relying on ample whitespace, consistent color, and bold typography allowed Mike to work more efficiently within his wheelhouse, reducing the amount of time he spent in processes that he's less skilled at, such as vector illustration. This kept asset creation fast and the quality of those <span class="space:nowrap">assets stronger.</span>

<figure class="relative w:100p mt:32 sm:mt:36 md:mt:48 mb:64 sm:mb:72 md:mb:96 text:center">
    <img
        src="/assets/images/graphics/rewatch-ads.webp"
        alt="a collection of blog graphics Mike made for Rewatch"
        width="1920" height="1260"
        class="relative w:100p h:auto max-w:none z:1"
        loading="lazy"
        decoding="async"
    />
    <figcaption class="mt:24 mb:n32">
        A handful of LinkedIn Ads Mike created over the past <span class="space:nowrap">two years. Rewatch was purple before it was blue.</span>
    </figcaption>
</figure>

#### <span class="font:serif italic">increasing</span> Performance

Conveying SaaS concepts in a purely iconified or visual way, without text, is nearly impossible. Due to that, messaging plays a pivotal role within design for SaaS companies and is largely responsible for the performance and result <span class="space:nowrap">of design outputs.</span>

At Rewatch, messaging has bounced between benefit and feature-based approaches. The main cause of the switching was due to shifts in the ICP that Rewatch was targetting.

<div class="flex flex:col sm:flex:row gap:24 sm:gap:48 w:100p text:center my:24 sm:my:36">
    <div class="w:100p flex flex:col align-items:center justify-content:center p:24 sm:p:36 lg:p:48 bg:primary-rg bg-opacity:10 border:1 border:primary-rg border-opacity:30 radius:xl">
        <div class="font:xs uppercase tracking:loosest mb:12 color:link-rg-i">
            Feature example:
        </div>
        <div class="font:2xl sm:font:xl md:font:4xl lg:font:5xl font:serif italic leading:130 mb:12">
            Meeting &amp; screen recording<br/> for your entire company
        </div>
    </div>
    <div class="w:100p flex flex:col align-items:center justify-content:center p:24 sm:p:36 lg:p:48 bg:primary-rg bg-opacity:10 border:1 border:primary-rg border-opacity:30 radius:xl">
        <div class="font:xs uppercase tracking:loosest mb:12 color:link-rg-i">
            Benefits example:
        </div>
        <div class="font:2xl sm:font:xl md:font:4xl lg:font:5xl font:serif italic leading:130 mb:12">
            Video that empowers<br/> your entire company
        </div>
    </div>
</div>

It was assumed that enterprise buyers preferred benefits, but Rewatch's benefits provide limited insight into functionality —resulting in grandiose promises from an unfamiliar company with little explanation of how those promises would <span class="space:nowrap">be fulfilled.</span>

More or less, when using benefits, people had a hard time understanding what the product actually did.

While at first, going between the two was a matter of preference and opinion, <mark>leveraging analytics, Mike uncovered that feature-based messaging was more effective. Pages using concise, feature-based copy converted at a significantly higher rate than those heavily relying <span class="space:nowrap">on benefit-based jargon.</span></mark>

<figure class="relative w:100p mt:32 sm:mt:48 mb:64 sm:mb:72 text:center">
    <img
        src="/assets/images/graphics/rewatch-spike-intro.webp"
        alt="a screenshot of the Rewatch.com homepage"
        width="1080" height="720"
        class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
        loading="lazy"
        decoding="async"
    />
    <figcaption class="mt:12 sm:mt:24 mb:n32">
        The overview section of a spike Mike created to visualize <span class="space:nowrap">what a feature-based approach could look like</span>
    </figcaption>
</figure>

Although, benefits still had a time and place. <mark>Working in unison with Darcy, the demand-gen manager, they found benefit-based headlines that were relatable performed better on social channels as a means to capture <span class="space:nowrap">initial interest.</span></mark>

<figure class="relative w:100p mt:32 sm:mt:48 mb:64 sm:mb:72 text:center">
    <div class="flex flex:col sm:flex:row gap:24 sm:gap:48">
        <img
            src="/assets/images/graphics/rewatch-ad-1.webp"
            alt="a screenshot of the Rewatch.com homepage"
            width="552" height="552"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <img
            src="/assets/images/graphics/rewatch-ad-2.webp"
            alt="a screenshot of the Rewatch.com homepage"
            width="552" height="552"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
    </div>
    <figcaption class="mt:12 sm:mt:24 mb:n32">
        Rewatch's highest performing LinkedIn ads
    </figcaption>
</figure>

On the marketing site, this lead to the approach of capturing interest with a relatable benefit as a headline, then clarified immediately with "how" that benefit will be delivered via features in the subhead and following <span class="space:nowrap">supporting sections.</span>

### <span class="font:serif italic">Prioritizing</span> impact

How we spend our time is always a tradeoff. To actively focus on "X" means not focusing on "Y" — and, when there's an endless pile of work in front of us, it's easy to lose sight <span class="space:nowrap">of this.</span>

To add to this pile, most <mark>mainstream marketing practices, such as content and/or account-based marketing, promote quantity over quality.</mark> Rewatch did both — seemingly almost every <span class="space:nowrap">B2B SaaS company does.</span>

Due to this widespread adoption, <mark>Mike believes many teams are just going through the motions; not considering whether the content itself is meaningful or deeply analyzing performance to clarify these tactics actually work and <span class="space:nowrap">warrant our time.</span></mark>

#### <span class="font:serif italic">Shifting</span> focus

At Rewatch, Mike had spent ~50% of his time creating assets for content marketing lead by the marketing team. Continually, the results of this tactic had been abysmal. For reference, like: 150 impressions per social post announcing them, engagement only coming from internal employees, <10 clicks leading to page views per month, and almost never <span class="space:nowrap">a conversion...</span>

<div class="relative w:100p max-w:640 my:32 text:center">
    <img
        src="/assets/images/graphics/rewatch-linkedin-analytics.webp"
        alt="a screenshot of bad analytics from a Rewatch LinkedIn post"
        width="1280" height="768"
        class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
        loading="lazy"
        decoding="async"
    />
</div>

Rewatch's content wasn't increasing SEO performance either. <mark>Over six months, only one blog post had over >100 clicks.</mark>

<div class="relative w:100p max-w:640 my:32 text:center">
    <img
        src="/assets/images/graphics/rewatch-search-results.webp"
        alt="a screenshot of bad results from Rewatch's Search Console page"
        width="1280" height="768"
        class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
        loading="lazy"
        decoding="async"
    />
</div>

This lack of result was frustrating and inspired Mike to start questioning the value in a lot of the work being asked of him.

<div class="flex flex:col sm:flex:row flex:wrap align-items:center justify-content:center sm:align-items:start sm:justify-content:between sm:row-gap:48 w:100p sm:max-w:640 lg:max-w:100p mt:32 mb:32 md:mt:48 md:mb:64 font:xl sm:font:lg font:serif italic border-b:1 sm:border-b:0 border:white border-opacity:10">
    <div class="w:100p sm:w:50p lg:w:100p lg:max-w:224 flex sm:justify-content:start border-t:1 sm:border-t:0 border:white border-opacity:10 py:24 sm:py:0">
        <div class="sm:max-w:288 lg:max-w:224">
            <div aria-hidden="true" class="hidden sm:block font:10xl leading:100 mb:n40 ml:n12 color:link-rg-i">“</div>
            <div>
                Are these G2 badge posts and website updates every quarter actually <span class="space:nowrap">convincing anyone?</span>
            </div>
        </div>
    </div>
    <div class="w:100p sm:w:50p lg:w:100p lg:max-w:224 flex sm:justify-content:end border-t:1 sm:border-t:0 border:white border-opacity:10 py:24 sm:py:0">
        <div class="sm:max-w:288 lg:max-w:224">
            <div aria-hidden="true" class="hidden sm:block font:10xl leading:100 mb:n40 ml:n12 color:link-rg-i">“</div>
            <div>
                When, if ever, is the last time that you found yourself truly interested in <span class="space:nowrap">a B2B SaaS blog?</span>
            </div>
        </div>
    </div>
    <div class="w:100p sm:w:50p lg:w:100p lg:max-w:224 flex sm:justify-content:start border-t:1 sm:border-t:0 border:white border-opacity:10 py:24 sm:py:0">
        <div class="sm:max-w:288 lg:max-w:224">
            <div aria-hidden="true" class="hidden sm:block font:10xl leading:100 mb:n40 ml:n12 color:link-rg-i">“</div>
            <div>
                Doesn't a newsletter that recaps poorly performing blog posts seem <span class="space:nowrap">counter intuitive?</span>
            </div>
        </div>
    </div>
    <div class="w:100p sm:w:50p lg:w:100p lg:max-w:224 flex sm:justify-content:end border-t:1 sm:border-t:0 border:white border-opacity:10 py:24 sm:py:0">
        <div class="sm:max-w:288 lg:max-w:224">
            <div aria-hidden="true" class="hidden sm:block font:10xl leading:100 mb:n40 ml:n12 color:link-rg-i">“</div>
            <div>
                Based on performance, should we consider whether or not we are spamming <span class="space:nowrap">at this point?</span>
            </div>
        </div>
    </div>
</div>

**Is this really the best use of my time?**

In search of more fulfilling work that drove results, Mike dug back into analytics. <mark>Over 30 days, Rewatch's home page was getting ~6.5x more traffic than every blog post combined.</mark> With that, <span class="space:nowrap">a couple</span> of key product pages were getting around the <span class="space:nowrap">same amount</span> of traffic as every <span class="space:nowrap">post combined.</span>

These large, foundational pages hadn't been touched in a while and the conversion rate on them wasn't where it should be. <span class="font:serif italic color:ink-1-i"><span class="space:nowrap">(re-enter</span> benefit vs. feature-based messaging)</span>

At this point, Mike began advocating that the team allocate time toward refining these pages. Again, <mark>Mike used to site analytics and the results of specific, feature-based messaging to get buy-in from and communicate value to the rest of the team.</mark>

At Rewatch, homepage edits are a touchy subject. To get around this, Mike also built out a quick design spike to visualize just how much clearer this page could be with some simple visual and <span class="space:nowrap">messaging updates.</span>

<div class="relative flex flex:col sm:flex:row justify-content:center align-items:center gap:28 sm:gap:48 mt:32 sm:mt:36 md:mt:48 mb:24 sm:mb:36">
    <figure class="relative flex flex:col-reverse sm:flex:col w:100p text:center">
        <img
            src="/assets/images/graphics/rewatch-hero-prev.webp"
            alt="a previous hero from rewatch.com with benefits based messaging"
            width="1104" height="742"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mb:12 sm:mt:24 sm:mb:n32">
            Previous: hero section with benefits-based copy
        </figcaption>
    </figure>
    <div class="absolute sm:mt:n12 lg:mt:n18 z:2 flex align-items:center justify-content:center ratio:1-1 w:48 sm:w:72 radius:full bg:primary-rg semibold">
        vs
    </div>
    <figure class="relative flex flex:col w:100p text:center">
        <img
            src="/assets/images/graphics/rewatch-hero-spike.webp"
            alt="a hero section idea for rewatch.com with feature based messaging"
            width="1104" height="742"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mt:12 sm:mt:24 sm:mb:n32">
            Spike: hero section with feature-based subhead
        </figcaption>
    </figure>
</div>

<div class="w:100p h:1 bg:white bg-opacity:10 sm:hidden"></div>

<div class="relative flex flex:col sm:flex:row justify-content:center align-items:center gap:28 sm:gap:48 mt:28 sm:mt:36 md:mt:48 mb:64 sm:mb:72 md:mb:96">
    <figure class="relative flex flex:col-reverse sm:flex:col w:100p text:center">
        <img
            src="/assets/images/graphics/rewatch-intro-prev.webp"
            alt="rewatch.com's previous, abstract intro section"
            width="1104" height="742"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mb:12 sm:mt:24 sm:mb:n32">
            Previous: intro section with benefits-based copy
        </figcaption>
    </figure>
    <div class="absolute sm:mt:n12 lg:mt:n18 z:2 flex align-items:center justify-content:center ratio:1-1 w:48 sm:w:72 radius:full bg:primary-rg semibold">
        vs
    </div>
    <figure class="relative flex flex:col w:100p text:center">
        <img
            src="/assets/images/graphics/rewatch-intro-spike.webp"
            alt="a design idea that adds clarity to rewatch.com's intro section"
            width="1104" height="742"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <figcaption class="mt:12 sm:mt:24 sm:mb:n32">
            Spike: intro section with feature-based copy
        </figcaption>
    </figure>
</div>

### <span class="font:serif italic">Key</span> Takeaways

Throughout Mike's ~2 years at Rewatch, he has grown <span class="space:nowrap">a lot.</span> <span class="space:nowrap">A few</span> of the main takeaways from his time <span class="space:nowrap">there are:</span>

#### First, nail the basics

Whether it's design, dev, or marketing — the fundamental aspects of anything are what matter most. Make sure they <span class="space:nowrap">work before</span> building <span class="space:nowrap">on top of them.</span>

#### Simple works

At one point, Mike tried building out 3D UI mocks like Microsoft Fluent uses... It was a lot, and a total flop. He reverted to regular 1:1 UI mocks and they looked just as good. In summary, simple doesn't mean boring or ugly. Usually it's easier to execute well and <span class="space:nowrap">understand anyway.</span>

<figure class="relative w:100p mt:32 sm:mt:48 mb:64 sm:mb:72 text:center">
    <div class="flex flex:col sm:flex:row gap:24 sm:gap:48">
        <img
            src="/assets/images/graphics/rewatch-3d-1.webp"
            alt="a screenshot of the Rewatch.com homepage"
            width="1104" height="640"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
        <img
            src="/assets/images/graphics/rewatch-3d-2.webp"
            alt="a screenshot of the Rewatch.com homepage"
            width="1104" height="640"
            class="relative w:100p h:auto max-w:none z:1 radius:lg overflow:hidden border:1 border:white border-opacity:10"
            loading="lazy"
            decoding="async"
        />
    </div>
    <figcaption class="mt:12 sm:mt:24 mb:n32">
        A couple of Mike's attempts at 3d UI mocks using Blender
    </figcaption>
</figure>

#### Marketing is part of the job

Just like designers get ideas and feedback from their friends in marketing, marketers should be getting ideas and feedback from folks in design. As creators, we have the unique ability to build ideas outside of a word doc, take advantage <span class="space:nowrap">of that.</span>