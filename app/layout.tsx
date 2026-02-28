import type React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Central Asian Student Association - Georgia Tech',
    description:
        'Official website of the Central Asian Student Association at Georgia Tech',
    icons: {
        icon: '/logo-buzz.JPG',
        shortcut: '/logo-buzz.JPG',
        apple: '/logo-buzz.JPG',
    },
    keywords: [
        'Central Asian Student Association',
        'Georgia Tech',
        'GT',
        'CASA',
        'Central Asia',
        'Student Organization',
        'Student Association',
    ],
    metadataBase: new URL('https://casa.tatarinov.org'),
    openGraph: {
        title: 'CASA at Georgia Tech',
        description: 'Connect with the Central Asian community at Georgia Tech',
        images: [
            {
                url: '/logo-buzz.JPG',
                width: 1200,
                height: 630,
                alt: 'CASA GT Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
    authors: [{ name: 'CASA GT' }],
    category: 'Student Organization',
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className='font-sans antialiased'>{children}</body>
        </html>
    );
}
