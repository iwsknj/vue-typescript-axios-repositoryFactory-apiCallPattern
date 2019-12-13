import { CountryRepositoryInterface, CountryRepository } from './countryRepository';

// interface Repositories {
//   [countries: string]: CountryRepositoryInterface;
// }

// const repositories: Repositories = {
//   countries: CountryRepository,
// };

export default {
  // TODO:ここでany以外を指定するにはどうすればいいのか？
  // get: (name: string): any => repositories[name],

  countries: CountryRepository,
};
