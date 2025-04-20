'use client';

import type React from 'react';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        if (!email || !email.includes('@') || !email.includes('.')) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setSubmitted(true);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Something went wrong'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full max-w-md'>
            {submitted ? (
                <div className='flex flex-col items-center justify-center space-y-2 text-center'>
                    <CheckCircle2 className='h-8 w-8 text-green-500' />
                    <h3 className='text-lg font-medium'>
                        Thank you for subscribing!
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                        You&#39;ll receive updates about our events and
                        activities.
                    </p>
                    <Button
                        variant='link'
                        onClick={() => {
                            setSubmitted(false);
                            setEmail('');
                        }}
                    >
                        Subscribe another email
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='space-y-2'>
                    <h3 className='text-lg font-medium'>
                        Subscribe to our Newsletter
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                        Stay updated with our events, activities, and cultural
                        insights.
                    </p>
                    <div className='flex w-full max-w-sm items-center space-x-2'>
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={error ? 'border-red-500' : ''}
                            disabled={loading}
                        />
                        <Button type='submit' disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Wait
                                </>
                            ) : (
                                'Subscribe'
                            )}
                        </Button>
                    </div>
                    {error && <p className='text-xs text-red-500'>{error}</p>}
                </form>
            )}
        </div>
    );
}
