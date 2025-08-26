import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CulturalMap from '@/components/cultural-map';

export default function ExplorePage() {
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
                    Explore Central Asia
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Discover the rich cultural heritage, traditions, and modern
                    life of Central Asian countries including Azerbaijan.
                </p>
            </div>

            <Tabs defaultValue='map' className='w-full'>
                <TabsList className='grid w-full grid-cols-3 lg:w-[400px]'>
                    <TabsTrigger value='map'>Interactive Map</TabsTrigger>
                    <TabsTrigger value='traditions'>Traditions</TabsTrigger>
                    <TabsTrigger value='modern'>Modern Life</TabsTrigger>
                </TabsList>

                <TabsContent value='map' className='mt-6'>
                    <CulturalMap />
                </TabsContent>

                <TabsContent value='traditions' className='mt-6'>
                    <div className='grid gap-6 md:grid-cols-2'>
                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/celebrations.png'
                                alt='Traditional celebrations'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Seasonal Celebrations
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asian cultures celebrate various
                                    seasonal festivals like Nauryz (New Year),
                                    harvest celebrations, and religious holidays
                                    with traditional music, dance, and food.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/arts-and-crafts.png'
                                alt='Traditional arts and crafts'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Arts & Crafts
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    From Azerbaijani carpet weaving to Kyrgyz
                                    felt making, Central Asian artisans create
                                    beautiful handicrafts using techniques
                                    passed down through generations.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/music-and-dance.png'
                                alt='Traditional music and dance'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Music & Dance
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Traditional instruments like the Azerbaijani
                                    tar, Kazakh dombra, and Kyrgyz komuz create
                                    the soundtrack for epic tales and cultural
                                    celebrations.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/cuisine.png'
                                alt='Traditional cuisine'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Culinary Heritage
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    From Uzbek plov to Azerbaijani dolma,
                                    Central Asian cuisine reflects the region's
                                    position on the ancient Silk Road with
                                    diverse flavors and techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value='modern' className='mt-6'>
                    <div className='grid gap-6 md:grid-cols-2'>
                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/urban.png'
                                alt='Modern cities'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Urban Development
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Modern cities like Baku, Almaty, and
                                    Tashkent blend traditional architecture with
                                    contemporary design, creating unique urban
                                    landscapes.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/edu.png'
                                alt='Education and technology'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Education & Innovation
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asian countries are investing
                                    heavily in education and technology, with
                                    students studying abroad and bringing new
                                    ideas back home.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/contemp-arts.png'
                                alt='Contemporary arts'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Contemporary Arts
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    A new generation of artists is
                                    reinterpreting traditional themes through
                                    modern mediums, creating a vibrant
                                    contemporary art scene.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/tourism.png'
                                alt='Tourism and preservation'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Tourism & Preservation
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Countries are developing sustainable tourism
                                    while preserving their cultural heritage and
                                    natural landscapes for future generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
