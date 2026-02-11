import { PerceivableComponentDialogModal, CompliantComponentDialogModal } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const DialogModalFocus: Rule = {
  id: "dialog-modal-focus",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Keyboard focus should move into and lock inside active dialogs",
  description: "Dialogs that appear on pages without receiving keyboard focus immediately on interaction often leave users navigating content behind the dialog and make it difficult or impossible for keyboard and screen reader users to access the dialog itself.",
  advice:
    'When a dialog opens, use JavaScript to place keyboard focus on the first interactive element within the dialog. If static content, such as lists, tables, or paragraphs, appears before any interactive elements and it needs to be perceived in order to easily understand the content, tabindex="-1" can be added to a static element at the start of the content to initially focus that element.',
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html",
    },
  ],
  associatedDetectors: [PerceivableComponentDialogModal, CompliantComponentDialogModal],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier, document }) {
    const activeElement = document.activeElement;

    /**
     * We're looking for the activeElement somewhere in the dialog.
     * Combine matches for different dialog types (PerceivableComponentDialog and CompliantComponentDialog)
     */
    const dialogs = [...new Set(classifier.getMatched([PerceivableComponentDialogModal]).concat(classifier.getMatched([CompliantComponentDialogModal])))];
    const topElementsArray = [];

    // If there are multiple dialog matches, filter out nested dialogs and only keep top-level ones.
    if (dialogs.length > 1) {
      for (const element of dialogs) {
        // Check if the current dialog is not contained by any other dialog, i.e., it's a top-level dialog.
        if (dialogs.filter((el) => el !== element).every((el) => !el.contains(element))) {
          topElementsArray.push(element);
        }
      }
    } else {
      // If only one dialog is found, it's considered top-level, so we add it to the array.
      topElementsArray.push(...dialogs);
    }

    if (activeElement) {
      // For each top-level dialog, check if it contains the activeElement.
      for (const element of topElementsArray) {
        if (element.contains(activeElement)) {
          // If the active element is inside the dialog, mark it as passed.
          response.passedNodes.push(element);
        } else {
          // Otherwise, mark it as failed.
          response.failedNodes.push(element);
        }
      }
    }
  },
};
