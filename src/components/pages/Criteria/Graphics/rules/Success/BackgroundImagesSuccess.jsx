import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Background Images - Success Cases";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="background-images-success-1">
          <div style={{ width: "240px", height: "140px", backgroundImage: "url('https://dummyimage.com/480x280/cccccc/000000&text=Decorative+Pattern')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }} role="presentation" aria-hidden="true" />
        </div>

        <div className="list-item" id="background-images-success-2">
          <div style={{ width: "240px", height: "140px", position: "relative", backgroundImage: "url('https://dummyimage.com/480x280/222/fff&text=Accessible+Overlay')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
            <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#000", background: "#fff", padding: "4px 8px", borderRadius: "4px" }}>
              High Contrast Text
            </span>
          </div>
        </div>

        <div className="list-item" id="background-images-success-3">
          <div style={{ width: "240px", height: "140px", backgroundImage: "url('https://dummyimage.com/480x280/ffffff/000&text=Campus+Map')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
            <span style={{ display: "none" }}>Campus map showing accessible entrances and exits</span>
          </div>
        </div>

        <div className="list-item" id="background-images-success-4">
          <button aria-label="Download Report" style={{ width: "160px", height: "48px", border: "none", borderRadius: "6px", backgroundImage: "url('https://dummyimage.com/320x96/1e90ff/ffffff&text=Download')", backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer" }} />
        </div>

        <div className="list-item" id="background-images-success-5">
          <a href="#" aria-label="Go to company homepage" style={{ display: "inline-block", width: "180px", height: "48px", backgroundImage: "url('https://dummyimage.com/360x96/222/fff&text=Company+Logo')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "6px", textDecoration: "none" }} />
        </div>

        <div className="list-item" id="background-images-success-6">
          <div style={{ width: "240px", height: "140px", position: "relative", backgroundImage: "url('https://dummyimage.com/480x280/aaaaaa/000000&text=Chart+Background')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
              Accessible Data Overlay
            </div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);