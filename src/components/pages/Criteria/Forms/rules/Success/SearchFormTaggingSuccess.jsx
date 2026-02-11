import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Forms - Search Form Tagging Success";

export default () => (
  <IssueSuccess
    itemContent={
      <ul>
        <li className="list-item">
          <div class="container" role="search">
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
            <form class="d-flex" role="search">
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
          <div class="container" role="search">
            <form class="d-flex">
              <label for="search1" class="me-2">
                Product Search:
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
                Blog Search:
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

        <li className="list-item">
          <div class="container" role="search">
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
                aria-label="Search through site content"
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
