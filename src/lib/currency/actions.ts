'use server';

import { cookies } from 'next/headers';
import { CURRENCY_COOKIE_NAME } from '@/constants/currencies';
import { Currency } from '@/types/types';

export async function setCurrencyAction(currency: Currency) {
    const cookieStore = await cookies();
    cookieStore.set(CURRENCY_COOKIE_NAME, currency, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 60 сек * 60 мин (час) * 24 часа (день) * 30 дней = 1 месяц
    });
}
