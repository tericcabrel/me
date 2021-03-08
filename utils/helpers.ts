import { iconMap } from '../data/icons';

export const formatDate = (dateString?: string | null) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US').format(date);
};

export const pickIconFromTags = (tags: string[]) => {
  for (const tag of tags) {
    if (tag.toLowerCase() in iconMap) {
      return iconMap[tag.toLowerCase()];
    }
  }

  return iconMap.default;
};
