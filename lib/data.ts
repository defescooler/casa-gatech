import type { LatLngTuple } from 'leaflet';

export interface FlagMetaData {
    name: string;
    flag: string;
    description: string;
}

export const flagsMetaData: FlagMetaData[] = [
    {
        name: 'Uzbekistan',
        flag: '/flags/uz-flag.png',
        description:
            'Home to historic Silk Road cities with stunning Islamic architecture and rich traditions.',
    },
    {
        name: 'Kyrgyzstan',
        flag: '/flags/kg-flag.png',
        description:
            'A mountainous nation with a strong nomadic culture and breathtaking natural landscapes.',
    },
    {
        name: 'Kazakhstan',
        flag: '/flags/kz-flag.png',
        description:
            "The world's largest landlocked country, known for its nomadic heritage and modern cities.",
    },
    {
        name: 'Tajikistan',
        flag: '/flags/tj-flag.png',
        description:
            'Known for its rugged mountains, Persian cultural influence, and ancient heritage.',
    },
    {
        name: 'Turkmenistan',
        flag: '/flags/tm-flag.png',
        description:
            'Famous for its ancient Silk Road ruins, unique traditions, and natural gas reserves.',
    },
];

export interface LeadershipMember {
    name: string;
    role: string;
    country: string;
    src: string;
}

export const leadershipTeam: LeadershipMember[] = [
    {
        name: 'Iskander Dyussenov',
        role: 'President',
        country: 'Kazakhstan',
        src: '/leadership-photos/iskander.jpeg',
    },
    {
        name: 'Alikhan Uzak',
        role: 'Vice President',
        country: 'Kazakhstan',
        src: '/leadership-photos/alikhan.jpeg',
    },
    {
        name: 'Aksana Doss',
        role: 'Treasurer',
        country: 'Kazakhstan',
        src: '/leadership-photos/aksana.jpeg',
    },
    {
        name: 'Daniil Tatarinov',
        role: 'Head of IT',
        country: 'Kazakhstan',
        src: '/leadership-photos/daniil.jpeg',
    },
    {
        name: 'Aselia Urmanbetova',
        role: 'Faculty/Staff Advisor',
        country: 'Kyrgyzstan',
        src: '/leadership-photos/aselia.jpeg',
    },
    {
        name: 'Laman Vakilova',
        role: 'Head of PR',
        country: 'Azerbaijan',
        src: '/leadership-photos/laman.jpg',
    },
    {
        name: 'Arsen Kozhabek',
        role: 'Elbasy',
        country: 'Kazakhstan',
        src: '/leadership-photos/arsen.jpeg',
    },
];

export const photoAlbum = [
    {
        src: '/photo-album/nauryz-photo.jpeg',
        alt: 'Nauryz Celebration',
    },
    {
        src: '/photo-album/IMG_5804.png',
        alt: 'Cultural Workshop',
    },
    {
        src: '/photo-album/IMG_5838.JPG',
        alt: '',
    },
    {
        src: '/photo-album/golf-photo.jpeg',
        alt: '',
    },
];

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: 'Welcome Back Event',
        date: 'August 23, 2025',
        time: '6:00 PM - 9:00 PM',
        location: 'Tech Green, Georgia Tech Campus',
        description:
            'Join us for our annual Welcome Back event to kick off the new academic year! Enjoy food, games, and meet fellow members of the Central Asian Student Association.',
        image: '/events/welcome-back.png',
    },
];

export interface Country {
    id: string;
    name: string;
    capital: string;
    population: string;
    languages: string;
    position: LatLngTuple;
    facts: string[];
}

export const countries: Country[] = [
    {
        id: 'kazakhstan',
        name: 'Kazakhstan',
        capital: 'Astana',
        population: '19 million',
        languages: 'Kazakh, Russian',
        position: [48.0196, 66.9237] as LatLngTuple,
        facts: [
            'Largest landlocked country in the world',
            "Home to the Baikonur Cosmodrome, the world's first and largest space launch facility",
            'Traditional nomadic heritage with rich equestrian culture',
        ],
    },
    {
        id: 'uzbekistan',
        name: 'Uzbekistan',
        capital: 'Tashkent',
        population: '35 million',
        languages: 'Uzbek, Russian',
        position: [41.3775, 64.5853] as LatLngTuple,
        facts: [
            'Home to historic Silk Road cities like Samarkand, Bukhara, and Khiva',
            'Known for its intricate blue-tiled Islamic architecture',
            'Rich tradition of handicrafts including silk weaving and ceramics',
        ],
    },
    {
        id: 'kyrgyzstan',
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        population: '6.7 million',
        languages: 'Kyrgyz, Russian',
        position: [41.2044, 74.7661] as LatLngTuple,
        facts: [
            "Known as the 'Switzerland of Central Asia' for its mountainous terrain",
            'Home to Lake Issyk-Kul, the second-largest alpine lake in the world',
            'Strong nomadic traditions including the epic of Manas, one of the longest poems in the world',
        ],
    },
    {
        id: 'tajikistan',
        name: 'Tajikistan',
        capital: 'Dushanbe',
        population: '9.8 million',
        languages: 'Tajik, Russian',
        position: [38.861, 71.2761] as LatLngTuple,
        facts: [
            'Over 90% of the country is mountainous',
            'Tajik language is closely related to Persian/Farsi',
            "Home to the Pamir Mountains, known as the 'Roof of the World'",
        ],
    },
    {
        id: 'turkmenistan',
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        population: '6.2 million',
        languages: 'Turkmen, Russian',
        position: [38.9697, 59.5563] as LatLngTuple,
        facts: [
            "Home to the Darvaza Gas Crater, known as the 'Door to Hell'",
            'Famous for its handwoven Turkmen carpets',
            'Ashgabat holds the world record for the highest concentration of white marble buildings',
        ],
    },
];
