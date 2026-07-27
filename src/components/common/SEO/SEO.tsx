import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title,
  description = "",
  keywords = [],
  image = "/logo.png",
  url = window.location.href,
  type = "website",
}: SEOProps) {

  useEffect(() => {

    document.title = title;


    const setMeta = (
      selector: string,
      attribute: string,
      value: string
    ) => {

      let element =
        document.querySelector(selector);

      if (!element) {

        element =
          document.createElement("meta");

        document.head.appendChild(element);

      }

      element.setAttribute(
        attribute,
        value
      );

    };


    /*
      BASIC SEO
    */

    setMeta(
      'meta[name="description"]',
      "name",
      description
    );


    if (keywords.length > 0) {

      setMeta(
        'meta[name="keywords"]',
        "name",
        keywords.join(", ")
      );

    }


    /*
      OPEN GRAPH
    */

    setMeta(
      'meta[property="og:title"]',
      "property",
      title
    );


    setMeta(
      'meta[property="og:description"]',
      "property",
      description
    );


    setMeta(
      'meta[property="og:image"]',
      "property",
      image
    );


    setMeta(
      'meta[property="og:type"]',
      "property",
      type
    );


    setMeta(
      'meta[property="og:url"]',
      "property",
      url
    );


    /*
      TWITTER CARD
    */

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "summary_large_image"
    );


    setMeta(
      'meta[name="twitter:title"]',
      "name",
      title
    );


    setMeta(
      'meta[name="twitter:description"]',
      "name",
      description
    );


    setMeta(
      'meta[name="twitter:image"]',
      "name",
      image
    );


    /*
      CANONICAL
    */

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {

      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );

    }

    canonical.setAttribute(
      "href",
      url
    );


  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
  ]);


  return null;
}
