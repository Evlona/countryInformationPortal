import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getCountriesTableData } from "@/lib/actions/countries-api";

export default async function HomePage() {
  const data = await getCountriesTableData();

  return (
    <main className="flex justify-center">
      <DataTable className="w-4/5 m-2" columns={columns} data={data} />
    </main>
  );
}
