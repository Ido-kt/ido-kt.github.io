// ClickablesRoutes.js
import React from "react";
import { Route } from "react-router-dom";
import AmbiguouslinksSuccess from "./Success/AmbiguouslinksSuccess";
import AmbiguouslinksFailures from "./Failures/AmbiguouslinksFailures";
import ButtonrolesSuccess from "./Success/ButtonrolesSuccess";
import ButtonrolesFailures from "./Failures/ButtonrolesFailures";
import EmptylinksSuccess from "./Success/EmptylinksSuccess";
import EmptylinksFailures from "./Failures/EmptylinksFailures";
import LinkcontextSuccess from "./Success/LinkcontextSuccess";
import LinkcontextFailure from "./Failures/LinkcontextFailures";
import NewwindolinksSuccess from "./Success/NewwindolinksSuccess";
import NewwindolinksFailures from "./Failures/NewwindolinksFailures";

const ClickablesRoutes = () => (
  <>
    <Route path="clickables/ambiguous-links_success" element={<AmbiguouslinksSuccess />} />
    <Route path="clickables/ambiguous-links_failure" element={<AmbiguouslinksFailures />} />
    <Route path="clickables/button-roles_success" element={<ButtonrolesSuccess />} />
    <Route path="clickables/button-roles_failure" element={<ButtonrolesFailures />} />
    <Route path="clickables/empty-links_success" element={<EmptylinksSuccess />} />
    <Route path="clickables/empty-links_failure" element={<EmptylinksFailures />} />
    <Route path="clickables/link-context_success" element={<LinkcontextSuccess />} />
    <Route path="clickables/link-context_failure" element={<LinkcontextFailure />} />
    <Route path="clickables/new-window-links_success" element={<NewwindolinksSuccess />} />
    <Route path="clickables/new-window-links_failure" element={<NewwindolinksFailures />} />
  </>
);

export default ClickablesRoutes;
