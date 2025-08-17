const regexSpace = /\s+/;

export const formatDate = (dateString?: string | null) => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
};

export const isProduction = () => process.env.NODE_ENV === 'production';

export const getReadingTime = (plaintext: string) => {
  const words = plaintext.split(regexSpace).filter(Boolean);
  const wpm = 215;
  const minutes = Math.ceil(words.length / wpm);
  return `${minutes} min read`;
};
