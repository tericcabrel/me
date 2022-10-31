import GhostContentAPI, { PostsOrPages } from '@tryghost/content-api';

const api = new GhostContentAPI({
  // host: process.env.NEXT_PUBLIC_API_URL,
  key: process.env.NEXT_PUBLIC_API_KEY ?? '',
  url: process.env.NEXT_PUBLIC_API_URL ?? '',
  version: 'v5.0',
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
      fields: 'uuid,title,url,feature_image,published_at',
      filter: 'published_at:-null',
      include: 'tags',
      limit: 3,
      order: 'published_at DESC',
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
