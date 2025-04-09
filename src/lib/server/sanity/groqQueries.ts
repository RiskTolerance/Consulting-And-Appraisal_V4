import { type SanityImageAssetDocument } from '@sanity/client';

export type GetPostsQuery = {
	posts: {
		date: string;
		title: string;
		slug: string;
		authorName: string;
		authorImg: SanityImageAssetDocument;
		img: SanityImageAssetDocument;
		imgAlt: string;
		featured: boolean;
		excerpt: string;
	}[];
};

export const getPostsQuery = `*[_type == 'post']{
    "date":publishedOn,
    title,
    "slug":slug.current,
    "img":mainImage.asset->,
    "featured": featured,
    "excerpt":excerpt,
    "authorName":author->name,
    "authorImg":author->image.asset->,
    }`;

export const getServicesQuery = `*[_type == 'service']{
  "title":serviceName,
  "img":image.asset->,
  "imgAlt":image.alt,
  featured,
  "serviceDescription":serviceDescription[0].children[0].text,
  }`;

export const writeContactUsQuery = `*[_type == 'contact']{
  "name":name,
  "email":email,
  "message":message,
  }`;

export const getContactUsSubmissionQuery = `*[_type == 'contact']{
  "name":name,
  "email":email,
  "message":message,
}`;

export const getSinglePost = (slug: string) => {
	return `
    *[_type == 'post' && slug.current == '${slug}'] {
      title,
      "authorName":author->name,
      "authorImg":author->image,
      categories,
      "img":mainImage.asset->,
      "imgAlt":mainImage.alt,
      body
    }
  `;
};
