"use client";

import Image from "next/image";
import { ICategory } from "./../../_lib/types";

export default function View({ category }: Readonly<{ category: ICategory }>) {
  return (
    <div className="p-8 grid grid-cols-2 gap-4">
        {category.items.map(item => <div key={item.name} className="border border-solid border-white p-4 grid">
          <h4 className="font-bold">
          {item.name}
          </h4>
          <p>
          {item.description}
          </p>
          <p className="font-semibold">
          {item.price} {item.currency}
          </p>
          <Image src={item.image} alt="" width={200} height={200}></Image>
          </div>)}
    </div>
  );
}
