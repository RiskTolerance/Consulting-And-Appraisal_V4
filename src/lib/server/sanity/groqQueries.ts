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
  "serviceDescription":shortDescription[0].children[0].text,
  }`;
