import Link from 'next/link';
import { ArrowLeft, Users, FileText, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { languageResources } from '@/lib/data';

export default function LanguagesPage() {
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
                    Central Asian Languages
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Discover the rich linguistic heritage of Central Asia and
                    learn fascinating facts about these ancient languages.
                </p>
            </div>
            <div className='grid gap-8'>
                {languageResources.map((language) => (
                    <Card key={language.id}>
                        <CardHeader>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <CardTitle className='text-2xl'>
                                        {language.language}
                                    </CardTitle>
                                    <CardDescription className='text-base'>
                                        {language.country}
                                    </CardDescription>
                                </div>
                                <div className='flex flex-col items-end gap-2'>
                                    <Badge
                                        variant='secondary'
                                        className='flex items-center gap-1'
                                    >
                                        <Users className='h-3 w-3' />
                                        {language.speakers}
                                    </Badge>
                                    <Badge
                                        variant='outline'
                                        className='flex items-center gap-1'
                                    >
                                        <FileText className='h-3 w-3' />
                                        {language.writingSystem}
                                    </Badge>
                                </div>
                            </div>
                            <p className='text-muted-foreground'>
                                {language.description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <h4 className='mb-4 flex items-center gap-2 font-semibold'>
                                <Lightbulb className='h-4 w-4' />
                                Interesting Facts
                            </h4>
                            <div className='space-y-3'>
                                {language.interestingFacts.map(
                                    (fact, index) => (
                                        <div
                                            key={index}
                                            className='rounded-lg border-l-4 border-primary bg-primary/5 p-4'
                                        >
                                            <p className='text-sm leading-relaxed text-gray-700'>
                                                {fact}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='mt-12 rounded-lg bg-primary/5 p-6'>
                <h3 className='mb-2 text-lg font-semibold'>
                    About Central Asian Languages
                </h3>
                <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                        <h4 className='mb-2 font-medium'>Language Families</h4>
                        <ul className='space-y-1 text-sm text-muted-foreground'>
                            <li>
                                • Turkic Languages: Kazakh, Uzbek, Kyrgyz,
                                Turkmen
                            </li>
                            <li>
                                • Indo-European Languages: Tajik (Persian
                                family)
                            </li>
                            <li>• Rich oral traditions spanning centuries</li>
                            <li>
                                • Influenced by Silk Road cultural exchanges
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-2 font-medium'>
                            Cultural Significance
                        </h4>
                        <ul className='space-y-1 text-sm text-muted-foreground'>
                            <li>
                                • Languages preserve epic tales and folklore
                            </li>
                            <li>
                                • Many have undergone script changes throughout
                                history
                            </li>
                            <li>
                                • Strong tradition of oral storytelling and
                                poetry
                            </li>
                            <li>
                                • Vital for preserving nomadic cultural heritage
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
