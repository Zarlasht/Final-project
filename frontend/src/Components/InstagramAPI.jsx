import React, { useEffect } from "react";
import "../css/instagramapi.css";

function InstagramAPI() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2>On Instagram</h2>
      <div className="instagram-container">
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C_nNYzUMq4T/" data-instgrm-version="14" style="width: 250px; height:400px;"></blockquote>
            `,
          }}
        ></div>
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C941zKvCWmz/" data-instgrm-version="14" style="width: 250px; height:400px;"></blockquote>
            `,
          }}
        ></div>
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C9cxWq7C9Vj/?img_index=1/" data-instgrm-version="14" style="width: 250px; height:400px;"></blockquote>
            `,
          }}
        ></div>
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
              <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C8KRSxEMzJ5/" data-instgrm-version="14" style="width: 250px; height:400px;"></blockquote>
            `,
          }}
        ></div>
      </div>
    </div>
  );
}

export default InstagramAPI;
