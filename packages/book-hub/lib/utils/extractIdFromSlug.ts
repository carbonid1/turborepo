const extractIdFromSlug = (slug: string | undefined): string => {
  return slug?.split('.')[0] || '';
};

export default extractIdFromSlug;
