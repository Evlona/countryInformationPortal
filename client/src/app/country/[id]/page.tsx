import {
  BASE_API_URL_COUNTRIES,
  CountriesResponse,
} from "@/lib/definitions/countries";
import { httpRequest } from "@/lib/utils";
import { CountryDetailsCard } from "../country-details-card";

async function getCardData(id: string) {
  const response = await httpRequest<CountriesResponse>(
    BASE_API_URL_COUNTRIES + id
  );
  return response;
}
type CountryProps = {
  params: {
    id: string;
  };
};

export default async function Country({ params }: CountryProps) {
  const data = await getCardData(params.id);

  return <CountryDetailsCard data={{ ...data, _id: params.id }} />;
}
