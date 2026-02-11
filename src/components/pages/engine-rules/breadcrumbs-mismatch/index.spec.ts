import { BreadcrumbsMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("BreadcrumbsMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when breadcrumbs is labeled", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <style>
      .breadcrumbs {
          display: flex;
          gap: 1rem;
      }
    </style>
    
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <div><a href="/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
      <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
    </nav>
    `;

    const breadcrumbs = document.querySelector("[aria-label=Breadcrumb]");
    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when breadcrumbs has a labeled parent", async () => {
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

    const breadcrumbs = document.querySelector(".breadcrumb");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(breadcrumbs);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should fail when breadcrumbs is not labeled and has no labeled parent", async () => {
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
  
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    `;

    const breadcrumbs = document.querySelector(".breadcrumb");
    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(null);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([breadcrumbs]);
  });

  it("should fail when breadcrumbs is not labeled and has mislabeled parent", async () => {
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
  
      <nav aria-label="Navigation Stack">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/lib">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    `;

    const breadcrumbs = document.querySelector(".breadcrumb");
    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([breadcrumbs]);
  });

  it("should have passed nodes when breadcrumbs is labeled", async () => {
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
    const breadcrumbs = document.querySelector(".breadcrumb");
    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([breadcrumbs]);
  });

  it("should have passed nodes when breadcrumbs has a labeled parent", async () => {
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
    const breadcrumbs = document.querySelector(".breadcrumb");
    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumbs]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(breadcrumbs);

    await BreadcrumbsMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([breadcrumbs]);
  });
});
