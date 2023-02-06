import React from "react";

function Iframe() {
  const url = "https:wwww.w3serfefe";
  const image = "https://www.google.com/imgae";
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  const random = 123456;

  return (
    <div>
      <iframe
        key={random}
        src={isValidUrl(url) ? url : image}
        width="100%"
        height="100%"
        sandbox="allow-scripts allow-same-origin
    allow-presentation"
        loading="lazy"
      />
    </div>
  );
}

export default Iframe;
