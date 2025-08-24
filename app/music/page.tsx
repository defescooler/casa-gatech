import Link from 'next/link';
import {
    ArrowLeft,
    Music,
    User,
    Disc,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { musicResources } from '@/lib/data';

export default function MusicPage() {
    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'instrument':
                return <Music className='h-4 w-4' />;
            case 'genre':
                return <Disc className='h-4 w-4' />;
            case 'artist':
                return <User className='h-4 w-4' />;
            case 'song':
                return <Music className='h-4 w-4' />;
            default:
                return <Music className='h-4 w-4' />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'instrument':
                return 'bg-blue-100 text-blue-800';
            case 'genre':
                return 'bg-purple-100 text-purple-800';
            case 'artist':
                return 'bg-green-100 text-green-800';
            case 'song':
                return 'bg-amber-100 text-amber-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const groupedResources = musicResources.reduce(
        (acc, resource) => {
            if (!acc[resource.country]) {
                acc[resource.country] = [];
            }
            acc[resource.country].push(resource);
            return acc;
        },
        {} as Record<string, typeof musicResources>
    );

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
                    Traditional Central Asian Music
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Explore the rich musical heritage of Central Asia through
                    traditional instruments, genres, and contemporary artists.
                </p>
            </div>

            {Object.entries(groupedResources).map(([country, resources]) => (
                <div key={country} className='mb-12'>
                    <h2 className='mb-6 text-2xl font-bold'>{country}</h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {resources.map((resource) => (
                            <Card key={resource.id} className='overflow-hidden'>
                                <div className='aspect-video w-full overflow-hidden'>
                                    <img
                                        src={
                                            resource.imageUrl ||
                                            '/placeholder.svg'
                                        }
                                        alt={resource.title}
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                                <CardHeader>
                                    <div className='mb-2 flex items-center gap-2'>
                                        {getTypeIcon(resource.type)}
                                        <Badge
                                            className={getTypeColor(
                                                resource.type
                                            )}
                                        >
                                            {resource.type}
                                        </Badge>
                                    </div>
                                    <CardTitle className='text-xl'>
                                        {resource.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='mb-4 text-sm text-muted-foreground'>
                                        {resource.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}

            <div className='mt-12 space-y-8'>
                <Card className='bg-gradient-to-r from-amber-50 to-amber-100'>
                    <CardHeader>
                        <CardTitle>Musical Traditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-6 md:grid-cols-2'>
                            <div>
                                <h4 className='mb-3 font-semibold'>
                                    Epic Storytelling
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Central Asian music is deeply connected to
                                    oral traditions, with instruments like the
                                    dombra and komuz used to accompany epic
                                    tales such as the Manas epic of Kyrgyzstan
                                    and Kazakh folk stories.
                                </p>
                            </div>
                            <div>
                                <h4 className='mb-3 font-semibold'>
                                    Nomadic Heritage
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    The musical traditions reflect the nomadic
                                    lifestyle of Central Asian peoples, with
                                    portable instruments and songs that
                                    celebrate nature, horses, and the vast
                                    steppes.
                                </p>
                            </div>
                            <div>
                                <h4 className='mb-3 font-semibold'>
                                    Ceremonial Music
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Music plays a crucial role in celebrations,
                                    weddings, and religious ceremonies, with
                                    specific songs and instruments for different
                                    occasions and seasons.
                                </p>
                            </div>
                            <div>
                                <h4 className='mb-3 font-semibold'>
                                    Modern Revival
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Contemporary artists like Dimash Kudaibergen
                                    are bringing Central Asian musical
                                    traditions to global audiences while
                                    preserving their cultural authenticity.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Common Instruments Across Central Asia
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <div className='rounded-lg border p-4 text-center'>
                                <h4 className='mb-2 font-semibold'>
                                    String Instruments
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Dombra, Komuz, Dutar - Two or three-stringed
                                    instruments used for melodic accompaniment
                                </p>
                            </div>
                            <div className='rounded-lg border p-4 text-center'>
                                <h4 className='mb-2 font-semibold'>
                                    Percussion
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Drums and rhythm instruments that provide
                                    the heartbeat for folk dances and
                                    celebrations
                                </p>
                            </div>
                            <div className='rounded-lg border p-4 text-center'>
                                <h4 className='mb-2 font-semibold'>
                                    Wind Instruments
                                </h4>
                                <p className='text-sm text-muted-foreground'>
                                    Flutes and other wind instruments that mimic
                                    the sounds of nature and pastoral life
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
