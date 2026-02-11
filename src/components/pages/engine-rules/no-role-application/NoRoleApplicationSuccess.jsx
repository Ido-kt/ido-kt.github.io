import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NoRoleApplicationSuccess = () => {
  const ruleId = "no-role-application";
  const title = `Avoid using role="application"`;
  const description = `Using role="application" is generally discouraged because it disables standard screen reader modes and forces users into an application mode. This removes familiar navigation shortcuts, such as heading or landmark navigation, and requires them to interact in ways they may not expect.`;
  const helpText = `Remove role="application" from the failing element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "no element with role application", content: `<html>
<head>
</head>
<body>
<div>...</div>
</body>
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

export default NoRoleApplicationSuccess;
