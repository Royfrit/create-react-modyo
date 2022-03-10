import ApiRepository from './ApiRepository';

const repositories = {
  api: ApiRepository,
};
const RepositoryFactory = {
  get: (name) => repositories[name],
};

export default RepositoryFactory