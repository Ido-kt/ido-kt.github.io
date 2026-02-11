// Mapping between legacy AccessFlow rules and their related engine rules.
// Shape:
// {
//   [legacyShortCode]: [
//     {
//       id: string;    // engine rule id from engine-rules-metadata.json
//       label: string; // human-friendly label
//       path: string;  // app route to engine rule detail, e.g. "/engine/image-discernible"
//     }
//   ]
// }
//
// Populated from `_accessFlow - engine (New mapping) - Sheet1.csv` for
// rules that are Migrated or Partial Migrated.

const legacyEngineMapping = {
  // ariaLabelMissuse → NameProhibitedNoAriaLabel
  ariaLabelMissuse: [
    {
      id: "name-prohibited-no-aria-label",
      label: "NameProhibitedNoAriaLabel (Engine rule)",
      path: "/engine/name-prohibited-no-aria-label",
    },
  ],

  // articleSetup → ArticleMisuse
  articleSetup: [
    {
      id: "article-misuse",
      label: "ArticleMisuse (Engine rule)",
      path: "/engine/article-misuse",
    },
  ],

  // breadcrumbs → BreadcrumbsMismatch, BreadcrumbsNav
  breadcrumbs: [
    {
      id: "breadcrumbs-mismatch",
      label: "BreadcrumbsMismatch (Engine rule)",
      path: "/engine/breadcrumbs-mismatch",
    },
    {
      id: "breadcrumbs-nav",
      label: "BreadcrumbsNav (Engine rule)",
      path: "/engine/breadcrumbs-nav",
    },
  ],

  // brokenAriaLabels → VisibleTextPartOfAccessibleName
  brokenAriaLabels: [
    {
      id: "visible-text-part-of-accessible-name",
      label: "VisibleTextPartOfAccessibleName (Engine rule)",
      path: "/engine/visible-text-part-of-accessible-name",
    },
  ],

  // brokenAriaReference → AriaLabelledByHasReference, AriaDescribedByHasReference
  brokenAriaReference: [
    {
      id: "aria-labelledby-has-reference",
      label: "AriaLabelledByHasReference (Engine rule)",
      path: "/engine/aria-labelledby-has-reference",
    },
    {
      id: "aria-describedby-has-reference",
      label: "AriaDescribedByHasReference (Engine rule)",
      path: "/engine/aria-describedby-has-reference",
    },
  ],

  // brokenList → ListItemWithinList
  brokenList: [
    {
      id: "list-item-within-list",
      label: "ListItemWithinList (Engine rule)",
      path: "/engine/list-item-within-list",
    },
  ],

  // brokenNavItems → MenuItemAvoid
  brokenNavItems: [
    {
      id: "menu-item-avoid",
      label: "MenuItemAvoid (Engine rule)",
      path: "/engine/menu-item-avoid",
    },
  ],

  // brokenNavTagging → MenuAvoid, MenuBarAvoid
  brokenNavTagging: [
    {
      id: "menu-avoid",
      label: "MenuAvoid (Engine rule)",
      path: "/engine/menu-avoid",
    },
    {
      id: "menu-bar-avoid",
      label: "MenuBarAvoid (Engine rule)",
      path: "/engine/menu-bar-avoid",
    },
  ],

  // brokenSubmenuIndication → MenuTriggerClickable
  brokenSubmenuIndication: [
    {
      id: "menu-trigger-clickable",
      label: "MenuTriggerClickable (Engine rule)",
      path: "/engine/menu-trigger-clickable",
    },
  ],

  // brokenTabindex → TabindexValid
  brokenTabindex: [
    {
      id: "tabindex-valid",
      label: "TabindexValid (Engine rule)",
      path: "/engine/tabindex-valid",
    },
  ],

  // captcha → CaptchaAccessibleProvider
  captcha: [
    {
      id: "captcha-accessible-provider",
      label: "CaptchaAccessibleProvider (Engine rule)",
      path: "/engine/captcha-accessible-provider",
    },
  ],

  // colorContrast → ColorContrast (Partial Migrated)
  colorContrast: [
    {
      id: "color-contrast",
      label: "ColorContrast (Engine rule)",
      path: "/engine/color-contrast",
    },
  ],

  // decorativeContent → IconDiscernible
  decorativeContent: [
    {
      id: "icon-discernible",
      label: "IconDiscernible (Engine rule)",
      path: "/engine/icon-discernible",
    },
  ],

  // emptyHeadings → HeadingDiscernible
  emptyHeadings: [
    {
      id: "heading-discernible",
      label: "HeadingDiscernible (Engine rule)",
      path: "/engine/heading-discernible",
    },
  ],

  // emptyLinks → LinkAnchorDiscernible, LinkNavigationDiscernible
  emptyLinks: [
    {
      id: "link-anchor-discernible",
      label: "LinkAnchorDiscernible (Engine rule)",
      path: "/engine/link-anchor-discernible",
    },
    {
      id: "link-navigation-discernible",
      label: "LinkNavigationDiscernible (Engine rule)",
      path: "/engine/link-navigation-discernible",
    },
  ],

  // emptyList → ListNotEmpty
  emptyList: [
    {
      id: "list-not-empty",
      label: "ListNotEmpty (Engine rule)",
      path: "/engine/list-not-empty",
    },
  ],

  // fakeHiddenInteractive → TabbableVisible, SrHiddenTabbable
  fakeHiddenInteractive: [
    {
      id: "tabbable-visible",
      label: "TabbableVisible (Engine rule)",
      path: "/engine/tabbable-visible",
    },
    {
      id: "sr-hidden-tabbable",
      label: "SrHiddenTabbable (Engine rule)",
      path: "/engine/sr-hidden-tabbable",
    },
  ],

  // fieldLabel → InputDiscernible
  fieldLabel: [
    {
      id: "input-discernible",
      label: "InputDiscernible (Engine rule)",
      path: "/engine/input-discernible",
    },
  ],

  // fontSizes → FontSizes
  fontSizes: [
    {
      id: "font-sizes",
      label: "FontSizes (Engine rule)",
      path: "/engine/font-sizes",
    },
  ],

  // footerLandmark → RegionFooter
  footerLandmark: [
    {
      id: "region-footer",
      label: "RegionFooter (Engine rule)",
      path: "/engine/region-footer",
    },
  ],

  // hiddenVisibleContent → VisibilityMismatch
  hiddenVisibleContent: [
    {
      id: "visibility-mismatch",
      label: "VisibilityMismatch (Engine rule)",
      path: "/engine/visibility-mismatch",
    },
  ],

  // iframeLabeling → IframeDiscernible
  iframeLabeling: [
    {
      id: "iframe-discernible",
      label: "IframeDiscernible (Engine rule)",
      path: "/engine/iframe-discernible",
    },
  ],

  // keyboardNavigation → InteractiveNotTabbable
  keyboardNavigation: [
    {
      id: "interactive-not-tabbable",
      label: "InteractiveNotTabbable (Engine rule)",
      path: "/engine/interactive-not-tabbable",
    },
  ],

  // languageReport → HtmlLangValid, HtmlLang
  languageReport: [
    {
      id: "html-lang-valid",
      label: "HtmlLangValid (Engine rule)",
      path: "/engine/html-lang-valid",
    },
    {
      id: "html-lang",
      label: "HtmlLang (Engine rule)",
      path: "/engine/html-lang",
    },
  ],

  // loadAutofocus → NoAutofocus
  loadAutofocus: [
    {
      id: "no-autofocus",
      label: "NoAutofocus (Engine rule)",
      path: "/engine/no-autofocus",
    },
  ],

  // longHeadings → HeadingLengthy
  longHeadings: [
    {
      id: "heading-lengthy",
      label: "HeadingLengthy (Engine rule)",
      path: "/engine/heading-lengthy",
    },
  ],

  // mainHeading → HeadingH1
  mainHeading: [
    {
      id: "heading-h1",
      label: "HeadingH1 (Engine rule)",
      path: "/engine/heading-h1",
    },
  ],

  // mainLandmark → RegionMainContent
  mainLandmark: [
    {
      id: "region-main-content",
      label: "RegionMainContent (Engine rule)",
      path: "/engine/region-main-content",
    },
  ],

  // marquee → MarqueeDeprecated
  marquee: [
    {
      id: "marquee-deprecated",
      label: "MarqueeDeprecated (Engine rule)",
      path: "/engine/marquee-deprecated",
    },
  ],

  // missingFormButton → FormSubmitButtonMismatch
  missingFormButton: [
    {
      id: "form-submit-button-mismatch",
      label: "FormSubmitButtonMismatch (Engine rule)",
      path: "/engine/form-submit-button-mismatch",
    },
  ],

  // missingNavItems → NavigationItemLink
  missingNavItems: [
    {
      id: "navigation-item-link",
      label: "NavigationItemLink (Engine rule)",
      path: "/engine/navigation-item-link",
    },
  ],

  // misusedNavTagging → NavigationMisuse
  misusedNavTagging: [
    {
      id: "navigation-misuse",
      label: "NavigationMisuse (Engine rule)",
      path: "/engine/navigation-misuse",
    },
  ],

  // multiMainLandmarks → RegionMainContentSingle
  multiMainLandmarks: [
    {
      id: "region-main-content-single",
      label: "RegionMainContentSingle (Engine rule)",
      path: "/engine/region-main-content-single",
    },
  ],

  // multipleMainHeadings → HeadingSingleH1
  multipleMainHeadings: [
    {
      id: "heading-single-h1",
      label: "HeadingSingleH1 (Engine rule)",
      path: "/engine/heading-single-h1",
    },
  ],

  // nestedNavigation → NavigationNotNested
  nestedNavigation: [
    {
      id: "navigation-not-nested",
      label: "NavigationNotNested (Engine rule)",
      path: "/engine/navigation-not-nested",
    },
  ],

  // nestedTables → TableNotNested
  nestedTables: [
    {
      id: "table-not-nested",
      label: "TableNotNested (Engine rule)",
      path: "/engine/table-not-nested",
    },
  ],

  // newWindowLinks → LinkNewWindowWarning
  newWindowLinks: [
    {
      id: "link-new-window-warning",
      label: "LinkNewWindowWarning (Engine rule)",
      path: "/engine/link-new-window-warning",
    },
  ],

  // noninteractiveTabindex → TabbableNonInteractive
  noninteractiveTabindex: [
    {
      id: "tabbable-non-interactive",
      label: "TabbableNonInteractive (Engine rule)",
      path: "/engine/tabbable-non-interactive",
    },
  ],

  // pageTitle → PageTitle, PageTitleValid
  pageTitle: [
    {
      id: "page-title",
      label: "PageTitle (Engine rule)",
      path: "/engine/page-title",
    },
    {
      id: "page-title-valid",
      label: "PageTitleValid (Engine rule)",
      path: "/engine/page-title-valid",
    },
  ],

  // popupFocus → DialogModalFocus
  popupFocus: [
    {
      id: "dialog-modal-focus",
      label: "DialogModalFocus (Engine rule)",
      path: "/engine/dialog-modal-focus",
    },
  ],

  // roleApplications → NoRoleApplication
  roleApplications: [
    {
      id: "no-role-application",
      label: "NoRoleApplication (Engine rule)",
      path: "/engine/no-role-application",
    },
  ],

  // rowTableHeaders → TableRowHeader
  rowTableHeaders: [
    {
      id: "table-row-header",
      label: "TableRowHeader (Engine rule)",
      path: "/engine/table-row-header",
    },
  ],

  // salePrices → SalePriceDiscernible (Partial Migrated)
  salePrices: [
    {
      id: "sale-price-discernible",
      label: "SalePriceDiscernible (Engine rule)",
      path: "/engine/sale-price-discernible",
    },
  ],

  // searchFormTagging → SearchFormMismatch
  searchFormTagging: [
    {
      id: "search-form-mismatch",
      label: "SearchFormMismatch (Engine rule)",
      path: "/engine/search-form-mismatch",
    },
  ],

  // skipLinks → SkipLinkExists
  skipLinks: [
    {
      id: "skip-link-exists",
      label: "SkipLinkExists (Engine rule)",
      path: "/engine/skip-link-exists",
    },
  ],

  // submenuState → MenuTriggerCorrectState
  submenuState: [
    {
      id: "menu-trigger-correct-state",
      label: "MenuTriggerCorrectState (Engine rule)",
      path: "/engine/menu-trigger-correct-state",
    },
  ],

  // svgContent → SvgDiscernible
  svgContent: [
    {
      id: "svg-discernible",
      label: "SvgDiscernible (Engine rule)",
      path: "/engine/svg-discernible",
    },
  ],

  // tableLayouts → TableMisuse
  tableLayouts: [
    {
      id: "table-misuse",
      label: "TableMisuse (Engine rule)",
      path: "/engine/table-misuse",
    },
  ],

  // untaggedHeadings → HeadingMismatch
  untaggedHeadings: [
    {
      id: "heading-mismatch",
      label: "HeadingMismatch (Engine rule)",
      path: "/engine/heading-mismatch",
    },
  ],

  // viewportScalability → PageMetaViewportValid, PageMetaViewport
  viewportScalability: [
    {
      id: "page-meta-viewport-valid",
      label: "PageMetaViewportValid (Engine rule)",
      path: "/engine/page-meta-viewport-valid",
    },
    {
      id: "page-meta-viewport",
      label: "PageMetaViewport (Engine rule)",
      path: "/engine/page-meta-viewport",
    },
  ],
};

export default legacyEngineMapping;
