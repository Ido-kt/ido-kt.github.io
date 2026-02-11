import React from "react";
import { Route } from "react-router-dom";
import EngineRulePage from "../components/layout/engineRulePage";

// Import all engine rules and their components
import { AltMisuse } from "../components/pages/engine-rules/alt-misuse/metadata.js";
import AltMisuseSuccess from "../components/pages/engine-rules/alt-misuse/AltMisuseSuccess";
import AltMisuseFailure from "../components/pages/engine-rules/alt-misuse/AltMisuseFailure";
import { AriaControlsHasReference } from "../components/pages/engine-rules/aria-controls-has-reference/metadata.js";
import AriaControlsHasReferenceSuccess from "../components/pages/engine-rules/aria-controls-has-reference/AriaControlsHasReferenceSuccess";
import AriaControlsHasReferenceFailure from "../components/pages/engine-rules/aria-controls-has-reference/AriaControlsHasReferenceFailure";
import { AriaDescribedByHasReference } from "../components/pages/engine-rules/aria-describedby-has-reference/metadata.js";
import AriaDescribedbyHasReferenceSuccess from "../components/pages/engine-rules/aria-describedby-has-reference/AriaDescribedbyHasReferenceSuccess";
import AriaDescribedbyHasReferenceFailure from "../components/pages/engine-rules/aria-describedby-has-reference/AriaDescribedbyHasReferenceFailure";
import { AriaInvalidMismatch } from "../components/pages/engine-rules/aria-invalid-mismatch/metadata.js";
import AriaInvalidMismatchSuccess from "../components/pages/engine-rules/aria-invalid-mismatch/AriaInvalidMismatchSuccess";
import AriaInvalidMismatchFailure from "../components/pages/engine-rules/aria-invalid-mismatch/AriaInvalidMismatchFailure";
import { AriaInvalidMisuse } from "../components/pages/engine-rules/aria-invalid-misuse/metadata.js";
import AriaInvalidMisuseSuccess from "../components/pages/engine-rules/aria-invalid-misuse/AriaInvalidMisuseSuccess";
import AriaInvalidMisuseFailure from "../components/pages/engine-rules/aria-invalid-misuse/AriaInvalidMisuseFailure";
import { AriaLabelledByHasReference } from "../components/pages/engine-rules/aria-labelledby-has-reference/metadata.js";
import AriaLabelledbyHasReferenceSuccess from "../components/pages/engine-rules/aria-labelledby-has-reference/AriaLabelledbyHasReferenceSuccess";
import AriaLabelledbyHasReferenceFailure from "../components/pages/engine-rules/aria-labelledby-has-reference/AriaLabelledbyHasReferenceFailure";
import { ArticleMisuse } from "../components/pages/engine-rules/article-misuse/metadata.js";
import ArticleMisuseSuccess from "../components/pages/engine-rules/article-misuse/ArticleMisuseSuccess";
import ArticleMisuseFailure from "../components/pages/engine-rules/article-misuse/ArticleMisuseFailure";
import { BackgroundImageDiscernible } from "../components/pages/engine-rules/background-image-discernible/metadata.js";
import BackgroundImageDiscernibleSuccess from "../components/pages/engine-rules/background-image-discernible/BackgroundImageDiscernibleSuccess";
import BackgroundImageDiscernibleFailure from "../components/pages/engine-rules/background-image-discernible/BackgroundImageDiscernibleFailure";
import { BackgroundImageDiscernibleImage } from "../components/pages/engine-rules/background-image-discernible-image/metadata.js";
import BackgroundImageDiscernibleImageSuccess from "../components/pages/engine-rules/background-image-discernible-image/BackgroundImageDiscernibleImageSuccess";
import BackgroundImageDiscernibleImageFailure from "../components/pages/engine-rules/background-image-discernible-image/BackgroundImageDiscernibleImageFailure";
import { BreadcrumbsMismatch } from "../components/pages/engine-rules/breadcrumbs-mismatch/metadata.js";
import BreadcrumbsMismatchSuccess from "../components/pages/engine-rules/breadcrumbs-mismatch/BreadcrumbsMismatchSuccess";
import BreadcrumbsMismatchFailure from "../components/pages/engine-rules/breadcrumbs-mismatch/BreadcrumbsMismatchFailure";
import { BreadcrumbsNav } from "../components/pages/engine-rules/breadcrumbs-nav/metadata.js";
import BreadcrumbsNavSuccess from "../components/pages/engine-rules/breadcrumbs-nav/BreadcrumbsNavSuccess";
import BreadcrumbsNavFailure from "../components/pages/engine-rules/breadcrumbs-nav/BreadcrumbsNavFailure";
import { BrokenAriaReference } from "../components/pages/engine-rules/broken-aria-reference/metadata.js";
import BrokenAriaReferenceSuccess from "../components/pages/engine-rules/broken-aria-reference/BrokenAriaReferenceSuccess";
import BrokenAriaReferenceFailure from "../components/pages/engine-rules/broken-aria-reference/BrokenAriaReferenceFailure";
import { ButtonDiscernible } from "../components/pages/engine-rules/button-discernible/metadata.js";
import ButtonDiscernibleSuccess from "../components/pages/engine-rules/button-discernible/ButtonDiscernibleSuccess";
import ButtonDiscernibleFailure from "../components/pages/engine-rules/button-discernible/ButtonDiscernibleFailure";
import { ButtonMismatch } from "../components/pages/engine-rules/button-mismatch/metadata.js";
import ButtonMismatchSuccess from "../components/pages/engine-rules/button-mismatch/ButtonMismatchSuccess";
import ButtonMismatchFailure from "../components/pages/engine-rules/button-mismatch/ButtonMismatchFailure";
import { CaptchaAccessibleProvider } from "../components/pages/engine-rules/captcha-accessible-provider/metadata.js";
import CaptchaAccessibleProviderSuccess from "../components/pages/engine-rules/captcha-accessible-provider/CaptchaAccessibleProviderSuccess";
import CaptchaAccessibleProviderFailure from "../components/pages/engine-rules/captcha-accessible-provider/CaptchaAccessibleProviderFailure";
import { CarouselAriaLive } from "../components/pages/engine-rules/carousel-aria-live/metadata.js";
import CarouselAriaLiveSuccess from "../components/pages/engine-rules/carousel-aria-live/CarouselAriaLiveSuccess";
import CarouselAriaLiveFailure from "../components/pages/engine-rules/carousel-aria-live/CarouselAriaLiveFailure";
import { CarouselDiscernible } from "../components/pages/engine-rules/carousel-discernible/metadata.js";
import CarouselDiscernibleSuccess from "../components/pages/engine-rules/carousel-discernible/CarouselDiscernibleSuccess";
import CarouselDiscernibleFailure from "../components/pages/engine-rules/carousel-discernible/CarouselDiscernibleFailure";
import { CarouselDraggingMovements } from "../components/pages/engine-rules/carousel-dragging-movements/metadata.js";
import CarouselDraggingMovementsSuccess from "../components/pages/engine-rules/carousel-dragging-movements/CarouselDraggingMovementsSuccess";
import CarouselDraggingMovementsFailure from "../components/pages/engine-rules/carousel-dragging-movements/CarouselDraggingMovementsFailure";
import { CarouselMismatch } from "../components/pages/engine-rules/carousel-mismatch/metadata.js";
import CarouselMismatchSuccess from "../components/pages/engine-rules/carousel-mismatch/CarouselMismatchSuccess";
import CarouselMismatchFailure from "../components/pages/engine-rules/carousel-mismatch/CarouselMismatchFailure";
import { CarouselNextSlideDiscernible } from "../components/pages/engine-rules/carousel-next-slide-discernible/metadata.js";
import CarouselNextSlideDiscernibleSuccess from "../components/pages/engine-rules/carousel-next-slide-discernible/CarouselNextSlideDiscernibleSuccess";
import CarouselNextSlideDiscernibleFailure from "../components/pages/engine-rules/carousel-next-slide-discernible/CarouselNextSlideDiscernibleFailure";
import { CarouselNextSlideDiscernibleCorrectly } from "../components/pages/engine-rules/carousel-next-slide-discernible-correctly/metadata.js";
import CarouselNextSlideDiscernibleCorrectlySuccess from "../components/pages/engine-rules/carousel-next-slide-discernible-correctly/CarouselNextSlideDiscernibleCorrectlySuccess";
import CarouselNextSlideDiscernibleCorrectlyFailure from "../components/pages/engine-rules/carousel-next-slide-discernible-correctly/CarouselNextSlideDiscernibleCorrectlyFailure";
import { CarouselPreviousSlideDiscernible } from "../components/pages/engine-rules/carousel-previous-slide-discernible/metadata.js";
import CarouselPreviousSlideDiscernibleSuccess from "../components/pages/engine-rules/carousel-previous-slide-discernible/CarouselPreviousSlideDiscernibleSuccess";
import CarouselPreviousSlideDiscernibleFailure from "../components/pages/engine-rules/carousel-previous-slide-discernible/CarouselPreviousSlideDiscernibleFailure";
import { CarouselPreviousSlideDiscernibleCorrectly } from "../components/pages/engine-rules/carousel-previous-slide-discernible-correctly/metadata.js";
import CarouselPreviousSlideDiscernibleCorrectlySuccess from "../components/pages/engine-rules/carousel-previous-slide-discernible-correctly/CarouselPreviousSlideDiscernibleCorrectlySuccess";
import CarouselPreviousSlideDiscernibleCorrectlyFailure from "../components/pages/engine-rules/carousel-previous-slide-discernible-correctly/CarouselPreviousSlideDiscernibleCorrectlyFailure";
import { CarouselRedundantDiscernibleText } from "../components/pages/engine-rules/carousel-redundant-discernible-text/metadata.js";
import CarouselRedundantDiscernibleTextSuccess from "../components/pages/engine-rules/carousel-redundant-discernible-text/CarouselRedundantDiscernibleTextSuccess";
import CarouselRedundantDiscernibleTextFailure from "../components/pages/engine-rules/carousel-redundant-discernible-text/CarouselRedundantDiscernibleTextFailure";
import { CarouselSlidePickerDiscernible } from "../components/pages/engine-rules/carousel-slide-picker-discernible/metadata.js";
import CarouselSlidePickerDiscernibleSuccess from "../components/pages/engine-rules/carousel-slide-picker-discernible/CarouselSlidePickerDiscernibleSuccess";
import CarouselSlidePickerDiscernibleFailure from "../components/pages/engine-rules/carousel-slide-picker-discernible/CarouselSlidePickerDiscernibleFailure";
import { CheckboxAriaChecked } from "../components/pages/engine-rules/checkbox-aria-checked/metadata.js";
import CheckboxAriaCheckedSuccess from "../components/pages/engine-rules/checkbox-aria-checked/CheckboxAriaCheckedSuccess";
import CheckboxAriaCheckedFailure from "../components/pages/engine-rules/checkbox-aria-checked/CheckboxAriaCheckedFailure";
import { CheckboxDiscernible } from "../components/pages/engine-rules/checkbox-discernible/metadata.js";
import CheckboxDiscernibleSuccess from "../components/pages/engine-rules/checkbox-discernible/CheckboxDiscernibleSuccess";
import CheckboxDiscernibleFailure from "../components/pages/engine-rules/checkbox-discernible/CheckboxDiscernibleFailure";
import { CheckboxMismatch } from "../components/pages/engine-rules/checkbox-mismatch/metadata.js";
import CheckboxMismatchSuccess from "../components/pages/engine-rules/checkbox-mismatch/CheckboxMismatchSuccess";
import CheckboxMismatchFailure from "../components/pages/engine-rules/checkbox-mismatch/CheckboxMismatchFailure";
import { CheckboxMisuse } from "../components/pages/engine-rules/checkbox-misuse/metadata.js";
import CheckboxMisuseSuccess from "../components/pages/engine-rules/checkbox-misuse/CheckboxMisuseSuccess";
import CheckboxMisuseFailure from "../components/pages/engine-rules/checkbox-misuse/CheckboxMisuseFailure";
import { ColorContrast } from "../components/pages/engine-rules/color-contrast/metadata.js";
import ColorContrastSuccess from "../components/pages/engine-rules/color-contrast/ColorContrastSuccess";
import ColorContrastFailure from "../components/pages/engine-rules/color-contrast/ColorContrastFailure";
import { CustomSelectOptionsListListbox } from "../components/pages/engine-rules/custom-select-options-list-listbox/metadata.js";
import CustomSelectOptionsListListboxSuccess from "../components/pages/engine-rules/custom-select-options-list-listbox/CustomSelectOptionsListListboxSuccess";
import CustomSelectOptionsListListboxFailure from "../components/pages/engine-rules/custom-select-options-list-listbox/CustomSelectOptionsListListboxFailure";
import { CustomSelectTriggerCombobox } from "../components/pages/engine-rules/custom-select-trigger-combobox/metadata.js";
import CustomSelectTriggerComboboxSuccess from "../components/pages/engine-rules/custom-select-trigger-combobox/CustomSelectTriggerComboboxSuccess";
import CustomSelectTriggerComboboxFailure from "../components/pages/engine-rules/custom-select-trigger-combobox/CustomSelectTriggerComboboxFailure";
import { DialogModalFocus } from "../components/pages/engine-rules/dialog-modal-focus/metadata.js";
import DialogModalFocusSuccess from "../components/pages/engine-rules/dialog-modal-focus/DialogModalFocusSuccess";
import DialogModalFocusFailure from "../components/pages/engine-rules/dialog-modal-focus/DialogModalFocusFailure";
import { DialogModalMismatch } from "../components/pages/engine-rules/dialog-modal-mismatch/metadata.js";
import DialogModalMismatchSuccess from "../components/pages/engine-rules/dialog-modal-mismatch/DialogModalMismatchSuccess";
import DialogModalMismatchFailure from "../components/pages/engine-rules/dialog-modal-mismatch/DialogModalMismatchFailure";
import { DialogModalMisuse } from "../components/pages/engine-rules/dialog-modal-misuse/metadata.js";
import DialogModalMisuseSuccess from "../components/pages/engine-rules/dialog-modal-misuse/DialogModalMisuseSuccess";
import DialogModalMisuseFailure from "../components/pages/engine-rules/dialog-modal-misuse/DialogModalMisuseFailure";
import { DuplicateId } from "../components/pages/engine-rules/duplicate-id/metadata.js";
import DuplicateIdSuccess from "../components/pages/engine-rules/duplicate-id/DuplicateIdSuccess";
import DuplicateIdFailure from "../components/pages/engine-rules/duplicate-id/DuplicateIdFailure";
import { EmphasisMismatch } from "../components/pages/engine-rules/emphasis-mismatch/metadata.js";
import EmphasisMismatchSuccess from "../components/pages/engine-rules/emphasis-mismatch/EmphasisMismatchSuccess";
import EmphasisMismatchFailure from "../components/pages/engine-rules/emphasis-mismatch/EmphasisMismatchFailure";
import { FigureDiscernible } from "../components/pages/engine-rules/figure-discernible/metadata.js";
import FigureDiscernibleSuccess from "../components/pages/engine-rules/figure-discernible/FigureDiscernibleSuccess";
import FigureDiscernibleFailure from "../components/pages/engine-rules/figure-discernible/FigureDiscernibleFailure";
import { FocusNotObscuredFooter } from "../components/pages/engine-rules/focus-not-obscured-footer/metadata.js";
import FocusNotObscuredFooterSuccess from "../components/pages/engine-rules/focus-not-obscured-footer/FocusNotObscuredFooterSuccess";
import FocusNotObscuredFooterFailure from "../components/pages/engine-rules/focus-not-obscured-footer/FocusNotObscuredFooterFailure";
import { FocusNotObscuredHeader } from "../components/pages/engine-rules/focus-not-obscured-header/metadata.js";
import FocusNotObscuredHeaderSuccess from "../components/pages/engine-rules/focus-not-obscured-header/FocusNotObscuredHeaderSuccess";
import FocusNotObscuredHeaderFailure from "../components/pages/engine-rules/focus-not-obscured-header/FocusNotObscuredHeaderFailure";
import { FocusNoticeable } from "../components/pages/engine-rules/focus-noticeable/metadata.js";
import FocusNoticeableSuccess from "../components/pages/engine-rules/focus-noticeable/FocusNoticeableSuccess";
import FocusNoticeableFailure from "../components/pages/engine-rules/focus-noticeable/FocusNoticeableFailure";
import { FontSizes } from "../components/pages/engine-rules/font-sizes/metadata.js";
import FontSizesSuccess from "../components/pages/engine-rules/font-sizes/FontSizesSuccess";
import FontSizesFailure from "../components/pages/engine-rules/font-sizes/FontSizesFailure";
import { FormContextChangeWarning } from "../components/pages/engine-rules/form-context-change-warning/metadata.js";
import FormContextChangeWarningSuccess from "../components/pages/engine-rules/form-context-change-warning/FormContextChangeWarningSuccess";
import FormContextChangeWarningFailure from "../components/pages/engine-rules/form-context-change-warning/FormContextChangeWarningFailure";
import { FormDuplicateId } from "../components/pages/engine-rules/form-duplicate-id/metadata.js";
import FormDuplicateIdSuccess from "../components/pages/engine-rules/form-duplicate-id/FormDuplicateIdSuccess";
import FormDuplicateIdFailure from "../components/pages/engine-rules/form-duplicate-id/FormDuplicateIdFailure";
import { FormMismatch } from "../components/pages/engine-rules/form-mismatch/metadata.js";
import FormMismatchSuccess from "../components/pages/engine-rules/form-mismatch/FormMismatchSuccess";
import FormMismatchFailure from "../components/pages/engine-rules/form-mismatch/FormMismatchFailure";
import { FormSubmitButtonMismatch } from "../components/pages/engine-rules/form-submit-button-mismatch/metadata.js";
import FormSubmitButtonMismatchSuccess from "../components/pages/engine-rules/form-submit-button-mismatch/FormSubmitButtonMismatchSuccess";
import FormSubmitButtonMismatchFailure from "../components/pages/engine-rules/form-submit-button-mismatch/FormSubmitButtonMismatchFailure";
import { HeadingDiscernible } from "../components/pages/engine-rules/heading-discernible/metadata.js";
import HeadingDiscernibleSuccess from "../components/pages/engine-rules/heading-discernible/HeadingDiscernibleSuccess";
import HeadingDiscernibleFailure from "../components/pages/engine-rules/heading-discernible/HeadingDiscernibleFailure";
import { HeadingH1 } from "../components/pages/engine-rules/heading-h1/metadata.js";
import HeadingH1Success from "../components/pages/engine-rules/heading-h1/HeadingH1Success";
import HeadingH1Failure from "../components/pages/engine-rules/heading-h1/HeadingH1Failure";
import { HeadingLengthy } from "../components/pages/engine-rules/heading-lengthy/metadata.js";
import HeadingLengthySuccess from "../components/pages/engine-rules/heading-lengthy/HeadingLengthySuccess";
import HeadingLengthyFailure from "../components/pages/engine-rules/heading-lengthy/HeadingLengthyFailure";
import { HeadingMismatch } from "../components/pages/engine-rules/heading-mismatch/metadata.js";
import HeadingMismatchSuccess from "../components/pages/engine-rules/heading-mismatch/HeadingMismatchSuccess";
import HeadingMismatchFailure from "../components/pages/engine-rules/heading-mismatch/HeadingMismatchFailure";
import { HeadingMisuse } from "../components/pages/engine-rules/heading-misuse/metadata.js";
import HeadingMisuseSuccess from "../components/pages/engine-rules/heading-misuse/HeadingMisuseSuccess";
import HeadingMisuseFailure from "../components/pages/engine-rules/heading-misuse/HeadingMisuseFailure";
import { HeadingOrder } from "../components/pages/engine-rules/heading-order/metadata.js";
import HeadingOrderSuccess from "../components/pages/engine-rules/heading-order/HeadingOrderSuccess";
import HeadingOrderFailure from "../components/pages/engine-rules/heading-order/HeadingOrderFailure";
import { HeadingOrderOptimal } from "../components/pages/engine-rules/heading-order-optimal/metadata.js";
import HeadingOrderOptimalSuccess from "../components/pages/engine-rules/heading-order-optimal/HeadingOrderOptimalSuccess";
import HeadingOrderOptimalFailure from "../components/pages/engine-rules/heading-order-optimal/HeadingOrderOptimalFailure";
import { HeadingSingleH1 } from "../components/pages/engine-rules/heading-single-h1/metadata.js";
import HeadingSingleH1Success from "../components/pages/engine-rules/heading-single-h1/HeadingSingleH1Success";
import HeadingSingleH1Failure from "../components/pages/engine-rules/heading-single-h1/HeadingSingleH1Failure";
import { HtmlLang } from "../components/pages/engine-rules/html-lang/metadata.js";
import HtmlLangSuccess from "../components/pages/engine-rules/html-lang/HtmlLangSuccess";
import HtmlLangFailure from "../components/pages/engine-rules/html-lang/HtmlLangFailure";
import { HtmlLangValid } from "../components/pages/engine-rules/html-lang-valid/metadata.js";
import HtmlLangValidSuccess from "../components/pages/engine-rules/html-lang-valid/HtmlLangValidSuccess";
import HtmlLangValidFailure from "../components/pages/engine-rules/html-lang-valid/HtmlLangValidFailure";
import { IconDiscernible } from "../components/pages/engine-rules/icon-discernible/metadata.js";
import IconDiscernibleSuccess from "../components/pages/engine-rules/icon-discernible/IconDiscernibleSuccess";
import IconDiscernibleFailure from "../components/pages/engine-rules/icon-discernible/IconDiscernibleFailure";
import { IframeDiscernible } from "../components/pages/engine-rules/iframe-discernible/metadata.js";
import IframeDiscernibleSuccess from "../components/pages/engine-rules/iframe-discernible/IframeDiscernibleSuccess";
import IframeDiscernibleFailure from "../components/pages/engine-rules/iframe-discernible/IframeDiscernibleFailure";
import { ImageDiscernible } from "../components/pages/engine-rules/image-discernible/metadata.js";
import ImageDiscernibleSuccess from "../components/pages/engine-rules/image-discernible/ImageDiscernibleSuccess";
import ImageDiscernibleFailure from "../components/pages/engine-rules/image-discernible/ImageDiscernibleFailure";
import { ImageDiscernibleCorrectly } from "../components/pages/engine-rules/image-discernible-correctly/metadata.js";
import ImageDiscernibleCorrectlySuccess from "../components/pages/engine-rules/image-discernible-correctly/ImageDiscernibleCorrectlySuccess";
import ImageDiscernibleCorrectlyFailure from "../components/pages/engine-rules/image-discernible-correctly/ImageDiscernibleCorrectlyFailure";
import { ImageMismatch } from "../components/pages/engine-rules/image-mismatch/metadata.js";
import ImageMismatchSuccess from "../components/pages/engine-rules/image-mismatch/ImageMismatchSuccess";
import ImageMismatchFailure from "../components/pages/engine-rules/image-mismatch/ImageMismatchFailure";
import { ImageMisuse } from "../components/pages/engine-rules/image-misuse/metadata.js";
import ImageMisuseSuccess from "../components/pages/engine-rules/image-misuse/ImageMisuseSuccess";
import ImageMisuseFailure from "../components/pages/engine-rules/image-misuse/ImageMisuseFailure";
import { InputDiscernible } from "../components/pages/engine-rules/input-discernible/metadata.js";
import InputDiscernibleSuccess from "../components/pages/engine-rules/input-discernible/InputDiscernibleSuccess";
import InputDiscernibleFailure from "../components/pages/engine-rules/input-discernible/InputDiscernibleFailure";
import { InteractiveNotTabbable } from "../components/pages/engine-rules/interactive-not-tabbable/metadata.js";
import InteractiveNotTabbableSuccess from "../components/pages/engine-rules/interactive-not-tabbable/InteractiveNotTabbableSuccess";
import InteractiveNotTabbableFailure from "../components/pages/engine-rules/interactive-not-tabbable/InteractiveNotTabbableFailure";
import { InteractiveTargetSize } from "../components/pages/engine-rules/interactive-target-size/metadata.js";
import InteractiveTargetSizeSuccess from "../components/pages/engine-rules/interactive-target-size/InteractiveTargetSizeSuccess";
import InteractiveTargetSizeFailure from "../components/pages/engine-rules/interactive-target-size/InteractiveTargetSizeFailure";
import { LetterSpacingPositive } from "../components/pages/engine-rules/letter-spacing-positive/metadata.js";
import LetterSpacingPositiveSuccess from "../components/pages/engine-rules/letter-spacing-positive/LetterSpacingPositiveSuccess";
import LetterSpacingPositiveFailure from "../components/pages/engine-rules/letter-spacing-positive/LetterSpacingPositiveFailure";
import { LinkAnchorAmbiguous } from "../components/pages/engine-rules/link-anchor-ambiguous/metadata.js";
import LinkAnchorAmbiguousSuccess from "../components/pages/engine-rules/link-anchor-ambiguous/LinkAnchorAmbiguousSuccess";
import LinkAnchorAmbiguousFailure from "../components/pages/engine-rules/link-anchor-ambiguous/LinkAnchorAmbiguousFailure";
import { LinkAnchorDiscernible } from "../components/pages/engine-rules/link-anchor-discernible/metadata.js";
import LinkAnchorDiscernibleSuccess from "../components/pages/engine-rules/link-anchor-discernible/LinkAnchorDiscernibleSuccess";
import LinkAnchorDiscernibleFailure from "../components/pages/engine-rules/link-anchor-discernible/LinkAnchorDiscernibleFailure";
import { LinkContext } from "../components/pages/engine-rules/link-context/metadata.js";
import LinkContextSuccess from "../components/pages/engine-rules/link-context/LinkContextSuccess";
import LinkContextFailure from "../components/pages/engine-rules/link-context/LinkContextFailure";
import { LinkCurrentPage } from "../components/pages/engine-rules/link-current-page/metadata.js";
import LinkCurrentPageSuccess from "../components/pages/engine-rules/link-current-page/LinkCurrentPageSuccess";
import LinkCurrentPageFailure from "../components/pages/engine-rules/link-current-page/LinkCurrentPageFailure";
import { LinkHomepageWarning } from "../components/pages/engine-rules/link-homepage-warning/metadata.js";
import LinkHomepageWarningSuccess from "../components/pages/engine-rules/link-homepage-warning/LinkHomepageWarningSuccess";
import LinkHomepageWarningFailure from "../components/pages/engine-rules/link-homepage-warning/LinkHomepageWarningFailure";
import { LinkImageWarning } from "../components/pages/engine-rules/link-image-warning/metadata.js";
import LinkImageWarningSuccess from "../components/pages/engine-rules/link-image-warning/LinkImageWarningSuccess";
import LinkImageWarningFailure from "../components/pages/engine-rules/link-image-warning/LinkImageWarningFailure";
import { LinkMailtoWarning } from "../components/pages/engine-rules/link-mailto-warning/metadata.js";
import LinkMailtoWarningSuccess from "../components/pages/engine-rules/link-mailto-warning/LinkMailtoWarningSuccess";
import LinkMailtoWarningFailure from "../components/pages/engine-rules/link-mailto-warning/LinkMailtoWarningFailure";
import { LinkNavigationAmbiguous } from "../components/pages/engine-rules/link-navigation-ambiguous/metadata.js";
import LinkNavigationAmbiguousSuccess from "../components/pages/engine-rules/link-navigation-ambiguous/LinkNavigationAmbiguousSuccess";
import LinkNavigationAmbiguousFailure from "../components/pages/engine-rules/link-navigation-ambiguous/LinkNavigationAmbiguousFailure";
import { LinkNavigationDiscernible } from "../components/pages/engine-rules/link-navigation-discernible/metadata.js";
import LinkNavigationDiscernibleSuccess from "../components/pages/engine-rules/link-navigation-discernible/LinkNavigationDiscernibleSuccess";
import LinkNavigationDiscernibleFailure from "../components/pages/engine-rules/link-navigation-discernible/LinkNavigationDiscernibleFailure";
import { LinkNewWindowWarning } from "../components/pages/engine-rules/link-new-window-warning/metadata.js";
import LinkNewWindowWarningSuccess from "../components/pages/engine-rules/link-new-window-warning/LinkNewWindowWarningSuccess";
import LinkNewWindowWarningFailure from "../components/pages/engine-rules/link-new-window-warning/LinkNewWindowWarningFailure";
import { LinkPDFWarning } from "../components/pages/engine-rules/link-pdf-warning/metadata.js";
import LinkPdfWarningSuccess from "../components/pages/engine-rules/link-pdf-warning/LinkPdfWarningSuccess";
import LinkPdfWarningFailure from "../components/pages/engine-rules/link-pdf-warning/LinkPdfWarningFailure";
import { LinkTelephoneWarning } from "../components/pages/engine-rules/link-telephone-warning/metadata.js";
import LinkTelephoneWarningSuccess from "../components/pages/engine-rules/link-telephone-warning/LinkTelephoneWarningSuccess";
import LinkTelephoneWarningFailure from "../components/pages/engine-rules/link-telephone-warning/LinkTelephoneWarningFailure";
import { ListItemWithinList } from "../components/pages/engine-rules/list-item-within-list/metadata.js";
import ListItemWithinListSuccess from "../components/pages/engine-rules/list-item-within-list/ListItemWithinListSuccess";
import ListItemWithinListFailure from "../components/pages/engine-rules/list-item-within-list/ListItemWithinListFailure";
import { ListNotEmpty } from "../components/pages/engine-rules/list-not-empty/metadata.js";
import ListNotEmptySuccess from "../components/pages/engine-rules/list-not-empty/ListNotEmptySuccess";
import ListNotEmptyFailure from "../components/pages/engine-rules/list-not-empty/ListNotEmptyFailure";
import { MainNavigationDiscernible } from "../components/pages/engine-rules/main-navigation-discernible/metadata.js";
import MainNavigationDiscernibleSuccess from "../components/pages/engine-rules/main-navigation-discernible/MainNavigationDiscernibleSuccess";
import MainNavigationDiscernibleFailure from "../components/pages/engine-rules/main-navigation-discernible/MainNavigationDiscernibleFailure";
import { MainNavigationMismatch } from "../components/pages/engine-rules/main-navigation-mismatch/metadata.js";
import MainNavigationMismatchSuccess from "../components/pages/engine-rules/main-navigation-mismatch/MainNavigationMismatchSuccess";
import MainNavigationMismatchFailure from "../components/pages/engine-rules/main-navigation-mismatch/MainNavigationMismatchFailure";
import { MapAreaDiscernible } from "../components/pages/engine-rules/map-area-discernible/metadata.js";
import MapAreaDiscernibleSuccess from "../components/pages/engine-rules/map-area-discernible/MapAreaDiscernibleSuccess";
import MapAreaDiscernibleFailure from "../components/pages/engine-rules/map-area-discernible/MapAreaDiscernibleFailure";
import { MarqueeDeprecated } from "../components/pages/engine-rules/marquee-deprecated/metadata.js";
import MarqueeDeprecatedSuccess from "../components/pages/engine-rules/marquee-deprecated/MarqueeDeprecatedSuccess";
import MarqueeDeprecatedFailure from "../components/pages/engine-rules/marquee-deprecated/MarqueeDeprecatedFailure";
import { MenuAvoid } from "../components/pages/engine-rules/menu-avoid/metadata.js";
import MenuAvoidSuccess from "../components/pages/engine-rules/menu-avoid/MenuAvoidSuccess";
import MenuAvoidFailure from "../components/pages/engine-rules/menu-avoid/MenuAvoidFailure";
import { MenuBarAvoid } from "../components/pages/engine-rules/menu-bar-avoid/metadata.js";
import MenuBarAvoidSuccess from "../components/pages/engine-rules/menu-bar-avoid/MenuBarAvoidSuccess";
import MenuBarAvoidFailure from "../components/pages/engine-rules/menu-bar-avoid/MenuBarAvoidFailure";
import { MenuItemAvoid } from "../components/pages/engine-rules/menu-item-avoid/metadata.js";
import MenuItemAvoidSuccess from "../components/pages/engine-rules/menu-item-avoid/MenuItemAvoidSuccess";
import MenuItemAvoidFailure from "../components/pages/engine-rules/menu-item-avoid/MenuItemAvoidFailure";
import { MenuTriggerClickable } from "../components/pages/engine-rules/menu-trigger-clickable/metadata.js";
import MenuTriggerClickableSuccess from "../components/pages/engine-rules/menu-trigger-clickable/MenuTriggerClickableSuccess";
import MenuTriggerClickableFailure from "../components/pages/engine-rules/menu-trigger-clickable/MenuTriggerClickableFailure";
import { MenuTriggerCorrectState } from "../components/pages/engine-rules/menu-trigger-correct-state/metadata.js";
import MenuTriggerCorrectStateSuccess from "../components/pages/engine-rules/menu-trigger-correct-state/MenuTriggerCorrectStateSuccess";
import MenuTriggerCorrectStateFailure from "../components/pages/engine-rules/menu-trigger-correct-state/MenuTriggerCorrectStateFailure";
import { MenuTriggerMismatch } from "../components/pages/engine-rules/menu-trigger-mismatch/metadata.js";
import MenuTriggerMismatchSuccess from "../components/pages/engine-rules/menu-trigger-mismatch/MenuTriggerMismatchSuccess";
import MenuTriggerMismatchFailure from "../components/pages/engine-rules/menu-trigger-mismatch/MenuTriggerMismatchFailure";
import { MenuTriggerMisuse } from "../components/pages/engine-rules/menu-trigger-misuse/metadata.js";
import MenuTriggerMisuseSuccess from "../components/pages/engine-rules/menu-trigger-misuse/MenuTriggerMisuseSuccess";
import MenuTriggerMisuseFailure from "../components/pages/engine-rules/menu-trigger-misuse/MenuTriggerMisuseFailure";
import { NameProhibitedNoAriaLabel } from "../components/pages/engine-rules/name-prohibited-no-aria-label/metadata.js";
import NameProhibitedNoAriaLabelSuccess from "../components/pages/engine-rules/name-prohibited-no-aria-label/NameProhibitedNoAriaLabelSuccess";
import NameProhibitedNoAriaLabelFailure from "../components/pages/engine-rules/name-prohibited-no-aria-label/NameProhibitedNoAriaLabelFailure";
import { NavigationDiscernible } from "../components/pages/engine-rules/navigation-discernible/metadata.js";
import NavigationDiscernibleSuccess from "../components/pages/engine-rules/navigation-discernible/NavigationDiscernibleSuccess";
import NavigationDiscernibleFailure from "../components/pages/engine-rules/navigation-discernible/NavigationDiscernibleFailure";
import { NavigationItemLink } from "../components/pages/engine-rules/navigation-item-link/metadata.js";
import NavigationItemLinkSuccess from "../components/pages/engine-rules/navigation-item-link/NavigationItemLinkSuccess";
import NavigationItemLinkFailure from "../components/pages/engine-rules/navigation-item-link/NavigationItemLinkFailure";
import { NavigationMismatch } from "../components/pages/engine-rules/navigation-mismatch/metadata.js";
import NavigationMismatchSuccess from "../components/pages/engine-rules/navigation-mismatch/NavigationMismatchSuccess";
import NavigationMismatchFailure from "../components/pages/engine-rules/navigation-mismatch/NavigationMismatchFailure";
import { NavigationMisuse } from "../components/pages/engine-rules/navigation-misuse/metadata.js";
import NavigationMisuseSuccess from "../components/pages/engine-rules/navigation-misuse/NavigationMisuseSuccess";
import NavigationMisuseFailure from "../components/pages/engine-rules/navigation-misuse/NavigationMisuseFailure";
import { NavigationNotNested } from "../components/pages/engine-rules/navigation-not-nested/metadata.js";
import NavigationNotNestedSuccess from "../components/pages/engine-rules/navigation-not-nested/NavigationNotNestedSuccess";
import NavigationNotNestedFailure from "../components/pages/engine-rules/navigation-not-nested/NavigationNotNestedFailure";
import { NavigationRedundantDiscernibleText } from "../components/pages/engine-rules/navigation-redundant-discernible-text/metadata.js";
import NavigationRedundantDiscernibleTextSuccess from "../components/pages/engine-rules/navigation-redundant-discernible-text/NavigationRedundantDiscernibleTextSuccess";
import NavigationRedundantDiscernibleTextFailure from "../components/pages/engine-rules/navigation-redundant-discernible-text/NavigationRedundantDiscernibleTextFailure";
import { NavigationSubmenuDiscernible } from "../components/pages/engine-rules/navigation-submenu-discernible/metadata.js";
import NavigationSubmenuDiscernibleSuccess from "../components/pages/engine-rules/navigation-submenu-discernible/NavigationSubmenuDiscernibleSuccess";
import NavigationSubmenuDiscernibleFailure from "../components/pages/engine-rules/navigation-submenu-discernible/NavigationSubmenuDiscernibleFailure";
import { NavigationSubmenuRegion } from "../components/pages/engine-rules/navigation-submenu-region/metadata.js";
import NavigationSubmenuRegionSuccess from "../components/pages/engine-rules/navigation-submenu-region/NavigationSubmenuRegionSuccess";
import NavigationSubmenuRegionFailure from "../components/pages/engine-rules/navigation-submenu-region/NavigationSubmenuRegionFailure";
import { NoAutofocus } from "../components/pages/engine-rules/no-autofocus/metadata.js";
import NoAutofocusSuccess from "../components/pages/engine-rules/no-autofocus/NoAutofocusSuccess";
import NoAutofocusFailure from "../components/pages/engine-rules/no-autofocus/NoAutofocusFailure";
import { NoExtraInformationInTitle } from "../components/pages/engine-rules/no-extra-information-in-title/metadata.js";
import NoExtraInformationInTitleSuccess from "../components/pages/engine-rules/no-extra-information-in-title/NoExtraInformationInTitleSuccess";
import NoExtraInformationInTitleFailure from "../components/pages/engine-rules/no-extra-information-in-title/NoExtraInformationInTitleFailure";
import { NoRoleApplication } from "../components/pages/engine-rules/no-role-application/metadata.js";
import NoRoleApplicationSuccess from "../components/pages/engine-rules/no-role-application/NoRoleApplicationSuccess";
import NoRoleApplicationFailure from "../components/pages/engine-rules/no-role-application/NoRoleApplicationFailure";
import { NoUiSliderSinglePointer } from "../components/pages/engine-rules/no-ui-slider-single-pointer/metadata.js";
import NoUiSliderSinglePointerSuccess from "../components/pages/engine-rules/no-ui-slider-single-pointer/NoUiSliderSinglePointerSuccess";
import NoUiSliderSinglePointerFailure from "../components/pages/engine-rules/no-ui-slider-single-pointer/NoUiSliderSinglePointerFailure";
import { PageMetaDescription } from "../components/pages/engine-rules/page-meta-description/metadata.js";
import PageMetaDescriptionSuccess from "../components/pages/engine-rules/page-meta-description/PageMetaDescriptionSuccess";
import PageMetaDescriptionFailure from "../components/pages/engine-rules/page-meta-description/PageMetaDescriptionFailure";
import { PageMetaViewport } from "../components/pages/engine-rules/page-meta-viewport/metadata.js";
import PageMetaViewportSuccess from "../components/pages/engine-rules/page-meta-viewport/PageMetaViewportSuccess";
import PageMetaViewportFailure from "../components/pages/engine-rules/page-meta-viewport/PageMetaViewportFailure";
import { PageMetaViewportValid } from "../components/pages/engine-rules/page-meta-viewport-valid/metadata.js";
import PageMetaViewportValidSuccess from "../components/pages/engine-rules/page-meta-viewport-valid/PageMetaViewportValidSuccess";
import PageMetaViewportValidFailure from "../components/pages/engine-rules/page-meta-viewport-valid/PageMetaViewportValidFailure";
import { PageNoMetaHttpEquivRefresh } from "../components/pages/engine-rules/page-no-meta-http-equiv-refresh/metadata.js";
import PageNoMetaHttpEquivRefreshSuccess from "../components/pages/engine-rules/page-no-meta-http-equiv-refresh/PageNoMetaHttpEquivRefreshSuccess";
import PageNoMetaHttpEquivRefreshFailure from "../components/pages/engine-rules/page-no-meta-http-equiv-refresh/PageNoMetaHttpEquivRefreshFailure";
import { PageTitle } from "../components/pages/engine-rules/page-title/metadata.js";
import PageTitleSuccess from "../components/pages/engine-rules/page-title/PageTitleSuccess";
import PageTitleFailure from "../components/pages/engine-rules/page-title/PageTitleFailure";
import { PageTitleValid } from "../components/pages/engine-rules/page-title-valid/metadata.js";
import PageTitleValidSuccess from "../components/pages/engine-rules/page-title-valid/PageTitleValidSuccess";
import PageTitleValidFailure from "../components/pages/engine-rules/page-title-valid/PageTitleValidFailure";
import { PixelImageNotDiscernible } from "../components/pages/engine-rules/pixel-image-not-discernible/metadata.js";
import PixelImageNotDiscernibleSuccess from "../components/pages/engine-rules/pixel-image-not-discernible/PixelImageNotDiscernibleSuccess";
import PixelImageNotDiscernibleFailure from "../components/pages/engine-rules/pixel-image-not-discernible/PixelImageNotDiscernibleFailure";
import { RadioAriaChecked } from "../components/pages/engine-rules/radio-aria-checked/metadata.js";
import RadioAriaCheckedSuccess from "../components/pages/engine-rules/radio-aria-checked/RadioAriaCheckedSuccess";
import RadioAriaCheckedFailure from "../components/pages/engine-rules/radio-aria-checked/RadioAriaCheckedFailure";
import { RadioDiscernible } from "../components/pages/engine-rules/radio-discernible/metadata.js";
import RadioDiscernibleSuccess from "../components/pages/engine-rules/radio-discernible/RadioDiscernibleSuccess";
import RadioDiscernibleFailure from "../components/pages/engine-rules/radio-discernible/RadioDiscernibleFailure";
import { RadioMismatch } from "../components/pages/engine-rules/radio-mismatch/metadata.js";
import RadioMismatchSuccess from "../components/pages/engine-rules/radio-mismatch/RadioMismatchSuccess";
import RadioMismatchFailure from "../components/pages/engine-rules/radio-mismatch/RadioMismatchFailure";
import { RadioMisuse } from "../components/pages/engine-rules/radio-misuse/metadata.js";
import RadioMisuseSuccess from "../components/pages/engine-rules/radio-misuse/RadioMisuseSuccess";
import RadioMisuseFailure from "../components/pages/engine-rules/radio-misuse/RadioMisuseFailure";
import { RedundantDiscernibleContent } from "../components/pages/engine-rules/redundant-discernible-content/metadata.js";
import RedundantDiscernibleContentSuccess from "../components/pages/engine-rules/redundant-discernible-content/RedundantDiscernibleContentSuccess";
import RedundantDiscernibleContentFailure from "../components/pages/engine-rules/redundant-discernible-content/RedundantDiscernibleContentFailure";
import { RegionFooter } from "../components/pages/engine-rules/region-footer/metadata.js";
import RegionFooterSuccess from "../components/pages/engine-rules/region-footer/RegionFooterSuccess";
import RegionFooterFailure from "../components/pages/engine-rules/region-footer/RegionFooterFailure";
import { RegionFooterMismatch } from "../components/pages/engine-rules/region-footer-mismatch/metadata.js";
import RegionFooterMismatchSuccess from "../components/pages/engine-rules/region-footer-mismatch/RegionFooterMismatchSuccess";
import RegionFooterMismatchFailure from "../components/pages/engine-rules/region-footer-mismatch/RegionFooterMismatchFailure";
import { RegionFooterMisuse } from "../components/pages/engine-rules/region-footer-misuse/metadata.js";
import RegionFooterMisuseSuccess from "../components/pages/engine-rules/region-footer-misuse/RegionFooterMisuseSuccess";
import RegionFooterMisuseFailure from "../components/pages/engine-rules/region-footer-misuse/RegionFooterMisuseFailure";
import { RegionFooterSingle } from "../components/pages/engine-rules/region-footer-single/metadata.js";
import RegionFooterSingleSuccess from "../components/pages/engine-rules/region-footer-single/RegionFooterSingleSuccess";
import RegionFooterSingleFailure from "../components/pages/engine-rules/region-footer-single/RegionFooterSingleFailure";
import { RegionMainContent } from "../components/pages/engine-rules/region-main-content/metadata.js";
import RegionMainContentSuccess from "../components/pages/engine-rules/region-main-content/RegionMainContentSuccess";
import RegionMainContentFailure from "../components/pages/engine-rules/region-main-content/RegionMainContentFailure";
import { RegionMainContentMismatch } from "../components/pages/engine-rules/region-main-content-mismatch/metadata.js";
import RegionMainContentMismatchSuccess from "../components/pages/engine-rules/region-main-content-mismatch/RegionMainContentMismatchSuccess";
import RegionMainContentMismatchFailure from "../components/pages/engine-rules/region-main-content-mismatch/RegionMainContentMismatchFailure";
import { RegionMainContentMisuse } from "../components/pages/engine-rules/region-main-content-misuse/metadata.js";
import RegionMainContentMisuseSuccess from "../components/pages/engine-rules/region-main-content-misuse/RegionMainContentMisuseSuccess";
import RegionMainContentMisuseFailure from "../components/pages/engine-rules/region-main-content-misuse/RegionMainContentMisuseFailure";
import { RegionMainContentSingle } from "../components/pages/engine-rules/region-main-content-single/metadata.js";
import RegionMainContentSingleSuccess from "../components/pages/engine-rules/region-main-content-single/RegionMainContentSingleSuccess";
import RegionMainContentSingleFailure from "../components/pages/engine-rules/region-main-content-single/RegionMainContentSingleFailure";
import { RequiredFormFieldAriaRequired } from "../components/pages/engine-rules/required-form-field-aria-required/metadata.js";
import RequiredFormFieldAriaRequiredSuccess from "../components/pages/engine-rules/required-form-field-aria-required/RequiredFormFieldAriaRequiredSuccess";
import RequiredFormFieldAriaRequiredFailure from "../components/pages/engine-rules/required-form-field-aria-required/RequiredFormFieldAriaRequiredFailure";
import { SalePriceDiscernible } from "../components/pages/engine-rules/sale-price-discernible/metadata.js";
import SalePriceDiscernibleSuccess from "../components/pages/engine-rules/sale-price-discernible/SalePriceDiscernibleSuccess";
import SalePriceDiscernibleFailure from "../components/pages/engine-rules/sale-price-discernible/SalePriceDiscernibleFailure";
import { SearchFormMismatch } from "../components/pages/engine-rules/search-form-mismatch/metadata.js";
import SearchFormMismatchSuccess from "../components/pages/engine-rules/search-form-mismatch/SearchFormMismatchSuccess";
import SearchFormMismatchFailure from "../components/pages/engine-rules/search-form-mismatch/SearchFormMismatchFailure";
import { SelectOptionMismatch } from "../components/pages/engine-rules/select-option-mismatch/metadata.js";
import SelectOptionMismatchSuccess from "../components/pages/engine-rules/select-option-mismatch/SelectOptionMismatchSuccess";
import SelectOptionMismatchFailure from "../components/pages/engine-rules/select-option-mismatch/SelectOptionMismatchFailure";
import { SelectOptionMisuse } from "../components/pages/engine-rules/select-option-misuse/metadata.js";
import SelectOptionMisuseSuccess from "../components/pages/engine-rules/select-option-misuse/SelectOptionMisuseSuccess";
import SelectOptionMisuseFailure from "../components/pages/engine-rules/select-option-misuse/SelectOptionMisuseFailure";
import { SkipLinkExists } from "../components/pages/engine-rules/skip-link-exists/metadata.js";
import SkipLinkExistsSuccess from "../components/pages/engine-rules/skip-link-exists/SkipLinkExistsSuccess";
import SkipLinkExistsFailure from "../components/pages/engine-rules/skip-link-exists/SkipLinkExistsFailure";
import { SkipLinkFirst } from "../components/pages/engine-rules/skip-link-first/metadata.js";
import SkipLinkFirstSuccess from "../components/pages/engine-rules/skip-link-first/SkipLinkFirstSuccess";
import SkipLinkFirstFailure from "../components/pages/engine-rules/skip-link-first/SkipLinkFirstFailure";
import { SliderDraggingMovements } from "../components/pages/engine-rules/slider-dragging-movements/metadata.js";
import SliderDraggingMovementsSuccess from "../components/pages/engine-rules/slider-dragging-movements/SliderDraggingMovementsSuccess";
import SliderDraggingMovementsFailure from "../components/pages/engine-rules/slider-dragging-movements/SliderDraggingMovementsFailure";
import { SRHiddenTabbable } from "../components/pages/engine-rules/sr-hidden-tabbable/metadata.js";
import SrHiddenTabbableSuccess from "../components/pages/engine-rules/sr-hidden-tabbable/SrHiddenTabbableSuccess";
import SrHiddenTabbableFailure from "../components/pages/engine-rules/sr-hidden-tabbable/SrHiddenTabbableFailure";
import { StrongMismatch } from "../components/pages/engine-rules/strong-mismatch/metadata.js";
import StrongMismatchSuccess from "../components/pages/engine-rules/strong-mismatch/StrongMismatchSuccess";
import StrongMismatchFailure from "../components/pages/engine-rules/strong-mismatch/StrongMismatchFailure";
import { SVGDiscernible } from "../components/pages/engine-rules/svg-discernible/metadata.js";
import SvgDiscernibleSuccess from "../components/pages/engine-rules/svg-discernible/SvgDiscernibleSuccess";
import SvgDiscernibleFailure from "../components/pages/engine-rules/svg-discernible/SvgDiscernibleFailure";
import { TabListMisMatch } from "../components/pages/engine-rules/tab-list-mismatch/metadata.js";
import TabListMismatchSuccess from "../components/pages/engine-rules/tab-list-mismatch/TabListMismatchSuccess";
import TabListMismatchFailure from "../components/pages/engine-rules/tab-list-mismatch/TabListMismatchFailure";
import { TabListMisuse } from "../components/pages/engine-rules/tab-list-misuse/metadata.js";
import TabListMisuseSuccess from "../components/pages/engine-rules/tab-list-misuse/TabListMisuseSuccess";
import TabListMisuseFailure from "../components/pages/engine-rules/tab-list-misuse/TabListMisuseFailure";
import { TabMismatch } from "../components/pages/engine-rules/tab-mismatch/metadata.js";
import TabMismatchSuccess from "../components/pages/engine-rules/tab-mismatch/TabMismatchSuccess";
import TabMismatchFailure from "../components/pages/engine-rules/tab-mismatch/TabMismatchFailure";
import { TabMisuse } from "../components/pages/engine-rules/tab-misuse/metadata.js";
import TabMisuseSuccess from "../components/pages/engine-rules/tab-misuse/TabMisuseSuccess";
import TabMisuseFailure from "../components/pages/engine-rules/tab-misuse/TabMisuseFailure";
import { TabPanelMismatch } from "../components/pages/engine-rules/tab-panel-mismatch/metadata.js";
import TabPanelMismatchSuccess from "../components/pages/engine-rules/tab-panel-mismatch/TabPanelMismatchSuccess";
import TabPanelMismatchFailure from "../components/pages/engine-rules/tab-panel-mismatch/TabPanelMismatchFailure";
import { TabPanelMisuse } from "../components/pages/engine-rules/tab-panel-misuse/metadata.js";
import TabPanelMisuseSuccess from "../components/pages/engine-rules/tab-panel-misuse/TabPanelMisuseSuccess";
import TabPanelMisuseFailure from "../components/pages/engine-rules/tab-panel-misuse/TabPanelMisuseFailure";
import { TabbableNonInteractive } from "../components/pages/engine-rules/tabbable-non-interactive/metadata.js";
import TabbableNonInteractiveSuccess from "../components/pages/engine-rules/tabbable-non-interactive/TabbableNonInteractiveSuccess";
import TabbableNonInteractiveFailure from "../components/pages/engine-rules/tabbable-non-interactive/TabbableNonInteractiveFailure";
import { TabbableVisible } from "../components/pages/engine-rules/tabbable-visible/metadata.js";
import TabbableVisibleSuccess from "../components/pages/engine-rules/tabbable-visible/TabbableVisibleSuccess";
import TabbableVisibleFailure from "../components/pages/engine-rules/tabbable-visible/TabbableVisibleFailure";
import { TabindexValid } from "../components/pages/engine-rules/tabindex-valid/metadata.js";
import TabindexValidSuccess from "../components/pages/engine-rules/tabindex-valid/TabindexValidSuccess";
import TabindexValidFailure from "../components/pages/engine-rules/tabindex-valid/TabindexValidFailure";
import { TableColumnHeader } from "../components/pages/engine-rules/table-column-header/metadata.js";
import TableColumnHeaderSuccess from "../components/pages/engine-rules/table-column-header/TableColumnHeaderSuccess";
import TableColumnHeaderFailure from "../components/pages/engine-rules/table-column-header/TableColumnHeaderFailure";
import { TableHeaderNotEmpty } from "../components/pages/engine-rules/table-header-not-empty/metadata.js";
import TableHeaderNotEmptySuccess from "../components/pages/engine-rules/table-header-not-empty/TableHeaderNotEmptySuccess";
import TableHeaderNotEmptyFailure from "../components/pages/engine-rules/table-header-not-empty/TableHeaderNotEmptyFailure";
import { TableHeaders } from "../components/pages/engine-rules/table-headers/metadata.js";
import TableHeadersSuccess from "../components/pages/engine-rules/table-headers/TableHeadersSuccess";
import TableHeadersFailure from "../components/pages/engine-rules/table-headers/TableHeadersFailure";
import { TableMisuse } from "../components/pages/engine-rules/table-misuse/metadata.js";
import TableMisuseSuccess from "../components/pages/engine-rules/table-misuse/TableMisuseSuccess";
import TableMisuseFailure from "../components/pages/engine-rules/table-misuse/TableMisuseFailure";
import { TableNotNested } from "../components/pages/engine-rules/table-not-nested/metadata.js";
import TableNotNestedSuccess from "../components/pages/engine-rules/table-not-nested/TableNotNestedSuccess";
import TableNotNestedFailure from "../components/pages/engine-rules/table-not-nested/TableNotNestedFailure";
import { TableRowHeader } from "../components/pages/engine-rules/table-row-header/metadata.js";
import TableRowHeaderSuccess from "../components/pages/engine-rules/table-row-header/TableRowHeaderSuccess";
import TableRowHeaderFailure from "../components/pages/engine-rules/table-row-header/TableRowHeaderFailure";
import { TextSpacingLineHeight } from "../components/pages/engine-rules/text-spacing-line-height/metadata.js";
import TextSpacingLineHeightSuccess from "../components/pages/engine-rules/text-spacing-line-height/TextSpacingLineHeightSuccess";
import TextSpacingLineHeightFailure from "../components/pages/engine-rules/text-spacing-line-height/TextSpacingLineHeightFailure";
import { TextSpacingWordSpacing } from "../components/pages/engine-rules/text-spacing-word-spacing/metadata.js";
import TextSpacingWordSpacingSuccess from "../components/pages/engine-rules/text-spacing-word-spacing/TextSpacingWordSpacingSuccess";
import TextSpacingWordSpacingFailure from "../components/pages/engine-rules/text-spacing-word-spacing/TextSpacingWordSpacingFailure";
import { ToggleButtonCorrectState } from "../components/pages/engine-rules/toggle-button-correct-state/metadata.js";
import ToggleButtonCorrectStateSuccess from "../components/pages/engine-rules/toggle-button-correct-state/ToggleButtonCorrectStateSuccess";
import ToggleButtonCorrectStateFailure from "../components/pages/engine-rules/toggle-button-correct-state/ToggleButtonCorrectStateFailure";
import { ToggleButtonMismatch } from "../components/pages/engine-rules/toggle-button-mismatch/metadata.js";
import ToggleButtonMismatchSuccess from "../components/pages/engine-rules/toggle-button-mismatch/ToggleButtonMismatchSuccess";
import ToggleButtonMismatchFailure from "../components/pages/engine-rules/toggle-button-mismatch/ToggleButtonMismatchFailure";
import { ToggleButtonMisuse } from "../components/pages/engine-rules/toggle-button-misuse/metadata.js";
import ToggleButtonMisuseSuccess from "../components/pages/engine-rules/toggle-button-misuse/ToggleButtonMisuseSuccess";
import ToggleButtonMisuseFailure from "../components/pages/engine-rules/toggle-button-misuse/ToggleButtonMisuseFailure";
import { UserRatingDiscernible } from "../components/pages/engine-rules/user-rating-discernible/metadata.js";
import UserRatingDiscernibleSuccess from "../components/pages/engine-rules/user-rating-discernible/UserRatingDiscernibleSuccess";
import UserRatingDiscernibleFailure from "../components/pages/engine-rules/user-rating-discernible/UserRatingDiscernibleFailure";
import { VisibilityMismatch } from "../components/pages/engine-rules/visibility-mismatch/metadata.js";
import VisibilityMismatchSuccess from "../components/pages/engine-rules/visibility-mismatch/VisibilityMismatchSuccess";
import VisibilityMismatchFailure from "../components/pages/engine-rules/visibility-mismatch/VisibilityMismatchFailure";
import { VisibilityMisuse } from "../components/pages/engine-rules/visibility-misuse/metadata.js";
import VisibilityMisuseSuccess from "../components/pages/engine-rules/visibility-misuse/VisibilityMisuseSuccess";
import VisibilityMisuseFailure from "../components/pages/engine-rules/visibility-misuse/VisibilityMisuseFailure";
import { VisibleTextPartOfAccessibleName } from "../components/pages/engine-rules/visible-text-part-of-accessible-name/metadata.js";
import VisibleTextPartOfAccessibleNameSuccess from "../components/pages/engine-rules/visible-text-part-of-accessible-name/VisibleTextPartOfAccessibleNameSuccess";
import VisibleTextPartOfAccessibleNameFailure from "../components/pages/engine-rules/visible-text-part-of-accessible-name/VisibleTextPartOfAccessibleNameFailure";

const EngineRoutes = () => (
  <>
    <Route
      path="/engine/alt-misuse"
      element={<EngineRulePage ruleData={AltMisuse} />}
    />
    <Route
      path="/engine/alt-misuse_success"
      element={<AltMisuseSuccess />}
    />
    <Route
      path="/engine/alt-misuse_failure"
      element={<AltMisuseFailure />}
    />
    <Route
      path="/engine/aria-controls-has-reference"
      element={<EngineRulePage ruleData={AriaControlsHasReference} />}
    />
    <Route
      path="/engine/aria-controls-has-reference_success"
      element={<AriaControlsHasReferenceSuccess />}
    />
    <Route
      path="/engine/aria-controls-has-reference_failure"
      element={<AriaControlsHasReferenceFailure />}
    />
    <Route
      path="/engine/aria-describedby-has-reference"
      element={<EngineRulePage ruleData={AriaDescribedByHasReference} />}
    />
    <Route
      path="/engine/aria-describedby-has-reference_success"
      element={<AriaDescribedbyHasReferenceSuccess />}
    />
    <Route
      path="/engine/aria-describedby-has-reference_failure"
      element={<AriaDescribedbyHasReferenceFailure />}
    />
    <Route
      path="/engine/aria-invalid-mismatch"
      element={<EngineRulePage ruleData={AriaInvalidMismatch} />}
    />
    <Route
      path="/engine/aria-invalid-mismatch_success"
      element={<AriaInvalidMismatchSuccess />}
    />
    <Route
      path="/engine/aria-invalid-mismatch_failure"
      element={<AriaInvalidMismatchFailure />}
    />
    <Route
      path="/engine/aria-invalid-misuse"
      element={<EngineRulePage ruleData={AriaInvalidMisuse} />}
    />
    <Route
      path="/engine/aria-invalid-misuse_success"
      element={<AriaInvalidMisuseSuccess />}
    />
    <Route
      path="/engine/aria-invalid-misuse_failure"
      element={<AriaInvalidMisuseFailure />}
    />
    <Route
      path="/engine/aria-labelledby-has-reference"
      element={<EngineRulePage ruleData={AriaLabelledByHasReference} />}
    />
    <Route
      path="/engine/aria-labelledby-has-reference_success"
      element={<AriaLabelledbyHasReferenceSuccess />}
    />
    <Route
      path="/engine/aria-labelledby-has-reference_failure"
      element={<AriaLabelledbyHasReferenceFailure />}
    />
    <Route
      path="/engine/article-misuse"
      element={<EngineRulePage ruleData={ArticleMisuse} />}
    />
    <Route
      path="/engine/article-misuse_success"
      element={<ArticleMisuseSuccess />}
    />
    <Route
      path="/engine/article-misuse_failure"
      element={<ArticleMisuseFailure />}
    />
    <Route
      path="/engine/background-image-discernible"
      element={<EngineRulePage ruleData={BackgroundImageDiscernible} />}
    />
    <Route
      path="/engine/background-image-discernible_success"
      element={<BackgroundImageDiscernibleSuccess />}
    />
    <Route
      path="/engine/background-image-discernible_failure"
      element={<BackgroundImageDiscernibleFailure />}
    />
    <Route
      path="/engine/background-image-discernible-image"
      element={<EngineRulePage ruleData={BackgroundImageDiscernibleImage} />}
    />
    <Route
      path="/engine/background-image-discernible-image_success"
      element={<BackgroundImageDiscernibleImageSuccess />}
    />
    <Route
      path="/engine/background-image-discernible-image_failure"
      element={<BackgroundImageDiscernibleImageFailure />}
    />
    <Route
      path="/engine/breadcrumbs-mismatch"
      element={<EngineRulePage ruleData={BreadcrumbsMismatch} />}
    />
    <Route
      path="/engine/breadcrumbs-mismatch_success"
      element={<BreadcrumbsMismatchSuccess />}
    />
    <Route
      path="/engine/breadcrumbs-mismatch_failure"
      element={<BreadcrumbsMismatchFailure />}
    />
    <Route
      path="/engine/breadcrumbs-nav"
      element={<EngineRulePage ruleData={BreadcrumbsNav} />}
    />
    <Route
      path="/engine/breadcrumbs-nav_success"
      element={<BreadcrumbsNavSuccess />}
    />
    <Route
      path="/engine/breadcrumbs-nav_failure"
      element={<BreadcrumbsNavFailure />}
    />
    <Route
      path="/engine/broken-aria-reference"
      element={<EngineRulePage ruleData={BrokenAriaReference} />}
    />
    <Route
      path="/engine/broken-aria-reference_success"
      element={<BrokenAriaReferenceSuccess />}
    />
    <Route
      path="/engine/broken-aria-reference_failure"
      element={<BrokenAriaReferenceFailure />}
    />
    <Route
      path="/engine/button-discernible"
      element={<EngineRulePage ruleData={ButtonDiscernible} />}
    />
    <Route
      path="/engine/button-discernible_success"
      element={<ButtonDiscernibleSuccess />}
    />
    <Route
      path="/engine/button-discernible_failure"
      element={<ButtonDiscernibleFailure />}
    />
    <Route
      path="/engine/button-mismatch"
      element={<EngineRulePage ruleData={ButtonMismatch} />}
    />
    <Route
      path="/engine/button-mismatch_success"
      element={<ButtonMismatchSuccess />}
    />
    <Route
      path="/engine/button-mismatch_failure"
      element={<ButtonMismatchFailure />}
    />
    <Route
      path="/engine/captcha-accessible-provider"
      element={<EngineRulePage ruleData={CaptchaAccessibleProvider} />}
    />
    <Route
      path="/engine/captcha-accessible-provider_success"
      element={<CaptchaAccessibleProviderSuccess />}
    />
    <Route
      path="/engine/captcha-accessible-provider_failure"
      element={<CaptchaAccessibleProviderFailure />}
    />
    <Route
      path="/engine/carousel-aria-live"
      element={<EngineRulePage ruleData={CarouselAriaLive} />}
    />
    <Route
      path="/engine/carousel-aria-live_success"
      element={<CarouselAriaLiveSuccess />}
    />
    <Route
      path="/engine/carousel-aria-live_failure"
      element={<CarouselAriaLiveFailure />}
    />
    <Route
      path="/engine/carousel-discernible"
      element={<EngineRulePage ruleData={CarouselDiscernible} />}
    />
    <Route
      path="/engine/carousel-discernible_success"
      element={<CarouselDiscernibleSuccess />}
    />
    <Route
      path="/engine/carousel-discernible_failure"
      element={<CarouselDiscernibleFailure />}
    />
    <Route
      path="/engine/carousel-dragging-movements"
      element={<EngineRulePage ruleData={CarouselDraggingMovements} />}
    />
    <Route
      path="/engine/carousel-dragging-movements_success"
      element={<CarouselDraggingMovementsSuccess />}
    />
    <Route
      path="/engine/carousel-dragging-movements_failure"
      element={<CarouselDraggingMovementsFailure />}
    />
    <Route
      path="/engine/carousel-mismatch"
      element={<EngineRulePage ruleData={CarouselMismatch} />}
    />
    <Route
      path="/engine/carousel-mismatch_success"
      element={<CarouselMismatchSuccess />}
    />
    <Route
      path="/engine/carousel-mismatch_failure"
      element={<CarouselMismatchFailure />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible"
      element={<EngineRulePage ruleData={CarouselNextSlideDiscernible} />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible_success"
      element={<CarouselNextSlideDiscernibleSuccess />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible_failure"
      element={<CarouselNextSlideDiscernibleFailure />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible-correctly"
      element={<EngineRulePage ruleData={CarouselNextSlideDiscernibleCorrectly} />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible-correctly_success"
      element={<CarouselNextSlideDiscernibleCorrectlySuccess />}
    />
    <Route
      path="/engine/carousel-next-slide-discernible-correctly_failure"
      element={<CarouselNextSlideDiscernibleCorrectlyFailure />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible"
      element={<EngineRulePage ruleData={CarouselPreviousSlideDiscernible} />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible_success"
      element={<CarouselPreviousSlideDiscernibleSuccess />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible_failure"
      element={<CarouselPreviousSlideDiscernibleFailure />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible-correctly"
      element={<EngineRulePage ruleData={CarouselPreviousSlideDiscernibleCorrectly} />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible-correctly_success"
      element={<CarouselPreviousSlideDiscernibleCorrectlySuccess />}
    />
    <Route
      path="/engine/carousel-previous-slide-discernible-correctly_failure"
      element={<CarouselPreviousSlideDiscernibleCorrectlyFailure />}
    />
    <Route
      path="/engine/carousel-redundant-discernible-text"
      element={<EngineRulePage ruleData={CarouselRedundantDiscernibleText} />}
    />
    <Route
      path="/engine/carousel-redundant-discernible-text_success"
      element={<CarouselRedundantDiscernibleTextSuccess />}
    />
    <Route
      path="/engine/carousel-redundant-discernible-text_failure"
      element={<CarouselRedundantDiscernibleTextFailure />}
    />
    <Route
      path="/engine/carousel-slide-picker-discernible"
      element={<EngineRulePage ruleData={CarouselSlidePickerDiscernible} />}
    />
    <Route
      path="/engine/carousel-slide-picker-discernible_success"
      element={<CarouselSlidePickerDiscernibleSuccess />}
    />
    <Route
      path="/engine/carousel-slide-picker-discernible_failure"
      element={<CarouselSlidePickerDiscernibleFailure />}
    />
    <Route
      path="/engine/checkbox-aria-checked"
      element={<EngineRulePage ruleData={CheckboxAriaChecked} />}
    />
    <Route
      path="/engine/checkbox-aria-checked_success"
      element={<CheckboxAriaCheckedSuccess />}
    />
    <Route
      path="/engine/checkbox-aria-checked_failure"
      element={<CheckboxAriaCheckedFailure />}
    />
    <Route
      path="/engine/checkbox-discernible"
      element={<EngineRulePage ruleData={CheckboxDiscernible} />}
    />
    <Route
      path="/engine/checkbox-discernible_success"
      element={<CheckboxDiscernibleSuccess />}
    />
    <Route
      path="/engine/checkbox-discernible_failure"
      element={<CheckboxDiscernibleFailure />}
    />
    <Route
      path="/engine/checkbox-mismatch"
      element={<EngineRulePage ruleData={CheckboxMismatch} />}
    />
    <Route
      path="/engine/checkbox-mismatch_success"
      element={<CheckboxMismatchSuccess />}
    />
    <Route
      path="/engine/checkbox-mismatch_failure"
      element={<CheckboxMismatchFailure />}
    />
    <Route
      path="/engine/checkbox-misuse"
      element={<EngineRulePage ruleData={CheckboxMisuse} />}
    />
    <Route
      path="/engine/checkbox-misuse_success"
      element={<CheckboxMisuseSuccess />}
    />
    <Route
      path="/engine/checkbox-misuse_failure"
      element={<CheckboxMisuseFailure />}
    />
    <Route
      path="/engine/color-contrast"
      element={<EngineRulePage ruleData={ColorContrast} />}
    />
    <Route
      path="/engine/color-contrast_success"
      element={<ColorContrastSuccess />}
    />
    <Route
      path="/engine/color-contrast_failure"
      element={<ColorContrastFailure />}
    />
    <Route
      path="/engine/custom-select-options-list-listbox"
      element={<EngineRulePage ruleData={CustomSelectOptionsListListbox} />}
    />
    <Route
      path="/engine/custom-select-options-list-listbox_success"
      element={<CustomSelectOptionsListListboxSuccess />}
    />
    <Route
      path="/engine/custom-select-options-list-listbox_failure"
      element={<CustomSelectOptionsListListboxFailure />}
    />
    <Route
      path="/engine/custom-select-trigger-combobox"
      element={<EngineRulePage ruleData={CustomSelectTriggerCombobox} />}
    />
    <Route
      path="/engine/custom-select-trigger-combobox_success"
      element={<CustomSelectTriggerComboboxSuccess />}
    />
    <Route
      path="/engine/custom-select-trigger-combobox_failure"
      element={<CustomSelectTriggerComboboxFailure />}
    />
    <Route
      path="/engine/dialog-modal-focus"
      element={<EngineRulePage ruleData={DialogModalFocus} />}
    />
    <Route
      path="/engine/dialog-modal-focus_success"
      element={<DialogModalFocusSuccess />}
    />
    <Route
      path="/engine/dialog-modal-focus_failure"
      element={<DialogModalFocusFailure />}
    />
    <Route
      path="/engine/dialog-modal-mismatch"
      element={<EngineRulePage ruleData={DialogModalMismatch} />}
    />
    <Route
      path="/engine/dialog-modal-mismatch_success"
      element={<DialogModalMismatchSuccess />}
    />
    <Route
      path="/engine/dialog-modal-mismatch_failure"
      element={<DialogModalMismatchFailure />}
    />
    <Route
      path="/engine/dialog-modal-misuse"
      element={<EngineRulePage ruleData={DialogModalMisuse} />}
    />
    <Route
      path="/engine/dialog-modal-misuse_success"
      element={<DialogModalMisuseSuccess />}
    />
    <Route
      path="/engine/dialog-modal-misuse_failure"
      element={<DialogModalMisuseFailure />}
    />
    <Route
      path="/engine/duplicate-id"
      element={<EngineRulePage ruleData={DuplicateId} />}
    />
    <Route
      path="/engine/duplicate-id_success"
      element={<DuplicateIdSuccess />}
    />
    <Route
      path="/engine/duplicate-id_failure"
      element={<DuplicateIdFailure />}
    />
    <Route
      path="/engine/emphasis-mismatch"
      element={<EngineRulePage ruleData={EmphasisMismatch} />}
    />
    <Route
      path="/engine/emphasis-mismatch_success"
      element={<EmphasisMismatchSuccess />}
    />
    <Route
      path="/engine/emphasis-mismatch_failure"
      element={<EmphasisMismatchFailure />}
    />
    <Route
      path="/engine/figure-discernible"
      element={<EngineRulePage ruleData={FigureDiscernible} />}
    />
    <Route
      path="/engine/figure-discernible_success"
      element={<FigureDiscernibleSuccess />}
    />
    <Route
      path="/engine/figure-discernible_failure"
      element={<FigureDiscernibleFailure />}
    />
    <Route
      path="/engine/focus-not-obscured-footer"
      element={<EngineRulePage ruleData={FocusNotObscuredFooter} />}
    />
    <Route
      path="/engine/focus-not-obscured-footer_success"
      element={<FocusNotObscuredFooterSuccess />}
    />
    <Route
      path="/engine/focus-not-obscured-footer_failure"
      element={<FocusNotObscuredFooterFailure />}
    />
    <Route
      path="/engine/focus-not-obscured-header"
      element={<EngineRulePage ruleData={FocusNotObscuredHeader} />}
    />
    <Route
      path="/engine/focus-not-obscured-header_success"
      element={<FocusNotObscuredHeaderSuccess />}
    />
    <Route
      path="/engine/focus-not-obscured-header_failure"
      element={<FocusNotObscuredHeaderFailure />}
    />
    <Route
      path="/engine/focus-noticeable"
      element={<EngineRulePage ruleData={FocusNoticeable} />}
    />
    <Route
      path="/engine/focus-noticeable_success"
      element={<FocusNoticeableSuccess />}
    />
    <Route
      path="/engine/focus-noticeable_failure"
      element={<FocusNoticeableFailure />}
    />
    <Route
      path="/engine/font-sizes"
      element={<EngineRulePage ruleData={FontSizes} />}
    />
    <Route
      path="/engine/font-sizes_success"
      element={<FontSizesSuccess />}
    />
    <Route
      path="/engine/font-sizes_failure"
      element={<FontSizesFailure />}
    />
    <Route
      path="/engine/form-context-change-warning"
      element={<EngineRulePage ruleData={FormContextChangeWarning} />}
    />
    <Route
      path="/engine/form-context-change-warning_success"
      element={<FormContextChangeWarningSuccess />}
    />
    <Route
      path="/engine/form-context-change-warning_failure"
      element={<FormContextChangeWarningFailure />}
    />
    <Route
      path="/engine/form-duplicate-id"
      element={<EngineRulePage ruleData={FormDuplicateId} />}
    />
    <Route
      path="/engine/form-duplicate-id_success"
      element={<FormDuplicateIdSuccess />}
    />
    <Route
      path="/engine/form-duplicate-id_failure"
      element={<FormDuplicateIdFailure />}
    />
    <Route
      path="/engine/form-mismatch"
      element={<EngineRulePage ruleData={FormMismatch} />}
    />
    <Route
      path="/engine/form-mismatch_success"
      element={<FormMismatchSuccess />}
    />
    <Route
      path="/engine/form-mismatch_failure"
      element={<FormMismatchFailure />}
    />
    <Route
      path="/engine/form-submit-button-mismatch"
      element={<EngineRulePage ruleData={FormSubmitButtonMismatch} />}
    />
    <Route
      path="/engine/form-submit-button-mismatch_success"
      element={<FormSubmitButtonMismatchSuccess />}
    />
    <Route
      path="/engine/form-submit-button-mismatch_failure"
      element={<FormSubmitButtonMismatchFailure />}
    />
    <Route
      path="/engine/heading-discernible"
      element={<EngineRulePage ruleData={HeadingDiscernible} />}
    />
    <Route
      path="/engine/heading-discernible_success"
      element={<HeadingDiscernibleSuccess />}
    />
    <Route
      path="/engine/heading-discernible_failure"
      element={<HeadingDiscernibleFailure />}
    />
    <Route
      path="/engine/heading-h1"
      element={<EngineRulePage ruleData={HeadingH1} />}
    />
    <Route
      path="/engine/heading-h1_success"
      element={<HeadingH1Success />}
    />
    <Route
      path="/engine/heading-h1_failure"
      element={<HeadingH1Failure />}
    />
    <Route
      path="/engine/heading-lengthy"
      element={<EngineRulePage ruleData={HeadingLengthy} />}
    />
    <Route
      path="/engine/heading-lengthy_success"
      element={<HeadingLengthySuccess />}
    />
    <Route
      path="/engine/heading-lengthy_failure"
      element={<HeadingLengthyFailure />}
    />
    <Route
      path="/engine/heading-mismatch"
      element={<EngineRulePage ruleData={HeadingMismatch} />}
    />
    <Route
      path="/engine/heading-mismatch_success"
      element={<HeadingMismatchSuccess />}
    />
    <Route
      path="/engine/heading-mismatch_failure"
      element={<HeadingMismatchFailure />}
    />
    <Route
      path="/engine/heading-misuse"
      element={<EngineRulePage ruleData={HeadingMisuse} />}
    />
    <Route
      path="/engine/heading-misuse_success"
      element={<HeadingMisuseSuccess />}
    />
    <Route
      path="/engine/heading-misuse_failure"
      element={<HeadingMisuseFailure />}
    />
    <Route
      path="/engine/heading-order"
      element={<EngineRulePage ruleData={HeadingOrder} />}
    />
    <Route
      path="/engine/heading-order_success"
      element={<HeadingOrderSuccess />}
    />
    <Route
      path="/engine/heading-order_failure"
      element={<HeadingOrderFailure />}
    />
    <Route
      path="/engine/heading-order-optimal"
      element={<EngineRulePage ruleData={HeadingOrderOptimal} />}
    />
    <Route
      path="/engine/heading-order-optimal_success"
      element={<HeadingOrderOptimalSuccess />}
    />
    <Route
      path="/engine/heading-order-optimal_failure"
      element={<HeadingOrderOptimalFailure />}
    />
    <Route
      path="/engine/heading-single-h1"
      element={<EngineRulePage ruleData={HeadingSingleH1} />}
    />
    <Route
      path="/engine/heading-single-h1_success"
      element={<HeadingSingleH1Success />}
    />
    <Route
      path="/engine/heading-single-h1_failure"
      element={<HeadingSingleH1Failure />}
    />
    <Route
      path="/engine/html-lang"
      element={<EngineRulePage ruleData={HtmlLang} />}
    />
    <Route
      path="/engine/html-lang_success"
      element={<HtmlLangSuccess />}
    />
    <Route
      path="/engine/html-lang_failure"
      element={<HtmlLangFailure />}
    />
    <Route
      path="/engine/html-lang-valid"
      element={<EngineRulePage ruleData={HtmlLangValid} />}
    />
    <Route
      path="/engine/html-lang-valid_success"
      element={<HtmlLangValidSuccess />}
    />
    <Route
      path="/engine/html-lang-valid_failure"
      element={<HtmlLangValidFailure />}
    />
    <Route
      path="/engine/icon-discernible"
      element={<EngineRulePage ruleData={IconDiscernible} />}
    />
    <Route
      path="/engine/icon-discernible_success"
      element={<IconDiscernibleSuccess />}
    />
    <Route
      path="/engine/icon-discernible_failure"
      element={<IconDiscernibleFailure />}
    />
    <Route
      path="/engine/iframe-discernible"
      element={<EngineRulePage ruleData={IframeDiscernible} />}
    />
    <Route
      path="/engine/iframe-discernible_success"
      element={<IframeDiscernibleSuccess />}
    />
    <Route
      path="/engine/iframe-discernible_failure"
      element={<IframeDiscernibleFailure />}
    />
    <Route
      path="/engine/image-discernible"
      element={<EngineRulePage ruleData={ImageDiscernible} />}
    />
    <Route
      path="/engine/image-discernible_success"
      element={<ImageDiscernibleSuccess />}
    />
    <Route
      path="/engine/image-discernible_failure"
      element={<ImageDiscernibleFailure />}
    />
    <Route
      path="/engine/image-discernible-correctly"
      element={<EngineRulePage ruleData={ImageDiscernibleCorrectly} />}
    />
    <Route
      path="/engine/image-discernible-correctly_success"
      element={<ImageDiscernibleCorrectlySuccess />}
    />
    <Route
      path="/engine/image-discernible-correctly_failure"
      element={<ImageDiscernibleCorrectlyFailure />}
    />
    <Route
      path="/engine/image-mismatch"
      element={<EngineRulePage ruleData={ImageMismatch} />}
    />
    <Route
      path="/engine/image-mismatch_success"
      element={<ImageMismatchSuccess />}
    />
    <Route
      path="/engine/image-mismatch_failure"
      element={<ImageMismatchFailure />}
    />
    <Route
      path="/engine/image-misuse"
      element={<EngineRulePage ruleData={ImageMisuse} />}
    />
    <Route
      path="/engine/image-misuse_success"
      element={<ImageMisuseSuccess />}
    />
    <Route
      path="/engine/image-misuse_failure"
      element={<ImageMisuseFailure />}
    />
    <Route
      path="/engine/input-discernible"
      element={<EngineRulePage ruleData={InputDiscernible} />}
    />
    <Route
      path="/engine/input-discernible_success"
      element={<InputDiscernibleSuccess />}
    />
    <Route
      path="/engine/input-discernible_failure"
      element={<InputDiscernibleFailure />}
    />
    <Route
      path="/engine/interactive-not-tabbable"
      element={<EngineRulePage ruleData={InteractiveNotTabbable} />}
    />
    <Route
      path="/engine/interactive-not-tabbable_success"
      element={<InteractiveNotTabbableSuccess />}
    />
    <Route
      path="/engine/interactive-not-tabbable_failure"
      element={<InteractiveNotTabbableFailure />}
    />
    <Route
      path="/engine/interactive-target-size"
      element={<EngineRulePage ruleData={InteractiveTargetSize} />}
    />
    <Route
      path="/engine/interactive-target-size_success"
      element={<InteractiveTargetSizeSuccess />}
    />
    <Route
      path="/engine/interactive-target-size_failure"
      element={<InteractiveTargetSizeFailure />}
    />
    <Route
      path="/engine/letter-spacing-positive"
      element={<EngineRulePage ruleData={LetterSpacingPositive} />}
    />
    <Route
      path="/engine/letter-spacing-positive_success"
      element={<LetterSpacingPositiveSuccess />}
    />
    <Route
      path="/engine/letter-spacing-positive_failure"
      element={<LetterSpacingPositiveFailure />}
    />
    <Route
      path="/engine/link-anchor-ambiguous"
      element={<EngineRulePage ruleData={LinkAnchorAmbiguous} />}
    />
    <Route
      path="/engine/link-anchor-ambiguous_success"
      element={<LinkAnchorAmbiguousSuccess />}
    />
    <Route
      path="/engine/link-anchor-ambiguous_failure"
      element={<LinkAnchorAmbiguousFailure />}
    />
    <Route
      path="/engine/link-anchor-discernible"
      element={<EngineRulePage ruleData={LinkAnchorDiscernible} />}
    />
    <Route
      path="/engine/link-anchor-discernible_success"
      element={<LinkAnchorDiscernibleSuccess />}
    />
    <Route
      path="/engine/link-anchor-discernible_failure"
      element={<LinkAnchorDiscernibleFailure />}
    />
    <Route
      path="/engine/link-context"
      element={<EngineRulePage ruleData={LinkContext} />}
    />
    <Route
      path="/engine/link-context_success"
      element={<LinkContextSuccess />}
    />
    <Route
      path="/engine/link-context_failure"
      element={<LinkContextFailure />}
    />
    <Route
      path="/engine/link-current-page"
      element={<EngineRulePage ruleData={LinkCurrentPage} />}
    />
    <Route
      path="/engine/link-current-page_success"
      element={<LinkCurrentPageSuccess />}
    />
    <Route
      path="/engine/link-current-page_failure"
      element={<LinkCurrentPageFailure />}
    />
    <Route
      path="/engine/link-homepage-warning"
      element={<EngineRulePage ruleData={LinkHomepageWarning} />}
    />
    <Route
      path="/engine/link-homepage-warning_success"
      element={<LinkHomepageWarningSuccess />}
    />
    <Route
      path="/engine/link-homepage-warning_failure"
      element={<LinkHomepageWarningFailure />}
    />
    <Route
      path="/engine/link-image-warning"
      element={<EngineRulePage ruleData={LinkImageWarning} />}
    />
    <Route
      path="/engine/link-image-warning_success"
      element={<LinkImageWarningSuccess />}
    />
    <Route
      path="/engine/link-image-warning_failure"
      element={<LinkImageWarningFailure />}
    />
    <Route
      path="/engine/link-mailto-warning"
      element={<EngineRulePage ruleData={LinkMailtoWarning} />}
    />
    <Route
      path="/engine/link-mailto-warning_success"
      element={<LinkMailtoWarningSuccess />}
    />
    <Route
      path="/engine/link-mailto-warning_failure"
      element={<LinkMailtoWarningFailure />}
    />
    <Route
      path="/engine/link-navigation-ambiguous"
      element={<EngineRulePage ruleData={LinkNavigationAmbiguous} />}
    />
    <Route
      path="/engine/link-navigation-ambiguous_success"
      element={<LinkNavigationAmbiguousSuccess />}
    />
    <Route
      path="/engine/link-navigation-ambiguous_failure"
      element={<LinkNavigationAmbiguousFailure />}
    />
    <Route
      path="/engine/link-navigation-discernible"
      element={<EngineRulePage ruleData={LinkNavigationDiscernible} />}
    />
    <Route
      path="/engine/link-navigation-discernible_success"
      element={<LinkNavigationDiscernibleSuccess />}
    />
    <Route
      path="/engine/link-navigation-discernible_failure"
      element={<LinkNavigationDiscernibleFailure />}
    />
    <Route
      path="/engine/link-new-window-warning"
      element={<EngineRulePage ruleData={LinkNewWindowWarning} />}
    />
    <Route
      path="/engine/link-new-window-warning_success"
      element={<LinkNewWindowWarningSuccess />}
    />
    <Route
      path="/engine/link-new-window-warning_failure"
      element={<LinkNewWindowWarningFailure />}
    />
    <Route
      path="/engine/link-pdf-warning"
      element={<EngineRulePage ruleData={LinkPDFWarning} />}
    />
    <Route
      path="/engine/link-pdf-warning_success"
      element={<LinkPdfWarningSuccess />}
    />
    <Route
      path="/engine/link-pdf-warning_failure"
      element={<LinkPdfWarningFailure />}
    />
    <Route
      path="/engine/link-telephone-warning"
      element={<EngineRulePage ruleData={LinkTelephoneWarning} />}
    />
    <Route
      path="/engine/link-telephone-warning_success"
      element={<LinkTelephoneWarningSuccess />}
    />
    <Route
      path="/engine/link-telephone-warning_failure"
      element={<LinkTelephoneWarningFailure />}
    />
    <Route
      path="/engine/list-item-within-list"
      element={<EngineRulePage ruleData={ListItemWithinList} />}
    />
    <Route
      path="/engine/list-item-within-list_success"
      element={<ListItemWithinListSuccess />}
    />
    <Route
      path="/engine/list-item-within-list_failure"
      element={<ListItemWithinListFailure />}
    />
    <Route
      path="/engine/list-not-empty"
      element={<EngineRulePage ruleData={ListNotEmpty} />}
    />
    <Route
      path="/engine/list-not-empty_success"
      element={<ListNotEmptySuccess />}
    />
    <Route
      path="/engine/list-not-empty_failure"
      element={<ListNotEmptyFailure />}
    />
    <Route
      path="/engine/main-navigation-discernible"
      element={<EngineRulePage ruleData={MainNavigationDiscernible} />}
    />
    <Route
      path="/engine/main-navigation-discernible_success"
      element={<MainNavigationDiscernibleSuccess />}
    />
    <Route
      path="/engine/main-navigation-discernible_failure"
      element={<MainNavigationDiscernibleFailure />}
    />
    <Route
      path="/engine/main-navigation-mismatch"
      element={<EngineRulePage ruleData={MainNavigationMismatch} />}
    />
    <Route
      path="/engine/main-navigation-mismatch_success"
      element={<MainNavigationMismatchSuccess />}
    />
    <Route
      path="/engine/main-navigation-mismatch_failure"
      element={<MainNavigationMismatchFailure />}
    />
    <Route
      path="/engine/map-area-discernible"
      element={<EngineRulePage ruleData={MapAreaDiscernible} />}
    />
    <Route
      path="/engine/map-area-discernible_success"
      element={<MapAreaDiscernibleSuccess />}
    />
    <Route
      path="/engine/map-area-discernible_failure"
      element={<MapAreaDiscernibleFailure />}
    />
    <Route
      path="/engine/marquee-deprecated"
      element={<EngineRulePage ruleData={MarqueeDeprecated} />}
    />
    <Route
      path="/engine/marquee-deprecated_success"
      element={<MarqueeDeprecatedSuccess />}
    />
    <Route
      path="/engine/marquee-deprecated_failure"
      element={<MarqueeDeprecatedFailure />}
    />
    <Route
      path="/engine/menu-avoid"
      element={<EngineRulePage ruleData={MenuAvoid} />}
    />
    <Route
      path="/engine/menu-avoid_success"
      element={<MenuAvoidSuccess />}
    />
    <Route
      path="/engine/menu-avoid_failure"
      element={<MenuAvoidFailure />}
    />
    <Route
      path="/engine/menu-bar-avoid"
      element={<EngineRulePage ruleData={MenuBarAvoid} />}
    />
    <Route
      path="/engine/menu-bar-avoid_success"
      element={<MenuBarAvoidSuccess />}
    />
    <Route
      path="/engine/menu-bar-avoid_failure"
      element={<MenuBarAvoidFailure />}
    />
    <Route
      path="/engine/menu-item-avoid"
      element={<EngineRulePage ruleData={MenuItemAvoid} />}
    />
    <Route
      path="/engine/menu-item-avoid_success"
      element={<MenuItemAvoidSuccess />}
    />
    <Route
      path="/engine/menu-item-avoid_failure"
      element={<MenuItemAvoidFailure />}
    />
    <Route
      path="/engine/menu-trigger-clickable"
      element={<EngineRulePage ruleData={MenuTriggerClickable} />}
    />
    <Route
      path="/engine/menu-trigger-clickable_success"
      element={<MenuTriggerClickableSuccess />}
    />
    <Route
      path="/engine/menu-trigger-clickable_failure"
      element={<MenuTriggerClickableFailure />}
    />
    <Route
      path="/engine/menu-trigger-correct-state"
      element={<EngineRulePage ruleData={MenuTriggerCorrectState} />}
    />
    <Route
      path="/engine/menu-trigger-correct-state_success"
      element={<MenuTriggerCorrectStateSuccess />}
    />
    <Route
      path="/engine/menu-trigger-correct-state_failure"
      element={<MenuTriggerCorrectStateFailure />}
    />
    <Route
      path="/engine/menu-trigger-mismatch"
      element={<EngineRulePage ruleData={MenuTriggerMismatch} />}
    />
    <Route
      path="/engine/menu-trigger-mismatch_success"
      element={<MenuTriggerMismatchSuccess />}
    />
    <Route
      path="/engine/menu-trigger-mismatch_failure"
      element={<MenuTriggerMismatchFailure />}
    />
    <Route
      path="/engine/menu-trigger-misuse"
      element={<EngineRulePage ruleData={MenuTriggerMisuse} />}
    />
    <Route
      path="/engine/menu-trigger-misuse_success"
      element={<MenuTriggerMisuseSuccess />}
    />
    <Route
      path="/engine/menu-trigger-misuse_failure"
      element={<MenuTriggerMisuseFailure />}
    />
    <Route
      path="/engine/name-prohibited-no-aria-label"
      element={<EngineRulePage ruleData={NameProhibitedNoAriaLabel} />}
    />
    <Route
      path="/engine/name-prohibited-no-aria-label_success"
      element={<NameProhibitedNoAriaLabelSuccess />}
    />
    <Route
      path="/engine/name-prohibited-no-aria-label_failure"
      element={<NameProhibitedNoAriaLabelFailure />}
    />
    <Route
      path="/engine/navigation-discernible"
      element={<EngineRulePage ruleData={NavigationDiscernible} />}
    />
    <Route
      path="/engine/navigation-discernible_success"
      element={<NavigationDiscernibleSuccess />}
    />
    <Route
      path="/engine/navigation-discernible_failure"
      element={<NavigationDiscernibleFailure />}
    />
    <Route
      path="/engine/navigation-item-link"
      element={<EngineRulePage ruleData={NavigationItemLink} />}
    />
    <Route
      path="/engine/navigation-item-link_success"
      element={<NavigationItemLinkSuccess />}
    />
    <Route
      path="/engine/navigation-item-link_failure"
      element={<NavigationItemLinkFailure />}
    />
    <Route
      path="/engine/navigation-mismatch"
      element={<EngineRulePage ruleData={NavigationMismatch} />}
    />
    <Route
      path="/engine/navigation-mismatch_success"
      element={<NavigationMismatchSuccess />}
    />
    <Route
      path="/engine/navigation-mismatch_failure"
      element={<NavigationMismatchFailure />}
    />
    <Route
      path="/engine/navigation-misuse"
      element={<EngineRulePage ruleData={NavigationMisuse} />}
    />
    <Route
      path="/engine/navigation-misuse_success"
      element={<NavigationMisuseSuccess />}
    />
    <Route
      path="/engine/navigation-misuse_failure"
      element={<NavigationMisuseFailure />}
    />
    <Route
      path="/engine/navigation-not-nested"
      element={<EngineRulePage ruleData={NavigationNotNested} />}
    />
    <Route
      path="/engine/navigation-not-nested_success"
      element={<NavigationNotNestedSuccess />}
    />
    <Route
      path="/engine/navigation-not-nested_failure"
      element={<NavigationNotNestedFailure />}
    />
    <Route
      path="/engine/navigation-redundant-discernible-text"
      element={<EngineRulePage ruleData={NavigationRedundantDiscernibleText} />}
    />
    <Route
      path="/engine/navigation-redundant-discernible-text_success"
      element={<NavigationRedundantDiscernibleTextSuccess />}
    />
    <Route
      path="/engine/navigation-redundant-discernible-text_failure"
      element={<NavigationRedundantDiscernibleTextFailure />}
    />
    <Route
      path="/engine/navigation-submenu-discernible"
      element={<EngineRulePage ruleData={NavigationSubmenuDiscernible} />}
    />
    <Route
      path="/engine/navigation-submenu-discernible_success"
      element={<NavigationSubmenuDiscernibleSuccess />}
    />
    <Route
      path="/engine/navigation-submenu-discernible_failure"
      element={<NavigationSubmenuDiscernibleFailure />}
    />
    <Route
      path="/engine/navigation-submenu-region"
      element={<EngineRulePage ruleData={NavigationSubmenuRegion} />}
    />
    <Route
      path="/engine/navigation-submenu-region_success"
      element={<NavigationSubmenuRegionSuccess />}
    />
    <Route
      path="/engine/navigation-submenu-region_failure"
      element={<NavigationSubmenuRegionFailure />}
    />
    <Route
      path="/engine/no-autofocus"
      element={<EngineRulePage ruleData={NoAutofocus} />}
    />
    <Route
      path="/engine/no-autofocus_success"
      element={<NoAutofocusSuccess />}
    />
    <Route
      path="/engine/no-autofocus_failure"
      element={<NoAutofocusFailure />}
    />
    <Route
      path="/engine/no-extra-information-in-title"
      element={<EngineRulePage ruleData={NoExtraInformationInTitle} />}
    />
    <Route
      path="/engine/no-extra-information-in-title_success"
      element={<NoExtraInformationInTitleSuccess />}
    />
    <Route
      path="/engine/no-extra-information-in-title_failure"
      element={<NoExtraInformationInTitleFailure />}
    />
    <Route
      path="/engine/no-role-application"
      element={<EngineRulePage ruleData={NoRoleApplication} />}
    />
    <Route
      path="/engine/no-role-application_success"
      element={<NoRoleApplicationSuccess />}
    />
    <Route
      path="/engine/no-role-application_failure"
      element={<NoRoleApplicationFailure />}
    />
    <Route
      path="/engine/no-ui-slider-single-pointer"
      element={<EngineRulePage ruleData={NoUiSliderSinglePointer} />}
    />
    <Route
      path="/engine/no-ui-slider-single-pointer_success"
      element={<NoUiSliderSinglePointerSuccess />}
    />
    <Route
      path="/engine/no-ui-slider-single-pointer_failure"
      element={<NoUiSliderSinglePointerFailure />}
    />
    <Route
      path="/engine/page-meta-description"
      element={<EngineRulePage ruleData={PageMetaDescription} />}
    />
    <Route
      path="/engine/page-meta-description_success"
      element={<PageMetaDescriptionSuccess />}
    />
    <Route
      path="/engine/page-meta-description_failure"
      element={<PageMetaDescriptionFailure />}
    />
    <Route
      path="/engine/page-meta-viewport"
      element={<EngineRulePage ruleData={PageMetaViewport} />}
    />
    <Route
      path="/engine/page-meta-viewport_success"
      element={<PageMetaViewportSuccess />}
    />
    <Route
      path="/engine/page-meta-viewport_failure"
      element={<PageMetaViewportFailure />}
    />
    <Route
      path="/engine/page-meta-viewport-valid"
      element={<EngineRulePage ruleData={PageMetaViewportValid} />}
    />
    <Route
      path="/engine/page-meta-viewport-valid_success"
      element={<PageMetaViewportValidSuccess />}
    />
    <Route
      path="/engine/page-meta-viewport-valid_failure"
      element={<PageMetaViewportValidFailure />}
    />
    <Route
      path="/engine/page-no-meta-http-equiv-refresh"
      element={<EngineRulePage ruleData={PageNoMetaHttpEquivRefresh} />}
    />
    <Route
      path="/engine/page-no-meta-http-equiv-refresh_success"
      element={<PageNoMetaHttpEquivRefreshSuccess />}
    />
    <Route
      path="/engine/page-no-meta-http-equiv-refresh_failure"
      element={<PageNoMetaHttpEquivRefreshFailure />}
    />
    <Route
      path="/engine/page-title"
      element={<EngineRulePage ruleData={PageTitle} />}
    />
    <Route
      path="/engine/page-title_success"
      element={<PageTitleSuccess />}
    />
    <Route
      path="/engine/page-title_failure"
      element={<PageTitleFailure />}
    />
    <Route
      path="/engine/page-title-valid"
      element={<EngineRulePage ruleData={PageTitleValid} />}
    />
    <Route
      path="/engine/page-title-valid_success"
      element={<PageTitleValidSuccess />}
    />
    <Route
      path="/engine/page-title-valid_failure"
      element={<PageTitleValidFailure />}
    />
    <Route
      path="/engine/pixel-image-not-discernible"
      element={<EngineRulePage ruleData={PixelImageNotDiscernible} />}
    />
    <Route
      path="/engine/pixel-image-not-discernible_success"
      element={<PixelImageNotDiscernibleSuccess />}
    />
    <Route
      path="/engine/pixel-image-not-discernible_failure"
      element={<PixelImageNotDiscernibleFailure />}
    />
    <Route
      path="/engine/radio-aria-checked"
      element={<EngineRulePage ruleData={RadioAriaChecked} />}
    />
    <Route
      path="/engine/radio-aria-checked_success"
      element={<RadioAriaCheckedSuccess />}
    />
    <Route
      path="/engine/radio-aria-checked_failure"
      element={<RadioAriaCheckedFailure />}
    />
    <Route
      path="/engine/radio-discernible"
      element={<EngineRulePage ruleData={RadioDiscernible} />}
    />
    <Route
      path="/engine/radio-discernible_success"
      element={<RadioDiscernibleSuccess />}
    />
    <Route
      path="/engine/radio-discernible_failure"
      element={<RadioDiscernibleFailure />}
    />
    <Route
      path="/engine/radio-mismatch"
      element={<EngineRulePage ruleData={RadioMismatch} />}
    />
    <Route
      path="/engine/radio-mismatch_success"
      element={<RadioMismatchSuccess />}
    />
    <Route
      path="/engine/radio-mismatch_failure"
      element={<RadioMismatchFailure />}
    />
    <Route
      path="/engine/radio-misuse"
      element={<EngineRulePage ruleData={RadioMisuse} />}
    />
    <Route
      path="/engine/radio-misuse_success"
      element={<RadioMisuseSuccess />}
    />
    <Route
      path="/engine/radio-misuse_failure"
      element={<RadioMisuseFailure />}
    />
    <Route
      path="/engine/redundant-discernible-content"
      element={<EngineRulePage ruleData={RedundantDiscernibleContent} />}
    />
    <Route
      path="/engine/redundant-discernible-content_success"
      element={<RedundantDiscernibleContentSuccess />}
    />
    <Route
      path="/engine/redundant-discernible-content_failure"
      element={<RedundantDiscernibleContentFailure />}
    />
    <Route
      path="/engine/region-footer"
      element={<EngineRulePage ruleData={RegionFooter} />}
    />
    <Route
      path="/engine/region-footer_success"
      element={<RegionFooterSuccess />}
    />
    <Route
      path="/engine/region-footer_failure"
      element={<RegionFooterFailure />}
    />
    <Route
      path="/engine/region-footer-mismatch"
      element={<EngineRulePage ruleData={RegionFooterMismatch} />}
    />
    <Route
      path="/engine/region-footer-mismatch_success"
      element={<RegionFooterMismatchSuccess />}
    />
    <Route
      path="/engine/region-footer-mismatch_failure"
      element={<RegionFooterMismatchFailure />}
    />
    <Route
      path="/engine/region-footer-misuse"
      element={<EngineRulePage ruleData={RegionFooterMisuse} />}
    />
    <Route
      path="/engine/region-footer-misuse_success"
      element={<RegionFooterMisuseSuccess />}
    />
    <Route
      path="/engine/region-footer-misuse_failure"
      element={<RegionFooterMisuseFailure />}
    />
    <Route
      path="/engine/region-footer-single"
      element={<EngineRulePage ruleData={RegionFooterSingle} />}
    />
    <Route
      path="/engine/region-footer-single_success"
      element={<RegionFooterSingleSuccess />}
    />
    <Route
      path="/engine/region-footer-single_failure"
      element={<RegionFooterSingleFailure />}
    />
    <Route
      path="/engine/region-main-content"
      element={<EngineRulePage ruleData={RegionMainContent} />}
    />
    <Route
      path="/engine/region-main-content_success"
      element={<RegionMainContentSuccess />}
    />
    <Route
      path="/engine/region-main-content_failure"
      element={<RegionMainContentFailure />}
    />
    <Route
      path="/engine/region-main-content-mismatch"
      element={<EngineRulePage ruleData={RegionMainContentMismatch} />}
    />
    <Route
      path="/engine/region-main-content-mismatch_success"
      element={<RegionMainContentMismatchSuccess />}
    />
    <Route
      path="/engine/region-main-content-mismatch_failure"
      element={<RegionMainContentMismatchFailure />}
    />
    <Route
      path="/engine/region-main-content-misuse"
      element={<EngineRulePage ruleData={RegionMainContentMisuse} />}
    />
    <Route
      path="/engine/region-main-content-misuse_success"
      element={<RegionMainContentMisuseSuccess />}
    />
    <Route
      path="/engine/region-main-content-misuse_failure"
      element={<RegionMainContentMisuseFailure />}
    />
    <Route
      path="/engine/region-main-content-single"
      element={<EngineRulePage ruleData={RegionMainContentSingle} />}
    />
    <Route
      path="/engine/region-main-content-single_success"
      element={<RegionMainContentSingleSuccess />}
    />
    <Route
      path="/engine/region-main-content-single_failure"
      element={<RegionMainContentSingleFailure />}
    />
    <Route
      path="/engine/required-form-field-aria-required"
      element={<EngineRulePage ruleData={RequiredFormFieldAriaRequired} />}
    />
    <Route
      path="/engine/required-form-field-aria-required_success"
      element={<RequiredFormFieldAriaRequiredSuccess />}
    />
    <Route
      path="/engine/required-form-field-aria-required_failure"
      element={<RequiredFormFieldAriaRequiredFailure />}
    />
    <Route
      path="/engine/sale-price-discernible"
      element={<EngineRulePage ruleData={SalePriceDiscernible} />}
    />
    <Route
      path="/engine/sale-price-discernible_success"
      element={<SalePriceDiscernibleSuccess />}
    />
    <Route
      path="/engine/sale-price-discernible_failure"
      element={<SalePriceDiscernibleFailure />}
    />
    <Route
      path="/engine/search-form-mismatch"
      element={<EngineRulePage ruleData={SearchFormMismatch} />}
    />
    <Route
      path="/engine/search-form-mismatch_success"
      element={<SearchFormMismatchSuccess />}
    />
    <Route
      path="/engine/search-form-mismatch_failure"
      element={<SearchFormMismatchFailure />}
    />
    <Route
      path="/engine/select-option-mismatch"
      element={<EngineRulePage ruleData={SelectOptionMismatch} />}
    />
    <Route
      path="/engine/select-option-mismatch_success"
      element={<SelectOptionMismatchSuccess />}
    />
    <Route
      path="/engine/select-option-mismatch_failure"
      element={<SelectOptionMismatchFailure />}
    />
    <Route
      path="/engine/select-option-misuse"
      element={<EngineRulePage ruleData={SelectOptionMisuse} />}
    />
    <Route
      path="/engine/select-option-misuse_success"
      element={<SelectOptionMisuseSuccess />}
    />
    <Route
      path="/engine/select-option-misuse_failure"
      element={<SelectOptionMisuseFailure />}
    />
    <Route
      path="/engine/skip-link-exists"
      element={<EngineRulePage ruleData={SkipLinkExists} />}
    />
    <Route
      path="/engine/skip-link-exists_success"
      element={<SkipLinkExistsSuccess />}
    />
    <Route
      path="/engine/skip-link-exists_failure"
      element={<SkipLinkExistsFailure />}
    />
    <Route
      path="/engine/skip-link-first"
      element={<EngineRulePage ruleData={SkipLinkFirst} />}
    />
    <Route
      path="/engine/skip-link-first_success"
      element={<SkipLinkFirstSuccess />}
    />
    <Route
      path="/engine/skip-link-first_failure"
      element={<SkipLinkFirstFailure />}
    />
    <Route
      path="/engine/slider-dragging-movements"
      element={<EngineRulePage ruleData={SliderDraggingMovements} />}
    />
    <Route
      path="/engine/slider-dragging-movements_success"
      element={<SliderDraggingMovementsSuccess />}
    />
    <Route
      path="/engine/slider-dragging-movements_failure"
      element={<SliderDraggingMovementsFailure />}
    />
    <Route
      path="/engine/sr-hidden-tabbable"
      element={<EngineRulePage ruleData={SRHiddenTabbable} />}
    />
    <Route
      path="/engine/sr-hidden-tabbable_success"
      element={<SrHiddenTabbableSuccess />}
    />
    <Route
      path="/engine/sr-hidden-tabbable_failure"
      element={<SrHiddenTabbableFailure />}
    />
    <Route
      path="/engine/strong-mismatch"
      element={<EngineRulePage ruleData={StrongMismatch} />}
    />
    <Route
      path="/engine/strong-mismatch_success"
      element={<StrongMismatchSuccess />}
    />
    <Route
      path="/engine/strong-mismatch_failure"
      element={<StrongMismatchFailure />}
    />
    <Route
      path="/engine/svg-discernible"
      element={<EngineRulePage ruleData={SVGDiscernible} />}
    />
    <Route
      path="/engine/svg-discernible_success"
      element={<SvgDiscernibleSuccess />}
    />
    <Route
      path="/engine/svg-discernible_failure"
      element={<SvgDiscernibleFailure />}
    />
    <Route
      path="/engine/tab-list-mismatch"
      element={<EngineRulePage ruleData={TabListMisMatch} />}
    />
    <Route
      path="/engine/tab-list-mismatch_success"
      element={<TabListMismatchSuccess />}
    />
    <Route
      path="/engine/tab-list-mismatch_failure"
      element={<TabListMismatchFailure />}
    />
    <Route
      path="/engine/tab-list-misuse"
      element={<EngineRulePage ruleData={TabListMisuse} />}
    />
    <Route
      path="/engine/tab-list-misuse_success"
      element={<TabListMisuseSuccess />}
    />
    <Route
      path="/engine/tab-list-misuse_failure"
      element={<TabListMisuseFailure />}
    />
    <Route
      path="/engine/tab-mismatch"
      element={<EngineRulePage ruleData={TabMismatch} />}
    />
    <Route
      path="/engine/tab-mismatch_success"
      element={<TabMismatchSuccess />}
    />
    <Route
      path="/engine/tab-mismatch_failure"
      element={<TabMismatchFailure />}
    />
    <Route
      path="/engine/tab-misuse"
      element={<EngineRulePage ruleData={TabMisuse} />}
    />
    <Route
      path="/engine/tab-misuse_success"
      element={<TabMisuseSuccess />}
    />
    <Route
      path="/engine/tab-misuse_failure"
      element={<TabMisuseFailure />}
    />
    <Route
      path="/engine/tab-panel-mismatch"
      element={<EngineRulePage ruleData={TabPanelMismatch} />}
    />
    <Route
      path="/engine/tab-panel-mismatch_success"
      element={<TabPanelMismatchSuccess />}
    />
    <Route
      path="/engine/tab-panel-mismatch_failure"
      element={<TabPanelMismatchFailure />}
    />
    <Route
      path="/engine/tab-panel-misuse"
      element={<EngineRulePage ruleData={TabPanelMisuse} />}
    />
    <Route
      path="/engine/tab-panel-misuse_success"
      element={<TabPanelMisuseSuccess />}
    />
    <Route
      path="/engine/tab-panel-misuse_failure"
      element={<TabPanelMisuseFailure />}
    />
    <Route
      path="/engine/tabbable-non-interactive"
      element={<EngineRulePage ruleData={TabbableNonInteractive} />}
    />
    <Route
      path="/engine/tabbable-non-interactive_success"
      element={<TabbableNonInteractiveSuccess />}
    />
    <Route
      path="/engine/tabbable-non-interactive_failure"
      element={<TabbableNonInteractiveFailure />}
    />
    <Route
      path="/engine/tabbable-visible"
      element={<EngineRulePage ruleData={TabbableVisible} />}
    />
    <Route
      path="/engine/tabbable-visible_success"
      element={<TabbableVisibleSuccess />}
    />
    <Route
      path="/engine/tabbable-visible_failure"
      element={<TabbableVisibleFailure />}
    />
    <Route
      path="/engine/tabindex-valid"
      element={<EngineRulePage ruleData={TabindexValid} />}
    />
    <Route
      path="/engine/tabindex-valid_success"
      element={<TabindexValidSuccess />}
    />
    <Route
      path="/engine/tabindex-valid_failure"
      element={<TabindexValidFailure />}
    />
    <Route
      path="/engine/table-column-header"
      element={<EngineRulePage ruleData={TableColumnHeader} />}
    />
    <Route
      path="/engine/table-column-header_success"
      element={<TableColumnHeaderSuccess />}
    />
    <Route
      path="/engine/table-column-header_failure"
      element={<TableColumnHeaderFailure />}
    />
    <Route
      path="/engine/table-header-not-empty"
      element={<EngineRulePage ruleData={TableHeaderNotEmpty} />}
    />
    <Route
      path="/engine/table-header-not-empty_success"
      element={<TableHeaderNotEmptySuccess />}
    />
    <Route
      path="/engine/table-header-not-empty_failure"
      element={<TableHeaderNotEmptyFailure />}
    />
    <Route
      path="/engine/table-headers"
      element={<EngineRulePage ruleData={TableHeaders} />}
    />
    <Route
      path="/engine/table-headers_success"
      element={<TableHeadersSuccess />}
    />
    <Route
      path="/engine/table-headers_failure"
      element={<TableHeadersFailure />}
    />
    <Route
      path="/engine/table-misuse"
      element={<EngineRulePage ruleData={TableMisuse} />}
    />
    <Route
      path="/engine/table-misuse_success"
      element={<TableMisuseSuccess />}
    />
    <Route
      path="/engine/table-misuse_failure"
      element={<TableMisuseFailure />}
    />
    <Route
      path="/engine/table-not-nested"
      element={<EngineRulePage ruleData={TableNotNested} />}
    />
    <Route
      path="/engine/table-not-nested_success"
      element={<TableNotNestedSuccess />}
    />
    <Route
      path="/engine/table-not-nested_failure"
      element={<TableNotNestedFailure />}
    />
    <Route
      path="/engine/table-row-header"
      element={<EngineRulePage ruleData={TableRowHeader} />}
    />
    <Route
      path="/engine/table-row-header_success"
      element={<TableRowHeaderSuccess />}
    />
    <Route
      path="/engine/table-row-header_failure"
      element={<TableRowHeaderFailure />}
    />
    <Route
      path="/engine/text-spacing-line-height"
      element={<EngineRulePage ruleData={TextSpacingLineHeight} />}
    />
    <Route
      path="/engine/text-spacing-line-height_success"
      element={<TextSpacingLineHeightSuccess />}
    />
    <Route
      path="/engine/text-spacing-line-height_failure"
      element={<TextSpacingLineHeightFailure />}
    />
    <Route
      path="/engine/text-spacing-word-spacing"
      element={<EngineRulePage ruleData={TextSpacingWordSpacing} />}
    />
    <Route
      path="/engine/text-spacing-word-spacing_success"
      element={<TextSpacingWordSpacingSuccess />}
    />
    <Route
      path="/engine/text-spacing-word-spacing_failure"
      element={<TextSpacingWordSpacingFailure />}
    />
    <Route
      path="/engine/toggle-button-correct-state"
      element={<EngineRulePage ruleData={ToggleButtonCorrectState} />}
    />
    <Route
      path="/engine/toggle-button-correct-state_success"
      element={<ToggleButtonCorrectStateSuccess />}
    />
    <Route
      path="/engine/toggle-button-correct-state_failure"
      element={<ToggleButtonCorrectStateFailure />}
    />
    <Route
      path="/engine/toggle-button-mismatch"
      element={<EngineRulePage ruleData={ToggleButtonMismatch} />}
    />
    <Route
      path="/engine/toggle-button-mismatch_success"
      element={<ToggleButtonMismatchSuccess />}
    />
    <Route
      path="/engine/toggle-button-mismatch_failure"
      element={<ToggleButtonMismatchFailure />}
    />
    <Route
      path="/engine/toggle-button-misuse"
      element={<EngineRulePage ruleData={ToggleButtonMisuse} />}
    />
    <Route
      path="/engine/toggle-button-misuse_success"
      element={<ToggleButtonMisuseSuccess />}
    />
    <Route
      path="/engine/toggle-button-misuse_failure"
      element={<ToggleButtonMisuseFailure />}
    />
    <Route
      path="/engine/user-rating-discernible"
      element={<EngineRulePage ruleData={UserRatingDiscernible} />}
    />
    <Route
      path="/engine/user-rating-discernible_success"
      element={<UserRatingDiscernibleSuccess />}
    />
    <Route
      path="/engine/user-rating-discernible_failure"
      element={<UserRatingDiscernibleFailure />}
    />
    <Route
      path="/engine/visibility-mismatch"
      element={<EngineRulePage ruleData={VisibilityMismatch} />}
    />
    <Route
      path="/engine/visibility-mismatch_success"
      element={<VisibilityMismatchSuccess />}
    />
    <Route
      path="/engine/visibility-mismatch_failure"
      element={<VisibilityMismatchFailure />}
    />
    <Route
      path="/engine/visibility-misuse"
      element={<EngineRulePage ruleData={VisibilityMisuse} />}
    />
    <Route
      path="/engine/visibility-misuse_success"
      element={<VisibilityMisuseSuccess />}
    />
    <Route
      path="/engine/visibility-misuse_failure"
      element={<VisibilityMisuseFailure />}
    />
    <Route
      path="/engine/visible-text-part-of-accessible-name"
      element={<EngineRulePage ruleData={VisibleTextPartOfAccessibleName} />}
    />
    <Route
      path="/engine/visible-text-part-of-accessible-name_success"
      element={<VisibleTextPartOfAccessibleNameSuccess />}
    />
    <Route
      path="/engine/visible-text-part-of-accessible-name_failure"
      element={<VisibleTextPartOfAccessibleNameFailure />}
    />
  </>
);

export default EngineRoutes;
