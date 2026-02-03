'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Currency } from '@/types/types';
import { CURRENCY_SYMBOLS } from '@/constants/currencies';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { setCurrencyAction } from '@/lib/currency/actions';

interface CurrencyPickerProps {
    currentCurrency: Currency;
}

export function CurrencyPicker({ currentCurrency }: CurrencyPickerProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleCurrencyChange = (value: string) => {
        const newCurrency = value as Currency;
        startTransition(async () => {
            await setCurrencyAction(newCurrency);
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-2">
            <Select
                defaultValue={currentCurrency}
                onValueChange={handleCurrencyChange}
                disabled={isPending}
            >
                <SelectTrigger className="w-[100px] h-9 bg-background/50 backdrop-blur-md border-none shadow-sm focus:ring-1 focus:ring-primary/20">
                    <SelectValue placeholder="Валюта" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="THB">THB ({CURRENCY_SYMBOLS.THB})</SelectItem>
                    <SelectItem value="USD">USD ({CURRENCY_SYMBOLS.USD})</SelectItem>
                    <SelectItem value="EUR">EUR ({CURRENCY_SYMBOLS.EUR})</SelectItem>
                    <SelectItem value="RUB">RUB ({CURRENCY_SYMBOLS.RUB})</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
