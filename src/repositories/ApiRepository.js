import ApiClient from './clients/ApiClient';

const locale = 'es';

const ApiRepository = {
  // Params:
  // Space: space identifier (i.e.: ccla-trabajadores)
  // Type: type identifier (i.e.: banner-home)
  // Category: category identifier (i.e.: banner-home)
  // Slug: entry identifier (i.e.: banner-home-image-1)
  // Page: current page
  // Limit: amount of entries per page (offset)
  getEntriesByType(space, type, limit = 100, page = 1) {
    return ApiClient.get(`api/content/spaces/${space}/types/${type}/entries?locale=${locale}&per_page=${limit}&page=${page}`);
  },
  getEntriesByTypeCategory(space, type, category, limit = 100, page = 1) {
    return ApiClient.get(`api/content/spaces/${space}/types/${type}/entries?locale=${locale}&per_page=${limit}&page=${1}&meta.category=${category}`);
  },
  getEntriesBySlug(space, type, slug) {
    return ApiClient.get(`api/content/spaces/${space}/types/${type}/entries?locale=${locale}&per_page=100&meta.slug=${slug}`);
  },
};

export default ApiRepository
