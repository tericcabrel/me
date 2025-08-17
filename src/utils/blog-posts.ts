import GhostContentApi, { type PostsOrPages } from '@tryghost/content-api';
import type { BlogPost } from '@/types';

const api = new GhostContentApi({
  key: process.env.NEXT_PUBLIC_API_KEY ?? '',
  url: process.env.NEXT_PUBLIC_API_URL ?? '',
  version: 'v5.0',
});

const filterBlogPosts = (blogPosts: PostsOrPages): BlogPost[] => {
  return blogPosts
    .filter((item) => !('meta' in item))
    .map((item) => {
      if (!item.feature_image || !item.title || !item.url || !item.uuid || !item.published_at || !item.plaintext) {
        return null;
      }

      return {
        featureImage: item.feature_image,
        title: item.title,
        url: item.url,
        uuid: item.uuid,
        publishedAt: item.published_at,
        plaintext: item.plaintext,
        tags: item.tags?.map((tag) => tag.name ?? 'n/a') ?? [],
      };
    })
    .filter((post): post is BlogPost => post !== null);
};

const fetchBlogPosts = async () => {
  const posts = await api.posts
    .browse({
      fields: 'uuid,title,url,feature_image,published_at,reading_time,plaintext',
      filter: 'published_at:-null',
      include: 'tags',
      limit: 4,
      order: 'published_at DESC',
    })
    .catch((err: unknown) => {
      console.error(err);

      return null;
    });

  if (!posts) {
    return [];
  }

  return filterBlogPosts(posts);
};

export { fetchBlogPosts };
