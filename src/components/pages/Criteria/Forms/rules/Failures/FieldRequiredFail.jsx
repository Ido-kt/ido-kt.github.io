import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Field Required Failures";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <ul>
          <li className="list-item">
            <div>
              <p>❌ Missing <strong>required</strong> attribute, so assistive technology won’t announce it as mandatory.</p>
              <label htmlFor="fullname2">Full Name *</label>
              <input type="text" id="fullname2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <p>❌ No <strong>required</strong> attribute, meaning screen readers won’t alert users that this field is necessary.</p>
              <label htmlFor="email2">Email *</label>
              <input type="email" id="email2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <p>❌ No programmatic indicator that this field is required, despite the visual * symbol.</p>
              <label htmlFor="password2">Password *</label>
              <input type="password" id="password2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <p>❌ Missing <strong>required</strong> attribute, causing accessibility failure for users relying on screen readers.</p>
              <label htmlFor="phone2">Phone Number *</label>
              <input type="tel" id="phone2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <p>❌ The label visually indicates required, but there’s no programmatic enforcement.</p>
              <label htmlFor="dob2">Date of Birth *</label>
              <input type="date" id="dob2" />
            </div>
          </li>
        </ul>
        <ul>
          {/* Example 1: aria-required is false, so it's not actually required */}
          <li className="list-item">
            <div>
              <p>❌ <strong>Contenteditable field with `aria-required="false"`.</strong> Despite the visual `*`, screen readers will think this is optional.</p>
              <form>
                <div id="tbLabel">Email Address *</div>
                <div role="textbox" contentEditable="" aria-labelledby="tbLabel" id="email1" aria-required="false" style={{ border: "red 1px solid" }}></div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>

          {/* Example 2: aria-required is empty, so its behavior is undefined */}
          <li className="list-item">
            <div>
              <p>❌ <strong>`aria-required` attribute is empty.</strong> This results in undefined behavior, leading to inconsistent screen reader support.</p>
              <form>
                <div id="tbLabel">Email Address *</div>
                <div role="textbox" contentEditable="" aria-labelledby="tbLabel" id="email2" aria-required="" style={{ border: "red 1px solid" }}></div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>

          {/* Example 3: Required attribute missing from actual input field */}
          <li className="list-item">
            <div>
              <p>❌ <strong>Label indicates required, but the actual field lacks `required`.</strong> The user won't receive validation feedback.</p>
              <form>
                <label htmlFor="email3">Email Address *</label>
                <input type="email" id="email3" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>

          {/* Example 4: Using a span as a label with no proper association */}
          <li className="list-item">
            <div>
              <p>❌ <strong>`span` is used as a label but is not linked with `for` or `aria-labelledby`.</strong> Assistive tech won’t associate it with the field.</p>
              <form>
                <span>Email Address *</span>
                <input type="email" id="email4" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>

          {/* Example 5: Mismatched aria-labelledby reference */}
          <li className="list-item">
            <div>
              <p>❌ <strong>`aria-labelledby` references a nonexistent ID.</strong> Assistive tech won't find a valid label.</p>
              <form>
                <div id="tbLabel5">Email Address *</div>
                <input type="email" id="email5" aria-labelledby="nonexistentID" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>

          {/* Example 6: `aria-required` used on an element without a required role */}
          <li className="list-item">
            <div>
              <p>❌ <strong>`aria-required="true"` applied to an element without an interactive role.</strong> Does not affect form validation.</p>
              <form>
                <div id="tbLabel6">Email Address *</div>
                <div id="email6" aria-labelledby="tbLabel6" aria-required="true" style={{ border: "red 1px solid" }}></div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </li>
        </ul>

        <input type="submit" value="Submit" />
      </>
    }
    itemDescription={itemDescription}
  />
);