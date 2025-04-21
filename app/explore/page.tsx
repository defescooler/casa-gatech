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
                    life of Central Asian countries.
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
                                    seasonal events, with Nowruz (Persian New
                                    Year) being one of the most significant.
                                    These celebrations often involve special
                                    foods, music, dance, and community
                                    gatherings.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/arts-and-crafts.png'
                                alt='Traditional crafts'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Arts & Crafts
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asia has a rich tradition of
                                    handicrafts, including carpet weaving,
                                    embroidery, ceramics, and metalwork. Each
                                    region has its distinctive patterns and
                                    techniques passed down through generations.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/music-and-dance.png'
                                alt='Traditional music'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Music & Dance
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Traditional music in Central Asia features
                                    unique instruments like the komuz, dombra,
                                    and dutar. Folk dances often tell stories of
                                    daily life, historical events, or natural
                                    phenomena.
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
                                    Cuisine
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asian cuisine reflects the
                                    region&#39;s nomadic heritage and
                                    agricultural practices. Popular dishes
                                    include plov (rice pilaf), manti
                                    (dumplings), lagman (noodles), and various
                                    breads like non/lepeshka.
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
                                    Central Asian cities like Astana
                                    (Kazakhstan), Tashkent (Uzbekistan), and
                                    Ashgabat (Turkmenistan) have undergone
                                    significant modernization with impressive
                                    architecture, technology hubs, and cultural
                                    centers.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/edu.png'
                                alt='Education'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Education & Innovation
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asian countries place a strong
                                    emphasis on education, with growing tech
                                    sectors and startup ecosystems. Many
                                    students from the region pursue
                                    international education opportunities.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/contemp-arts.png'
                                alt='Arts scene'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Contemporary Arts
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    The contemporary arts scene in Central Asia
                                    blends traditional influences with modern
                                    expressions. Artists, filmmakers, and
                                    musicians from the region are gaining
                                    international recognition.
                                </p>
                            </div>
                        </div>

                        <div className='overflow-hidden rounded-lg border'>
                            <img
                                src='/explore/tourism.png'
                                alt='Tourism'
                                className='aspect-video w-full object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-xl font-semibold'>
                                    Tourism & Hospitality
                                </h3>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    Central Asia is emerging as a tourism
                                    destination, offering experiences from
                                    historical Silk Road cities to mountain
                                    adventures, nomadic homestays, and cultural
                                    festivals.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
