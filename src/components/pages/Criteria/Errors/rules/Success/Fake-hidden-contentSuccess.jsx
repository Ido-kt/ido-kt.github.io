import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Visually Hidden Content: Fake Hidden Content - Success";

export default () => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IssueSuccess
      itemContent={
        <>
          <div className="list-item" id="fake-hidden-success-1">
            <button onClick={() => setVisible(!visible)}>Show Content</button>
            <div aria-hidden={!visible}>
              <p>Accessible Popup Content</p>
            </div>
          </div>

          <div className="list-item" id="fake-hidden-success-2">
            <button aria-describedby="tooltip">Hover Me</button>
            <div id="tooltip" aria-hidden={true}>
              Tooltip Content
            </div>
          </div>

          <div className="list-item" id="fake-hidden-success-3">
            <button onClick={() => setActiveTab(1)}>Tab 1</button>
            <div aria-hidden={activeTab !== 1}>Tab 1 Content</div>
          </div>

          <div className="list-item" id="fake-hidden-success-4">
            <button onClick={() => setActiveSlide(1)}>Next Slide</button>
            <div aria-hidden={activeSlide !== 1}>Slide Content</div>
          </div>

          <div className="list-item" id="fake-hidden-success-5">
            <ul aria-hidden={!isOpen}>
              <li>Option 1</li>
              <li>Option 2</li>
            </ul>
          </div>

          <div className="list-item" id="fake-hidden-success-6">
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
            <div className="modal" aria-hidden={!isOpen}>
              Modal Content
            </div>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};