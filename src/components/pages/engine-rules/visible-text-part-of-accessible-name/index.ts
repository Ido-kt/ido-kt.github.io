import { CompliantComponentButton, CompliantComponentCheckbox, CompliantComponentLink, CompliantComponentMenuItem, CompliantComponentRadioButton, CompliantComponentSelectOption, CompliantComponentSwitch, CompliantComponentTab, PerceivableComponentIcon } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const VisibleTextPartOfAccessibleName: Rule = {
  id: "visible-text-part-of-accessible-name",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Aria labels should not override or replace visible text",
  description:
    "Aria labels should describe elements that don't have proper text, like icons and field labels. It should not be used to override element texts. Screen reader users need to receive the exact text as visually on the screen, with more context if it is ambiguous. An exception applies to landmarks such as nav or other landmarks: here, ARIA labels can provide additional context or clarification.",
  advice: "Remove the aria-label. If you need to add context for screen reader users only because of the ambiguity of the text, use the screen-reader-only technique.",
  associatedDetectors: [PerceivableComponentIcon, CompliantComponentMenuItem, CompliantComponentSelectOption, CompliantComponentTab, CompliantComponentLink, CompliantComponentCheckbox, CompliantComponentRadioButton, CompliantComponentSwitch],
  refs: [
    {
      type: "WCAG",
      id: "2.5.3",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",
    },
    {
      type: "Non-Standard",
      link: "https://www.useragentman.com/enable/screen-reader-only-text.php",
    },
    {
      type: "ACT",
      ruleId: "2ee8b8",
      link: "https://act-rules.github.io/rules/2ee8b8",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    /**
     * This rule applies to elements with a widget role that support name from content.
     * This includes the following: button, checkbox, gridcell, link, menuitem, menuitemcheckbox, menuitemradio, option, radio, searchbox, switch, tab, treeitem - @see https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#background
     *
     * TODO: instead of specifying each detector here and calling getMatched multiple times, create 2 new detectors and do `classifier.getMatched([CompliantTraitWidget, CompliantTraitNameFromContent])` instead.
     * @see https://www.w3.org/TR/wai-aria-1.1/#namefromcontent
     * @see https://www.w3.org/TR/wai-aria-1.2/#widget_roles
     */
    const elements = new Set([
      ...classifier.getMatched([CompliantComponentButton]),
      ...classifier.getMatched([CompliantComponentCheckbox]),
      ...classifier.getMatched([CompliantComponentTab]),
      ...classifier.getMatched([CompliantComponentLink]),
      ...classifier.getMatched([CompliantComponentMenuItem]),
      ...classifier.getMatched([CompliantComponentRadioButton]),
      ...classifier.getMatched([CompliantComponentSelectOption]),
      ...classifier.getMatched([CompliantComponentSwitch]),
      // TODO: missing the following detectors for this to fully work these detectors need to be implemented in classifier
      // ...classifier.getMatched([CompliantComponentSearchbox]),
      // ...classifier.getMatched([CompliantComponentMenuitemradio]),
      // ...classifier.getMatched([CompliantComponentMenuitemcheckbox]),
      // ...classifier.getMatched([CompliantComponentGridCell]),
      // ...classifier.getMatched([CompliantComponentTreeItem]),
    ]);

    for (const el of elements) {
      const {
        contentInfo: { visibleText: contentInfoVisibleText, labelText, ariaLabelText },
      } = classifier.getOperations(el);

      /**
       * elements that don't have visible text but can have associate labels such as inputs need to be taken into account
       * NOTE: the associated labels logic wasn't extracted from WAI's guidelines but rather from IBM Equal Access Accessibility Checker
       */
      const visibleText = contentInfoVisibleText || labelText;
      /**
       * applicable only to elements with aria-label or aria-labelledby (not srVisibleText)
       * @see https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#applicability
       */
      if (!visibleText || !ariaLabelText) {
        response.inapplicableNodes.push(el);
        continue;
      }

      /**
       * if the visibleText is considered non-text content (https://www.w3.org/TR/WCAG22/#dfn-non-text-content) it shouldn't be contained within the ariaLabelText
       * @see https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#test-cases - Passed Example 5
       *
       * TODO: as of now, we don't have a way to detect non-text content, we have isTextAmbiguous, but it's not the same thing.
       * non-text content means that it's not expressing anything in human language.
       *
       * other a11y testing libraries use vague huerstics to add this logic such as:
       * - if the string is a single character (IBM equal access): @see https://github.com/IBMa/equal-access/blob/2f83430a4c6de6421b1b81792a18b0eede738274/accessibility-checker-engine/src/v4/rules/label_name_visible.ts#L169
       * - if the string is either "X" or "I" it's considered an icon (QualWeb): @see https://github.com/qualweb/qualweb/blob/bfb12040382d390397875af0ddf3b58ed966d1cd/packages/act-rules/src/rules/QW-ACT-R30.ts#L37
       *
       */
      // if (classifier.validators.isTextAmbiguous(visibleText)) {
      //   response.passedNodes.push(el);
      //   continue;
      // }

      if (classifier.assert(el, PerceivableComponentIcon)) {
        /**
         * if the visibleText is rendered as a non-text content such as icon, it shouldn't be contained within the ariaLabelText
         * @see https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#test-cases - Passed Example 6
         *
         * related e2e test: @see file://./atomic-tests/pass/button-visible-text-is-rendered-as-icon.html
         */
        response.passedNodes.push(el);
        continue;
      }

      if (ariaLabelText.toLowerCase().includes(visibleText.toLowerCase())) {
        /**
         * if ariaLabelText is longer than visibleText and contains most words from visibleText it should pass
         */
        response.passedNodes.push(el);
      } else {
        response.failedNodes.push(el);
      }
    }
  },
};
