"use client";

import { IMain } from "@/app/_lib/types";
import Model from "@/app/_lib/components/Model";
import { useRouter } from "next/navigation";
import Order from "@/app/_lib/components/order";

export default function View({ main }: Readonly<{ main: IMain }>) {
  const router = useRouter();

  return (
      <Model onClose={() => router.back()}>
        <Order data="Order slug" />  
      </Model>
  );
}
