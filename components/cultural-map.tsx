'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';
import { countries } from '@/lib/data';

// Dynamically import the map components to avoid SSR issues
const MapWithNoSSR = dynamic(() => import('./map-component'), {
    ssr: false,
    loading: () => (
        <div className='h-full w-full animate-pulse rounded-lg bg-muted' />
    ),
});

export default function CulturalMap() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const centerPosition: LatLngTuple = [42.8746, 71.2761];
    const currentCountry = countries.find((c) => c.id === selectedCountry);

    return (
        <div className='w-full'>
            <div className='mb-6 flex flex-wrap justify-center gap-3'>
                {countries.map((country) => (
                    <Button
                        key={country.id}
                        variant={
                            selectedCountry === country.id
                                ? 'default'
                                : 'outline'
                        }
                        onClick={() => setSelectedCountry(country.id)}
                        className='min-w-[96px] sm:min-w-[120px]'
                    >
                        {country.name}
                    </Button>
                ))}
            </div>

            <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg border'>
                <MapWithNoSSR
                    countries={countries}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    centerPosition={centerPosition}
                />
            </div>

            {selectedCountry && (
                <Card className='mt-6'>
                    <CardHeader>
                        <CardTitle>{currentCountry?.name}</CardTitle>
                        <CardDescription>
                            Capital: {currentCountry?.capital} | Population:{' '}
                            {currentCountry?.population} | Languages:{' '}
                            {currentCountry?.languages}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h4 className='mb-2 font-medium'>Interesting Facts:</h4>
                        <ul className='list-inside list-disc space-y-1'>
                            {currentCountry?.facts.map((fact, index) => (
                                <li
                                    key={index}
                                    className='text-sm text-muted-foreground'
                                >
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
