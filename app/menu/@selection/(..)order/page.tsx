import { getData } from "@/app/_lib/data-source";
import View from "./view";

export default async function Page() {

  const main = await getData();

  return <View main={main}/>;
}


