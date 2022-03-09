import ApiRepository from './ApiRepository';

const repositories = {
  api: ApiRepository,
};
const RepositoryFactory = {
  get: (name) => {
    return repositories[name]},
};

export default RepositoryFactory
