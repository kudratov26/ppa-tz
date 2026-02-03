import { Currency } from '@/types/types';

export const CURRENCY_RATES: Record<Currency, number> = {
    THB: 1,
    USD: 0.0286,
    EUR: 0.0263,
    RUB: 2.57,
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
    THB: '฿',
    USD: '$',
    EUR: '€',
    RUB: '₽',
};

export const DEFAULT_CURRENCY: Currency = 'THB';
export const CURRENCY_COOKIE_NAME = 'selected_currency';
