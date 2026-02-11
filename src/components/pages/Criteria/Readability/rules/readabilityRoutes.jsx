import React from "react";
import { Route, Routes } from "react-router-dom";
import ColorContrastSucces from "./Success/Color-contrastSucces";
import ColorContrastFailures from "./Failures/Color-contrastFailures";
import FontSizesSuccess from "./Success/Font-sizesSuccess";
import FontSizesFailure from "./Failures/Font-sizesFailure";
import LetterSpacingSuccess from "./Success/Letter-spacingSuccess";
import LetterSpacingFailure from "./Failures/Letter-spacingFailure";

const ReadabilityRoutes = () => (
  <>
  <Route path="readability/color-contrast_success" element={<ColorContrastSucces />} />
    <Route path="readability/color-contrast_failure" element={<ColorContrastFailures />} />
    <Route path="readability/font-sizes_success" element={<FontSizesSuccess />} />
    <Route path="readability/font-sizes_failure" element={<FontSizesFailure />} />
    <Route path="readability/letter-spacing_success" element={<LetterSpacingSuccess />} />
    <Route path="readability/letter-spacing_failure" element={<LetterSpacingFailure />} />


  </>
);

export default ReadabilityRoutes;
