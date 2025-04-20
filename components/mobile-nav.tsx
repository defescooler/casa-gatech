'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-6 w-6'
                    >
                        <line x1='4' x2='20' y1='12' y2='12' />
                        <line x1='4' x2='20' y1='6' y2='6' />
                        <line x1='4' x2='20' y1='18' y2='18' />
                    </svg>
                    <span className='sr-only'>Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600'></div>
                        <span className='text-lg font-semibold tracking-tight'>
                            CASA GT
                        </span>
                    </div>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => setOpen(false)}
                    >
                        <X className='h-6 w-6' />
                        <span className='sr-only'>Close</span>
                    </Button>
                </div>
                <nav className='mt-8 flex flex-col gap-4'>
                    <Link
                        href='#about'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href='#countries'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Countries
                    </Link>
                    <Link
                        href='/events'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Events
                    </Link>
                    <Link
                        href='#gallery'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        href='#leadership'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Leadership
                    </Link>
                    <Link
                        href='/explore'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Explore
                    </Link>
                    <Link
                        href='#contact'
                        className='text-lg font-medium transition-colors hover:text-primary'
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className='mt-4 border-t pt-4'>
                        <Link href='/join' onClick={() => setOpen(false)}>
                            <Button className='w-full'>Join Us</Button>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
