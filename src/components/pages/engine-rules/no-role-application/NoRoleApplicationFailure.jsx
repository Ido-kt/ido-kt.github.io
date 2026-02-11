import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NoRoleApplicationFailure = () => {
  const ruleId = "no-role-application";
  const title = `Avoid using role="application"`;
  const description = `Using role="application" is generally discouraged because it disables standard screen reader modes and forces users into an application mode. This removes familiar navigation shortcuts, such as heading or landmark navigation, and requires them to interact in ways they may not expect.`;
  const helpText = `Remove role="application" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "element with role application", content: `<html>
<head>
</head>
<body>
<div role="application">...</div>
</body>
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

export default NoRoleApplicationFailure;
