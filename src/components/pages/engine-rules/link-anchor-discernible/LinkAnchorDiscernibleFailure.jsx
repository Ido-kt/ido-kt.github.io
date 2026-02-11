import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkAnchorDiscernibleFailure = () => {
  const ruleId = "link-anchor-discernible";
  const title = `Anchor links discernible text`;
  const description = `Anchors links need discernible text that tells visitors where the link takes them.`;
  const helpText = `Add discernible text to the anchor`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "anchor no content", content: `<a href="#sec123"></a>

<section id="sec123">

</section>` },
  { filename: "anchor no discernible image", content: `<a href="#sec123">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAXVBMVEUAAACBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYEvSeuAAAAAHnRSTlMA+RTJVwXzz11SDQgYSxzeRdfTxMGyZto5k3wg7CJK97pvAAACO0lEQVR42u2ci27CMAxF3TX0wVoolJYCm///MychDQ2Gi6pp8inkfEHkuLfXiWOJRCLzogrHw+E4LIREdcj0TF6CFlZ/6IVuKRAG/ckGsq5VplekbwJg0ekNG0J+nRK9ZQeIV6+/yd/Fm1TvsK3EGb1L651fep/cOb9a5rp6Ndi75v0pUYPWM16LTi22S/GjytRi46kTg5qknjpRJPY+euZXqWdwel/b+bX2zPtCTVLPeIWr/OL41dJe134lfjTz0wlXXa3VZOcZr8bWidwz7wNUJ0a+x7XnPtaXdbHqtG+doNVpY3rvqau1mrSe8eqh/iuoSe6zj4/9l+c+FqrIOi2M5NfUeL26//KJ12P/Ba3Tok48SZ0mjpTz819UndhD67Tp/uvF67Tpuvr8dVqhTJ0oFJpfI/tI9V+e8eoT5n1H9F9/+B5BfQqBml/z04kWek7eiSOlmtTiSJMhw2X7r7U4Yn+PifgyGPsok3iRZTE3kZnyTIFgyinz58P8VTONDdMGMk0zs8RgXpwxy1dmsc88GmEeJDGP3ZiHlMwjXeYBOPO6gHm5wryKYl7cMa85mZfCTH/FPPBmtmcwlSEgW3+YjVLMtjKmMsyv8pq2g8/vr5jNw8xWa2ZjOrPyYvorZuVVIh/UMJ8f1cjHWszWauZDQKYyMB+ZBuSTXKa/Yj73XiEfx0NHCUAHL0DHVKTMoR7MVVEHxkDH60CHEX0yRzdBB13JCTkWTKSheNFZjJyjDuijjjOMRCL/yBf/D4/RzBKXTQAAAABJRU5ErkJggg==" />

</a>

<section id="sec123">
    Harrison Bergeron is a short story by Kurt Vonnegut that was first published in 1961. The story is a satire of the trend towards egalitarianism in society. The story is set in a future society where everyone is equal in every way. The government has imposed handicaps on those who are more talented or intelligent than others in order to ensure
    that everyone is equal. The story follows the Bergeron.
    Harrison Bergeron is a short story by Kurt Vonnegut that was first published in 1961. The story is a satire of the trend towards egalitarianism in society. The story is set in a future society where everyone is equal in every way. The government has imposed handicaps on those who are more talented or intelligent than others in order to ensure
    that everyone is equal. The story follows the Bergeron.
    Harrison Bergeron is a short story by Kurt Vonnegut that was first published in 1961. The story is a satire of the trend towards egalitarianism in society. The story is set in a future society where everyone is equal in every way. The government has imposed handicaps on those who are more talented or intelligent than others in order to ensure
    that everyone is equal. The story follows the Bergeron.
</section>` },
  { filename: "anchor svg icon", content: `<a id="test-subject" href="#test-subject">
  <svg style="width:100px;height:100px;" >
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
</a>` }
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

export default LinkAnchorDiscernibleFailure;
