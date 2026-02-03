'use client';

import { Currency } from '@/types/types';
import { formatPrice } from '@/lib/currency/utils';

interface PriceDisplayProps {
    amountInTHB: number;
    currency: Currency;
    className?: string;
}

export function PriceDisplay({ amountInTHB, currency, className }: PriceDisplayProps) {
    return (
        <span className={className}>
            {formatPrice(amountInTHB, currency)}
        </span>
    );
}
