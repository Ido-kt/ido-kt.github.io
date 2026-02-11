import {
  Animation as AnimationIcon,
  Article as ArticleIcon,
  TouchApp as ClickableIcon,
  Psychology as ContextIcon,
  Dashboard as DashboardIcon,
  Science as EngineIcon,
  Error as ErrorIcon,
  BorderColor as FormIcon,
  AccountTree as HeadingIcon,
  Keyboard as KeyboardIcon,
  Navigation as NavigationIcon,
  AutoStories as ReadabilityIcon,
  Assignment as RulesIcon,
  TableChart as TableIcon,
  ViewCarousel as ViewCarouselIcon,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import * as React from "react";
import CustomNavLink from "./components/layout/customNavLink";

// Helper function to count rules by criteria
const getRuleCount = (data, criteria) => {
  if (!data || !Array.isArray(data)) return 0;
  return data.filter(
    (rule) =>
      rule.criteria && rule.criteria.toLowerCase() === criteria.toLowerCase()
  ).length;
};

export const getMainListItems = (data = [], isOpen = true) => (
  <React.Fragment>
    {/* QA Dashboard */}
    <Box sx={{ mb: isOpen ? 2 : 1 }}>
      <CustomNavLink
        to="/"
        label="QA Dashboard"
        icon={DashboardIcon}
        category="Dashboard"
        isTestable={false}
        hasSuccess={false}
        hasFailure={false}
        isDrawerOpen={isOpen}
      />
    </Box>

    {/* All Testing Criteria */}
    <CustomNavLink
      to="/graphics"
      label="Graphics"
      icon={AnimationIcon}
      ruleCount={getRuleCount(data, "graphics")}
      category="Graphics"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/forms"
      label="Forms"
      icon={FormIcon}
      ruleCount={getRuleCount(data, "forms")}
      category="Forms"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/keyboard"
      label="Keyboard"
      icon={KeyboardIcon}
      ruleCount={getRuleCount(data, "keyboard")}
      category="Keyboard"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/navigation"
      label="Navigation"
      icon={NavigationIcon}
      ruleCount={getRuleCount(data, "navigation")}
      category="Navigation"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/headings"
      label="Headings"
      icon={HeadingIcon}
      ruleCount={getRuleCount(data, "headings")}
      category="Headings"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/errors"
      label="Errors"
      icon={ErrorIcon}
      ruleCount={getRuleCount(data, "errors")}
      category="Errors"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/carousels"
      label="Carousels"
      icon={ViewCarouselIcon}
      ruleCount={getRuleCount(data, "carousels")}
      category="Carousels"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/clickables"
      label="Clickables"
      icon={ClickableIcon}
      ruleCount={getRuleCount(data, "clickables")}
      category="Clickables"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/context"
      label="Context"
      icon={ContextIcon}
      ruleCount={getRuleCount(data, "context")}
      category="Context"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/document"
      label="Document"
      icon={ArticleIcon}
      ruleCount={getRuleCount(data, "document")}
      category="Document"
      hasSuccess={true}
      hasFailure={false}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/readability"
      label="Readability"
      icon={ReadabilityIcon}
      ruleCount={getRuleCount(data, "readability")}
      category="Readability"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/tables"
      label="Tables"
      icon={TableIcon}
      ruleCount={getRuleCount(data, "tables")}
      category="Tables"
      hasSuccess={true}
      hasFailure={true}
      isTestable={true}
      isDrawerOpen={isOpen}
    />
  </React.Fragment>
);

export const getSecondaryListItems = (data = [], isOpen = true) => (
  <React.Fragment>
    {/* Divider */}
    <Box
      sx={{
        height: "1px",
        backgroundColor: "rgba(102, 126, 234, 0.15)",
        mx: isOpen ? 2.5 : 1,
        my: isOpen ? 2.5 : 1.5,
        transition: (theme) =>
          theme.transitions.create(["margin"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
      }}
    />

    {/* Rules Libraries */}
    <CustomNavLink
      to="/rules"
      label="Legacy Rules"
      icon={RulesIcon}
      ruleCount={90}
      category="Rules"
      hasSuccess={true}
      hasFailure={true}
      isTestable={false}
      isDrawerOpen={isOpen}
    />
    <CustomNavLink
      to="/engine"
      label="Engine Rules"
      icon={EngineIcon}
      ruleCount={158}
      category="Rules"
      hasSuccess={true}
      hasFailure={true}
      isTestable={false}
      isDrawerOpen={isOpen}
    />
  </React.Fragment>
);

// Keep backward compatibility by exporting the old static versions as well
export const mainListItems = getMainListItems([]);
export const secondaryListItems = getSecondaryListItems([]);
