export const getPostsQuery: string = `*[_type == 'post']{
    "date":publishedOn,
    title,
    "slug":slug.current,
    "img":mainImage.asset->,
    "featured": featured,
    "body":body[0].children[0].text,
    "excerpt":excerpt[0].children[0].text
    }`;

export const getServicesQuery: string = `*[_type == 'service']{
  "title":serviceName,
  "img":image.asset->,
  featured,
  "serviceDescription":serviceDescription[0].children[0].text,
  }`;

export const writeContactUsQuery: string = `*[_type == 'contact']{
  "name":name,
  "email":email,
  "message":message,
  }`;

export const getContactUsSubmissionQuery: string = `*[_type == 'contact']{
  "name":name,
  "email":email,
  "message":message,
}`;
