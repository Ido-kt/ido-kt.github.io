import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation : Submenu State - Success";

const MenuTrigger = ({ label, menuId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => setIsExpanded((prev) => !prev);

  return (
    <div className="menu-container">
      <button
        aria-haspopup="menu"
        aria-expanded={isExpanded}
        aria-controls={menuId}
        onClick={toggleMenu}
        className="menu-trigger"
      >
        {label}
      </button>
      <ul id={menuId} role="menu" hidden={!isExpanded}>
        <li role="menuitem">Option 1</li>
        <li role="menuitem">Option 2</li>
        <li role="menuitem">Option 3</li>
      </ul>
    </div>
  );
};

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="submenu-state-success-1">
          <MenuTrigger label="Menu 1" menuId="menu1" />
        </li>
        <li className="list-item" id="submenu-state-success-2">
          <MenuTrigger label="Menu 2" menuId="menu2" />
        </li>
        <li className="list-item" id="submenu-state-success-3">
          <MenuTrigger label="Menu 3" menuId="menu3" />
        </li>
        <li className="list-item" id="submenu-state-success-4">
          <MenuTrigger label="Settings" menuId="settingsMenu" />
        </li>
        <li className="list-item" id="submenu-state-success-5">
          <MenuTrigger label="Account Options" menuId="accountMenu" />
        </li>
        <li className="list-item" id="submenu-state-success-6">
          <MenuTrigger label="More Actions" menuId="actionsMenu" />
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);