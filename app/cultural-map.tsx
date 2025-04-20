"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icons in react-leaflet
const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function CulturalMap() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const countries = [
        {
            id: "kazakhstan",
            name: "Kazakhstan",
            capital: "Astana",
            population: "19 million",
            languages: "Kazakh, Russian",
            position: [48.0196, 66.9237], // Coordinates for center of Kazakhstan
            facts: [
                "Largest landlocked country in the world",
                "Home to the Baikonur Cosmodrome, the world's first and largest space launch facility",
                "Traditional nomadic heritage with rich equestrian culture",
            ],
        },
        {
            id: "uzbekistan",
            name: "Uzbekistan",
            capital: "Tashkent",
            population: "35 million",
            languages: "Uzbek, Russian",
            position: [41.3775, 64.5853], // Coordinates for center of Uzbekistan
            facts: [
                "Home to historic Silk Road cities like Samarkand, Bukhara, and Khiva",
                "Known for its intricate blue-tiled Islamic architecture",
                "Rich tradition of handicrafts including silk weaving and ceramics",
            ],
        },
        {
            id: "kyrgyzstan",
            name: "Kyrgyzstan",
            capital: "Bishkek",
            population: "6.7 million",
            languages: "Kyrgyz, Russian",
            position: [41.2044, 74.7661], // Coordinates for center of Kyrgyzstan
            facts: [
                "Known as the 'Switzerland of Central Asia' for its mountainous terrain",
                "Home to Lake Issyk-Kul, the second-largest alpine lake in the world",
                "Strong nomadic traditions including the epic of Manas, one of the longest poems in the world",
            ],
        },
        {
            id: "tajikistan",
            name: "Tajikistan",
            capital: "Dushanbe",
            population: "9.8 million",
            languages: "Tajik, Russian",
            position: [38.8610, 71.2761], // Coordinates for center of Tajikistan
            facts: [
                "Over 90% of the country is mountainous",
                "Tajik language is closely related to Persian/Farsi",
                "Home to the Pamir Mountains, known as the 'Roof of the World'",
            ],
        },
        {
            id: "turkmenistan",
            name: "Turkmenistan",
            capital: "Ashgabat",
            population: "6.2 million",
            languages: "Turkmen, Russian",
            position: [38.9697, 59.5563], // Coordinates for center of Turkmenistan
            facts: [
                "Home to the Darvaza Gas Crater, known as the 'Door to Hell'",
                "Famous for its handwoven Turkmen carpets",
                "Ashgabat holds the world record for the highest concentration of white marble buildings",
            ],
        },
    ]

    const centerPosition = [42.8746, 71.2761] // Center of Central Asia region
    const currentCountry = countries.find((c) => c.id === selectedCountry)

    return (
        <div className="w-full">
            <div className="mb-6 flex flex-wrap justify-center gap-3">
                {countries.map((country) => (
                    <Button
                        key={country.id}
                        variant={selectedCountry === country.id ? "default" : "outline"}
                        onClick={() => setSelectedCountry(country.id)}
                        className="min-w-[120px]"
                    >
                        {country.name}
                    </Button>
                ))}
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border">
                {isMounted && (
                    <MapContainer
                        center={currentCountry?.position || centerPosition}
                        zoom={selectedCountry ? 5 : 4}
                        style={{ height: '100%', width: '100%' }}
                        whenReady={(map) => {
                            // Update map view when selected country changes
                            if (selectedCountry) {
                                const country = countries.find(c => c.id === selectedCountry);
                                if (country) {
                                    map.target.setView(country.position, 5);
                                }
                            }
                        }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {countries.map((country) => (
                            <Marker
                                key={country.id}
                                position={country.position}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedCountry(country.id);
                                    },
                                }}
                            >
                                <Popup>
                                    <div className="font-medium">{country.name}</div>
                                    <div className="text-sm">Capital: {country.capital}</div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                )}
            </div>

            {selectedCountry && (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>{currentCountry?.name}</CardTitle>
                        <CardDescription>
                            Capital: {currentCountry?.capital} | Population:{" "}
                            {currentCountry?.population} | Languages:{" "}
                            {currentCountry?.languages}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h4 className="mb-2 font-medium">Interesting Facts:</h4>
                        <ul className="list-inside list-disc space-y-1">
                            {currentCountry?.facts.map((fact, index) => (
                                <li key={index} className="text-sm text-muted-foreground">
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}