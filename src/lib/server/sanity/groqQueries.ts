export const getPostsQuery = `*[_type == 'post']{
    "date":publishedOn,
    title,
    "slug":slug.current,
    "img":mainImage.asset->,
    "imgAlt":image.alt,
    "featured": featured,
    "body":body[0].children[0].text,
    "excerpt":excerpt[0].children[0].text
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
      "author":author->,
      "authorName":author->.name,
      "authorImg":authro->.img,
      categories,
      "img":mainImage.asset->,
      "imgAlt":mainImage.alt,
      body
    }
  `;
};
