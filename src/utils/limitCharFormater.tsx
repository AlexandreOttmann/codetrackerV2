export const limitCharFormater = (str: string) => {
  if (str.length > 40) {
    return str.slice(0, 40) + '...';
  }
  return str;
};
