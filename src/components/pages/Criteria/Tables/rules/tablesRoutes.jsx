import React from "react";
import { Route, Routes } from "react-router-dom";
import NestedTablesSuccess from "./Success/Nested-tablesSuccess";
import NestedTablesFailure from "./Failure/Nested-tablesFailure";
import ColumnTableHeadersSuccess from "./Success/Column-table-headersSuccess";
import ColumnTableHeadersFailure from "./Failure/Column-table-headersFailure";
import TableLayoutsSuccess from "./Success/Table-layoutsSuccess";
import TableLayoutsFailure from "./Failure/Table-layoutsFailure";
import HeadlessTablesSuccess from "./Success/Headless-tablesSuccess";
import HeadlessTablesFailure from "./Failure/Headless-tablesFailure";
import RowTableHeadersSuccess from "./Success/Row-table-headersSuccess";
import RowTableHeadersFailure from "./Failure/Row-table-headersFailure";

const TablesRoutes = () => (
  <>
    <Route path="tables/nested-tables_success" element={<NestedTablesSuccess />} />
    <Route path="tables/nested-tables_failure" element={<NestedTablesFailure />} />
    <Route path="tables/column-table-headers_success" element={<ColumnTableHeadersSuccess />} />
    <Route path="tables/column-table-headers_failure" element={<ColumnTableHeadersFailure />} />
    <Route path="tables/table-layouts_success" element={<TableLayoutsSuccess />} />
    <Route path="tables/table-layouts_failure" element={<TableLayoutsFailure />} />
    <Route path="tables/headless-tables_success" element={<HeadlessTablesSuccess />} />
    <Route path="tables/headless-tables_failure" element={<HeadlessTablesFailure />} />
    <Route path="tables/row-table-headers_success" element={<RowTableHeadersSuccess />} />
    <Route path="tables/row-table-headers_failure" element={<RowTableHeadersFailure />} />
  </>
);

export default TablesRoutes;
