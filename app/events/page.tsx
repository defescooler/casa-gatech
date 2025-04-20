import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { events } from '@/lib/data';

export default function EventsPage() {
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
                    Upcoming Events
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Join us at our upcoming events to learn more about Central
                    Asian cultures and connect with our community.
                </p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {events.map((event) => (
                    <Card
                        key={event.id}
                        className='flex flex-col overflow-hidden'
                    >
                        <div className='aspect-video w-full overflow-hidden'>
                            <img
                                src={event.image || '/placeholder.svg'}
                                alt={event.title}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <CardHeader>
                            <div className='flex items-center gap-2 text-amber-600'>
                                <Calendar className='h-5 w-5' />
                                <span className='text-sm font-medium'>
                                    {event.date}
                                </span>
                            </div>
                            <CardTitle className='text-xl'>
                                {event.title}
                            </CardTitle>
                            <CardDescription>{event.time}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm text-muted-foreground'>
                                {event.description}
                            </p>
                            <div className='mt-4 flex items-center gap-2 text-sm text-muted-foreground'>
                                <MapPin className='h-4 w-4' />
                                <span>{event.location}</span>
                            </div>
                        </CardContent>
                        <CardFooter className='mt-auto'>
                            <Button variant='outline' className='w-full'>
                                RSVP for this Event
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
