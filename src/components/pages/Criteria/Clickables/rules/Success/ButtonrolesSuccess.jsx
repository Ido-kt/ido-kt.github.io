import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Button Roles - Extended Success Examples";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="button-role-1">
          <button role="button" onClick={() => alert('Standard Button Clicked!')}>
            Standard Button
          </button>
        </div>

        <div className="list-item" id="button-role-2">
          <button role="link" onClick={() => alert('Navigating to link...')}>
            Link Button
          </button>
        </div>

        <div className="list-item" id="button-role-3">
          <button role="menuitem" onClick={() => alert('Menu Item Selected!')}>
            Menu Item Button
          </button>
        </div>

        <div className="list-item" id="button-role-4">
          <button role="tab" onClick={() => alert('Tab Selected!')}>
            Tab Button
          </button>
        </div>

        <div className="list-item" id="button-role-5">
          <button role="switch" aria-checked="false" onClick={() => alert('Switch Toggled!')}>
            Toggle Switch
          </button>
        </div>

        <div className="list-item" id="button-role-6">
          <button role="checkbox" aria-checked="false" onClick={() => alert('Checkbox Checked!')}>
            Checkbox Button
          </button>
        </div>

        <div className="list-item" id="button-role-7">
          <button role="radio" aria-checked="false" onClick={() => alert('Radio Selected!')}>
            Radio Button
          </button>
        </div>

        <div className="list-item" id="button-role-8">
          <button role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            Loading Progress
          </button>
        </div>

        <div className="list-item" id="button-role-9">
          <button role="alert" onClick={() => alert('Alert triggered!')}>
            Alert Button
          </button>
        </div>

        <div className="list-item" id="button-role-10">
          <button role="presentation" onClick={() => alert('Presentation button clicked!')}>
            Presentation Button
          </button>
        </div>

        <div className="list-item" id="button-role-11">
          <button role="gridcell" onClick={() => alert('Gridcell clicked!')}>
            Gridcell Button
          </button>
        </div>

        <div className="list-item" id="button-role-12">
          <button role="tooltip" onClick={() => alert('Tooltip Activated!')}>
            Tooltip Button
          </button>
        </div>

        <div className="list-item" id="button-role-13">
          <button role="dialog" onClick={() => alert('Dialog Opened!')}>
            Open Dialog
          </button>
        </div>

        <div className="list-item" id="button-role-14">
          <button role="log" onClick={() => alert('Log Message Displayed!')}>
            Log Button
          </button>
        </div>

        <div className="list-item" id="button-role-15">
          <button role="marquee" onClick={() => alert('Marquee Scrolling!')}>
            Marquee Button
          </button>
        </div>

        <div className="list-item" id="button-role-16">
          <button role="status" onClick={() => alert('Status Updated!')}>
            Status Button
          </button>
        </div>

        <div className="list-item" id="button-role-17">
          <button role="treeitem" onClick={() => alert('Tree Item Selected!')}>
            Tree Item Button
          </button>
        </div>

        <div className="list-item" id="button-role-18">
          <button role="toolbar" onClick={() => alert('Toolbar Activated!')}>
            Toolbar Button
          </button>
        </div>

        <div className="list-item" id="button-role-19">
          <button role="combobox" aria-expanded="false" onClick={() => alert('Combobox Opened!')}>
            Open Combobox
          </button>
        </div>

        <div className="list-item" id="button-role-20">
          <button role="treegrid" onClick={() => alert('Tree Grid Activated!')}>
            Tree Grid Button
          </button>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);