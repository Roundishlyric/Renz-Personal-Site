import { useEffect } from "react";

const siteName = "Renz Rapanut";

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ${siteName}`;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');

    descriptionTag?.setAttribute("content", description);
    ogTitle?.setAttribute("content", `${title} | ${siteName}`);
    ogDescription?.setAttribute("content", description);
  }, [description, title]);
}
