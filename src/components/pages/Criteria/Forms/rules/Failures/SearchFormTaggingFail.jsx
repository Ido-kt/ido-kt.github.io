import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Search Form Tagging Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <div class="container">
            <form class="d-flex">
              <label for="search" class="me-2">
                Search:
              </label>
              <input
                class="form-control me-2"
                type="search"
                id="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </li>

        <li className="list-item">
          <div class="container">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </li>

        <li className="list-item">
          <div class="container" role="search">
            <form class="d-flex">
              <label for="search1" class="me-2">
                Search:
              </label>
              <input
                class="form-control me-2"
                type="search"
                id="search1"
                name="search"
                placeholder="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </li>

        <li className="list-item">
          <div class="container" role="search">
            <form class="d-flex">
              <label for="search2" class="me-2">
                Search:
              </label>
              <input
                class="form-control me-2"
                type="search"
                id="search2"
                name="search"
                placeholder="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
