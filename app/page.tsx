import Link from 'next/link';
import { ArrowRight, Calendar, Mail, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/mobile-nav';

import {
    flagsMetaData,
    leadershipTeam,
    photoAlbum,
    events,
    pastEvents,
} from '@/lib/data';

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <div className='container flex h-16 items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Link href='/' className='flex items-center gap-2'>
                            <img
                                src='/logo-buzz.JPG'
                                alt='CASA GT Logo'
                                className='h-8 w-8 rounded-full object-cover'
                            />
                            <span className='text-lg font-semibold tracking-tight'>
                                CASA GT
                            </span>
                        </Link>
                    </div>
                    <nav className='hidden md:flex md:gap-6'>
                        <div className='flex items-center gap-4'>
                            <Link
                                href='#events'
                                className='relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary'
                            >
                                Events
                            </Link>
                            <Link
                                href='#gallery'
                                className='relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary'
                            >
                                Gallery
                            </Link>
                            <Link
                                href='#leadership'
                                className='relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary'
                            >
                                Leadership
                            </Link>
                            <Link
                                href='#about'
                                className='relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary'
                            >
                                About
                            </Link>
                            <Link
                                href='#contact'
                                className='relative px-2 py-1 text-sm font-medium transition-colors hover:text-primary'
                            >
                                Contact
                            </Link>
                        </div>

                        <div className='mx-2 h-6 border-l border-gray-200'></div>

                        <div className='flex items-center gap-4'>
                            <Link
                                href='/events'
                                className='rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15'
                            >
                                All Events
                            </Link>
                            <Link
                                href='/explore'
                                className='rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/15'
                            >
                                Explore
                            </Link>
                        </div>
                    </nav>
                    <div className='flex items-center gap-4'>
                        <Link
                            href='https://forms.gle/QonzqQiQHAEsBAWt5'
                            className='hidden md:inline-flex'
                        >
                            <Button size='sm'>Join Us</Button>
                        </Link>
                        <MobileNav />
                    </div>
                </div>
            </header>
            <main className='flex-1'>
                <section className='relative overflow-hidden'>
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background' />
                    <div className='container relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:items-start md:gap-16 md:py-24'>
                        <div className='min-w-0 space-y-6 text-center md:text-left'>
                            <h1 className='text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl'>
                                Central Asian Student Association @ Georgia Tech
                            </h1>
                            <p className='mx-auto max-w-[520px] text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0'>
                                We bring together the Central Asian community at
                                Georgia Tech to keep our culture alive (and our
                                stomachs full). No stress, no pretension—just a
                                group of friends celebrating Nauryz, Unity Day,
                                and everything in between.
                            </p>
                            <div className='flex flex-col justify-center gap-3 min-[400px]:flex-row md:justify-start'>
                                <Link href='https://gatech.campuslabs.com/engage/organization/central-asian-student-association'>
                                    <Button
                                        size='lg'
                                        className='bg-primary text-primary-foreground hover:bg-primary/90'
                                    >
                                        Join Our Community
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='order-first flex min-w-0 justify-center md:order-last md:justify-end'>
                            <div className='w-full max-w-[640px] overflow-hidden rounded-2xl bg-background shadow-sm'>
                                <img
                                    src='/photo-album/nauryz-photo.png'
                                    alt='CASA GT members celebrating Nauryz'
                                    className='aspect-[4/3] h-full w-full object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id='about' className='container py-12 md:py-16'>
                    <div className='mx-auto max-w-3xl'>
                        <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                            About Us
                        </h2>
                        <p className='mt-4 text-muted-foreground'>
                            The Central Asian Student Association at Georgia
                            Tech is dedicated to promoting awareness and
                            appreciation of Central Asian cultures, traditions,
                            and heritage within the Georgia Tech community.
                        </p>
                        <p className='mt-4 text-muted-foreground'>
                            Our mission is to create a supportive community for
                            Central Asian students while sharing our rich
                            cultural heritage with the broader campus.
                        </p>
                    </div>
                </section>
                <section
                    id='countries'
                    className='border-t bg-background py-12 md:py-16'
                >
                    <div className='container'>
                        <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                            Central Asian Countries
                        </h2>
                        <p className='mt-2 max-w-3xl text-muted-foreground'>
                            Our association represents students from these
                            diverse Central Asian nations, each with their
                            unique culture, history, and traditions.
                        </p>
                        <div className='mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                            {flagsMetaData.map((country, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col items-center rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow'
                                >
                                    <div className='mb-4 overflow-hidden rounded border'>
                                        <img
                                            src={
                                                country.flag ||
                                                '/placeholder.svg'
                                            }
                                            alt={`Flag of ${country.name}`}
                                            className='h-auto w-full object-cover'
                                        />
                                    </div>
                                    <h3 className='text-center text-lg font-semibold'>
                                        {country.name}
                                    </h3>
                                    <p className='mt-2 text-center text-sm text-muted-foreground'>
                                        {country.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='mt-8 text-center'>
                            <Link href='/explore'>
                                <Button variant='outline'>
                                    Explore Central Asia
                                    <ArrowRight className='ml-2 h-4 w-4' />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section id='events' className='py-12 md:py-16'>
                    <div className='container'>
                        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
                            <div>
                                <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                                    Upcoming Events
                                </h2>
                                <p className='mt-2 text-muted-foreground'>
                                    Join us at our upcoming events and
                                    activities
                                </p>
                            </div>
                            <Link href='/events'>
                                <Button variant='outline'>
                                    View All Events
                                    <ArrowRight className='ml-2 h-4 w-4' />
                                </Button>
                            </Link>
                        </div>
                        <div className='mt-8'>
                            {events.length > 0 ? (
                                <div className='grid gap-6 md:grid-cols-3'>
                                    {events.slice(0, 3).map((event) => (
                                        <div
                                            key={event.id}
                                            className='group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow'
                                        >
                                            <div className='flex items-center gap-2 text-primary'>
                                                <Calendar className='h-5 w-5' />
                                                <span className='text-sm font-medium'>
                                                    {event.date}
                                                </span>
                                            </div>
                                            <h3 className='mt-3 text-xl font-semibold'>
                                                {event.title}
                                            </h3>
                                            <p className='mt-2 text-sm text-muted-foreground'>
                                                {event.description.length > 100
                                                    ? `${event.description.substring(0, 100)}...`
                                                    : event.description}
                                            </p>
                                            <div className='mt-4 flex items-center gap-2 text-sm text-muted-foreground'>
                                                <MapPin className='h-4 w-4' />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='flex flex-col items-center justify-center rounded-lg border bg-background p-8 text-center'>
                                    <Calendar className='h-12 w-12 text-primary opacity-70' />
                                    <h3 className='mt-4 text-xl font-semibold'>
                                        No Upcoming Events
                                    </h3>
                                    <p className='mt-2 max-w-md text-muted-foreground'>
                                        We&#39;re currently planning our next
                                        events. Check back soon for updates or
                                        subscribe to our newsletter to be
                                        notified.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section
                    id='past-events'
                    className='border-t bg-background py-12 md:py-16'
                >
                    <div className='container'>
                        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
                            <div>
                                <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                                    Past Events
                                </h2>
                                <p className='mt-2 text-muted-foreground'>
                                    Look back at our memorable events and
                                    celebrations
                                </p>
                            </div>
                            <Link href='/past-events'>
                                <Button variant='outline'>
                                    View All Past Events
                                    <ArrowRight className='ml-2 h-4 w-4' />
                                </Button>
                            </Link>
                        </div>
                        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            {pastEvents.slice(0, 4).map((event) => (
                                <div
                                    key={event.id}
                                    className='group rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow'
                                >
                                    <div className='aspect-video w-full overflow-hidden rounded-lg'>
                                        <img
                                            src={
                                                event.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={event.title}
                                            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex items-center gap-2 text-primary'>
                                            <Calendar className='h-4 w-4' />
                                            <span className='text-xs font-medium'>
                                                {event.date}
                                            </span>
                                        </div>
                                        <h3 className='mt-2 text-lg font-semibold'>
                                            {event.title}
                                        </h3>
                                        <p className='mt-1 text-sm text-muted-foreground'>
                                            {event.description.length > 80
                                                ? `${event.description.substring(0, 80)}...`
                                                : event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id='gallery' className='container py-12 md:py-16'>
                    <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        Photo Gallery
                    </h2>
                    <p className='mt-2 max-w-3xl text-muted-foreground'>
                        Moments captured from our past events and cultural
                        celebrations.
                    </p>
                    <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                        {photoAlbum.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className='group relative aspect-square overflow-hidden rounded-lg'
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100'></div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-6 text-center'>
                        <Link href='/gallery'>
                            <Button variant='outline'>View All Photos</Button>
                        </Link>
                    </div>
                </section>
                <section id='leadership' className='container py-12 md:py-16'>
                    <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        Our Leadership
                    </h2>
                    <div className='mt-8 grid grid-cols-2 justify-center gap-8 md:grid-cols-4'>
                        {leadershipTeam.map((member, index) => (
                            <div
                                key={index}
                                className='group flex flex-col items-center'
                            >
                                <div className='overflow-hidden rounded-full'>
                                    <img
                                        src={member.src}
                                        alt={member.name}
                                        className='h-32 w-32 object-cover transition-transform group-hover:scale-105'
                                    />
                                </div>
                                <h3 className='mt-4 text-center text-lg font-semibold'>
                                    {member.name}
                                </h3>
                                <p className='text-center text-sm text-muted-foreground'>
                                    {member.role}
                                </p>
                                <p className='text-center text-xs text-muted-foreground'>
                                    {member.country}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section
                    id='contact'
                    className='border-t bg-background py-12 md:py-16'
                >
                    <div className='container'>
                        <div className='mx-auto max-w-md text-center'>
                            <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
                                Get In Touch
                            </h2>
                            <p className='mt-4 text-muted-foreground'>
                                Have questions or want to join our association?
                                Reach out to us through any of these channels.
                            </p>
                            <div className='mt-6 flex flex-col gap-3'>
                                <div className='flex items-center justify-center gap-2'>
                                    <Mail className='h-5 w-5 text-primary' />
                                    <Link
                                        href='mailto:akozhabek3@gatech.edu'
                                        className='hover:underline'
                                    >
                                        akozhabek3@gatech.edu
                                    </Link>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    <Mail className='h-5 w-5 text-primary' />
                                    <Link
                                        href='mailto:adoss35@gatech.edu'
                                        className='hover:underline'
                                    >
                                        adoss35@gatech.edu
                                    </Link>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <Link
                                    href='https://gatech.campuslabs.com/engage/organization/central-asian-student-association'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                                        Become a Member on Engage
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </Link>
                            </div>
                            <div className='mt-6 flex justify-center gap-4'>
                                <Link
                                    href='https://www.instagram.com/casa_gatech/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='rounded-full'
                                    >
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
                                            className='h-5 w-5'
                                        >
                                            <rect
                                                width='20'
                                                height='20'
                                                x='2'
                                                y='2'
                                                rx='5'
                                                ry='5'
                                            />
                                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                                            <line
                                                x1='17.5'
                                                x2='17.51'
                                                y1='6.5'
                                                y2='6.5'
                                            />
                                        </svg>
                                        <span className='sr-only'>
                                            Instagram
                                        </span>
                                    </Button>
                                </Link>
                                <Link
                                    href='https://t.me/+Pz7CoUDCV_YxMTMy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='rounded-full'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='currentColor'
                                            className='h-5 w-5'
                                        >
                                            <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                                        </svg>
                                        <span className='sr-only'>Telegram</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='border-t py-6 md:py-8'>
                <div className='container flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='/logo-buzz.JPG'
                            alt='CASA GT Logo'
                            className='h-6 w-6 rounded-full object-cover'
                        />
                        <span className='text-sm font-semibold'>CASA GT</span>
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <p className='text-center text-sm text-muted-foreground md:text-left'>
                            © 2025 Central Asian Student Association at Georgia
                            Tech. All rights reserved.
                        </p>
                        <p className='text-center text-xs text-muted-foreground md:text-left'>
                            Last updated: Feb 28, 2026
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <Link
                            href='/events'
                            className='text-sm text-muted-foreground hover:text-foreground'
                        >
                            Events
                        </Link>
                        <Link
                            href='/explore'
                            className='text-sm text-muted-foreground hover:text-foreground'
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
