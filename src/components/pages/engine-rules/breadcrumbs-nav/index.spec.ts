import { BreadcrumbsNav } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("BreadcrumbsNav Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when breadcrumbs is a nav", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <style>
      nav {
          display: flex;
          gap: 1rem;
      }
    </style>
    
    <nav aria-label="Breadcrumb">
      <div><a href="/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
    </nav>
    `;

    const nav = document.querySelector("nav");
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when breadcrumbs has role=navigation", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <style>
      nav {
          display: flex;
          gap: 1rem;
      }
    </style>
    
    <div role="navigation" aria-label="Breadcrumb">
      <div><a href="/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
    </div>
    `;

    const nav = document.querySelector("[role='navigation']");
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when breadcrumbs has a parent nav", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <style>
        .breadcrumb {
            background-color: #f5f5f5;
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            border-radius: 4px;
            display: flex;
            flex-flow: row wrap;
        }
    
        .breadcrumb-item {
            margin-inline: 1rem;
        }
    
        .breadcrumb-item:not(:last-child)::after {
            content: ">";
            margin-inline: 1rem;
        }
      </style>
  
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    `;

    const ol = document.querySelector("ol");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([ol]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(document.querySelector("nav"));

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when breadcrumbs has a parent role=navigation", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <style>
        .breadcrumb {
            background-color: #f5f5f5;
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            border-radius: 4px;
            display: flex;
            flex-flow: row wrap;
        }
    
        .breadcrumb-item {
            margin-inline: 1rem;
        }
    
        .breadcrumb-item:not(:last-child)::after {
            content: ">";
            margin-inline: 1rem;
        }
      </style>
  
      <div role="navigation" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </div>
    `;

    const ol = document.querySelector("ol");
    (classifier.getMatched as jest.Mock).mockReturnValue([ol]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(document.querySelector("[role='navigation']"));

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should fail when breadcrumbs is not a nav and has no parent", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <style>
        .breadcrumb {
            background-color: #f5f5f5;
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            border-radius: 4px;
            display: flex;
            flex-flow: row wrap;
        }
    
        .breadcrumb-item {
            margin-inline: 1rem;
        }
    
        .breadcrumb-item:not(:last-child)::after {
            content: ">";
            margin-inline: 1rem;
        }
      </style>
  
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/lib">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    `;

    const ol = document.querySelector("ol");
    (classifier.getMatched as jest.Mock).mockReturnValue([ol]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(null);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([ol]);
  });

  it("should fail when breadcrumbs is not a nav and has parent div with no role", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <style>
        .breadcrumb {
            background-color: #f5f5f5;
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            border-radius: 4px;
            display: flex;
            flex-flow: row wrap;
        }
    
        .breadcrumb-item {
            margin-inline: 1rem;
        }
    
        .breadcrumb-item:not(:last-child)::after {
            content: ">";
            margin-inline: 1rem;
        }
      </style>
  
      <div aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </div>
    `;

    const ol = document.querySelector("ol");
    (classifier.getMatched as jest.Mock).mockReturnValue([ol]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(null);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([ol]);
  });

  it("should fail when breadcrumbs has a parent nav with role=presentation", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <style>
        .breadcrumb {
            background-color: #f5f5f5;
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            border-radius: 4px;
            display: flex;
            flex-flow: row wrap;
        }
    
        .breadcrumb-item {
            margin-inline: 1rem;
        }
    
        .breadcrumb-item:not(:last-child)::after {
            content: ">";
            margin-inline: 1rem;
        }
      </style>
  
      <nav role="presentation" aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    `;

    const ol = document.querySelector("ol");
    (classifier.getMatched as jest.Mock).mockReturnValue([ol]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(null);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([ol]);
  });

  it("should have passed nodes when breadcrumbs is a nav", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <style>
      nav {
          display: flex;
          gap: 1rem;
      }
    </style>
    
    <nav aria-label="Breadcrumb">
      <div><a href="/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
    </nav>
    `;

    const nav = document.querySelector("nav");
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([nav]);
  });

  it("should have passed nodes when breadcrumbs has role=navigation", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <style>
      nav {
          display: flex;
          gap: 1rem;
      }
    </style>
    
    <div role="navigation" aria-label="Breadcrumb">
      <div><a href="/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
    </div>
    `;

    const nav = document.querySelector("[role='navigation']");
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsNav.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([nav]);
  });
});
