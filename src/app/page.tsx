import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-7xl">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Объекты недвижимости
        </h1>
        <p className="text-muted-foreground text-lg">
          Лучшие предложения в THB, USD, EUR и RUB
        </p>
      </div>

    </main>
  );
}
