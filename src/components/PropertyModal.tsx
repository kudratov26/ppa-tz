'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Property, Currency } from '@/types/types';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import { PriceDisplay } from './PriceDisplay';
import { cn } from '@/lib/utils';
import { Bed, Bath, Move, MapPin, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PropertyModalProps {
    property: Property;
    currency: Currency;
    isOpen: boolean;
    onClose: () => void;
}

export function PropertyModal({ property, currency, isOpen, onClose }: PropertyModalProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden bg-background border-none shadow-2xl rounded-2xl gap-0">
                <DialogClose className="absolute right-4 top-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors md:hidden">
                    <X className="w-5 h-5 text-white" />
                </DialogClose>

                <div className="flex flex-col md:flex-row h-[90vh] md:h-[650px]">
                    {/* Left Side: Image Section */}
                    <div className="relative w-full md:flex-1 bg-slate-100 flex flex-col group/gallery min-h-[300px] md:min-h-0">
                        <div className="relative grow overflow-hidden bg-slate-200">
                            {property.images.map((img, index) => (
                                <div
                                    key={img}
                                    className={cn(
                                        "absolute inset-0 transition-opacity duration-700 ease-in-out",
                                        activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    )}
                                >
                                    <Image
                                        src={img}
                                        alt={`${property.title} - ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}

                            {/* Navigation */}
                            <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
                                <button
                                    onClick={prevImage}
                                    className="p-3 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all pointer-events-auto group-hover/gallery:translate-x-0 -translate-x-10 opacity-0 group-hover/gallery:opacity-100"
                                >
                                    <ChevronLeft className="text-white w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="p-3 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition-all pointer-events-auto group-hover/gallery:translate-x-0 translate-x-10 opacity-0 group-hover/gallery:opacity-100"
                                >
                                    <ChevronRight className="text-white w-6 h-6" />
                                </button>
                            </div>
                            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium">
                                {activeIndex + 1} / {property.images.length}
                            </div>
                        </div>

                        <div className="h-24 bg-slate-50 p-3 flex gap-3 overflow-x-auto shrink-0 border-t items-center no-scrollbar">
                            {property.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "relative h-full aspect-4/3 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer hover:border-primary/50",
                                        activeIndex === index ? "border-primary ring-2 ring-primary/20 scale-105" : "border-transparent opacity-70 hover:opacity-100"
                                    )}
                                >
                                    <Image
                                        src={img}
                                        alt={`${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="100px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Information Section */}
                    <div className="w-full md:w-[450px] flex flex-col bg-white border-l h-full">
                        <div className="flex-1 overflow-y-auto p-8 border-b min-h-0">
                            <DialogHeader className="mb-8 space-y-3">
                                <div className="flex items-center gap-2 text-primary bg-primary/5 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                    <MapPin size={14} />
                                    {property.location.split(',')[0]}
                                </div>
                                <DialogTitle className="text-3xl font-black text-slate-900 leading-tight">
                                    {property.title}
                                </DialogTitle>
                                <PriceDisplay
                                    amountInTHB={property.priceInTHB}
                                    currency={currency}
                                    className="text-3xl font-bold text-primary block mt-4"
                                />
                            </DialogHeader>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex gap-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                                        <Bed className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-slate-900">{property.bedrooms} Спальни</span>
                                        {/* <span className="text-xs text-muted-foreground uppercase tracking-tighter">Спальных мест</span> */}
                                    </div>
                                    <div className="flex gap-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                                        <Bath className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-slate-900">{property.bathrooms} Ванные</span>
                                        {/* <span className="text-xs text-muted-foreground uppercase tracking-tighter">WC / Душевые</span> */}
                                    </div>
                                    <div className="flex gap-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                                        <Move className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-slate-900">{property.area} м²</span>
                                        {/* <span className="text-xs text-muted-foreground uppercase tracking-tighter">Жилая площадь</span> */}
                                    </div>
                                    <div className="flex gap-1 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-slate-900">{property.uploadTime}</span>
                                        {/* <span className="text-xs text-muted-foreground uppercase tracking-tighter">Актуально</span> */}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        О локации
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        Объект расположен по адресу: <span className="text-slate-900 font-medium">{property.location}</span>.
                                        Благодаря удачному расположению, вы получаете быстрый доступ к пляжам, торговым центрам и ресторанам.
                                        Тихий и безопасный район, идеально подходящий для семейного отдыха или проживания.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900">Удобства</h3>
                                    <div className="flex flex-wrap gap-2 pb-6">
                                        {['Бассейн', 'Охрана 24/7', 'Парковка', 'Вид на море', 'Терраса'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4.5">
                            <button className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2">
                                Запросить просмотр
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
