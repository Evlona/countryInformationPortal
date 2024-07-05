import Image from "@/components/ui/image";
import {
  BASE_API_URL_COUNTRIES,
  CountriesResponse,
} from "@/lib/definitions/countries";
import { httpRequest } from "@/lib/utils";
import { DetailsTextWrapper } from "../details-text-wrapper";

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
  const { flags, ...data } = await getCardData(params.id);

  return (
    <div className="w-screen h-screen  flex justify-center items-center shadow-md ">
      <div className="md:flex bg-white overflow-hidden rounded-xl min-w-fit min-h-fit w-2/3 h-2/3">
        <div className="md:flex-shrink-0">
          <Image imagePng={flags.png} alt={flags.alt} />
        </div>
        <div className="p-8">
          <DetailsTextWrapper {...data} />
        </div>
      </div>
    </div>
  );
}
