export const getPostsQuery: string = `*[_type == 'post']{
    "date":publishedOn,
    title,
    "slug":slug.current,
    "author":author->name,
    "img":mainImage.asset->,
    "featured": featured,
    "body":body[0].children[0].text,
    "excerpt":excerpt[0].children[0].text
    }`;

export const getServicesQuery: string = `*[_type == 'service']{
  "title":serviceName,
  "slug":slug.current,
  "img":image.asset->,
  "serviceDescription":shortDescription[0].children[0].text,
  }`;
