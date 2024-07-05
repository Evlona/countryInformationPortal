"use client";

import { CountriesResponse } from "@/lib/definitions/countries";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { DetailsTextWrapper } from "./details-text-wrapper";
import { EditFormDialog } from "./edit-form-dialog";
import { EditForm } from "./edit-form/edit-form";
import { updateCountry } from "@/lib/actions/countries-api";

export interface CountryDetailsCardProps {
  data: CountriesResponse;
  className?: string;
}

const CountryDetailsCard: FC<CountryDetailsCardProps> = ({
  data,
  className = "",
}) => {
  const [open, isOpen] = useState<boolean>(false);

  const handleOnSubmit = (values: {
    capital: string[];
    population: number;
  }) => {
    updateCountry(values, data._id).then(() => isOpen(!open));
  };

  return (
    <div
      className={cn(
        "w-screen h-screen  flex justify-center items-center shadow-md",
        className
      )}
    >
      <div className="flex gap-6 bg-white overflow-hidden rounded-xl min-w-fit min-h-fit w-2/3 h-2/3">
        <div className="md:flex-shrink-0">
          <Image imagePng={data.flags.png} alt={data.flags.alt} />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow">
          <DetailsTextWrapper className="w-full h-full" {...data}>
            <EditFormDialog
              open={open}
              onOpenChange={(e) => isOpen(e)}
              triggerText={"Edit"}
            >
              <EditForm
                onSubmit={handleOnSubmit}
                defaultValues={{
                  capital: data.capital.join(" "),
                  population: data.population,
                }}
              />
            </EditFormDialog>
          </DetailsTextWrapper>
        </div>
      </div>
    </div>
  );
};

export { CountryDetailsCard };
