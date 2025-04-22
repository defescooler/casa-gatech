import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { photoAlbum } from '@/lib/data';

export default function GalleryPage() {
    return (
        <div className='container flex min-h-screen flex-col py-12'>
            <Link
                href='/'
                className='mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground'
            >
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Home
            </Link>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    Photo Gallery
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Memories from our events, cultural celebrations, and
                    community gatherings.
                </p>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {photoAlbum.map((photo, index) => (
                    <div
                        key={index}
                        className='group relative aspect-square overflow-hidden rounded-lg'
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt || 'CASA event photo'}
                            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100'></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
