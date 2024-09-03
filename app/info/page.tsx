import { getData } from "./../_lib/data-source";
import View from "./view";

export default async function Page() {
  const main = await getData();

  return <View info={main.data.info} />;
}
