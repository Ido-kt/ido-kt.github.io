// AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";

// Criteria Pages
import Carousels from "../components/pages/Criteria/Carousels/Carousels";
import Clickables from "../components/pages/Criteria/Clickables/Clickables";
import Context from "../components/pages/Criteria/Context/Context";
import Document from "../components/pages/Criteria/Document/Document";
import Errors from "../components/pages/Criteria/Errors/Errors";
import Forms from "../components/pages/Criteria/Forms/Forms";
import Graphics from "../components/pages/Criteria/Graphics/Graphics";
import Headings from "../components/pages/Criteria/Headings/Headings";
import Keyboard from "../components/pages/Criteria/Keyboard/Keyboard";
import Navigation from "../components/pages/Criteria/Navigation/Navigation";
import Readability from "../components/pages/Criteria/Readability/Readability";
import Tables from "../components/pages/Criteria/Tables/tables";

// Modularized Routes for Each Criteria
import ItemPage from "../components/layout/rulePage";
import CarouselsRoutes from "../components/pages/Criteria/Carousels/rules/carouselsRoutes";
import ClickablesRoutes from "../components/pages/Criteria/Clickables/rules/ClickableRoutes";
import ContextRoutes from "../components/pages/Criteria/Context/rules/ContextRoutes";
import DocumentRoutes from "../components/pages/Criteria/Document/rules/documentRoutes";
import ErrorsRoutes from "../components/pages/Criteria/Errors/rules/errorsRoutes";
import FormruleRoutes from "../components/pages/Criteria/Forms/rules/FormruleRoutes";
import GraphicsRoutes from "../components/pages/Criteria/Graphics/rules/graphicsRoutes";
import HeadingsRoutes from "../components/pages/Criteria/Headings/rules/headingsRoutes";
import KeyboardRoutes from "../components/pages/Criteria/Keyboard/rules/KeyboardRoutes";
import NavigationRoutes from "../components/pages/Criteria/Navigation/rules/navigationRoutes";
import ReadabilityRoutes from "../components/pages/Criteria/Readability/rules/readabilityRoutes";
import TablesRoutes from "../components/pages/Criteria/Tables/rules/tablesRoutes";

// Additional Dynamic Routes
import AllRulesWithRoutes from "../components/pages/Criteria/AllRulesLinks";
import EngineRulesListing from "../components/pages/EngineRulesListing";
import EngineLibrary from "../components/pages/Engine/EngineLibrary";
import RulesListing from "../components/pages/RulesListing";
import EngineRoutes from "./engineRoutes";

const AppRoutes = ({ navigate }) => (
  <Routes>
    {/* Home Route */}
    <Route index element={<Home navigate={navigate} title="Home" />} />

    {/* Dynamic Routes */}
    <Route path="rules" element={<RulesListing />} />
    <Route path="/*" element={<AllRulesWithRoutes navigate={navigate} />} />

    {/* Individual Criteria Pages */}
    <Route
      path="clickables"
      element={<Clickables navigate={navigate} title="Clickables" />}
    />
    <Route
      path="context"
      element={<Context navigate={navigate} title="Context" />}
    />
    <Route
      path="carousels"
      element={<Carousels navigate={navigate} title="Carousels" />}
    />
    <Route path="forms" element={<Forms navigate={navigate} title="Forms" />} />
    <Route
      path="document"
      element={<Document navigate={navigate} title="Document" />}
    />
    <Route
      path="errors"
      element={<Errors navigate={navigate} title="Errors" />}
    />
    <Route
      path="graphics"
      element={<Graphics navigate={navigate} title="Graphics" />}
    />
    <Route
      path="keyboard"
      element={<Keyboard navigate={navigate} title="Keyboard" />}
    />
    <Route
      path="navigation"
      element={<Navigation navigate={navigate} title="Navigation" />}
    />
    <Route
      path="readability"
      element={<Readability navigate={navigate} title="Readability" />}
    />
    <Route
      path="headings"
      element={<Headings navigate={navigate} title="Headings" />}
    />
    <Route
      path="tables"
      element={<Tables navigate={navigate} title="Tables" />}
    />

    {/* Individual Criteria Rule Routes */}
    {ClickablesRoutes()}
    {ContextRoutes()}
    {KeyboardRoutes()}
    {FormruleRoutes()}
    {DocumentRoutes()}
    {ErrorsRoutes()}
    {ReadabilityRoutes()}
    {GraphicsRoutes()}
    {HeadingsRoutes()}
    {CarouselsRoutes()}
    {TablesRoutes()}
    {NavigationRoutes()}

    {/* Engine Rules */}
    <Route path="/engine" element={<EngineRulesListing />} />
    <Route path="/engine/library" element={<EngineLibrary />} />
    {EngineRoutes()}

    <Route
      path="/test-item"
      element={
        <ItemPage
          ruleData={{ name: "Test Rule", description: "Testing ItemPage" }}
        />
      }
    />
  </Routes>
);

export default AppRoutes;
