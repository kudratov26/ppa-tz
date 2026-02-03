export type Currency = 'THB' | 'USD' | 'EUR' | 'RUB';

export interface Property {
    id: string;
    title: string;
    image: string;
    priceInTHB: number;
    area: number;
}
