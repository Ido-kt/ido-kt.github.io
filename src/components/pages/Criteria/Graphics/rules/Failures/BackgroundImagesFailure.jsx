import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Background Images - Failure Cases";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="background-images-failures-1">
          <div style={{ width: "240px", height: "140px", backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=480&q=80')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }} />
        </div>
        <div className="list-item" id="background-images-failures-2">
          <div style={{ width: "240px", height: "140px", position: "relative", backgroundImage: "url('https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=480&q=80')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
            <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", color: "#999", fontWeight: 600 }}>Text on Image</span>
          </div>
        </div>
        <div className="list-item" id="background-images-failures-3">
          <h2 style={{ width: "240px", height: "64px", margin: 0, backgroundImage: "url('https://dummyimage.com/480x128/ffffff/000000&text=Sales+Report')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}></h2>
        </div>
        <div className="list-item" id="background-images-failures-4">
          <button style={{ width: "140px", height: "48px", border: "none", borderRadius: "6px", backgroundImage: "url('https://dummyimage.com/280x96/1e90ff/ffffff&text=Download')", backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer" }} />
        </div>
        <div className="list-item" id="background-images-failures-5">
          <a href="#" style={{ display: "inline-block", width: "180px", height: "48px", backgroundImage: "url('https://dummyimage.com/360x96/222/fff&text=Company+Logo')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "6px", textDecoration: "none" }} />
        </div>
        <div className="list-item" id="background-images-failures-6">
          <div style={{ width: "240px", height: "140px", backgroundImage: "url('https://dummyimage.com/480x280/f2f2f2/000&text=Campus+Map')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
            <span style={{ display: "none" }}>Campus map showing accessible routes</span>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);