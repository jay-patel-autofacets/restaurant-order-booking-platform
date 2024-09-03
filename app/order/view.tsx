import { IMain } from "@/app/_lib/types";
import Order from "@/app/_lib/components/order";

export default async function View({ main }: Readonly<{ main: IMain }>) {
  return (
    <div className="bg-white/70 p-16 flex flex-col gap-4">
        <Order data="Order page" />  
    </div>
  );
}
