import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SearchFormMismatchFailure = () => {
  const ruleId = "search-form-mismatch";
  const title = `A search form should be tagged as a search landmark`;
  const description = `Screen reader users rely on landmarks to quickly access important regions of a page. Defining a form as a search landmark ensures that users can quickly recognize and navigate to the search form.`;
  const helpText = `Enclose the search form in a <search> element or assign role="search" to the <form> element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "search form no role", content: `<html lang="he">
  <style>
    form {
      width: 400px;
    }

    input {
      width: 100%;
    }
  </style>

  <form>
    <textarea placeholder="חיפוש"></textarea>
    <button type="submit"></button>
  </form>
</html>` },
  { filename: "search form parent no role", content: `<html lang="he">
  <style>
    form {
      width: 400px;
    }

    input {
      width: 100%;
    }
  </style>

  <div role="main">
    <form>
      <textarea placeholder="חיפוש"></textarea>
      <button type="submit"></button>
    </form>
  </div>
</html>` }
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

export default SearchFormMismatchFailure;
