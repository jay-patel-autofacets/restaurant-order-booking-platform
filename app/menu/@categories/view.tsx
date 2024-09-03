"use client";

import { ICategory, IOrder } from "@/app/_lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function View({
  catagories,
}: Readonly<{ catagories: ICategory[] }>) {
  const [order, setOrder] = useState<IOrder>();
  const pathname = usePathname();

  return (
    <nav>
      {catagories.map((category) => (
        <Link
          href={`/menu/${category.type}`}
          key={category.type}
          className={`p-4 font-bold text-xl border border-solid border-black ${
            pathname.includes(category.type) ? "bg-yellow-100" : "bg-slate-400"
          }`}
        >
          {category.type}
        </Link>
      ))}
    </nav>
  );
}
