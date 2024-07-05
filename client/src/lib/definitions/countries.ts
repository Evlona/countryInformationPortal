export const BASE_API_URL_COUNTRIES = "http://localhost:8080/api/v1/countries/";

export interface CountriesResponse extends CountryInfo {
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}

export interface CountryInfo {
  id: string;
  name: string;
  region: string;
  subRegion: string;
  population: number;
  capital: Array<string>;
}
