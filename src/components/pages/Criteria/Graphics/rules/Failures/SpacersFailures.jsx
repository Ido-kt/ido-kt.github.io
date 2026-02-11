import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Icons : Spacers - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="icon-discernible-failure-1">
          <p>Variation 1: Icon on the Right</p>
          <div className="columns-wrapper">
            <button data-testid="go-back" className="btn--unstyled-icon link link--icon" type="button">
              <span className="wb link__content">Zurück</span>
              <svg
                className="glyph-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                version="1.1"
              >
                <path
                  d="M 240.292 115.212 C 144.163 211.328, 124.685 231.260, 122.782 235.462 C 120.920 239.573, 120.500 242.247, 120.500 250 C 120.500 257.753, 120.920 260.427, 122.782 264.538 C 124.685 268.740, 144.163 288.672, 240.292 384.788 L 355.520 500 362.119 500 C 368.425 500, 368.926 499.817, 373.393 495.885 C 375.964 493.623, 378.727 490.495, 379.534 488.935 C 381.482 485.168, 381.397 478.045, 379.366 474.973 C 378.468 473.613, 327.731 422.438, 266.618 361.250 L 155.503 250 266.618 138.750 C 327.731 77.563, 378.468 26.387, 379.366 25.027 C 381.379 21.982, 381.487 14.842, 379.577 11.148 C 378.794 9.635, 376.104 6.507, 373.599 4.198 C 369.186 0.130, 368.835 0, 362.283 0 L 355.520 0 240.292 115.212"
                  stroke="none"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="list-item" id="icon-discernible-failure-2">
          <p>Variation 2: Circular Button</p>
          <div className="columns-wrapper">
            <button
              data-testid="go-back"
              className="btn--circle link link--icon"
              type="button"
              style={{ borderRadius: "50%", padding: "10px" }}
            >
              <svg
                className="glyph-icon"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                version="1.1"
              >
                <path
                  d="M 240.292 115.212 C 144.163 211.328, 124.685 231.260, 122.782 235.462 C 120.920 239.573, 120.500 242.247, 120.500 250 C 120.500 257.753, 120.920 260.427, 122.782 264.538 C 124.685 268.740, 144.163 288.672, 240.292 384.788 L 355.520 500 362.119 500 C 368.425 500, 368.926 499.817, 373.393 495.885 C 375.964 493.623, 378.727 490.495, 379.534 488.935 C 381.482 485.168, 381.397 478.045, 379.366 474.973 C 378.468 473.613, 327.731 422.438, 266.618 361.250 L 155.503 250 266.618 138.750 C 327.731 77.563, 378.468 26.387, 379.366 25.027 C 381.379 21.982, 381.487 14.842, 379.577 11.148 C 378.794 9.635, 376.104 6.507, 373.599 4.198 C 369.186 0.130, 368.835 0, 362.283 0 L 355.520 0 240.292 115.212"
                  stroke="none"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="list-item" id="icon-discernible-failure-3">
          <p>Variation 3: Text-Only Button</p>
          <div className="columns-wrapper">
            <button data-testid="go-back" className="btn--unstyled link link--text-only" type="button">
              <span className="wb link__content">Zurück</span>
            </button>
          </div>
        </div>

        <div className="list-item" id="icon-discernible-failure-4">
          <p>Variation 4: Large Icon Button</p>
          <div className="columns-wrapper">
            <button
              data-testid="go-back"
              className="btn--unstyled-icon link link--icon"
              type="button"
              style={{ fontSize: "24px" }}
            >
              <svg
                className="glyph-icon"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                version="1.1"
              >
                <path
                  d="M 240.292 115.212 C 144.163 211.328, 124.685 231.260, 122.782 235.462 C 120.920 239.573, 120.500 242.247, 120.500 250 C 120.500 257.753, 120.920 260.427, 122.782 264.538 C 124.685 268.740, 144.163 288.672, 240.292 384.788 L 355.520 500 362.119 500 C 368.425 500, 368.926 499.817, 373.393 495.885 C 375.964 493.623, 378.727 490.495, 379.534 488.935 C 381.482 485.168, 381.397 478.045, 379.366 474.973 C 378.468 473.613, 327.731 422.438, 266.618 361.250 L 155.503 250 266.618 138.750 C 327.731 77.563, 378.468 26.387, 379.366 25.027 C 381.379 21.982, 381.487 14.842, 379.577 11.148 C 378.794 9.635, 376.104 6.507, 373.599 4.198 C 369.186 0.130, 368.835 0, 362.283 0 L 355.520 0 240.292 115.212"
                  stroke="none"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="wb link__content">Zurück</span>
            </button>
          </div>
        </div>

        <div className="list-item" id="icon-discernible-failure-5">
          <p>Variation 5: Icon with Tooltip</p>
          <div className="columns-wrapper">
            <button
              data-testid="go-back"
              className="btn--unstyled-icon link link--icon"
              type="button"
              aria-label="Go back"
            >
              <svg
                className="glyph-icon"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                version="1.1"
              >
                <path
                  d="M 240.292 115.212 C 144.163 211.328, 124.685 231.260, 122.782 235.462 C 120.920 239.573, 120.500 242.247, 120.500 250 C 120.500 257.753, 120.920 260.427, 122.782 264.538 C 124.685 268.740, 144.163 288.672, 240.292 384.788 L 355.520 500 362.119 500 C 368.425 500, 368.926 499.817, 373.393 495.885 C 375.964 493.623, 378.727 490.495, 379.534 488.935 C 381.482 485.168, 381.397 478.045, 379.366 474.973 C 378.468 473.613, 327.731 422.438, 266.618 361.250 L 155.503 250 266.618 138.750 C 327.731 77.563, 378.468 26.387, 379.366 25.027 C 381.379 21.982, 381.487 14.842, 379.577 11.148 C 378.794 9.635, 376.104 6.507, 373.599 4.198 C 369.186 0.130, 368.835 0, 362.283 0 L 355.520 0 240.292 115.212"
                  stroke="none"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);