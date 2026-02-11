        import React from "react";
import { Route, Routes } from "react-router-dom";
import SvgContentSuccess from "./Success/Svg-contentSuccess";
import SvgContentFailure from "./Failures/Svg-contentFailure";
import AltTextSuccess from "./Success/Alt-textSuccess";
import AltTextFailures from "./Failures/Alt-textFailures";
import FigureSetupSuccess from "./Success/Figure-setupSuccess";
import FigureSetupFailures from "./Failures/Figure-setupFailures";
import SpacersSuccess from "./Success/SpacersSuccess";
import SpacersFailures from "./Failures/SpacersFailures";
import BackgroundImagesSuccess from "./Success/BackgroundImagesSuccess";
import BackgroundImagesFailure from "./Failures/BackgroundImagesFailure";

const GraphicsRoutes = () => (
  <>
    <Route path="graphics/svg-content_success" element={<SvgContentSuccess />} />
    <Route path="graphics/svg-content_failure" element={<SvgContentFailure />} />
    <Route path="graphics/alt-text_success" element={<AltTextSuccess />} />
    <Route path="graphics/alt-text_failure" element={<AltTextFailures />} />
    <Route path="graphics/figure-setup_success" element={<FigureSetupSuccess />} />
    <Route path="graphics/figure-setup_failure" element={<FigureSetupFailures />} />
    <Route path="graphics/decorative-content_success" element={<SpacersSuccess />} />
    <Route path="graphics/decorative-content_failure" element={<SpacersFailures />} />

    {/* Background Images Success and Failure */}
    <Route path="graphics/background-images_success" element={<BackgroundImagesSuccess />} />
    <Route path="graphics/background-images_failure" element={<BackgroundImagesFailure />} />

  </>
);

export default GraphicsRoutes;
