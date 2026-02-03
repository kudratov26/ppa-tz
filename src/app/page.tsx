import { PropertyCard } from "@/components/PropertyCard";
import { CURRENCY_COOKIE_NAME, DEFAULT_CURRENCY } from "@/constants/currencies";
import { PROPERTIES } from "@/constants/properties";
import { Currency } from "@/types/types";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const currency = (cookieStore.get(CURRENCY_COOKIE_NAME)?.value as Currency) || DEFAULT_CURRENCY;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} currency={currency} />
        ))}
      </div>
    </main>
  );
}
