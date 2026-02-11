import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SearchFormMismatchSuccess = () => {
  const ruleId = "search-form-mismatch";
  const title = `A search form should be tagged as a search landmark`;
  const description = `Screen reader users rely on landmarks to quickly access important regions of a page. Defining a form as a search landmark ensures that users can quickly recognize and navigate to the search form.`;
  const helpText = `Enclose the search form in a <search> element or assign role="search" to the <form> element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "search form parent role search", content: `<html lang="he">
  <style>
    form {
      width: 400px;
    }

    textarea {
      width: 100%;
    }
  </style>

  <div role="search">
    <form>
      <textarea placeholder="חיפוש"></textarea>
      <button type="submit"></button>
    </form>
  </div>
</html>` },
  { filename: "search form parent search landmark", content: `<html lang="he">
  <style>
    form {
      width: 400px;
    }

    textarea {
      width: 100%;
    }
  </style>

  <search>
    <form>
      <textarea placeholder="חיפוש"></textarea>
      <button type="submit"></button>
    </form>
  </search>
</html>` },
  { filename: "search form role search", content: `<html lang="he">
  <style>
    form {
      width: 400px;
    }

    input {
      width: 100%;
    }
  </style>

  <form role="search">
    <textarea placeholder="חיפוש"></textarea>
    <button type="submit"></button>
  </form>
</html>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default SearchFormMismatchSuccess;
