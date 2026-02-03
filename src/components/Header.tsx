import { Currency } from '@/types/types';
import { Home } from 'lucide-react';
import { CurrencyPicker } from './CurrencyPicker';

interface HeaderProps {
    currency: Currency;
}

export function Header({ currency }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                        <Home size={20} />
                    </div>
                    <span>PPA (Ассоциация Недвижимости Пхукета)</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden md:inline text-sm text-muted-foreground">
                        Выберите валюту:
                    </span>
                    <CurrencyPicker currentCurrency={currency} />
                </div>
            </div>
        </header>
    );
}
