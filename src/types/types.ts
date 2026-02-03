export type Currency = 'THB' | 'USD' | 'EUR' | 'RUB';

export interface Property {
    id: string;
    title: string;
    images: string[];
    priceInTHB: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    uploadTime: string;
}
