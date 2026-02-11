import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuTriggerMisuseFailure = () => {
  const ruleId = "menu-trigger-misuse";
  const title = `Menu trigger buttons/links that aren't perceived as menu trigger should lose the \\`;
  const description = `Using menu trigger attributes for buttons/links that aren't menu triggers can confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.`;
  const helpText = `Remove the \\`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "koffeekult not menu trigger li aria expanded false", content: `<li id="test-subject" class="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu" aria-haspopup="true" aria-expanded="false">
  <a href="/collections/coffee" class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"> Coffee </a>
  <div class="site-nav__dropdown megamenu text-left">
    <div class="page-width">
      <div class="grid">
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-1">
          <a href="/collections/coffee/%23" class="megamenu__colection-image" aria-label="Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/roast-type_400x.jpg?v=1740497449)"></a>
          <div class="h5">
            <a href="/collections/coffee/%23" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Filter Coffee</a>
          </div>
          <div>
            <a href="/collections/single-origin-coffee-subscription" class="site-nav__dropdown-link"> Single Origin </a>
          </div>
          <div>
            <a href="/collections/blends-espresso-subscribe-and-save" class="site-nav__dropdown-link"> Blends </a>
          </div>
          <div>
            <a href="/collections/decaf" class="site-nav__dropdown-link"> Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-2">
          <a href="/collections/espresso" class="megamenu__colection-image" aria-label="Espresso Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/espresso-machine_06404c44-cb92-4852-a4f8-f5e22d042685_400x.jpg?v=1740152999)"></a>
          <div class="h5">
            <a href="/collections/espresso" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Espresso</a>
          </div>
          <div>
            <a href="/collections/espresso/single-origin" class="site-nav__dropdown-link"> Espresso Single Origin </a>
          </div>
          <div>
            <a href="/collections/espresso/blend" class="site-nav__dropdown-link"> Espresso Blends </a>
          </div>
          <div>
            <a href="/collections/espresso/decaf" class="site-nav__dropdown-link"> Espresso Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-3">
          <a href="/collections/coffee/%23" class="megamenu__colection-image" aria-label="Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/roast-type_400x.jpg?v=1740497449)"></a>
          <div class="h5">
            <a href="/collections/coffee/%23" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Roast</a>
          </div>
          <div>
            <a href="/collections/dark-roast-coffee" class="site-nav__dropdown-link"> Dark Roast </a>
          </div>
          <div>
            <a href="/collections/medium-roast-coffee" class="site-nav__dropdown-link"> Medium Roast </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-4">
          <a href="/collections/single-serve/Single-Serve-Cups+Single-Serve-Pods" class="megamenu__colection-image" aria-label="Koffee Kult Single Serve Cups and Pods" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/single-serve-brewer_400x.jpg?v=1739546024)"></a>
          <div class="h5">
            <a href="/collections/single-serve/Single-Serve-Cups+Single-Serve-Pods" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Single Serve Cups</a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-dark-roast-coffee-in-single-serve" class="site-nav__dropdown-link"> Dark Roast </a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-medium-roast-coffee-in-single-serve-cups" class="site-nav__dropdown-link"> Medium Roast </a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-colombia-decaf-coffee-in-single-serve-cups" class="site-nav__dropdown-link"> Colombia Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-5">
          <a href="/collections/bundles" class="megamenu__colection-image" aria-label="Bundles" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/Coffee-Bundles-Feature_400x.png?v=1742924947)"></a>
          <div class="h5">
            <a href="/collections/bundles" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Bundles</a>
          </div>
          <div>
            <a href="/products/6-x-12oz-coffee-bundle" class="site-nav__dropdown-link"> 6 x 12oz coffee bundle </a>
          </div>
          <div>
            <a href="/products/6-x-32oz-coffee-bundle" class="site-nav__dropdown-link"> 6 x 32oz coffee bundle </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>` },
  { filename: "koffeekult not menu trigger li aria expanded true", content: `<li id="test-subject" class="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu" aria-haspopup="true" aria-expanded="true">
  <a href="/collections/coffee" class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"> Coffee </a>
  <div class="site-nav__dropdown megamenu text-left">
    <div class="page-width">
      <div class="grid">
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-1">
          <a href="/collections/coffee/%23" class="megamenu__colection-image" aria-label="Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/roast-type_400x.jpg?v=1740497449)"></a>
          <div class="h5">
            <a href="/collections/coffee/%23" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Filter Coffee</a>
          </div>
          <div>
            <a href="/collections/single-origin-coffee-subscription" class="site-nav__dropdown-link"> Single Origin </a>
          </div>
          <div>
            <a href="/collections/blends-espresso-subscribe-and-save" class="site-nav__dropdown-link"> Blends </a>
          </div>
          <div>
            <a href="/collections/decaf" class="site-nav__dropdown-link"> Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-2">
          <a href="/collections/espresso" class="megamenu__colection-image" aria-label="Espresso Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/espresso-machine_06404c44-cb92-4852-a4f8-f5e22d042685_400x.jpg?v=1740152999)"></a>
          <div class="h5">
            <a href="/collections/espresso" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Espresso</a>
          </div>
          <div>
            <a href="/collections/espresso/single-origin" class="site-nav__dropdown-link"> Espresso Single Origin </a>
          </div>
          <div>
            <a href="/collections/espresso/blend" class="site-nav__dropdown-link"> Espresso Blends </a>
          </div>
          <div>
            <a href="/collections/espresso/decaf" class="site-nav__dropdown-link"> Espresso Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-3">
          <a href="/collections/coffee/%23" class="megamenu__colection-image" aria-label="Coffee" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/roast-type_400x.jpg?v=1740497449)"></a>
          <div class="h5">
            <a href="/collections/coffee/%23" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Roast</a>
          </div>
          <div>
            <a href="/collections/dark-roast-coffee" class="site-nav__dropdown-link"> Dark Roast </a>
          </div>
          <div>
            <a href="/collections/medium-roast-coffee" class="site-nav__dropdown-link"> Medium Roast </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-4">
          <a href="/collections/single-serve/Single-Serve-Cups+Single-Serve-Pods" class="megamenu__colection-image" aria-label="Koffee Kult Single Serve Cups and Pods" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/single-serve-brewer_400x.jpg?v=1739546024)"></a>
          <div class="h5">
            <a href="/collections/single-serve/Single-Serve-Cups+Single-Serve-Pods" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Single Serve Cups</a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-dark-roast-coffee-in-single-serve" class="site-nav__dropdown-link"> Dark Roast </a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-medium-roast-coffee-in-single-serve-cups" class="site-nav__dropdown-link"> Medium Roast </a>
          </div>
          <div>
            <a href="/products/original-koffee-kult-colombia-decaf-coffee-in-single-serve-cups" class="site-nav__dropdown-link"> Colombia Decaf </a>
          </div>
        </div>
        <div class="grid__item medium-up--one-fifth appear-animation appear-delay-5">
          <a href="/collections/bundles" class="megamenu__colection-image" aria-label="Bundles" style="background-image: url(//www.koffeekult.com/cdn/shop/collections/Coffee-Bundles-Feature_400x.png?v=1742924947)"></a>
          <div class="h5">
            <a href="/collections/bundles" class="site-nav__dropdown-link site-nav__dropdown-link--top-level">Bundles</a>
          </div>
          <div>
            <a href="/products/6-x-12oz-coffee-bundle" class="site-nav__dropdown-link"> 6 x 12oz coffee bundle </a>
          </div>
          <div>
            <a href="/products/6-x-32oz-coffee-bundle" class="site-nav__dropdown-link"> 6 x 32oz coffee bundle </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>` },
  { filename: "link in nav", content: `<nav aria-label="Main"></nav>
<ul>
  <li><a href="/home">Home</a></li>
  <li><a href="/shop">Shop</a></li>
  <li class="has-submenu">
    <a href="#" aria-expanded="false"> Space Bears </a>
    <ul>
      <li><a aria-haspopup="true" aria-expanded="false" id="test-subject" href="/space-bear-6">Space Bear 6</a></li>
      <li><a href="/space-bear-6-plus">Space Bear 6 Plus</a></li>
    </ul>
  </li>
  <li><a href="/mars-cars">Mars Cars</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default MenuTriggerMisuseFailure;
