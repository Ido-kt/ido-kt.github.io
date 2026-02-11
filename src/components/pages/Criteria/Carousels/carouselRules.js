export const carouselDataRules = [
  {
    id: 1,
    title: "Live Carousels",
    short_desc: "Carousels should not be tagged as live regions",
    severity: "Extreme",
    description:
      "When carousels are tagged as live regions, screen readers will break the browsing flow every time a slide is changed to announce the new slide. This will happen even if the user isnt interacting with the carousel at all and is in another section entirely.",
    suggested_fix: "Remove Atribute",
    resolution:
      "Remove the aria-live=true attribute from the carousel itself and all of its slides."
  },
  {
    id: 2,
    title: "Carousel Arrows",
    short_desc:
      "Carousel navigation arrows should be labled for assistive technology",
    severity: "High",
    description:
      "Carousel arrow buttons (next/previous slides) are essential for operating carousels. By design, carousels are difficult for assistive technology to handle. If the navigation arrows arent accessible, carousels may be impossible for blind users to operate.",
    suggested_fix: "Remove Atribute",
    resolution:
      'Build the arrow buttons using a button tag. Alternatively, use the ARIA-role (role=button) attribute to mark those as buttons for assistive technology. Additionally, include an aria-label or a screen-reader-only text describing the functionality of the button.</br><button type="button" aria-label="Next/Previous">... YOUR ARROW ICON</button></br><button type="button"><span class="sr-only">Next/Previous</span>... YOUR ARROW ICON</button>'
  },
  {
    id: 3,
    title: "Carousel Pagination",
    short_desc:
      "Carousel pagination buttons should be tagged and labled for assistive technology",
    severity: "High",
    description:
      "Carousel pagination buttons, which are usually tiny dots indicating a slide option, are often used for operating carousels. However, if those arent tagged and coded correctly for screen-readers, blind users wont be able to operate the carousel.",
    suggested_fix: "Remove Atribute",
    resolution:
      'For pagination buttons to be accessible, they should either be built as native buttons or use the role=button attribute. They should also include a screen-reader-only text or an "aria-label" to indicate the slide number they activate.</br><button type="button" aria-label="Carousel slide 1/2/3">●</button></br><button type="button"><span class="sr-only">Carousel slide 1/2/3</span>●</button>'
  },
  {
    id: 4,
    title: "Carousel Labeling",
    short_desc: "Carousels should be tagged and labeled properly",
    severity: "High",
    description:
      "Unlabeled carousel areas are difficult for screen reader users because content gets hidden and shown unexpectedly. This can cause screen readers to read, stop, and start to read again something else entirely. If tagged properly, this behavior is expected.",
    suggested_fix: "Remove Atribute",
    resolution:
      'Use the ARIA landmark technique to tag the carousel as a region, alongside an "aria-label" that equals "carousel". Using both of these attributes, assistive technology users will understand that this is a carousel region. This will also help users identify that buttons and controls within the region (like next, previous, or pause) are associated with controlling the carousel functionality.You can also include extra content for the carousel in the aria-label attribute as seen in the example below: </br><div class="carousel" role="region" aria-label="Featured Products Carousel"></div>'
  },
  {
    id: 5,
    title: "Carousel Pausing",
    short_desc: "Carousel should include a pause button",
    severity: "Medium",
    description:
      "Carousels without a properly labeled button to allow users to pause may cause interference with assistive technology and loss of orientation for keyboard navigation users.",
    suggested_fix: "Remove Atribute",
    resolution: `Include a keyboard-navigable, labeled button that enables users to pause the carousel. If you do not want the button to be visible but only available for screen readers and keyboard users, you can hide it using the CSS opacity attribute (set to 0), and on focus, set the opacity to 1 to make it visible.<code><button type="button" class="pause-button">Pause</button><style>.pause-button {opacity: 0;}.pause-button:focus-visible {opacity: 1;}</style></code>`
  }
];
