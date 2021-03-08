import GhostContentAPI, { PostsOrPages } from '@tryghost/content-api';

const api = new GhostContentAPI({
  // host: process.env.NEXT_PUBLIC_API_URL,
  key: process.env.NEXT_PUBLIC_API_KEY ?? '',
  version: 'v3',
  url: process.env.NEXT_PUBLIC_API_URL ?? '',
});

const filterBlogPosts = (blogPosts: PostsOrPages) => {
  return blogPosts
    .filter((item) => !('meta' in item))
    .map((item) => ({
      ...item,
      tags: item.tags?.map((tag) => tag.name),
    }));
};

const fetchBlogPosts = async () => {
  const posts = await api.posts
    .browse({
      limit: 3,
      filter: 'published_at:-null',
      order: 'published_at DESC',
      include: 'tags',
      fields: 'uuid,title,url,feature_image,published_at',
    })
    .catch((err: any) => {
      console.error(err);

      return null;
    });

  if (!posts) {
    return [];
  }

  return filterBlogPosts(posts);
};

export { fetchBlogPosts };
