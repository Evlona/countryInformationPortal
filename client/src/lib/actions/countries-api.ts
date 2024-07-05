"use server";
import {
  BASE_API_URL_COUNTRIES,
  CountriesResponse,
  CountryInfo,
} from "@/lib/definitions/countries";
import { httpRequest, pick } from "@/lib/utils";

export async function getCountriesTableData(): Promise<CountryInfo[]> {
  "use server";
  const data = await httpRequest<CountriesResponse[]>(BASE_API_URL_COUNTRIES);

  return data.map((d) =>
    pick(d, ["id", "name", "region", "subRegion", "population", "capital"])
  );
}

export async function updateCountry(
  values: { population: number; capital: Array<string> },
  id: string
) {
  const data = await httpRequest<CountriesResponse[]>(
    `${BASE_API_URL_COUNTRIES}${id}`,
    {
      method: "PUT",
      body: JSON.stringify(values),
    }
  );
  return data;
}
