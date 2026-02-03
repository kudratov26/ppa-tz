'use client';

import Image from 'next/image';
import { Property, Currency } from '@/types/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PriceDisplay } from './PriceDisplay';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
    property: Property;
    currency: Currency;
}

export function PropertyCard({ property, currency }: PropertyCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <Card className="overflow-hidden pt-0 group hover:shadow-lg transition-shadow duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardHeader className="p-0">
                <div className="relative aspect-4/3 overflow-hidden">
                    {/* Images */}
                    {property.images.map((img, index) => (
                        <Image
                            key={img}
                            src={img}
                            alt={`${property.title} - ${index + 1}`}
                            fill
                            className={cn(
                                "object-cover transition-opacity duration-500",
                                currentImageIndex === index ? "opacity-100" : "opacity-0"
                            )}
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ))}

                    {/* Hover Segments */}
                    <div className="absolute inset-0 z-10 flex">
                        {property.images.map((_, index) => (
                            <div
                                key={index}
                                className="flex-1 h-full"
                                onMouseEnter={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                            />
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-2 py-1 rounded-full bg-black/20 backdrop-blur-sm">
                        {property.images.map((_, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-300",
                                    currentImageIndex === index ? "w-4 bg-white" : "w-1 bg-white/50"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold line-clamp-1 mb-2">
                    {property.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                    Площадь: {property.area} м²
                </p>
                <PriceDisplay
                    amountInTHB={property.priceInTHB}
                    currency={currency}
                    className="text-xl font-bold text-primary"
                />
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                    Подробнее
                </button>
            </CardFooter>
        </Card>
    );
}
