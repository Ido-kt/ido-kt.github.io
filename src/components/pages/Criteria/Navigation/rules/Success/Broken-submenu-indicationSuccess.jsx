import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation : Broken Submenu Indication - Success";

export default () => {
  const [menuOpen, setMenuOpen] = useState({
    menu1: false,
    menu2: false,
  });

  const toggleMenu = (menu) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <IssueSuccess
      itemContent={
        <>
          <div className="list-item" id="broken-submenu-indication-success-1">
            <button
              aria-expanded={menuOpen.menu1}
              aria-haspopup="true"
              onClick={() => toggleMenu("menu1")}
            >
              Menu Item 1
            </button>
            {menuOpen.menu1 && (
              <ul>
                <li><a href="#">Submenu Item 1</a></li>
                <li><a href="#">Submenu Item 2</a></li>
              </ul>
            )}
          </div>
          <div className="list-item" id="broken-submenu-indication-success-2">
            <a href="#" aria-expanded="false" aria-haspopup="false">Menu Item 2</a>
          </div>
          <div className="list-item" id="broken-submenu-indication-success-3">
            <button
              aria-expanded={menuOpen.menu2}
              aria-haspopup="true"
              onClick={() => toggleMenu("menu2")}
            >
              Menu Item 3
            </button>
            {menuOpen.menu2 && (
              <ul>
                <li><a href="#">Submenu Item 3</a></li>
                <li><a href="#">Submenu Item 4</a></li>
              </ul>
            )}
          </div>
          <div className="list-item" id="broken-submenu-indication-success-4">
            <a href="#">Menu Item 4</a>
          </div>
          <div className="list-item" id="broken-submenu-indication-success-5">
            <button>Menu Item 5</button>
          </div>
          <div className="list-item" id="broken-submenu-indication-success-6">
            <a href="#">Menu Item 6</a>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
