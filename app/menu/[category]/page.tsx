import { ICategory } from "@/app/_lib/types";
import { getData } from "../../_lib/data-source";
import View from "./view";

export default async function Page({
  params: { category },
}: Readonly<{
    params: { category: string };
  }>) {
  const main = await getData();

  if (!main) return null;

  const categoryDoc: ICategory | undefined = main.data.menu.catagories.find(
    (c) => c.type === category
  );

  if (!categoryDoc) return null;

  return <View category={categoryDoc} />;
}
