import Link from "next/link";

export default async function Layout({
    children,
    selection,
    categories,
  }: Readonly<{
    children: React.ReactNode;
    selection: React.ReactNode;
    categories: React.ReactNode;
  }>) {
  return (
    <div className="bg-white/70 p-16 flex flex-col items-start gap-8">
      {categories}
      {selection}
      {children}
      <Link href="/order"><button className="bg-blue-700 p-2 text-white font-bold">View Order</button></Link>
    </div>
  );
}
