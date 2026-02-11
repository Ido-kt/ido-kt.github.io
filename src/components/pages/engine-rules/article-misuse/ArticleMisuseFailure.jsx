import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ArticleMisuseFailure = () => {
  const ruleId = "article-misuse";
  const title = `Only elements that function as articles should be tagged as article regions`;
  const description = `Coding elements that aren't full-featured text articles using the article HTML tag causes screen readers to announce incorrect information about the purpose and structure of the content.`;
  const helpText = `Assign role="presentation" to the failing element or use a different HTML tag that is more appropriate for the function of the element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "article header short content", content: `<article>
  <header>
    <h1>The Benefits of Semantic HTML</h1>
    <p class="date">Published on May 21, 2024 by Jane Doe</p>
  </header>
  <p>Short content</p>
</article>` },
  { filename: "article long content no header", content: `<article>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
</article>` },
  { filename: "div role article header short content", content: `<div role="article">
  <header>
    <h1>The Benefits of Semantic HTML</h1>
    <p class="date">Published on May 21, 2024 by Jane Doe</p>
  </header>
  <p>Short content</p>
</div>` },
  { filename: "div role article long content no header", content: `<div role="article">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quia consectetur esse? Mollitia excepturi officiis
    nostrum? Reprehenderit doloremque, molestias excepturi porro, facere voluptatem quibusdam commodi exercitationem
    laborum corrupti laboriosam culpa!</p>
</div>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default ArticleMisuseFailure;
