'use client';

import type React from 'react';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export function JoinForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: In a real application, you would handle the form submission here
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className='flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-8 text-center'>
                <CheckCircle2 className='h-12 w-12 text-green-500' />
                <h3 className='text-xl font-semibold'>
                    Thank You for Joining!
                </h3>
                <p className='text-muted-foreground'>
                    Your membership request has been received. We&#39;ll be in
                    touch with you soon.
                </p>
                <Button variant='outline' onClick={() => setSubmitted(false)}>
                    Submit Another Request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid gap-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' placeholder='Enter your full name' required />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    type='email'
                    placeholder='you@gatech.edu'
                    required
                />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='major'>Major</Label>
                <Input id='major' placeholder='Your field of study' required />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='year'>Year</Label>
                <Select required>
                    <SelectTrigger id='year'>
                        <SelectValue placeholder='Select your year' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='freshman'>Freshman</SelectItem>
                        <SelectItem value='sophomore'>Sophomore</SelectItem>
                        <SelectItem value='junior'>Junior</SelectItem>
                        <SelectItem value='senior'>Senior</SelectItem>
                        <SelectItem value='graduate'>
                            Graduate Student
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='interests'>
                    Why are you interested in joining CASA?
                </Label>
                <Textarea
                    id='interests'
                    placeholder="Tell us a bit about your interest in Central Asian culture or why you'd like to join our association"
                    rows={4}
                />
            </div>
            <Button type='submit' className='w-full'>
                Submit Membership Request
            </Button>
        </form>
    );
}
