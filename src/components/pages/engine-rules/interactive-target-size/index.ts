import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import { CompliantTraitInteractable, PerceivableTraitClickable, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";

const MINIMUM_VALUE_SIZE = 24;

interface Circle {
  centerX: number;
  centerY: number;
  radius: number;
}

/**
 * Calculates the center coordinates and radius of a circle that fits within the bounding rectangle of an element.
 *
 * @param {SvgOrHtmlElement} element - The HTML element for which the circle's center and radius are calculated.
 * @param {EngineClassifier} classifier - The classifier used to get the layout information of the element.
 * @returns {Circle} An object containing the center coordinates (centerX, centerY) and radius of the circle.
 */
function getCircleCenterAndRadius(element: SvgOrHtmlElement, classifier: EngineClassifier): Circle {
  const rect = classifier.getOperations(element).layoutInfo.absoluteRect;
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const radius = MINIMUM_VALUE_SIZE / 2; // 24 CSS pixel diameter circle has a radius of 12
  return { centerX, centerY, radius };
}

/**
 * Determines if two circles intersect based on their center coordinates and radii.
 *
 * @param {Circle} circle1 - The first circle with center coordinates and radius.
 * @param {Circle} circle2 - The second circle with center coordinates and radius.
 * @returns {boolean} True if the circles intersect, false otherwise.
 */
function circlesIntersect(circle1: Circle, circle2: Circle): boolean {
  const dx = circle1.centerX - circle2.centerX;
  const dy = circle1.centerY - circle2.centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circle1.radius + circle2.radius;
}

/**
 * Checks if a given circle intersects with a given HTML element.
 *
 * @param {Circle} circle - The circle to check for intersection.
 * @param {SvgOrHtmlElement} element - The HTML element to check for intersection with the circle.
 * @param {EngineClassifier} classifier - The classifier used to get the layout information of the element.
 * @returns {boolean} - Returns true if the circle intersects with the element, otherwise false.
 */
function isCircleIntersectingElement(circle: Circle, element: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const rect = classifier.getOperations(element).layoutInfo.absoluteRect;
  // Find the closest point on the rectangle to the circle's center
  const closestX: number = Math.max(rect.left, Math.min(circle.centerX, rect.right));
  const closestY: number = Math.max(rect.top, Math.min(circle.centerY, rect.bottom));

  // Check if the distance between the closest point and the circle's center is less than the circle's radius
  const distanceX: number = circle.centerX - closestX;
  const distanceY: number = circle.centerY - closestY;
  return distanceX * distanceX + distanceY * distanceY < circle.radius * circle.radius;
}

/**
 * Checks if the element is part of a sentence within a paragraph or similar block-level element.
 *
 * @param {SvgOrHtmlElement} element - The HTML element to check.
 * @returns {boolean} True if the element is part of a sentence, false otherwise.
 */
export function isElementInSentence(element: SvgOrHtmlElement): boolean {
  // Check if the element is surrounded by text nodes
  let previousSibling = element.previousSibling;
  let nextSibling = element.nextSibling;

  while (previousSibling) {
    if (previousSibling.nodeType === Node.TEXT_NODE && previousSibling.textContent.trim().length > 0) {
      return true;
    }
    previousSibling = previousSibling.previousSibling;
  }

  while (nextSibling) {
    if (nextSibling.nodeType === Node.TEXT_NODE && nextSibling.textContent.trim().length > 0) {
      return true;
    }
    nextSibling = nextSibling.nextSibling;
  }

  return false;
}

/**
 * Checks if a given undersized interactable element intersects with any other interactable elements.
 *
 * The function first checks if the circle representing the undersized interactable intersects with any other interactable element.
 * If not, it then checks if the circle intersects with any circle of another undersized interactable element.
 *
 * @param {Set<SvgOrHtmlElement>} interactables - A set of all interactable HTML elements.
 * @param {SvgOrHtmlElement} undersizedInteractable - The undersized interactable element to check for intersections.
 * @param {EngineClassifier} classifier - The classifier used to get the layout information of the elements.
 * @returns {boolean} True if the undersized interactable intersects with any other interactable element, false otherwise.
 */
function isIntersectingWithAny(interactables: Set<SvgOrHtmlElement>, undersizedInteractable: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const circle1 = getCircleCenterAndRadius(undersizedInteractable, classifier);
  for (const interactable of interactables) {
    if (interactable === undersizedInteractable) continue; // Skip comparing the same element
    if (isCircleIntersectingElement(circle1, interactable, classifier)) {
      return true;
    }
    if (isUndersized(interactable, classifier)) {
      const circle2 = getCircleCenterAndRadius(interactable, classifier);
      if (circlesIntersect(circle1, circle2)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * An element is considered undersized if its width or height is less than the minimum value size.
 *
 * @param {SvgOrHtmlElement} element - The HTML element to check.
 * @param {EngineClassifier} classifier - The classifier used to get the layout information of the element.
 * @returns {boolean} True if the element is undersized, false otherwise.
 */
function isUndersized(element: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const { width, height } = classifier.getOperations(element).layoutInfo.absoluteRect;
  return width < MINIMUM_VALUE_SIZE || height < MINIMUM_VALUE_SIZE;
}

export const InteractiveTargetSize: Rule = {
  id: "interactive-target-size",
  metadata: {
    category: "Forms",
    profile: "Motor Impaired",
    wcagVersion: "2.2",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "Targets for interactive elements should meet a minimum size (at least 24 by 24 CSS pixels) or have enough spacing around them",
  description: "Interactive elements, such as buttons and links, should have a minimum size of 24 by 24 CSS pixels or have enough spacing to avoid accidental activation of adjacent elements. This is crucial for users with motor impairments or those using the website in unstable environments, like on a bus.",
  advice: "Make sure all interactive targets meet the minimum size of 24 by 24 CSS pixels. If resizing is not possible, provide spacing with a diameter of at least 24 CSS pixels around smaller targets to ensure they don't intersect with adjacent controls.",
  associatedDetectors: [CompliantTraitInteractable, PerceivableTraitClickable, PerceivableTraitVisible],
  refs: [
    {
      type: "WCAG",
      id: "2.5.8",
      level: "AA",
      link: "https://www.wcag.com/developers/2-5-8-target-size-minimum-level-aa/",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/WCAG22/Techniques/css/C42.html",
    },
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/understanding-sc-2-5-8-target-size-minimum/",
    },
    {
      type: "Non-Standard",
      link: "https://dubbot.com/dubblog/2024/staying-on-target.html",
    },
    {
      type: "Non-Standard",
      link: "https://tetralogical.com/blog/2022/12/20/foundations-target-size/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const interactables = new Set(classifier.getMatched([CompliantTraitInteractable, PerceivableTraitVisible]).concat(classifier.getMatched([PerceivableTraitClickable, PerceivableTraitVisible])));
    for (const interactable of interactables) {
      if (isUndersized(interactable, classifier) && !isElementInSentence(interactable) && isIntersectingWithAny(interactables, interactable, classifier)) {
        response.failedNodes.push(interactable);
      } else {
        response.passedNodes.push(interactable);
      }
    }
  },
};
