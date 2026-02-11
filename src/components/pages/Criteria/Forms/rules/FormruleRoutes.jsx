// FormruleRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import CaptchaFail from "./Failures/CaptchaFail";
import CustomControlFieldFail from "./Failures/CustomControlFieldFail";
import CustomSelectFieldFail from "./Failures/CustomSelectFieldFail";
import FormDuplicateIdFail from "./Failures/FormDuplicateIdFail";
import FeildValidFail from "./Failures/FeildValidFail";
import FieldLabelFail from "./Failures/FieldLabelFail";
import FieldRequiredFail from "./Failures/FieldRequiredFail";
import FieldValidationFocusFail from "./Failures/FieldValidationFocusFail";
import MissingFormButtonFail from "./Failures/MissingFormButtonFail";
import SearchFormTaggingFail from "./Failures/SearchFormTaggingFail";
import SubmissionStatusFail from "./Failures/SubmissionStatusFail";
import CaptchaSucc from "./Success/CaptchaSucc";
import CustomControlFieldSucc from "./Success/CustomControlFieldSucc";
import CustomSelectFieldSucc from "./Success/CustomSelectFieldSucc";
import FormDuplicateIdSuccess from "./Success/FormDuplicateIdSuccess";
import FieldValidSucc from "./Success/FieldValidSucc";
import FieldLabelSuccess from "./Success/FieldLabelSuccess";
import FieldRequiredSuccess from "./Success/FieldRequiredSuccess";
import FieldValidationFocusSucc from "./Success/FieldValidationFocusSucc";
import MissingFormButtonSuccess from "./Success/MissingFormButtonSuccess";
import SearchFormTaggingSuccess from "./Success/SearchFormTaggingSuccess";
import SubmissionStatusSuccess from "./Success/SubmissionStatusSuccess";

const FormruleRoutes = () => (
  <>
    <Route path="/forms/captcha_success" element={<CaptchaSucc />} />
    <Route path="/forms/captcha_failure" element={<CaptchaFail />} />
    <Route path="/forms/custom-control-field_success" element={<CustomControlFieldSucc />} />
    <Route path="/forms/custom-control-field_failure" element={<CustomControlFieldFail />} />
    <Route path="/forms/custom-select-field_success" element={<CustomSelectFieldSucc />} />
    <Route path="/forms/custom-select-field_failure" element={<CustomSelectFieldFail />} />
    <Route path="/forms/form-duplicate-id_success" element={<FormDuplicateIdSuccess />} />
    <Route path="/forms/form-duplicate-id_failure" element={<FormDuplicateIdFail />} />
    <Route path="/forms/field-validations_success" element={<FieldValidSucc />} />
    <Route path="/forms/field-validations_failure" element={<FeildValidFail />} />
    <Route path="/forms/field-label_success" element={<FieldLabelSuccess />} />
    <Route path="/forms/field-label_failure" element={<FieldLabelFail />} />
    <Route path="/forms/field-required_success" element={<FieldRequiredSuccess />} />
    <Route path="/forms/field-required_failure" element={<FieldRequiredFail />} />
    <Route path="/forms/field-validation-focus_success" element={<FieldValidationFocusSucc />} />
    <Route path="/forms/field-validation-focus_failure" element={<FieldValidationFocusFail />} />
    <Route path="/forms/missing-form-button_success" element={<MissingFormButtonSuccess />} />
    <Route path="/forms/missing-form-button_failure" element={<MissingFormButtonFail />} />
    <Route path="/forms/search-form-tagging_success" element={<SearchFormTaggingSuccess />} />
    <Route path="/forms/search-form-tagging_failure" element={<SearchFormTaggingFail />} />
    <Route path="/forms/form-submissions-status_success" element={<SubmissionStatusSuccess />} />
    <Route path="/forms/form-submissions-status_failure" element={<SubmissionStatusFail />} />
    <Route path="/forms/form-duplicate-ids_success" element={<FormDuplicateIdSuccess />} />
    <Route path="/forms/form-duplicate-ids_failure" element={<FormDuplicateIdFail />} />
  </>
);

export default FormruleRoutes;
