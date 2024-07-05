import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FC } from "react";
import { FormSchemaType, formSchema } from "./edit-form-schema";
import { transformStringInputToArrayOfWords } from "@/lib/utils";

export interface EditFormProps {
  defaultValues: {
    capital: string;
    population: number;
  };
  onSubmit: (values: { capital: Array<string>; population: number }) => void;
}

const EditForm: FC<EditFormProps> = ({ defaultValues, onSubmit }) => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const valuesIsChanged = (values: FormSchemaType) => {
    if (
      values.capital !== defaultValues.capital ||
      values.population !== defaultValues.population
    ) {
      return true;
    }

    return false;
  };

  const handleOnSubmit = (values: FormSchemaType) => {
    if (valuesIsChanged(values) && values.capital && values.population) {
      const { capital: capitalString, population } = values;
      const capitalArray = transformStringInputToArrayOfWords(capitalString);
      const capitalUnique = [...new Set<string>(capitalArray)];
      onSubmit({ capital: capitalUnique, population });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="capital"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capital: </FormLabel>
              <FormControl>
                <Input placeholder="Capital..." {...field} />
              </FormControl>
              <FormDescription>Edit the list of capitals</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="population"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Population: </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Population..."
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormDescription>Edit the number of population</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export { EditForm };
