import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
// TODO: Export the type DetectorOrLocator from the package
import { type DetectorOrLocator } from "@acsbe/core-engine-classifier/dist/interface";

export interface ValidationResult {
  failedNodes: SvgOrHtmlElement[];
  inapplicableNodes: SvgOrHtmlElement[];
  cantTellNodes: SvgOrHtmlElement[];
  passedNodes: SvgOrHtmlElement[];
}

export class RuleValidateResponse {
  failedNodes: SvgOrHtmlElement[];
  inapplicableNodes: SvgOrHtmlElement[];
  cantTellNodes: SvgOrHtmlElement[];
  passedNodes: SvgOrHtmlElement[];
  passed: boolean;

  constructor({ failedNodes = [], inapplicableNodes = [], cantTellNodes = [], passedNodes = [] }: Partial<ValidationResult> = {}) {
    this.failedNodes = failedNodes;
    this.inapplicableNodes = inapplicableNodes;
    this.cantTellNodes = cantTellNodes;
    this.passedNodes = passedNodes;
    this.passed = null;
  }
}

interface RuleReferenceWCAG {
  type: "WCAG";
  id: string;
  level: "A" | "AA" | "AAA";
  link: string;
}

interface RuleReferenceNonStandard {
  type: "Non-Standard";
  link: string;
}

interface RuleReferenceACT {
  type: "ACT";
  link: string;
  ruleId: string;
}

interface RuleReferenceW3C {
  type: "W3C";
  link: string;
}

interface RuleReferenceWCAGTechnique {
  type: "WCAG Technique";
  link: string;
}

interface RuleReferenceWAI {
  type: "WAI";
  link: string;
}

type RuleReference = RuleReferenceWCAG | RuleReferenceNonStandard | RuleReferenceW3C | RuleReferenceWCAGTechnique | RuleReferenceACT | RuleReferenceWAI;

export type Rule = {
  validate: ({ classifier, root, document, response }: { classifier: EngineClassifier; root: SvgOrHtmlElement; response: Omit<RuleValidateResponse, "passed">; document: Document }) => Promise<void>;
  passCondition: PassCondition;
  impact: "minor" | "moderate" | "serious" | "critical";
  associatedDetectors: DetectorOrLocator[];
  refs: RuleReference[];
  id: string;
  title: string;
  advice: string;
  description: string;
  isBackendOnly?: boolean;
  metadata: {
    category: "ARIA" | "Forms" | "General" | "Graphics" | "Interactive Content" | "Landmarks" | "Lists" | "Metadata" | "Tables" | "Tabs" | "Dragging Alternative";
    profile: "Blind" | "Vision Impaired" | "Cognitive Disability" | "Motor Impaired";
    wcagVersion: "2.0" | "2.1" | "2.2" | "General Guidelines";
    wcagLevel: "A" | "AA" | "AAA" | "N/A";
  };
};

export enum PassCondition {
  PassedNodesAndNoFailedNodes = "PassedNodesAndNoFailedNodes",
  NoFailedNodes = "NoFailedNodes",
  NoInapplicableNodes = "NoInapplicableNodes",
}
