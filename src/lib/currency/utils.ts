import { Currency } from '@/types/types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '@/constants/currencies';

export function formatPrice(amountInTHB: number, currency: Currency): string {
    const rate = CURRENCY_RATES[currency];
    const convertedAmount = amountInTHB * rate;

    const symbol = CURRENCY_SYMBOLS[currency];

    const formatter = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: currency === 'RUB' ? 0 : 2,
        maximumFractionDigits: 2,
    });

    return `${formatter.format(convertedAmount)} ${symbol}`;
}
