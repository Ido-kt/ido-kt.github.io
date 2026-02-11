import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation : menu-trigger-clickable - Failure";

export default () => {
  return (
    <IssueFailure
      itemContent={
        <>
          {/* Failure 1 */}
          <nav className="list-item" id="menu-trigger-failure-1" role="presentation">
            <li>
              <div
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu1"
              >
                Options
              </div>
              <ul id="submenu1" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>div</b> is used as a menu trigger, which is non-interactive by default and lacks keyboard focusability.</p>
            </li>
          </nav>

          {/* Failure 2 */}
          <nav className="list-item" id="menu-trigger-failure-2" role="presentation">
            <li>
              <span
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu2"
              >
                Options
              </span>
              <ul id="submenu2" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>span</b> is used as a menu trigger, which is non-interactive and not appropriate for accessibility.</p>
            </li>
          </nav>

          {/* Failure 3 */}
          <nav className="list-item" id="menu-trigger-failure-3" role="presentation">
            <li>
              <img
                src="menu-icon.png"
                alt="Options"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu3"
              />
              <ul id="submenu3" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: An <b>img</b> is used as a menu trigger, which is not inherently interactive or keyboard-accessible.</p>
            </li>
          </nav>

          {/* Failure 4 */}
          <nav className="list-item" id="menu-trigger-failure-4" role="presentation">
            <li>
              <p
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu4"
              >
                Options
              </p>
              <ul id="submenu4" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>p</b> element is used as a menu trigger, which is semantically incorrect and not focusable.</p>
            </li>
          </nav>

          {/* Failure 5 */}
          <nav className="list-item" id="menu-trigger-failure-5" role="presentation">
            <li>
              <section
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu5"
              >
                Options
              </section>
              <ul id="submenu5" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>section</b> is used as a menu trigger, which is inappropriate for this purpose.</p>
            </li>
          </nav>

          {/* Failure 6 */}
          <nav className="list-item" id="menu-trigger-failure-6" role="presentation">
            <li>
              <article
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu6"
              >
                Options
              </article>
              <ul id="submenu6" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: An <b>article</b> is used as a menu trigger, which is semantically incorrect and not accessible.</p>
            </li>
          </nav>

           {/* Failure 7 */}
           <nav className="list-item" id="menu-trigger-failure-7" role="presentation">
            <li>
              <label
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu7"
              >
                Options
              </label>
              <ul id="submenu7" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>label</b> is used as a menu trigger, which is inappropriate because labels are designed to associate text with form inputs, not interactive elements.</p>
            </li>
          </nav>

          {/* Failure 8 */}
          <nav className="list-item" id="menu-trigger-failure-8" role="presentation">
            <li>
              <footer
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu8"
              >
                Options
              </footer>
              <ul id="submenu8" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>footer</b> element is used as a menu trigger, which is semantically inappropriate for interactive behavior.</p>
            </li>
          </nav>

          {/* Failure 9 */}
          <nav className="list-item" id="menu-trigger-failure-9" role="presentation">
            <li>
              <aside
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu9"
              >
                Options
              </aside>
              <ul id="submenu9" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: An <b>aside</b> is used as a menu trigger, which is semantically intended for supplementary content, not interactivity.</p>
            </li>
          </nav>

          {/* Failure 10 */}
          <nav className="list-item" id="menu-trigger-failure-10" role="presentation">
            <li>
              <header
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu10"
              >
                Options
              </header>
              <ul id="submenu10" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>header</b> is used as a menu trigger, which is inappropriate for interactive purposes and lacks focusability.</p>
            </li>
          </nav>

          {/* Failure 11 */}
          <nav className="list-item" id="menu-trigger-failure-11" role="presentation">
            <li>
              <form
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu11"
              >
                Options
              </form>
              <ul id="submenu11" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>form</b> element is used as a menu trigger, which is inappropriate because it is intended for data submission, not navigation or interactivity.</p>
            </li>
          </nav>

          {/* Failure 12 */}
          <nav className="list-item" id="menu-trigger-failure-12" role="presentation">
            <li>
              <table
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="submenu12"
              >
                <tr>
                  <td>Options</td>
                </tr>
              </table>
              <ul id="submenu12" role="">
                <li role=""><a href="#">Option A</a></li>
                <li role=""><a href="#">Option B</a></li>
              </ul>
              <p>Description: A <b>table</b> is used as a menu trigger, which is semantically inappropriate and not designed for interactive behavior.</p>
            </li>
          </nav>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};