import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeadingSuccess from "./Success/Main-headingSuccess";
import MainHeadingFailure from "./Failures/Main-headingFailure";
import MultipleMainHeadingsSuccess from "./Success/Multiple-main-headingsSuccess";
import MultipleMainHeadingsFailure from "./Failures/Multiple-main-headingsFailure";
import UntaggedHeadingsFailures from "./Failures/Untagged-headingsFailures";
import UntaggedHeadingsSuccess from "./Success/Untagged-headingsSuccess"; 
import LongHeadingsSuccess from "./Success/Long-headingsSuccess";
import LongHeadingsFailure from "./Failures/Long-headingsFailure";
import EmptyHeadingsFailure from "./Failures/Empty-headingsFailure";
import EmptyHeadingsSuccess from "./Success/Empty-headingsSuccess";

const HeadingsRoutes = () => (
  <>
  <Route path="headings/main-heading_success" element={<MainHeadingSuccess />} />
  <Route path="headings/main-heading_failure" element={<MainHeadingFailure />} />
  <Route path="headings/multiple-main-headings_success" element={<MultipleMainHeadingsSuccess />} />
  <Route path="headings/multiple-main-headings_failure" element={<MultipleMainHeadingsFailure />} />
  <Route path="headings/untagged-headings_failure" element={<UntaggedHeadingsFailures />} />
  <Route path="headings/untagged-headings_success" element={<UntaggedHeadingsSuccess />} />
  <Route path="headings/long-headings_success" element={<LongHeadingsSuccess />} />
  <Route path="headings/long-headings_failure" element={<LongHeadingsFailure />} /> 
  <Route path="headings/empty-headings_failure" element={<EmptyHeadingsFailure />} />
  <Route path="headings/empty-headings_success" element={<EmptyHeadingsSuccess />} />

  </>
);

export default HeadingsRoutes;
