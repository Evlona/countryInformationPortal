"use client";

import { Printable } from "@/lib/definitions";
import { CountryInfo } from "@/lib/definitions/countries";
import { cn, splitByCapitalLetters } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const countryInfoKeys: Array<keyof CountryInfo> = [
  "name",
  "region",
  "subRegion",
  "population",
  "capital",
];

const commonClassNames =
  "max-w-xs text-ellipsis overflow-hidden text-left [&[align=center]]:text-center [&[align=right]]:text-right box-content block whitespace-nowrap";

function createHeader(text: string) {
  return (
    <div className={cn("capitalize font-bold text-2xl", commonClassNames)}>
      {splitByCapitalLetters(text).join(" ")}
    </div>
  );
}

function createCell<T extends Printable>(value: T) {
  let print = undefined;

  if (typeof value === "number") {
    print = value.toLocaleString();
  } else if (
    value instanceof Array &&
    value.every((v) => typeof v === "string")
  ) {
    print = value.join(" ");
  }

  return <p className={cn("text-1xl", commonClassNames)}>{print ?? value}</p>;
}

export const columns: ColumnDef<CountryInfo>[] = [
  ...countryInfoKeys.map(
    (key): ColumnDef<CountryInfo> => ({
      accessorKey: key,
      header: () => createHeader(key),
      cell: (ctx) => createCell(ctx.getValue() as Printable),
      size: 22,
    })
  ),
  {
    id: "action",
    cell: ({ row }) => {
      const id = row.original._id;
      return <Link href={`country/${id}`}>See more</Link>;
    },
  },
];
