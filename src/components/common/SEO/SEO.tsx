import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

export default function SEO({
  title,
  description,
  keywords = [],
}: SEOProps) {

  useEffect(() => {

    document.title = title;

    if (description) {
      let metaDescription =
        document.querySelector(
          'meta[name="description"]'
        );

      if (!metaDescription) {
        metaDescription =
          document.createElement("meta");

        metaDescription.setAttribute(
          "name",
          "description"
        );

        document.head.appendChild(
          metaDescription
        );
      }

      metaDescription.setAttribute(
        "content",
        description
      );
    }


    if (keywords.length > 0) {

      let metaKeywords =
        document.querySelector(
          'meta[name="keywords"]'
        );

      if (!metaKeywords) {

        metaKeywords =
          document.createElement("meta");

        metaKeywords.setAttribute(
          "name",
          "keywords"
        );

        document.head.appendChild(
          metaKeywords
        );
      }

      metaKeywords.setAttribute(
        "content",
        keywords.join(", ")
      );
    }


  }, [
    title,
    description,
    keywords,
  ]);


  return null;
}