interface MetadataParams {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export const generatePageMetadata = ({
  title,
  description,
  url,
  image,
}: MetadataParams) => {
  return {
    title,
    description: description || 'Default description for your site.',
    openGraph: {
      title,
      description,
      url: url || 'https://your-default-url.com',
      images: [
        {
          url: image || '/default-image.png',
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image || '/default-image.png',
    },
  };
};
