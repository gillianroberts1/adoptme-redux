import { useGetBreedsQuery } from "./petApiService";

export default function useBreedList(animal) {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  console.log(breeds);

  if (!animal) {
    return [[], "loaded"];
  }
  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
