import { FC } from "react";
import { Text } from "@/components/ui/text";

export interface DetailsTextWrapperProps {
  name: string;
  region: string;
  subRegion: string;
  population: number;
  timezones: Array<string>;
  capital: Array<string>;
  continents: Array<string>;
  className?: string;
}

const DetailsTextWrapper: FC<DetailsTextWrapperProps> = ({
  name,
  capital,
  continents,
  population,
  region,
  subRegion,
  timezones,
  className = "",
}) => {
  return (
    <div className={className}>
      <Text
        className={
          "uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        }
        label="Name: "
      >
        {name}
      </Text>
      <Text className={"text-gray-500"} label="Capital: ">
        {capital.join(", ")}
      </Text>
      <Text className={"text-gray-500"} label="Region:">
        {region}
      </Text>
      <Text className={"text-gray-500"} label="Sub-region:">
        {subRegion}
      </Text>
      <Text className={"text-gray-500"} label="Population:">
        {population.toLocaleString()}
      </Text>
      <Text className={"text-gray-500"} label="Timezones:">
        {timezones.join(", ")}
      </Text>
      <Text className={"text-gray-500"} label="Continents:">
        {continents.join(", ")}
      </Text>
    </div>
  );
};

export { DetailsTextWrapper };
