import {
  BASE_API_URL_COUNTRIES,
  CountriesResponse,
  CountryInfo,
} from "@/lib/definitions/countries";
import { httpRequest, pick } from "@/lib/utils";

export async function getCountriesTableData(): Promise<CountryInfo[]> {
  const data = await httpRequest<CountriesResponse[]>(BASE_API_URL_COUNTRIES);

  return data.map((d) =>
    pick(d, ["_id", "name", "region", "subRegion", "population", "capital"])
  );
}
