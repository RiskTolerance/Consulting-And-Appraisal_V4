export const getPostsQuery: string = `*[_type == 'post']{
    "date":publishedOn,
    title,
    slug,
    "author":author->name,
    "img":mainImage.asset->,
    "featured": featured,
    "featuredOrder": featuredOrder,
    "body":body[0].children[0].text,
    "excerpt":excerpt[0].children[0].text
    }`;

export const getServicesQuery: string = `*[_type == 'service']{
  title,
  slug,
  "img":image.asset->,
  "shortDescription":shortDescription[0].children[0].text,
  "description":description[0].children[0].text
  }`;
