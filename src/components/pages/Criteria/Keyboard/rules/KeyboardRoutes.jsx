// KeyboardRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import NonintTabFail from "./Failures/NonintTabFail";
import NonintTabSucc from "./Success/NonintTabSucc";
import BrokentabSuccess from "./Success/BrokentabSuccess";
import BrokenTabindexFailure from "./Failures/Broken-tabindexFailure";
import SkipLinksSuccess from "./Success/Skip-linksSuccess";
import SkiplinksFailure from "./Failures/Skip-linksFailures";
import EnterClickabilityFailure from "./Failures/Enter-clickabilityFailure";
import EnterClickabilitySuccess from "./Success/Enter-clickabilitySuccess";
import FakeHiddenInteractiveSuccess from "./Success/Fake-hidden-interactiveSuccess";
import FakeHiddenInteractiveFailure from "./Failures/Fake-hidden-interactiveFailure";
import KeyboardHoverablesSuccces from "./Success/Keyboard-hoverablesSuccces";
import KeyboardHoverablesFailure from "./Failures/Keyboard-hoverablesFailure";
import KeyboardNavigationSuccess from "./Success/Keyboard-navigationSuccess";
import KeyboardNavigationFailure from "./Failures/Keyboard-navigationFailure";
import NoticeableFocusSuccess from "./Success/Noticeable-focusSuccess";
import NoticeableFocusFailure from "./Failures/Noticeable-focusFailure";
import PopupFocusSuccess from "./Success/Popup-focusSuccess";
import PopupFocusFailure from "./Failures/Popup-focusFailure";
import ScrollFocusSuccess from "./Success/Scroll-focusSuccess";
import ScrollFocusFailure from "./Failures/Scroll-focusFailures";

const KeyboardRoutes = () => (
  <>
    <Route
      path="keyboard/noninteractive-tabindex_success"
      element={<NonintTabSucc />}
    />
    <Route
      path="keyboard/noninteractive-tabindex_failure"
      element={<NonintTabFail />}
    />
    <Route path="keyboard/broken-tabindex_success" element={<BrokentabSuccess />} />
    <Route
      path="keyboard/broken-tabindex_failure"
      element={<BrokenTabindexFailure />} />
    <Route path="keyboard/skip-links_success" element={<SkipLinksSuccess />} />
    <Route path="keyboard/skip-links_failure" element={<SkiplinksFailure />} />
    <Route path="keyboard/enter-clickability_success" element={<EnterClickabilitySuccess />} />
    <Route path="keyboard/enter-clickability_failure" element={<EnterClickabilityFailure />} />
    <Route path="keyboard/fake-hidden-interactive_success" element={<FakeHiddenInteractiveSuccess />}/>
    <Route path="keyboard/fake-hidden-interactive_failure" element={<FakeHiddenInteractiveFailure />} />
    <Route path="keyboard/keyboard-hoverables_success" element={<KeyboardHoverablesSuccces />} />
    <Route path="keyboard/keyboard-hoverables_failure" element={<KeyboardHoverablesFailure />} />
    <Route path="keyboard/keyboard-navigation_success" element={<KeyboardNavigationSuccess />} />
    <Route path="keyboard/keyboard-navigation_failure" element={<KeyboardNavigationFailure />} />
    <Route path="keyboard/noticeable-focus_success" element={<NoticeableFocusSuccess />} />
    <Route path="keyboard/noticeable-focus_failure" element={<NoticeableFocusFailure />} />
    <Route path="keyboard/popup-focus_success" element={<PopupFocusSuccess />} />
    <Route path="keyboard/popup-focus_failure" element={<PopupFocusFailure />} />
    <Route path="keyboard/scroll-focus_success" element={<ScrollFocusSuccess />} />
    <Route path="keyboard/scroll-focus_failure" element={<ScrollFocusFailure />} /> 
  </>
);

export default KeyboardRoutes;
