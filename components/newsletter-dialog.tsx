'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Mail } from 'lucide-react';

export function NewsletterDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='gap-2 bg-amber-600 text-white hover:bg-amber-700'>
                    <Mail className='h-4 w-4' />
                    Subscribe to Newsletter
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>Newsletter Subscription</DialogTitle>
                    <DialogDescription>
                        Stay updated with our latest events and announcements
                    </DialogDescription>
                </DialogHeader>
                <div className='flex items-center justify-center py-4'>
                    <NewsletterSignup />
                </div>
            </DialogContent>
        </Dialog>
    );
}
