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

export const events: Event[] = [];

export const pastEvents: Event[] = [
    {
        id: 101,
        title: 'Welcome Back Night',
        date: 'Saturday, August 23, 2025',
        time: '6:30 PM',
        location: 'Society Atlanta, 811 Peachtree St. NE, Midtown Atlanta',
        description:
            'Join us for our annual Welcome Back event to kick off the new academic year! Enjoy food, games, and meet fellow members of the Central Asian Student Association.',
        image: '/events/welcome-back.jpg',
    },
    {
        id: 102,
        title: 'Nauryz Celebration 2024',
        date: 'Saturday, March 21, 2024',
        time: '5:00 PM',
        location: 'Student Center Ballroom, Georgia Tech',
        description:
            'We celebrated the traditional Central Asian New Year with authentic food, music, and cultural performances. Over 150 students joined us for this memorable evening.',
        image: '/photo-album/nauryz-photo.jpeg',
    },
    {
        id: 103,
        title: 'CASA Golf Meeting',
        date: 'Sunday, April 14, 2024',
        time: '2:00 PM',
        location: 'Charlie Yates Golf Course',
        description:
            'Our first annual golf tournament brought together students for a day of friendly competition and networking in a relaxed outdoor setting.',
        image: '/photo-album/golf-photo.jpeg',
    },
];

export interface Recipe {
    id: number;
    name: string;
    country: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    cookTime: string;
    servings: number;
    image: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const recipes: Recipe[] = [
    {
        id: 1,
        name: 'Uzbek Plov',
        country: 'Uzbekistan',
        description:
            'Traditional rice pilaf with lamb, carrots, and aromatic spices. The crown jewel of Uzbek cuisine.',
        ingredients: [
            '2 lbs lamb shoulder, cut into chunks',
            '3 cups basmati rice',
            '4 large carrots, julienned',
            '2 large onions, sliced',
            '1 cup vegetable oil',
            '1 tsp cumin seeds',
            '1 tsp ground coriander',
            '1 head of garlic',
            'Salt and black pepper',
            '4-5 cups warm water or broth',
        ],
        instructions: [
            'Heat oil in a large heavy-bottomed pot (kazan if available)',
            'Brown the lamb pieces on all sides, about 8-10 minutes',
            'Add onions and cook until golden, about 5 minutes',
            'Add carrots and cook for another 5 minutes',
            'Add spices and cook for 1 minute until fragrant',
            'Add rice and stir gently to coat with oil',
            'Pour in warm water to cover rice by 1 inch',
            'Bury whole garlic head in center',
            'Bring to boil, then reduce heat and simmer covered for 45 minutes',
            'Let rest for 10 minutes before serving',
        ],
        prepTime: '30 minutes',
        cookTime: '1 hour',
        servings: 8,
        image: '/recipes/plov.jpeg',
        difficulty: 'Medium',
    },
    {
        id: 2,
        name: 'Kazakh Baursaki',
        country: 'Kazakhstan',
        description:
            'Golden fried bread pieces, perfect with tea. A beloved comfort food across Central Asia.',
        ingredients: [
            '3 cups all-purpose flour',
            '1 cup warm milk',
            '2 eggs',
            '2 tbsp sugar',
            '1 tsp salt',
            '2 tbsp melted butter',
            '1 tsp dry yeast',
            'Oil for deep frying',
        ],
        instructions: [
            'Mix warm milk with yeast and sugar, let sit for 5 minutes',
            'In a large bowl, combine flour and salt',
            'Add eggs, melted butter, and yeast mixture',
            'Knead into a soft dough, cover and let rise for 1 hour',
            'Roll out to 1/2 inch thickness',
            'Cut into small rectangles or diamonds',
            'Heat oil to 350°F (175°C)',
            'Fry pieces until golden brown on both sides',
            'Drain on paper towels and serve warm',
        ],
        prepTime: '1 hour 20 minutes',
        cookTime: '20 minutes',
        servings: 6,
        image: '/recipes/baursaki.jpeg',
        difficulty: 'Easy',
    },
    {
        id: 3,
        name: 'Kyrgyz Lagman',
        country: 'Kyrgyzstan',
        description:
            'Hand-pulled noodles in rich meat and vegetable broth. A hearty and satisfying meal.',
        ingredients: [
            '1 lb beef or lamb, cubed',
            '4 cups flour',
            '2 eggs',
            '1 cup water',
            '2 bell peppers',
            '3 tomatoes',
            '1 large onion',
            '4 cloves garlic',
            '2 tbsp tomato paste',
            'Vegetable oil',
            'Salt, pepper, bay leaves',
        ],
        instructions: [
            'Make noodle dough with flour, eggs, water and salt. Rest 30 minutes',
            'Roll and stretch dough into long thin noodles',
            'Brown meat in large pot with oil',
            'Add onions, then peppers and tomatoes',
            'Add tomato paste and spices',
            'Cover with water and simmer 1 hour',
            'Boil noodles separately until tender',
            'Serve noodles topped with meat and vegetable stew',
            'Garnish with fresh herbs',
        ],
        prepTime: '45 minutes',
        cookTime: '1 hour 30 minutes',
        servings: 6,
        image: '/recipes/lagman.jpeg',
        difficulty: 'Hard',
    },
    {
        id: 4,
        name: 'Tajik Manti',
        country: 'Tajikistan',
        description:
            'Large steamed dumplings filled with seasoned meat and onions. A festive dish for special occasions.',
        ingredients: [
            '4 cups flour',
            '1 cup warm water',
            '1 tsp salt',
            '2 lbs ground lamb or beef',
            '4 large onions, finely chopped',
            '2 tbsp vegetable oil',
            'Black pepper, cumin',
            'Butter for serving',
        ],
        instructions: [
            'Make dough with flour, water, and salt. Rest 30 minutes',
            'Mix meat with chopped onions and spices',
            'Roll dough into thin circles',
            'Place filling in center and fold into dumpling shape',
            'Steam in bamboo steamer for 45 minutes',
            'Serve hot with butter and yogurt',
        ],
        prepTime: '1 hour',
        cookTime: '45 minutes',
        servings: 8,
        image: '/recipes/manti.jpeg',
        difficulty: 'Medium',
    },
    {
        id: 5,
        name: 'Turkmen Non',
        country: 'Turkmenistan',
        description:
            'Traditional flatbread with beautiful patterns, baked in a tandoor oven.',
        ingredients: [
            '4 cups bread flour',
            '1 cup warm water',
            '2 tsp active dry yeast',
            '2 tbsp sugar',
            '2 tbsp olive oil',
            '1 tsp salt',
            'Sesame seeds',
            'Nigella seeds',
        ],
        instructions: [
            'Dissolve yeast and sugar in warm water',
            'Mix flour and salt in large bowl',
            'Add yeast mixture and oil, knead until smooth',
            'Let rise 1 hour until doubled',
            'Divide into portions and shape into rounds',
            'Create traditional patterns with a fork or stamp',
            'Top with seeds and let rise 30 minutes',
            'Bake in very hot oven (500°F) for 12-15 minutes',
        ],
        prepTime: '2 hours',
        cookTime: '15 minutes',
        servings: 8,
        image: '/recipes/non.jpeg',
        difficulty: 'Medium',
    },
];

export interface LanguageResource {
    id: number;
    language: string;
    country: string;
    description: string;
    interestingFacts: string[];
    speakers: string;
    writingSystem: string;
}

export const languageResources: LanguageResource[] = [
    {
        id: 1,
        language: 'Kazakh',
        country: 'Kazakhstan',
        description:
            'Kazakh is a Turkic language spoken by over 13 million people worldwide. It belongs to the Kipchak branch of Turkic languages and serves as the state language of Kazakhstan.',
        speakers: '13+ million worldwide',
        writingSystem: 'Cyrillic script (transitioning to Latin by 2031)',
        interestingFacts: [
            'Kazakh has 9 vowels and vowel harmony, where vowels in a word must harmonize with each other',
            'The language has no grammatical gender, making it relatively easier to learn',
            'Kazakhstan is gradually transitioning from Cyrillic to Latin script by 2031',
            'Kazakh poetry tradition includes epic tales like "Twelve Muqam" passed down orally for centuries',
            'The word "Kazakhstan" means "land of the wanderers" in Kazakh',
        ],
    },
    {
        id: 2,
        language: 'Uzbek',
        country: 'Uzbekistan',
        description:
            'Uzbek is the official language of Uzbekistan, spoken by over 32 million people. It belongs to the Karluk branch of Turkic languages and has rich literary traditions dating back centuries.',
        speakers: '32+ million worldwide',
        writingSystem: 'Latin script (since 1993)',
        interestingFacts: [
            'Uzbek switched from Arabic to Latin script in 1929, then to Cyrillic in 1940, and back to Latin in 1993',
            'The language has significant Persian and Arabic influences due to historical Silk Road connections',
            'Uzbek literature includes the works of classical poets like Alisher Navoi from the 15th century',
            'The language has many dialects, with the Tashkent dialect serving as the literary standard',
            'Uzbek is closely related to Uyghur, and speakers can often understand each other',
        ],
    },
    {
        id: 3,
        language: 'Kyrgyz',
        country: 'Kyrgyzstan',
        description:
            'Kyrgyz is a Turkic language and the official language of Kyrgyzstan. Known for its rich oral tradition, especially the epic of Manas, one of the longest epic poems in the world.',
        speakers: '4+ million worldwide',
        writingSystem: 'Cyrillic script',
        interestingFacts: [
            "The Epic of Manas, told in Kyrgyz, is 20 times longer than Homer's Iliad and Odyssey combined",
            'Kyrgyz has preserved many ancient Turkic words that have been lost in other Turkic languages',
            'The language uses agglutination, where grammatical relationships are expressed by adding suffixes',
            'Kyrgyz speakers are known as "Manaschi" when they can recite portions of the Manas epic',
            'The language has 12 different verb forms to express various aspects of time and mood',
        ],
    },
    {
        id: 4,
        language: 'Tajik',
        country: 'Tajikistan',
        description:
            'Tajik is a variety of Persian spoken in Tajikistan, closely related to Farsi and Dari. It represents the continuation of ancient Persian literary traditions in Central Asia.',
        speakers: '8+ million worldwide',
        writingSystem: 'Cyrillic script (modified)',
        interestingFacts: [
            'Tajik is essentially the same language as Persian/Farsi, but written in Cyrillic script',
            'The language preserves classical Persian poetry traditions, including works by Rudaki and Ferdowsi',
            'Tajik has borrowed many Russian words due to Soviet influence, unlike Iranian Persian',
            'The language uses a modified Cyrillic alphabet with 39 letters, including special letters for Persian sounds',
            'Tajik speakers can generally understand Iranian and Afghan Persian with minimal difficulty',
        ],
    },
    {
        id: 5,
        language: 'Turkmen',
        country: 'Turkmenistan',
        description:
            'Turkmen is a Turkic language spoken primarily in Turkmenistan. It has a rich tradition of oral literature and is known for its complex system of consonant mutations.',
        speakers: '7+ million worldwide',
        writingSystem: 'Latin script (since 1993)',
        interestingFacts: [
            'Turkmen has a unique feature called "consonant mutation" where consonants change depending on their position',
            'The language has preserved many archaic Turkic features lost in other modern Turkic languages',
            'Traditional Turkmen literature was primarily oral, with epic tales passed down through generations',
            'Turkmen switched from Arabic to Latin (1929), then Cyrillic (1940), and back to Latin (1993)',
            'The language has significant dialectal variation between different tribal groups',
        ],
    },
];

export interface MusicResource {
    id: number;
    title: string;
    country: string;
    type: 'instrument' | 'genre' | 'artist' | 'song';
    description: string;
    audioUrl?: string;
    videoUrl?: string;
    imageUrl: string;
}

export const musicResources: MusicResource[] = [
    {
        id: 1,
        title: 'Dombra',
        country: 'Kazakhstan',
        type: 'instrument',
        description:
            'Traditional two-stringed lute, considered the national instrument of Kazakhstan. Often used to accompany epic storytelling.',
        videoUrl: 'https://youtube.com/watch?v=dombra-performance',
        imageUrl: '/music/dombra.jpeg',
    },
    {
        id: 2,
        title: 'Komuz',
        country: 'Kyrgyzstan',
        type: 'instrument',
        description:
            'Three-stringed traditional instrument of the Kyrgyz people, used in folk music and the epic of Manas.',
        videoUrl: 'https://youtube.com/watch?v=komuz-tutorial',
        imageUrl: '/music/komuz.jpeg',
    },
    {
        id: 3,
        title: 'Katta Ashula',
        country: 'Uzbekistan',
        type: 'genre',
        description:
            'Traditional Uzbek vocal style performed by a trio of singers with distinctive harmony patterns.',
        audioUrl: 'https://example.com/katta-ashula.mp3',
        imageUrl: '/music/katta.jpeg',
    },
    {
        id: 4,
        title: 'Dutar',
        country: 'Turkmenistan',
        type: 'instrument',
        description:
            'Two-stringed plucked instrument central to Turkmen folk music, often accompanying epic tales.',
        videoUrl: 'https://youtube.com/watch?v=dutar-performance',
        imageUrl: '/music/dutar.jpeg',
    },
    {
        id: 5,
        title: 'Falak',
        country: 'Tajikistan',
        type: 'genre',
        description:
            'Traditional Tajik folk song genre expressing deep emotions, often performed at gatherings.',
        audioUrl: 'https://example.com/falak-sample.mp3',
        imageUrl: '/music/falak.jpeg',
    },
    {
        id: 6,
        title: 'Aitys',
        country: 'Kazakhstan',
        type: 'genre',
        description:
            'Improvised poetry contest performed with dombra accompaniment, showcasing wit and musical skill.',
        videoUrl: 'https://youtube.com/watch?v=aitys-competition',
        imageUrl: '/music/aitys.jpeg',
    },
    {
        id: 7,
        title: 'Dimash Kudaibergen',
        country: 'Kazakhstan',
        type: 'artist',
        description:
            'World-renowned Kazakh singer known for his extraordinary vocal range and modern interpretations of traditional music.',
        videoUrl: 'https://youtube.com/watch?v=dimash-performance',
        imageUrl: '/music/dimash-kudaibergen.jpeg',
    },
    {
        id: 8,
        title: 'Yulduz Usmonova',
        country: 'Uzbekistan',
        type: 'artist',
        description:
            'Celebrated Uzbek singer who has popularized traditional Uzbek music internationally.',
        audioUrl: 'https://example.com/yulduz-song.mp3',
        imageUrl: '/music/yulduz-usmonova.jpeg',
    },
];

export interface Country {
    name: string;
    capital: string;
    position: LatLngTuple;
    flag: string;
    description: string;
    population: string;
    area: string;
    languages: string[];
    currency: string;
}

export const countries: Country[] = [
    {
        name: 'Kazakhstan',
        capital: 'Astana',
        position: [51.1694, 71.4491],
        flag: '/flags/kz-flag.png',
        description:
            "The world's largest landlocked country, known for its nomadic heritage and modern cities.",
        population: '19.4 million',
        area: '2.7 million km²',
        languages: ['Kazakh', 'Russian'],
        currency: 'Tenge (KZT)',
    },
    {
        name: 'Uzbekistan',
        capital: 'Tashkent',
        position: [41.2995, 69.2401],
        flag: '/flags/uz-flag.png',
        description:
            'Home to historic Silk Road cities with stunning Islamic architecture and rich traditions.',
        population: '35.6 million',
        area: '448,978 km²',
        languages: ['Uzbek', 'Russian'],
        currency: 'Som (UZS)',
    },
    {
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        position: [42.8746, 74.5698],
        flag: '/flags/kg-flag.png',
        description:
            'A mountainous nation with a strong nomadic culture and breathtaking natural landscapes.',
        population: '6.6 million',
        area: '199,951 km²',
        languages: ['Kyrgyz', 'Russian'],
        currency: 'Som (KGS)',
    },
    {
        name: 'Tajikistan',
        capital: 'Dushanbe',
        position: [38.5598, 68.787],
        flag: '/flags/tj-flag.png',
        description:
            'Known for its rugged mountains, Persian cultural influence, and ancient heritage.',
        population: '9.8 million',
        area: '143,100 km²',
        languages: ['Tajik', 'Russian'],
        currency: 'Somoni (TJS)',
    },
    {
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        position: [37.9601, 58.3261],
        flag: '/flags/tm-flag.png',
        description:
            'Famous for its ancient Silk Road ruins, unique traditions, and natural gas reserves.',
        population: '6.1 million',
        area: '488,100 km²',
        languages: ['Turkmen', 'Russian'],
        currency: 'Manat (TMT)',
    },
];
